// Compiled by ClojureScript 0.0-2629 {}
if(!goog.isProvided_('cognitect.transit')) {
goog.provide('cognitect.transit');
}
goog.require('cljs.core');
goog.require('goog.math.Long');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
cognitect.transit.opts_merge = (function opts_merge(a,b){
var seq__15818_15822 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__15819_15823 = null;
var count__15820_15824 = (0);
var i__15821_15825 = (0);
while(true){
if((i__15821_15825 < count__15820_15824)){
var k_15826 = cljs.core._nth.call(null,chunk__15819_15823,i__15821_15825);
var v_15827 = (b[k_15826]);
(a[k_15826] = v_15827);

var G__15828 = seq__15818_15822;
var G__15829 = chunk__15819_15823;
var G__15830 = count__15820_15824;
var G__15831 = (i__15821_15825 + (1));
seq__15818_15822 = G__15828;
chunk__15819_15823 = G__15829;
count__15820_15824 = G__15830;
i__15821_15825 = G__15831;
continue;
} else {
var temp__4126__auto___15832 = cljs.core.seq.call(null,seq__15818_15822);
if(temp__4126__auto___15832){
var seq__15818_15833__$1 = temp__4126__auto___15832;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15818_15833__$1)){
var c__13397__auto___15834 = cljs.core.chunk_first.call(null,seq__15818_15833__$1);
var G__15835 = cljs.core.chunk_rest.call(null,seq__15818_15833__$1);
var G__15836 = c__13397__auto___15834;
var G__15837 = cljs.core.count.call(null,c__13397__auto___15834);
var G__15838 = (0);
seq__15818_15822 = G__15835;
chunk__15819_15823 = G__15836;
count__15820_15824 = G__15837;
i__15821_15825 = G__15838;
continue;
} else {
var k_15839 = cljs.core.first.call(null,seq__15818_15833__$1);
var v_15840 = (b[k_15839]);
(a[k_15839] = v_15840);

var G__15841 = cljs.core.next.call(null,seq__15818_15833__$1);
var G__15842 = null;
var G__15843 = (0);
var G__15844 = (0);
seq__15818_15822 = G__15841;
chunk__15819_15823 = G__15842;
count__15820_15824 = G__15843;
i__15821_15825 = G__15844;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__13197__auto__,writer__13198__auto__,opt__13199__auto__){
return cljs.core._write.call(null,writer__13198__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function __GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__13197__auto__,writer__13198__auto__,opt__13199__auto__){
return cljs.core._write.call(null,writer__13198__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function __GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
* Return a transit reader. type may be either :json or :json-verbose.
* opts may be a map optionally containing a :handlers entry. The value
* of :handlers should be map from tag to a decoder function which returns
* then in-memory representation of the semantic transit value.
*/
cognitect.transit.reader = (function() {
var reader = null;
var reader__1 = (function (type){
return reader.call(null,type,null);
});
var reader__2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__15845 = (i + (2));
var G__15846 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__15845;
ret = G__15846;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts)))},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});
reader = function(type,opts){
switch(arguments.length){
case 1:
return reader__1.call(this,type);
case 2:
return reader__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reader.cljs$core$IFn$_invoke$arity$1 = reader__1;
reader.cljs$core$IFn$_invoke$arity$2 = reader__2;
return reader;
})()
;
/**
* Read a transit encoded string into ClojureScript values given a
* transit reader.
*/
cognitect.transit.read = (function read(r,str){
return r.read(str);
});

/**
* @constructor
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__13197__auto__,writer__13198__auto__,opt__13199__auto__){
return cljs.core._write.call(null,writer__13198__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function __GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__13197__auto__,writer__13198__auto__,opt__13199__auto__){
return cljs.core._write.call(null,writer__13198__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function __GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__15847_15851 = cljs.core.seq.call(null,v);
var chunk__15848_15852 = null;
var count__15849_15853 = (0);
var i__15850_15854 = (0);
while(true){
if((i__15850_15854 < count__15849_15853)){
var x_15855 = cljs.core._nth.call(null,chunk__15848_15852,i__15850_15854);
ret.push(x_15855);

var G__15856 = seq__15847_15851;
var G__15857 = chunk__15848_15852;
var G__15858 = count__15849_15853;
var G__15859 = (i__15850_15854 + (1));
seq__15847_15851 = G__15856;
chunk__15848_15852 = G__15857;
count__15849_15853 = G__15858;
i__15850_15854 = G__15859;
continue;
} else {
var temp__4126__auto___15860 = cljs.core.seq.call(null,seq__15847_15851);
if(temp__4126__auto___15860){
var seq__15847_15861__$1 = temp__4126__auto___15860;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15847_15861__$1)){
var c__13397__auto___15862 = cljs.core.chunk_first.call(null,seq__15847_15861__$1);
var G__15863 = cljs.core.chunk_rest.call(null,seq__15847_15861__$1);
var G__15864 = c__13397__auto___15862;
var G__15865 = cljs.core.count.call(null,c__13397__auto___15862);
var G__15866 = (0);
seq__15847_15851 = G__15863;
chunk__15848_15852 = G__15864;
count__15849_15853 = G__15865;
i__15850_15854 = G__15866;
continue;
} else {
var x_15867 = cljs.core.first.call(null,seq__15847_15861__$1);
ret.push(x_15867);

var G__15868 = cljs.core.next.call(null,seq__15847_15861__$1);
var G__15869 = null;
var G__15870 = (0);
var G__15871 = (0);
seq__15847_15851 = G__15868;
chunk__15848_15852 = G__15869;
count__15849_15853 = G__15870;
i__15850_15854 = G__15871;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__13197__auto__,writer__13198__auto__,opt__13199__auto__){
return cljs.core._write.call(null,writer__13198__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function __GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__13197__auto__,writer__13198__auto__,opt__13199__auto__){
return cljs.core._write.call(null,writer__13198__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function __GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__15872_15876 = cljs.core.seq.call(null,v);
var chunk__15873_15877 = null;
var count__15874_15878 = (0);
var i__15875_15879 = (0);
while(true){
if((i__15875_15879 < count__15874_15878)){
var x_15880 = cljs.core._nth.call(null,chunk__15873_15877,i__15875_15879);
ret.push(x_15880);

var G__15881 = seq__15872_15876;
var G__15882 = chunk__15873_15877;
var G__15883 = count__15874_15878;
var G__15884 = (i__15875_15879 + (1));
seq__15872_15876 = G__15881;
chunk__15873_15877 = G__15882;
count__15874_15878 = G__15883;
i__15875_15879 = G__15884;
continue;
} else {
var temp__4126__auto___15885 = cljs.core.seq.call(null,seq__15872_15876);
if(temp__4126__auto___15885){
var seq__15872_15886__$1 = temp__4126__auto___15885;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15872_15886__$1)){
var c__13397__auto___15887 = cljs.core.chunk_first.call(null,seq__15872_15886__$1);
var G__15888 = cljs.core.chunk_rest.call(null,seq__15872_15886__$1);
var G__15889 = c__13397__auto___15887;
var G__15890 = cljs.core.count.call(null,c__13397__auto___15887);
var G__15891 = (0);
seq__15872_15876 = G__15888;
chunk__15873_15877 = G__15889;
count__15874_15878 = G__15890;
i__15875_15879 = G__15891;
continue;
} else {
var x_15892 = cljs.core.first.call(null,seq__15872_15886__$1);
ret.push(x_15892);

var G__15893 = cljs.core.next.call(null,seq__15872_15886__$1);
var G__15894 = null;
var G__15895 = (0);
var G__15896 = (0);
seq__15872_15876 = G__15893;
chunk__15873_15877 = G__15894;
count__15874_15878 = G__15895;
i__15875_15879 = G__15896;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__13197__auto__,writer__13198__auto__,opt__13199__auto__){
return cljs.core._write.call(null,writer__13198__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function __GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__15897_15901 = cljs.core.seq.call(null,v);
var chunk__15898_15902 = null;
var count__15899_15903 = (0);
var i__15900_15904 = (0);
while(true){
if((i__15900_15904 < count__15899_15903)){
var x_15905 = cljs.core._nth.call(null,chunk__15898_15902,i__15900_15904);
ret.push(x_15905);

var G__15906 = seq__15897_15901;
var G__15907 = chunk__15898_15902;
var G__15908 = count__15899_15903;
var G__15909 = (i__15900_15904 + (1));
seq__15897_15901 = G__15906;
chunk__15898_15902 = G__15907;
count__15899_15903 = G__15908;
i__15900_15904 = G__15909;
continue;
} else {
var temp__4126__auto___15910 = cljs.core.seq.call(null,seq__15897_15901);
if(temp__4126__auto___15910){
var seq__15897_15911__$1 = temp__4126__auto___15910;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15897_15911__$1)){
var c__13397__auto___15912 = cljs.core.chunk_first.call(null,seq__15897_15911__$1);
var G__15913 = cljs.core.chunk_rest.call(null,seq__15897_15911__$1);
var G__15914 = c__13397__auto___15912;
var G__15915 = cljs.core.count.call(null,c__13397__auto___15912);
var G__15916 = (0);
seq__15897_15901 = G__15913;
chunk__15898_15902 = G__15914;
count__15899_15903 = G__15915;
i__15900_15904 = G__15916;
continue;
} else {
var x_15917 = cljs.core.first.call(null,seq__15897_15911__$1);
ret.push(x_15917);

var G__15918 = cljs.core.next.call(null,seq__15897_15911__$1);
var G__15919 = null;
var G__15920 = (0);
var G__15921 = (0);
seq__15897_15901 = G__15918;
chunk__15898_15902 = G__15919;
count__15899_15903 = G__15920;
i__15900_15904 = G__15921;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__13197__auto__,writer__13198__auto__,opt__13199__auto__){
return cljs.core._write.call(null,writer__13198__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function __GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__13197__auto__,writer__13198__auto__,opt__13199__auto__){
return cljs.core._write.call(null,writer__13198__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function __GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
* Return a transit writer. type maybe either :json or :json-verbose.
* opts is a map containing a :handlers entry. :handlers is a JavaScript
* array of interleaved type constructors and handler instances for those
* type constructors.
*/
cognitect.transit.writer = (function() {
var writer = null;
var writer__1 = (function (type){
return writer.call(null,type,null);
});
var writer__2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x15931 = cljs.core.clone.call(null,handlers);
x15931.forEach = ((function (x15931,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__15932 = cljs.core.seq.call(null,coll);
var chunk__15933 = null;
var count__15934 = (0);
var i__15935 = (0);
while(true){
if((i__15935 < count__15934)){
var vec__15936 = cljs.core._nth.call(null,chunk__15933,i__15935);
var k = cljs.core.nth.call(null,vec__15936,(0),null);
var v = cljs.core.nth.call(null,vec__15936,(1),null);
f.call(null,v,k);

var G__15938 = seq__15932;
var G__15939 = chunk__15933;
var G__15940 = count__15934;
var G__15941 = (i__15935 + (1));
seq__15932 = G__15938;
chunk__15933 = G__15939;
count__15934 = G__15940;
i__15935 = G__15941;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__15932);
if(temp__4126__auto__){
var seq__15932__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15932__$1)){
var c__13397__auto__ = cljs.core.chunk_first.call(null,seq__15932__$1);
var G__15942 = cljs.core.chunk_rest.call(null,seq__15932__$1);
var G__15943 = c__13397__auto__;
var G__15944 = cljs.core.count.call(null,c__13397__auto__);
var G__15945 = (0);
seq__15932 = G__15942;
chunk__15933 = G__15943;
count__15934 = G__15944;
i__15935 = G__15945;
continue;
} else {
var vec__15937 = cljs.core.first.call(null,seq__15932__$1);
var k = cljs.core.nth.call(null,vec__15937,(0),null);
var v = cljs.core.nth.call(null,vec__15937,(1),null);
f.call(null,v,k);

var G__15946 = cljs.core.next.call(null,seq__15932__$1);
var G__15947 = null;
var G__15948 = (0);
var G__15949 = (0);
seq__15932 = G__15946;
chunk__15933 = G__15947;
count__15934 = G__15948;
i__15935 = G__15949;
continue;
}
} else {
return null;
}
}
break;
}
});})(x15931,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x15931;
})(), "objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__15930 = obj;
G__15930.push(kfn.call(null,k),vfn.call(null,v));

