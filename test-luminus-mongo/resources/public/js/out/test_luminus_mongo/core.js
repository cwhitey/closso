// Compiled by ClojureScript 0.0-2371
goog.provide('test_luminus_mongo.core');
goog.require('cljs.core');
goog.require('reagent_forms.core');
goog.require('reagent.core');
goog.require('ajax.core');
goog.require('ajax.core');
goog.require('reagent_forms.core');
goog.require('secretary.core');
goog.require('secretary.core');
goog.require('reagent.core');
goog.require('reagent.core');
test_luminus_mongo.core.state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"saved?","saved?",-2027163192),false], null));
/**
* @param {...*} var_args
*/
test_luminus_mongo.core.row = (function() { 
var row__delegate = function (label,body){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-2","div.col-md-2",-138798418),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),label], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-3","div.col-md-3",1386112129),body], null)], null);
};
var row = function (label,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return row__delegate.call(this,label,body);};
row.cljs$lang$maxFixedArity = 1;
row.cljs$lang$applyTo = (function (arglist__6325){
var label = cljs.core.first(arglist__6325);
var body = cljs.core.rest(arglist__6325);
return row__delegate(label,body);
});
row.cljs$core$IFn$_invoke$arity$variadic = row__delegate;
return row;
})()
;
test_luminus_mongo.core.text_input = (function text_input(id,label){return test_luminus_mongo.core.row.call(null,label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"id","id",-1388402092),id], null)], null));
});
/**
* @param {...*} var_args
*/
test_luminus_mongo.core.selection_list = (function() { 
var selection_list__delegate = function (label,id,items){return test_luminus_mongo.core.row.call(null,label,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.btn-group","div.btn-group",1563487258),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),new cljs.core.Keyword(null,"id","id",-1388402092),id], null),(function (){var iter__4379__auto__ = (function iter__6334(s__6335){return (new cljs.core.LazySeq(null,(function (){var s__6335__$1 = s__6335;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__6335__$1);if(temp__4126__auto__)
{var s__6335__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__6335__$2))
{var c__4377__auto__ = cljs.core.chunk_first.call(null,s__6335__$2);var size__4378__auto__ = cljs.core.count.call(null,c__4377__auto__);var b__6337 = cljs.core.chunk_buffer.call(null,size__4378__auto__);if((function (){var i__6336 = (0);while(true){
if((i__6336 < size__4378__auto__))
{var vec__6340 = cljs.core._nth.call(null,c__4377__auto__,i__6336);var k = cljs.core.nth.call(null,vec__6340,(0),null);var label__$1 = cljs.core.nth.call(null,vec__6340,(1),null);cljs.core.chunk_append.call(null,b__6337,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default","button.btn.btn-default",-991846011),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null),label__$1], null));
{
var G__6342 = (i__6336 + (1));
i__6336 = G__6342;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6337),iter__6334.call(null,cljs.core.chunk_rest.call(null,s__6335__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6337),null);
}
} else
{var vec__6341 = cljs.core.first.call(null,s__6335__$2);var k = cljs.core.nth.call(null,vec__6341,(0),null);var label__$1 = cljs.core.nth.call(null,vec__6341,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default","button.btn.btn-default",-991846011),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null),label__$1], null),iter__6334.call(null,cljs.core.rest.call(null,s__6335__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4379__auto__.call(null,items);
})()], null));
};
var selection_list = function (label,id,var_args){
var items = null;if (arguments.length > 2) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return selection_list__delegate.call(this,label,id,items);};
selection_list.cljs$lang$maxFixedArity = 2;
selection_list.cljs$lang$applyTo = (function (arglist__6343){
var label = cljs.core.first(arglist__6343);
arglist__6343 = cljs.core.next(arglist__6343);
var id = cljs.core.first(arglist__6343);
var items = cljs.core.rest(arglist__6343);
return selection_list__delegate(label,id,items);
});
selection_list.cljs$core$IFn$_invoke$arity$variadic = selection_list__delegate;
return selection_list;
})()
;
test_luminus_mongo.core.form = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.page-header","div.page-header",-18181304),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Reagent Form"], null)], null),test_luminus_mongo.core.text_input.call(null,new cljs.core.Keyword(null,"first-name","first-name",-1559982131),"First name"),test_luminus_mongo.core.text_input.call(null,new cljs.core.Keyword(null,"last-name","last-name",-1695738974),"Last name"),test_luminus_mongo.core.selection_list.call(null,"Favorite drinks",new cljs.core.Keyword(null,"favorite-drinks","favorite-drinks",-1752184854),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coffee","coffee",23772871),"Coffee"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"beer","beer",1742036006),"Beer"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"crab-juice","crab-juice",-1168836952),"Crab juice"], null))], null);
test_luminus_mongo.core.save_doc = (function save_doc(doc){return (function (){return ajax.core.POST.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(context)+"/save"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),cljs.core.deref.call(null,doc)], null),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (_){return cljs.core.swap_BANG_.call(null,test_luminus_mongo.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"saved?","saved?",-2027163192),true);
})], null));
});
});
test_luminus_mongo.core.about = (function about(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"this is the story of test-luminus-mongo... work in progress"], null);
});
test_luminus_mongo.core.home = (function home(){var doc = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);return ((function (doc){
return (function (){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.bind_fields,test_luminus_mongo.core.form,doc,((function (doc){
return (function (_,___$1,___$2){cljs.core.swap_BANG_.call(null,test_luminus_mongo.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"saved?","saved?",-2027163192),false);
return null;
});})(doc))
], null),(cljs.core.truth_(new cljs.core.Keyword(null,"saved?","saved?",-2027163192).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_luminus_mongo.core.state)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Saved"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-default",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),test_luminus_mongo.core.save_doc.call(null,doc)], null),"Submit"], null))], null);
});
;})(doc))
});
test_luminus_mongo.core.navbar = (function navbar(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar.navbar-inverse.navbar-fixed-top","div.navbar.navbar-inverse.navbar-fixed-top",-279800444),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar-header","div.navbar-header",-515823511),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.navbar-brand","a.navbar-brand",691442118),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/"], null),"test-luminus-mongo"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar-collapse.collapse","div.navbar-collapse.collapse",-1723910318),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.nav.navbar-nav","ul.nav.navbar-nav",1805559761),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,test_luminus_mongo.core.home,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_luminus_mongo.core.state))))?"active":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){return secretary.core.dispatch_BANG_.call(null,"#/");
})], null),"Home"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,test_luminus_mongo.core.about,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_luminus_mongo.core.state))))?"active":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){return secretary.core.dispatch_BANG_.call(null,"#/about");
})], null),"About"], null)], null)], null)], null)], null)], null);
});
test_luminus_mongo.core.page = (function page(){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_luminus_mongo.core.state))], null);
});
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");
var action__4612__auto___6346 = (function (params__4613__auto__){if(cljs.core.map_QMARK_.call(null,params__4613__auto__))
{var map__6344 = params__4613__auto__;var map__6344__$1 = ((cljs.core.seq_QMARK_.call(null,map__6344))?cljs.core.apply.call(null,cljs.core.hash_map,map__6344):map__6344);console.log("hi!");
return cljs.core.swap_BANG_.call(null,test_luminus_mongo.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),test_luminus_mongo.core.home);
} else
{if(cljs.core.vector_QMARK_.call(null,params__4613__auto__))
{var vec__6345 = params__4613__auto__;console.log("hi!");
return cljs.core.swap_BANG_.call(null,test_luminus_mongo.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),test_luminus_mongo.core.home);
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/",action__4612__auto___6346);
var action__4612__auto___6349 = (function (params__4613__auto__){if(cljs.core.map_QMARK_.call(null,params__4613__auto__))
{var map__6347 = params__4613__auto__;var map__6347__$1 = ((cljs.core.seq_QMARK_.call(null,map__6347))?cljs.core.apply.call(null,cljs.core.hash_map,map__6347):map__6347);return cljs.core.swap_BANG_.call(null,test_luminus_mongo.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),test_luminus_mongo.core.about);
} else
{if(cljs.core.vector_QMARK_.call(null,params__4613__auto__))
{var vec__6348 = params__4613__auto__;return cljs.core.swap_BANG_.call(null,test_luminus_mongo.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),test_luminus_mongo.core.about);
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/about",action__4612__auto___6349);
test_luminus_mongo.core.init_BANG_ = (function init_BANG_(){cljs.core.swap_BANG_.call(null,test_luminus_mongo.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),test_luminus_mongo.core.home);
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [test_luminus_mongo.core.navbar], null),document.getElementById("navbar"));
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [test_luminus_mongo.core.page], null),document.getElementById("app"));
});

//# sourceMappingURL=core.js.map