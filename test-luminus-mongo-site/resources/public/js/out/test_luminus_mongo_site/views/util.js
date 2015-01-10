// Compiled by ClojureScript 0.0-2629 {}
if(!goog.isProvided_('test_luminus_mongo_site.views.util')) {
goog.provide('test_luminus_mongo_site.views.util');
}
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('reagent.core');
/**
* Probably deprecated
*/
test_luminus_mongo_site.views.util.apply_multiple_classes = (function apply_multiple_classes(existing,addon_list){
return [cljs.core.str(existing),cljs.core.str(" "),cljs.core.str((cljs.core.truth_(cljs.core.not_empty.call(null,addon_list))?cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core.map.call(null,cljs.core.name,addon_list))):null))].join('');
});
test_luminus_mongo_site.views.util.input_row = (function input_row(label,body){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-2","div.col-md-2",-138798418),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),label], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-10","div.col-md-10",-1168041959),body], null)], null);
});
/**
* @param {...*} var_args
*/
test_luminus_mongo_site.views.util.text_input = (function() { 
var text_input__delegate = function (id,label,type,placeholder){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.control-label.col-md-2","label.control-label.col-md-2",-971481496),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),id], null),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-10","div.col-md-10",-1168041959),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),cljs.core.conj.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),type,new cljs.core.Keyword(null,"id","id",-1388402092),id], null),(cljs.core.truth_(cljs.core.first.call(null,placeholder))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),cljs.core.first.call(null,placeholder)], null):cljs.core.PersistentArrayMap.EMPTY))], null)], null)], null);
};
var text_input = function (id,label,type,var_args){
var placeholder = null;
if (arguments.length > 3) {
  placeholder = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return text_input__delegate.call(this,id,label,type,placeholder);};
text_input.cljs$lang$maxFixedArity = 3;
text_input.cljs$lang$applyTo = (function (arglist__15512){
var id = cljs.core.first(arglist__15512);
arglist__15512 = cljs.core.next(arglist__15512);
var label = cljs.core.first(arglist__15512);
arglist__15512 = cljs.core.next(arglist__15512);
var type = cljs.core.first(arglist__15512);
var placeholder = cljs.core.rest(arglist__15512);
return text_input__delegate(id,label,type,placeholder);
});
text_input.cljs$core$IFn$_invoke$arity$variadic = text_input__delegate;
return text_input;
})()
;
/**
* @param {...*} var_args
*/
test_luminus_mongo_site.views.util.form = (function() { 
var form__delegate = function (inputs,class$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(cljs.core.not_empty.call(null,class$))?cljs.core.first.call(null,class$):"form-horizontal"),new cljs.core.Keyword(null,"role","role",-736691072),"form"], null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),(function (){var iter__13366__auto__ = (function iter__15517(s__15518){
return (new cljs.core.LazySeq(null,(function (){
var s__15518__$1 = s__15518;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__15518__$1);
if(temp__4126__auto__){
var s__15518__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15518__$2)){
var c__13364__auto__ = cljs.core.chunk_first.call(null,s__15518__$2);
var size__13365__auto__ = cljs.core.count.call(null,c__13364__auto__);
var b__15520 = cljs.core.chunk_buffer.call(null,size__13365__auto__);
if((function (){var i__15519 = (0);
while(true){
if((i__15519 < size__13365__auto__)){
var input = cljs.core._nth.call(null,c__13364__auto__,i__15519);
cljs.core.chunk_append.call(null,b__15520,input);

var G__15521 = (i__15519 + (1));
i__15519 = G__15521;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15520),iter__15517.call(null,cljs.core.chunk_rest.call(null,s__15518__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15520),null);
}
} else {
var input = cljs.core.first.call(null,s__15518__$2);
return cljs.core.cons.call(null,input,iter__15517.call(null,cljs.core.rest.call(null,s__15518__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__13366__auto__.call(null,inputs);
})())], null)], null);
};
var form = function (inputs,var_args){
var class$ = null;
if (arguments.length > 1) {
  class$ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return form__delegate.call(this,inputs,class$);};
form.cljs$lang$maxFixedArity = 1;
form.cljs$lang$applyTo = (function (arglist__15522){
var inputs = cljs.core.first(arglist__15522);
var class$ = cljs.core.rest(arglist__15522);
return form__delegate(inputs,class$);
});
form.cljs$core$IFn$_invoke$arity$variadic = form__delegate;
return form;
})()
;
/**
* @param {...*} var_args
*/
test_luminus_mongo_site.views.util.selection_list = (function() { 
var selection_list__delegate = function (label,id,items){
return test_luminus_mongo_site.views.util.input_row.call(null,label,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.btn-group","div.btn-group",1563487258),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),new cljs.core.Keyword(null,"id","id",-1388402092),id], null),(function (){var iter__13366__auto__ = (function iter__15531(s__15532){
return (new cljs.core.LazySeq(null,(function (){
var s__15532__$1 = s__15532;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__15532__$1);
if(temp__4126__auto__){
var s__15532__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15532__$2)){
var c__13364__auto__ = cljs.core.chunk_first.call(null,s__15532__$2);
var size__13365__auto__ = cljs.core.count.call(null,c__13364__auto__);
var b__15534 = cljs.core.chunk_buffer.call(null,size__13365__auto__);
if((function (){var i__15533 = (0);
while(true){
if((i__15533 < size__13365__auto__)){
var vec__15537 = cljs.core._nth.call(null,c__13364__auto__,i__15533);
var k = cljs.core.nth.call(null,vec__15537,(0),null);
var label__$1 = cljs.core.nth.call(null,vec__15537,(1),null);
cljs.core.chunk_append.call(null,b__15534,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default","button.btn.btn-default",-991846011),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null),label__$1], null));

var G__15539 = (i__15533 + (1));
i__15533 = G__15539;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15534),iter__15531.call(null,cljs.core.chunk_rest.call(null,s__15532__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15534),null);
}
} else {
var vec__15538 = cljs.core.first.call(null,s__15532__$2);
var k = cljs.core.nth.call(null,vec__15538,(0),null);
var label__$1 = cljs.core.nth.call(null,vec__15538,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default","button.btn.btn-default",-991846011),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null),label__$1], null),iter__15531.call(null,cljs.core.rest.call(null,s__15532__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__13366__auto__.call(null,items);
})()], null));
};
var selection_list = function (label,id,var_args){
var items = null;
if (arguments.length > 2) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return selection_list__delegate.call(this,label,id,items);};
selection_list.cljs$lang$maxFixedArity = 2;
selection_list.cljs$lang$applyTo = (function (arglist__15540){
var label = cljs.core.first(arglist__15540);
arglist__15540 = cljs.core.next(arglist__15540);
var id = cljs.core.first(arglist__15540);
var items = cljs.core.rest(arglist__15540);
return selection_list__delegate(label,id,items);
});
selection_list.cljs$core$IFn$_invoke$arity$variadic = selection_list__delegate;
return selection_list;
})()
;
test_luminus_mongo_site.views.util.table = (function table(column_names,info,conf){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),conf,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__13366__auto__ = (function iter__15565(s__15566){
return (new cljs.core.LazySeq(null,(function (){
var s__15566__$1 = s__15566;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__15566__$1);
if(temp__4126__auto__){
var s__15566__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15566__$2)){
var c__13364__auto__ = cljs.core.chunk_first.call(null,s__15566__$2);
var size__13365__auto__ = cljs.core.count.call(null,c__13364__auto__);
var b__15568 = cljs.core.chunk_buffer.call(null,size__13365__auto__);
if((function (){var i__15567 = (0);
while(true){
if((i__15567 < size__13365__auto__)){
var data = cljs.core._nth.call(null,c__13364__auto__,i__15567);
cljs.core.chunk_append.call(null,b__15568,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),data], null));

var G__15589 = (i__15567 + (1));
i__15567 = G__15589;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15568),iter__15565.call(null,cljs.core.chunk_rest.call(null,s__15566__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15568),null);
}
} else {
var data = cljs.core.first.call(null,s__15566__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),data], null),iter__15565.call(null,cljs.core.rest.call(null,s__15566__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__13366__auto__.call(null,column_names);
})())], null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300)], null),(function (){var iter__13366__auto__ = (function iter__15569(s__15570){
return (new cljs.core.LazySeq(null,(function (){
var s__15570__$1 = s__15570;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__15570__$1);
if(temp__4126__auto__){
var s__15570__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15570__$2)){
var c__13364__auto__ = cljs.core.chunk_first.call(null,s__15570__$2);
var size__13365__auto__ = cljs.core.count.call(null,c__13364__auto__);
var b__15572 = cljs.core.chunk_buffer.call(null,size__13365__auto__);
if((function (){var i__15571 = (0);
while(true){
if((i__15571 < size__13365__auto__)){
var row = cljs.core._nth.call(null,c__13364__auto__,i__15571);
cljs.core.chunk_append.call(null,b__15572,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__13366__auto__ = ((function (i__15571,row,c__13364__auto__,size__13365__auto__,b__15572,s__15570__$2,temp__4126__auto__){
return (function iter__15581(s__15582){
return (new cljs.core.LazySeq(null,((function (i__15571,row,c__13364__auto__,size__13365__auto__,b__15572,s__15570__$2,temp__4126__auto__){
return (function (){
var s__15582__$1 = s__15582;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__15582__$1);
if(temp__4126__auto____$1){
var s__15582__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15582__$2)){
var c__13364__auto____$1 = cljs.core.chunk_first.call(null,s__15582__$2);
var size__13365__auto____$1 = cljs.core.count.call(null,c__13364__auto____$1);
var b__15584 = cljs.core.chunk_buffer.call(null,size__13365__auto____$1);
if((function (){var i__15583 = (0);
while(true){
if((i__15583 < size__13365__auto____$1)){
var data = cljs.core._nth.call(null,c__13364__auto____$1,i__15583);
cljs.core.chunk_append.call(null,b__15584,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),data], null));

var G__15590 = (i__15583 + (1));
i__15583 = G__15590;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15584),iter__15581.call(null,cljs.core.chunk_rest.call(null,s__15582__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15584),null);
}
} else {
var data = cljs.core.first.call(null,s__15582__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),data], null),iter__15581.call(null,cljs.core.rest.call(null,s__15582__$2)));
}
} else {
return null;
}
break;
}
});})(i__15571,row,c__13364__auto__,size__13365__auto__,b__15572,s__15570__$2,temp__4126__auto__))
,null,null));
});})(i__15571,row,c__13364__auto__,size__13365__auto__,b__15572,s__15570__$2,temp__4126__auto__))
;
return iter__13366__auto__.call(null,row);
})()));

var G__15591 = (i__15571 + (1));
i__15571 = G__15591;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15572),iter__15569.call(null,cljs.core.chunk_rest.call(null,s__15570__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15572),null);
}
} else {
var row = cljs.core.first.call(null,s__15570__$2);
return cljs.core.cons.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__13366__auto__ = ((function (row,s__15570__$2,temp__4126__auto__){
return (function iter__15585(s__15586){
return (new cljs.core.LazySeq(null,((function (row,s__15570__$2,temp__4126__auto__){
return (function (){
var s__15586__$1 = s__15586;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__15586__$1);
if(temp__4126__auto____$1){
var s__15586__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15586__$2)){
var c__13364__auto__ = cljs.core.chunk_first.call(null,s__15586__$2);
var size__13365__auto__ = cljs.core.count.call(null,c__13364__auto__);
var b__15588 = cljs.core.chunk_buffer.call(null,size__13365__auto__);
if((function (){var i__15587 = (0);
while(true){
if((i__15587 < size__13365__auto__)){
var data = cljs.core._nth.call(null,c__13364__auto__,i__15587);
cljs.core.chunk_append.call(null,b__15588,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),data], null));

var G__15592 = (i__15587 + (1));
i__15587 = G__15592;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15588),iter__15585.call(null,cljs.core.chunk_rest.call(null,s__15586__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15588),null);
}
} else {
var data = cljs.core.first.call(null,s__15586__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),data], null),iter__15585.call(null,cljs.core.rest.call(null,s__15586__$2)));
}
} else {
return null;
}
break;
}
});})(row,s__15570__$2,temp__4126__auto__))
,null,null));
});})(row,s__15570__$2,temp__4126__auto__))
;
return iter__13366__auto__.call(null,row);
})()),iter__15569.call(null,cljs.core.rest.call(null,s__15570__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__13366__auto__.call(null,info);
})())], null)], null);
});
/**
* @param {...*} var_args
*/
test_luminus_mongo_site.views.util.ajax_post = (function() { 
var ajax_post__delegate = function (info,url,handler,error_handler){
if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.deref.call(null,info)))){
console.log("Posting  ",cljs.core.deref.call(null,info)," to ",url);

return ajax.core.POST.call(null,url,cljs.core.conj.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transit","transit",359458387),cljs.core.deref.call(null,info)], null),new cljs.core.Keyword(null,"handler","handler",-195596612),handler,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null),(cljs.core.truth_(cljs.core.not_empty.call(null,error_handler))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),error_handler], null):cljs.core.PersistentArrayMap.EMPTY)));
} else {
return console.log("Tried to post empty info to ",url);
}
};
var ajax_post = function (info,url,handler,var_args){
var error_handler = null;
if (arguments.length > 3) {
  error_handler = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ajax_post__delegate.call(this,info,url,handler,error_handler);};
ajax_post.cljs$lang$maxFixedArity = 3;
ajax_post.cljs$lang$applyTo = (function (arglist__15593){
var info = cljs.core.first(arglist__15593);
arglist__15593 = cljs.core.next(arglist__15593);
var url = cljs.core.first(arglist__15593);
arglist__15593 = cljs.core.next(arglist__15593);
var handler = cljs.core.first(arglist__15593);
var error_handler = cljs.core.rest(arglist__15593);
return ajax_post__delegate(info,url,handler,error_handler);
});
ajax_post.cljs$core$IFn$_invoke$arity$variadic = ajax_post__delegate;
return ajax_post;
})()
;

//# sourceMappingURL=util.js.map