return G__15930;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});
writer = function(type,opts){
switch(arguments.length){
case 1:
return writer__1.call(this,type);
case 2:
return writer__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
writer.cljs$core$IFn$_invoke$arity$1 = writer__1;
writer.cljs$core$IFn$_invoke$arity$2 = writer__2;
return writer;
})()
;
/**
* Encode an object into a transit string given a transit writer.
*/
cognitect.transit.write = (function write(w,o){
return w.write(o);
});
/**
* Construct a read handler. Implemented as identity, exists primarily
* for API compatiblity with transit-clj
*/
cognitect.transit.read_handler = (function read_handler(from_rep){
return from_rep;
});
/**
* Creates a transit write handler whose tag, rep,
* stringRep, and verboseWriteHandler methods
* invoke the provided fns.
*/
cognitect.transit.write_handler = (function() {
var write_handler = null;
var write_handler__2 = (function (tag_fn,rep_fn){
return write_handler.call(null,tag_fn,rep_fn,null,null);
});
var write_handler__3 = (function (tag_fn,rep_fn,str_rep_fn){
return write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});
var write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t15953 !== 'undefined'){
} else {

/**
* @constructor
*/
cognitect.transit.t15953 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta15954){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta15954 = meta15954;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t15953.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t15953.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t15953.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t15953.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t15953.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15955){
var self__ = this;
var _15955__$1 = this;
return self__.meta15954;
});

