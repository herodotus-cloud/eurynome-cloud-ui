import*as t from"lodash";export{t as lodash};import*as e from"shortid";export{e as shortid};import n from"moment";export{default as moment}from"moment";import o from"localforage";import r from"sweetalert2";export{default as Swal}from"sweetalert2";var i=function(){};i.getInstance=function(){return this.instance},i.prototype.getItem=function(t){return o.getItem(t)},i.prototype.setItem=function(t,e){return o.setItem(t,e)},i.prototype.removeItem=function(t){return o.removeItem(t)},i.prototype.clear=function(){return o.clear()},i.prototype.length=function(){return o.length()},i.prototype.key=function(t){return o.key(t)},i.prototype.keys=function(){return o.keys()},i.prototype.iterate=function(t){return o.iterate(t)},i.prototype.setDriver=function(t){return o.setDriver(t)},i.prototype.config=function(t){return o.config(t)},i.prototype.createInstance=function(t){return o.createInstance(t)},i.instance=new i;var c=i.getInstance(),u=function(){};u.getInstance=function(){return this.instance},u.prototype.setObject=function(t,e){this.setItem(t,JSON.stringify(e))},u.prototype.getObject=function(t){var e=this.getItem(t);return e?JSON.parse(e):null},u.prototype.setItem=function(t,e){localStorage.setItem(t,e)},u.prototype.getItem=function(t){return localStorage.getItem(t)},u.prototype.removeItem=function(t){localStorage.removeItem(t)},u.prototype.clear=function(){localStorage.clear()},u.prototype.isExist=function(t){return!(!t||!(t in localStorage))},u.instance=new u;var p=u.getInstance(),a=function(){};a.getInstance=function(){return this.instance},a.prototype.find=function(e,n,o){return t.find(e,(function(t){return t[o]===n[o]}))},a.prototype.remove=function(e,n,o){return t.remove(e,(function(t){return t[o]===n[o]}))},a.instance=new a;var f=a.getInstance(),s=function(){};s.getInstance=function(){return this.instance},s.prototype.information=function(t,e){return r.fire({position:"top",title:t,icon:e,timer:2e3,showConfirmButton:!1})},s.prototype.info=function(t){return this.information(t,"info")},s.prototype.error=function(t){return this.information(t,"error")},s.prototype.warning=function(t){return this.information(t,"warning")},s.prototype.success=function(t){return this.information(t,"success")},s.prototype.question=function(t){return this.information(t,"question")},s.instance=new s;var m=s.getInstance();n.locale("zh-cn");export{f as _array,c as _localForage,p as _localStorage,m as _notify};
//# sourceMappingURL=index.esm.js.map