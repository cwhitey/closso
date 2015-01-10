// Compiled by ClojureScript 0.0-2629 {}
if(!goog.isProvided_('test_luminus_mongo_site.views.programs.five_three_one')) {
goog.provide('test_luminus_mongo_site.views.programs.five_three_one');
}
goog.require('cljs.core');
goog.require('reagent_forms.core');
goog.require('reagent.core');
goog.require('test_luminus_mongo_site.session');
goog.require('test_luminus_mongo_site.views.util');
test_luminus_mongo_site.session.global_put_BANG_.call(null,new cljs.core.Keyword(null,"program-531","program-531",-911555674),null);
test_luminus_mongo_site.views.programs.five_three_one.program_handler = (function program_handler(response){
console.log("Resp: ",response);

return test_luminus_mongo_site.session.global_put_BANG_.call(null,new cljs.core.Keyword(null,"program-531","program-531",-911555674),response);
});
test_luminus_mongo_site.views.programs.five_three_one.program_error_handler = (function program_error_handler(x){
return console.log([cljs.core.str("five-three-one: something bad happened: "),cljs.core.str(x)].join(''));
});
test_luminus_mongo_site.views.programs.five_three_one.form = test_luminus_mongo_site.views.util.form.call(null,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"legend","legend",-1027192245),"Squat"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),test_luminus_mongo_site.views.util.text_input.call(null,new cljs.core.Keyword(null,"squat.reps","squat.reps",1125144423),"Reps",new cljs.core.Keyword(null,"numeric","numeric",-1495594714),"1 - 12")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),test_luminus_mongo_site.views.util.text_input.call(null,new cljs.core.Keyword(null,"squat.weight","squat.weight",-660087476),"Weight",new cljs.core.Keyword(null,"numeric","numeric",-1495594714))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"legend","legend",-1027192245),"Deadlift"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),test_luminus_mongo_site.views.util.text_input.call(null,new cljs.core.Keyword(null,"deadlift.reps","deadlift.reps",1191020820),"Reps",new cljs.core.Keyword(null,"numeric","numeric",-1495594714),"1 - 12")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),test_luminus_mongo_site.views.util.text_input.call(null,new cljs.core.Keyword(null,"deadlift.weight","deadlift.weight",1769698597),"Weight",new cljs.core.Keyword(null,"numeric","numeric",-1495594714))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"legend","legend",-1027192245),"Bench Press"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),test_luminus_mongo_site.views.util.text_input.call(null,new cljs.core.Keyword(null,"bench-press.reps","bench-press.reps",-1532839342),"Reps",new cljs.core.Keyword(null,"numeric","numeric",-1495594714),"1 - 12")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),test_luminus_mongo_site.views.util.text_input.call(null,new cljs.core.Keyword(null,"bench-press.weight","bench-press.weight",138948708),"Weight",new cljs.core.Keyword(null,"numeric","numeric",-1495594714))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"legend","legend",-1027192245),"Overhead Press"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),test_luminus_mongo_site.views.util.text_input.call(null,new cljs.core.Keyword(null,"overhead-press.reps","overhead-press.reps",-993575488),"Reps",new cljs.core.Keyword(null,"numeric","numeric",-1495594714),"1 - 12")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),test_luminus_mongo_site.views.util.text_input.call(null,new cljs.core.Keyword(null,"overhead-press.weight","overhead-press.weight",-1451216581),"Weight",new cljs.core.Keyword(null,"numeric","numeric",-1495594714))], null)], null));
test_luminus_mongo_site.views.programs.five_three_one.program_table = (function program_table(info){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [test_luminus_mongo_site.views.util.table,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Exercises","Week 1","Week 2","Week 3","Week 4"], null),info,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"table table-striped"], null)], null);
});
test_luminus_mongo_site.views.programs.five_three_one.program_table_fill = (function program_table_fill(){
return cljs.core.sort_by.call(null,cljs.core.first,(cljs.core.truth_(test_luminus_mongo_site.session.global_state.call(null,new cljs.core.Keyword(null,"program-531","program-531",-911555674)))?test_luminus_mongo_site.session.global_state.call(null,new cljs.core.Keyword(null,"program-531","program-531",-911555674)):cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,""], null);
}),cljs.core.conj.call(null,cljs.core.range.call(null,(1),(13)),(15)))));
});
test_luminus_mongo_site.views.programs.five_three_one.five_three_one = (function five_three_one(){
var info = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (info){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"5/3/1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Enter your current lifting stats to generate your next 5/3/1 4-week cycle."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.well","div.well",-752456960),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.bind_fields,test_luminus_mongo_site.views.programs.five_three_one.form,info,((function (info){
return (function (_,___$1,___$2){
test_luminus_mongo_site.session.global_put_BANG_.call(null,new cljs.core.Keyword(null,"program-531","program-531",-911555674),null);

return null;
});})(info))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-default",new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (info){
return (function (){
return test_luminus_mongo_site.views.util.ajax_post.call(null,info,"/programs/531",test_luminus_mongo_site.views.programs.five_three_one.program_handler,test_luminus_mongo_site.views.programs.five_three_one.program_error_handler);
});})(info))
], null),"Calculate"], null)], null)], null);
});
;})(info))
});

//# sourceMappingURL=five_three_one.js.map