cognitect.transit.t15953.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15955,meta15954__$1){
var self__ = this;
var _15955__$1 = this;
return (new cognitect.transit.t15953(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta15954__$1));
});

cognitect.transit.t15953.cljs$lang$type = true;

cognitect.transit.t15953.cljs$lang$ctorStr = "cognitect.transit/t15953";

cognitect.transit.t15953.cljs$lang$ctorPrWriter = (function (this__13197__auto__,writer__13198__auto__,opt__13199__auto__){
return cljs.core._write.call(null,writer__13198__auto__,"cognitect.transit/t15953");
});

cognitect.transit.__GT_t15953 = (function __GT_t15953(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta15954){
return (new cognitect.transit.t15953(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta15954));
});

}

return (new cognitect.transit.t15953(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),79,new cljs.core.Keyword(null,"end-line","end-line",1837326455),259,new cljs.core.Keyword(null,"column","column",2078222095),6,new cljs.core.Keyword(null,"line","line",212345235),255,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/callum/projects/closso/test-luminus-mongo-site/resources/public/js/out/cognitect/transit.cljs"], null)));
});
write_handler = function(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
switch(arguments.length){
case 2:
return write_handler__2.call(this,tag_fn,rep_fn);
case 3:
return write_handler__3.call(this,tag_fn,rep_fn,str_rep_fn);
case 4:
return write_handler__4.call(this,tag_fn,rep_fn,str_rep_fn,verbose_handler_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
write_handler.cljs$core$IFn$_invoke$arity$2 = write_handler__2;
write_handler.cljs$core$IFn$_invoke$arity$3 = write_handler__3;
write_handler.cljs$core$IFn$_invoke$arity$4 = write_handler__4;
return write_handler;
})()
;
/**
* Construct a tagged value. tag must be a string and rep can
* be any transit encodeable value.
*/
cognitect.transit.tagged_value = (function tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
* Returns true if x is a transit tagged value, false otherwise.
*/
cognitect.transit.tagged_value_QMARK_ = (function tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
* Construct a transit integer value. Returns JavaScript number if
* in the 53bit integer range, a goog.math.Long instance if above. s
* may be a string or a JavaScript number.
*/
cognitect.transit.integer = (function integer(s){
return com.cognitect.transit.types.integer.call(null,s);
});
/**
* Returns true if x is an integer value between the 53bit and 64bit
* range, false otherwise.
*/
cognitect.transit.integer_QMARK_ = (function integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigint = (function bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigint_QMARK_ = (function bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigdec = (function bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigdec_QMARK_ = (function bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
* Construct a URI from a string.
*/
cognitect.transit.uri = (function uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
* Returns true if x is a transit URI value, false otherwise.
*/
cognitect.transit.uri_QMARK_ = (function uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
* Construct a UUID from a string.
*/
cognitect.transit.uuid = (function uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
* Returns true if x is a transit UUID value, false otherwise.
*/
cognitect.transit.uuid_QMARK_ = (function uuid_QMARK_(x){
return com.cognitect.transit.types.isUUID.call(null,x);
});
/**
* Construct a transit binary value. s should be base64 encoded
* string.
*/
cognitect.transit.binary = (function binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
* Returns true if x is a transit binary value, false otherwise.
*/
cognitect.transit.binary_QMARK_ = (function binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
* Construct a quoted transit value. x should be a transit
* encodeable value.
*/
cognitect.transit.quoted = (function quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
* Returns true if x is a transit quoted value, false otherwise.
*/
cognitect.transit.quoted_QMARK_ = (function quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
* Construct a transit link value. x should be an IMap instance
* containing at a minimum the following keys: :href, :rel. It
* may optionall include :name, :render, and :prompt. :href must
* be a transit URI, all other values are strings, and :render must
* be either :image or :link.
*/
cognitect.transit.link = (function link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
* Returns true if x a transit link value, false if otherwise.
*/
cognitect.transit.link_QMARK_ = (function link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map