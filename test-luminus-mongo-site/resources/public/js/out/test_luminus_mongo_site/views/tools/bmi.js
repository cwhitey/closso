// Compiled by ClojureScript 0.0-2629 {}
if(!goog.isProvided_('test_luminus_mongo_site.views.tools.bmi')) {
goog.provide('test_luminus_mongo_site.views.tools.bmi');
}
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('reagent_forms.core');
goog.require('reagent.core');
goog.require('test_luminus_mongo_site.session');
goog.require('test_luminus_mongo_site.views.util');
test_luminus_mongo_site.views.tools.bmi.bmi_data = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),(180),new cljs.core.Keyword(null,"weight","weight",-1262796205),(80)], null));
test_luminus_mongo_site.views.tools.bmi.calc_bmi = (function calc_bmi(){
var map__15503 = cljs.core.deref.call(null,test_luminus_mongo_site.views.tools.bmi.bmi_data);
var map__15503__$1 = ((cljs.core.seq_QMARK_.call(null,map__15503))?cljs.core.apply.call(null,cljs.core.hash_map,map__15503):map__15503);
var data = map__15503__$1;
var bmi = cljs.core.get.call(null,map__15503__$1,new cljs.core.Keyword(null,"bmi","bmi",1421979636));
var weight = cljs.core.get.call(null,map__15503__$1,new cljs.core.Keyword(null,"weight","weight",-1262796205));
var height = cljs.core.get.call(null,map__15503__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var h = (height / (100));
if((bmi == null)){
return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"bmi","bmi",1421979636),(weight / (h * h)));
} else {
return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"weight","weight",-1262796205),((bmi * h) * h));
}
});
test_luminus_mongo_site.views.tools.bmi.slider = (function slider(param,value,min,max){
var reset = (function (){var G__15506 = (((param instanceof cljs.core.Keyword))?param.fqn:null);
switch (G__15506) {
case "bmi":
return new cljs.core.Keyword(null,"weight","weight",-1262796205);

break;
default:
return new cljs.core.Keyword(null,"bmi","bmi",1421979636);

}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"min","min",444991522),min,new cljs.core.Keyword(null,"max","max",61366548),max,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (reset){
return (function (p1__15504_SHARP_){
return cljs.core.swap_BANG_.call(null,test_luminus_mongo_site.views.tools.bmi.bmi_data,cljs.core.assoc,param,p1__15504_SHARP_.target.value,reset,null);
});})(reset))
], null)], null);
});
test_luminus_mongo_site.views.tools.bmi.bmi = (function bmi(){
var map__15510 = test_luminus_mongo_site.views.tools.bmi.calc_bmi.call(null);
var map__15510__$1 = ((cljs.core.seq_QMARK_.call(null,map__15510))?cljs.core.apply.call(null,cljs.core.hash_map,map__15510):map__15510);
var bmi__$1 = cljs.core.get.call(null,map__15510__$1,new cljs.core.Keyword(null,"bmi","bmi",1421979636));
var height = cljs.core.get.call(null,map__15510__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var weight = cljs.core.get.call(null,map__15510__$1,new cljs.core.Keyword(null,"weight","weight",-1262796205));
var vec__15511 = (((bmi__$1 < 18.5))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["orange","underweight"], null):(((bmi__$1 < (25)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["inherit","normal"], null):(((bmi__$1 < (30)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["orange","overweight"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red","obese"], null)
)));
var color = cljs.core.nth.call(null,vec__15511,(0),null);
var diagnose = cljs.core.nth.call(null,vec__15511,(1),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"BMI calculator"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Height: ",(height | (0)),"cm",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [test_luminus_mongo_site.views.tools.bmi.slider,new cljs.core.Keyword(null,"height","height",1025178622),height,(100),(220)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Weight: ",(weight | (0)),"kg",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [test_luminus_mongo_site.views.tools.bmi.slider,new cljs.core.Keyword(null,"weight","weight",-1262796205),weight,(30),(150)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"BMI: ",(bmi__$1 | (0))," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),color], null)], null),diagnose], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [test_luminus_mongo_site.views.tools.bmi.slider,new cljs.core.Keyword(null,"bmi","bmi",1421979636),bmi__$1,(10),(50)], null)], null)], null);
});

//# sourceMappingURL=bmi.js.map