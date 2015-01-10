// Compiled by ClojureScript 0.0-2629 {}
if(!goog.isProvided_('test_luminus_mongo_site.views.tools.rep_calculator')) {
goog.provide('test_luminus_mongo_site.views.tools.rep_calculator');
}
goog.require('cljs.core');
goog.require('reagent_forms.core');
goog.require('reagent.core');
goog.require('test_luminus_mongo_site.session');
goog.require('test_luminus_mongo_site.views.util');
test_luminus_mongo_site.session.global_put_BANG_.call(null,new cljs.core.Keyword(null,"rep-calc","rep-calc",1972561291),null);
test_luminus_mongo_site.views.tools.rep_calculator.rep_handler = (function rep_handler(response){
console.log("Resp: ",response);

return test_luminus_mongo_site.session.global_put_BANG_.call(null,new cljs.core.Keyword(null,"rep-calc","rep-calc",1972561291),response);
});
test_luminus_mongo_site.views.tools.rep_calculator.rep_error_handler = (function rep_error_handler(x){
return console.log([cljs.core.str("rep-calc: something bad happened: "),cljs.core.str(x)].join(''));
});
test_luminus_mongo_site.views.tools.rep_calculator.form = test_luminus_mongo_site.views.util.form.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [test_luminus_mongo_site.views.util.text_input.call(null,new cljs.core.Keyword(null,"reps","reps",1391310856),"Reps",new cljs.core.Keyword(null,"numeric","numeric",-1495594714),"1 - 12"),test_luminus_mongo_site.views.util.text_input.call(null,new cljs.core.Keyword(null,"weight","weight",-1262796205),"Weight",new cljs.core.Keyword(null,"numeric","numeric",-1495594714))], null));
test_luminus_mongo_site.views.tools.rep_calculator.rep_table = (function rep_table(info){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [test_luminus_mongo_site.views.util.table,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Reps","Weight"], null),info,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"table table-striped"], null)], null);
});
test_luminus_mongo_site.views.tools.rep_calculator.rep_table_fill = (function rep_table_fill(){
return cljs.core.sort_by.call(null,cljs.core.first,(cljs.core.truth_(test_luminus_mongo_site.session.global_state.call(null,new cljs.core.Keyword(null,"rep-calc","rep-calc",1972561291)))?test_luminus_mongo_site.session.global_state.call(null,new cljs.core.Keyword(null,"rep-calc","rep-calc",1972561291)):cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,""], null);
}),cljs.core.conj.call(null,cljs.core.range.call(null,(1),(13)),(15)))));
});
test_luminus_mongo_site.views.tools.rep_calculator.rep_calculator = (function rep_calculator(){
var info = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (info){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Rep Calculator"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Enter the number of reps (between 1 and 12) and the weight you did in the form below. The amount of weight you should (probably) be able to lift will be propogated in the table."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.well","div.well",-752456960),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.bind_fields,test_luminus_mongo_site.views.tools.rep_calculator.form,info,((function (info){
return (function (_,___$1,___$2){
test_luminus_mongo_site.session.global_put_BANG_.call(null,new cljs.core.Keyword(null,"rep-calc","rep-calc",1972561291),null);

return null;
});})(info))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.col-md-offset-2","button.col-md-offset-2",-1023137299),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-default",new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (info){
return (function (){
return test_luminus_mongo_site.views.util.ajax_post.call(null,info,"tools/rep-calc",test_luminus_mongo_site.views.tools.rep_calculator.rep_handler,test_luminus_mongo_site.views.tools.rep_calculator.rep_error_handler);
});})(info))
], null),"Calculate"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [test_luminus_mongo_site.views.tools.rep_calculator.rep_table,test_luminus_mongo_site.views.tools.rep_calculator.rep_table_fill.call(null)], null)], null)], null);
});
;})(info))
});

//# sourceMappingURL=rep_calculator.js.map