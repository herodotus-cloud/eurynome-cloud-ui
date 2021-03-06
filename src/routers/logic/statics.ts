import type { RouteRecordRaw } from 'vue-router';

import { PathEnum } from '/@/lib/enums';

const RootRoute: RouteRecordRaw = {
	path: PathEnum.ROOT,
	name: 'Root',
	redirect: PathEnum.HOME,
	meta: {
		title: 'Root',
	},
};

const SignInRoute: RouteRecordRaw = {
	path: PathEnum.SIGN_IN,
	name: 'SignIn',
	component: () => import('../../views/sign-in/SignIn.vue'),
	meta: {
		title: '登录',
		ignoreAuth: true,
	},
};

const NoPermissionRoute: RouteRecordRaw = {
	path: '/403',
	name: 'NoPermission',
	component: () => import('/@/views/error/403.vue'),
	meta: { title: 'No Permission' },
};

const NotFoundRoute: RouteRecordRaw = {
	path: '/404',
	name: 'NotFound',
	component: () => import('/@/views/error/404.vue'),
	meta: { title: 'Not Found' },
};

const ServiceErrorRoute: RouteRecordRaw = {
	path: '/500',
	name: 'ServiceError',
	component: () => import('/@/views/error/500.vue'),
	meta: { title: 'Service Error' },
};

const PageNotFoundRoute: RouteRecordRaw = {
	path: PathEnum.NOT_FOUND,
	name: PathEnum.NOT_FOUND_NAME,
	component: () => import('/@/views/error/404.vue'),
	meta: {
		title: 'ErrorPage',
	},
};

//普通路由 无需验证权限
export const staticRoutes: Array<RouteRecordRaw> = [RootRoute, SignInRoute, NoPermissionRoute, NotFoundRoute, ServiceErrorRoute];
