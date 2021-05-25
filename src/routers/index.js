import Vue from "vue";
import VueRouter from "vue-router";
import { publicRouters, protectedRouters } from "./config";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { authrization, moment } from "../configurations/storage";

const routes = publicRouters.concat(protectedRouters);
/**
 * 重写路由的push, replace方法,解决vueRouter 跳转相同路由报错
 */
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve | onReject) {
        return originalPush.call(location, onResolve, onReject);
    }
    return originalPush.call(this, location).catch((error) => error);
};

const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location, onResolve, onReject) {
    if (onResolve | onReject) {
        return originalReplace.call(location, onResolve, onReject);
    }
    return originalReplace.call(this, location).catch((error) => error);
};

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "hash",
    linkActiveClass: "active",
    routes,
});

const isNotExpired = (expires, bufferTime = 60) => {
    if (expires) {
        let flag = moment(expires).diff(moment(), "seconds");
        return flag >= bufferTime;
    } else {
        return false;
    }
};

router.beforeEach((to, from, next) => {
    NProgress.start();
    // 这里的requireAuth为路由中定义的 meta:{requireAuth:true}，意思为：该路由添加该字段，表示进入该路由需要登陆的
    if (to.matched.some((r) => r.meta.requireAuth)) {
        authrization.getExpires().then((expires) => {
            if (isNotExpired(expires)) {
                next();
            } else {
                authrization.clear().then((result) => {
                    next({
                        path: "/login",
                    });
                });
            }
        });
    } else {
        next();
    }
});

// eslint-disable-next-line no-unused-vars
router.afterEach((to, from) => {
    NProgress.done();
});

export default router;