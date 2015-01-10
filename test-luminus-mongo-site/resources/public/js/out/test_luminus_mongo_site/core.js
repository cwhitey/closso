// Compiled by ClojureScript 0.0-2629 {}
if(!goog.isProvided_('test_luminus_mongo_site.core')) {
goog.provide('test_luminus_mongo_site.core');
}
goog.require('cljs.core');
goog.require('test_luminus_mongo_site.session');
goog.require('reagent.core');
goog.require('ajax.core');
goog.require('test_luminus_mongo_site.views.pages');
goog.require('test_luminus_mongo_site.routes');
goog.require('test_luminus_mongo_site.views.common');
test_luminus_mongo_site.core.page_render = (function page_render(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [test_luminus_mongo_site.views.common.header], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-offset-1.col-md-10","div.col-md-offset-1.col-md-10",1651435594),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [test_luminus_mongo_site.session.global_state.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180))], null)], null)], null);
});
test_luminus_mongo_site.core.page_component = (function page_component(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-will-mount","component-will-mount",209708855),test_luminus_mongo_site.routes.app_routes,new cljs.core.Keyword(null,"render","render",-1408033454),test_luminus_mongo_site.core.page_render], null));
});
test_luminus_mongo_site.routes.app_routes.call(null);
test_luminus_mongo_site.core.init_BANG_ = (function init_BANG_(){
test_luminus_mongo_site.session.global_put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),test_luminus_mongo_site.views.pages.pages.call(null,new cljs.core.Keyword(null,"home","home",-74557309)));

return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [test_luminus_mongo_site.core.page_component], null),document.getElementById("app"));
});

//# sourceMappingURL=core.js.map