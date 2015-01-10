// Compiled by ClojureScript 0.0-2629 {}
if(!goog.isProvided_('test_luminus_mongo_site.session')) {
goog.provide('test_luminus_mongo_site.session');
}
goog.require('cljs.core');
goog.require('reagent.core');
if(typeof test_luminus_mongo_site.session.app_state !== 'undefined'){
} else {
test_luminus_mongo_site.session.app_state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
/**
* @param {...*} var_args
*/
test_luminus_mongo_site.session.global_state = (function() { 
var global_state__delegate = function (k,p__15461){
var vec__15463 = p__15461;
var default$ = cljs.core.nth.call(null,vec__15463,(0),null);
return cljs.core.get.call(null,cljs.core.deref.call(null,test_luminus_mongo_site.session.app_state),k,default$);
};
var global_state = function (k,var_args){
var p__15461 = null;
if (arguments.length > 1) {
  p__15461 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return global_state__delegate.call(this,k,p__15461);};
global_state.cljs$lang$maxFixedArity = 1;
global_state.cljs$lang$applyTo = (function (arglist__15464){
var k = cljs.core.first(arglist__15464);
var p__15461 = cljs.core.rest(arglist__15464);
return global_state__delegate(k,p__15461);
});
global_state.cljs$core$IFn$_invoke$arity$variadic = global_state__delegate;
return global_state;
})()
;
test_luminus_mongo_site.session.global_put_BANG_ = (function global_put_BANG_(k,v){
return cljs.core.swap_BANG_.call(null,test_luminus_mongo_site.session.app_state,cljs.core.assoc,k,v);
});
test_luminus_mongo_site.session.local_put_BANG_ = (function local_put_BANG_(a,k,v){
return cljs.core.swap_BANG_.call(null,a,cljs.core.assoc,k,v);
});
test_luminus_mongo_site.session.change_page_BANG_ = (function() {
var change_page_BANG_ = null;
var change_page_BANG___1 = (function (page){
return change_page_BANG_.call(null,page,"Untitled");
});
var change_page_BANG___2 = (function (page,title){
test_luminus_mongo_site.session.global_put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),page);

return document.title = title;
});
change_page_BANG_ = function(page,title){
switch(arguments.length){
case 1:
return change_page_BANG___1.call(this,page);
case 2:
return change_page_BANG___2.call(this,page,title);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
change_page_BANG_.cljs$core$IFn$_invoke$arity$1 = change_page_BANG___1;
change_page_BANG_.cljs$core$IFn$_invoke$arity$2 = change_page_BANG___2;
return change_page_BANG_;
})()
;

//# sourceMappingURL=session.js.map