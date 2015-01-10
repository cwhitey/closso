// Compiled by ClojureScript 0.0-2629 {}
if(!goog.isProvided_('test_luminus_mongo_site.routes')) {
goog.provide('test_luminus_mongo_site.routes');
}
goog.require('cljs.core');
goog.require('test_luminus_mongo_site.session');
goog.require('secretary.core');
goog.require('test_luminus_mongo_site.views.pages');
goog.require('goog.history.EventType');
goog.require('goog.History');
goog.require('goog.events');
test_luminus_mongo_site.routes.hook_browser_navigation_BANG_ = (function hook_browser_navigation_BANG_(){
var G__15466 = (new goog.History());
goog.events.listen(G__15466,goog.history.EventType.NAVIGATE,((function (G__15466){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__15466))
);

G__15466.setEnabled(true);

return G__15466;
});
test_luminus_mongo_site.routes.app_routes = (function app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__15423__auto___15495 = (function (params__15424__auto__){
if(cljs.core.map_QMARK_.call(null,params__15424__auto__)){
var map__15481 = params__15424__auto__;
var map__15481__$1 = ((cljs.core.seq_QMARK_.call(null,map__15481))?cljs.core.apply.call(null,cljs.core.hash_map,map__15481):map__15481);
return test_luminus_mongo_site.session.change_page_BANG_.call(null,test_luminus_mongo_site.views.pages.pages.call(null,new cljs.core.Keyword(null,"home","home",-74557309)),"Welcome to Closso");
} else {
if(cljs.core.vector_QMARK_.call(null,params__15424__auto__)){
var vec__15482 = params__15424__auto__;
return test_luminus_mongo_site.session.change_page_BANG_.call(null,test_luminus_mongo_site.views.pages.pages.call(null,new cljs.core.Keyword(null,"home","home",-74557309)),"Welcome to Closso");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__15423__auto___15495);


var action__15423__auto___15496 = (function (params__15424__auto__){
if(cljs.core.map_QMARK_.call(null,params__15424__auto__)){
var map__15483 = params__15424__auto__;
var map__15483__$1 = ((cljs.core.seq_QMARK_.call(null,map__15483))?cljs.core.apply.call(null,cljs.core.hash_map,map__15483):map__15483);
return test_luminus_mongo_site.session.change_page_BANG_.call(null,new cljs.core.Keyword(null,"bmi","bmi",1421979636).cljs$core$IFn$_invoke$arity$1(test_luminus_mongo_site.views.pages.pages.call(null,new cljs.core.Keyword(null,"tools","tools",-1241731990))),"BMI");
} else {
if(cljs.core.vector_QMARK_.call(null,params__15424__auto__)){
var vec__15484 = params__15424__auto__;
return test_luminus_mongo_site.session.change_page_BANG_.call(null,new cljs.core.Keyword(null,"bmi","bmi",1421979636).cljs$core$IFn$_invoke$arity$1(test_luminus_mongo_site.views.pages.pages.call(null,new cljs.core.Keyword(null,"tools","tools",-1241731990))),"BMI");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/tools/bmi",action__15423__auto___15496);


var action__15423__auto___15497 = (function (params__15424__auto__){
if(cljs.core.map_QMARK_.call(null,params__15424__auto__)){
var map__15485 = params__15424__auto__;
var map__15485__$1 = ((cljs.core.seq_QMARK_.call(null,map__15485))?cljs.core.apply.call(null,cljs.core.hash_map,map__15485):map__15485);
return test_luminus_mongo_site.session.change_page_BANG_.call(null,new cljs.core.Keyword(null,"rep-calculator","rep-calculator",676601525).cljs$core$IFn$_invoke$arity$1(test_luminus_mongo_site.views.pages.pages.call(null,new cljs.core.Keyword(null,"tools","tools",-1241731990))),"Rep Calculator");
} else {
if(cljs.core.vector_QMARK_.call(null,params__15424__auto__)){
var vec__15486 = params__15424__auto__;
return test_luminus_mongo_site.session.change_page_BANG_.call(null,new cljs.core.Keyword(null,"rep-calculator","rep-calculator",676601525).cljs$core$IFn$_invoke$arity$1(test_luminus_mongo_site.views.pages.pages.call(null,new cljs.core.Keyword(null,"tools","tools",-1241731990))),"Rep Calculator");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/tools/rep-calculator",action__15423__auto___15497);


var action__15423__auto___15498 = (function (params__15424__auto__){
if(cljs.core.map_QMARK_.call(null,params__15424__auto__)){
var map__15487 = params__15424__auto__;
var map__15487__$1 = ((cljs.core.seq_QMARK_.call(null,map__15487))?cljs.core.apply.call(null,cljs.core.hash_map,map__15487):map__15487);
return test_luminus_mongo_site.session.change_page_BANG_.call(null,new cljs.core.Keyword(null,"five-three-one","five-three-one",1391978971).cljs$core$IFn$_invoke$arity$1(test_luminus_mongo_site.views.pages.pages.call(null,new cljs.core.Keyword(null,"programs","programs",-911114278))),"5/3/1");
} else {
if(cljs.core.vector_QMARK_.call(null,params__15424__auto__)){
var vec__15488 = params__15424__auto__;
return test_luminus_mongo_site.session.change_page_BANG_.call(null,new cljs.core.Keyword(null,"five-three-one","five-three-one",1391978971).cljs$core$IFn$_invoke$arity$1(test_luminus_mongo_site.views.pages.pages.call(null,new cljs.core.Keyword(null,"programs","programs",-911114278))),"5/3/1");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/programs/531",action__15423__auto___15498);


var action__15423__auto___15499 = (function (params__15424__auto__){
if(cljs.core.map_QMARK_.call(null,params__15424__auto__)){
var map__15489 = params__15424__auto__;
var map__15489__$1 = ((cljs.core.seq_QMARK_.call(null,map__15489))?cljs.core.apply.call(null,cljs.core.hash_map,map__15489):map__15489);
return test_luminus_mongo_site.session.change_page_BANG_.call(null,test_luminus_mongo_site.views.pages.pages.call(null,new cljs.core.Keyword(null,"about","about",1423892543)),"About");
} else {
if(cljs.core.vector_QMARK_.call(null,params__15424__auto__)){
var vec__15490 = params__15424__auto__;
return test_luminus_mongo_site.session.change_page_BANG_.call(null,test_luminus_mongo_site.views.pages.pages.call(null,new cljs.core.Keyword(null,"about","about",1423892543)),"About");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__15423__auto___15499);


var action__15423__auto___15500 = (function (params__15424__auto__){
if(cljs.core.map_QMARK_.call(null,params__15424__auto__)){
var map__15491 = params__15424__auto__;
var map__15491__$1 = ((cljs.core.seq_QMARK_.call(null,map__15491))?cljs.core.apply.call(null,cljs.core.hash_map,map__15491):map__15491);
return test_luminus_mongo_site.session.change_page_BANG_.call(null,test_luminus_mongo_site.views.pages.pages.call(null,new cljs.core.Keyword(null,"contact","contact",609093372)),"Contact");
} else {
if(cljs.core.vector_QMARK_.call(null,params__15424__auto__)){
var vec__15492 = params__15424__auto__;
return test_luminus_mongo_site.session.change_page_BANG_.call(null,test_luminus_mongo_site.views.pages.pages.call(null,new cljs.core.Keyword(null,"contact","contact",609093372)),"Contact");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/contact",action__15423__auto___15500);


var action__15423__auto___15501 = (function (params__15424__auto__){
if(cljs.core.map_QMARK_.call(null,params__15424__auto__)){
var map__15493 = params__15424__auto__;
var map__15493__$1 = ((cljs.core.seq_QMARK_.call(null,map__15493))?cljs.core.apply.call(null,cljs.core.hash_map,map__15493):map__15493);
return test_luminus_mongo_site.session.change_page_BANG_.call(null,test_luminus_mongo_site.views.pages.pages.call(null,new cljs.core.Keyword(null,"not-found","not-found",-629079980)),"404 Not Found");
} else {
if(cljs.core.vector_QMARK_.call(null,params__15424__auto__)){
var vec__15494 = params__15424__auto__;
return test_luminus_mongo_site.session.change_page_BANG_.call(null,test_luminus_mongo_site.views.pages.pages.call(null,new cljs.core.Keyword(null,"not-found","not-found",-629079980)),"404 Not Found");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"*",action__15423__auto___15501);


return test_luminus_mongo_site.routes.hook_browser_navigation_BANG_.call(null);
});

//# sourceMappingURL=routes.js.map