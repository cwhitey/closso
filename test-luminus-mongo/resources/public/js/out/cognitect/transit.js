// Compiled by ClojureScript 0.0-2371
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('goog.math.Long');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;if((other instanceof cljs.core.UUID))
{return (this$__$1.uuid === other.uuid);
} else
{if((other instanceof com.cognitect.transit.types.UUID))
{return (this$__$1.uuid === other.toString());
} else
{return false;

}
}
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;return this$__$1.equiv(other);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;
com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;if((other instanceof cljs.core.UUID))
{return cljs.core._equiv.call(null,other,this$__$1);
} else
{return this$__$1.equiv(other);
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;
goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;return this$__$1.equiv(other);
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;
goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
cognitect.transit.opts_merge = (function opts_merge(a,b){var seq__6570_6574 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));var chunk__6571_6575 = null;var count__6572_6576 = (0);var i__6573_6577 = (0);while(true){
if((i__6573_6577 < count__6572_6576))
{var k_6578 = cljs.core._nth.call(null,chunk__6571_6575,i__6573_6577);var v_6579 = (b[k_6578]);(a[k_6578] = v_6579);
{
var G__6580 = seq__6570_6574;
var G__6581 = chunk__6571_6575;
var G__6582 = count__6572_6576;
var G__6583 = (i__6573_6577 + (1));
seq__6570_6574 = G__6580;
chunk__6571_6575 = G__6581;
count__6572_6576 = G__6582;
i__6573_6577 = G__6583;
continue;
}
} else
{var temp__4126__auto___6584 = cljs.core.seq.call(null,seq__6570_6574);if(temp__4126__auto___6584)
{var seq__6570_6585__$1 = temp__4126__auto___6584;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6570_6585__$1))
{var c__4410__auto___6586 = cljs.core.chunk_first.call(null,seq__6570_6585__$1);{
var G__6587 = cljs.core.chunk_rest.call(null,seq__6570_6585__$1);
var G__6588 = c__4410__auto___6586;
var G__6589 = cljs.core.count.call(null,c__4410__auto___6586);
var G__6590 = (0);
seq__6570_6574 = G__6587;
chunk__6571_6575 = G__6588;
count__6572_6576 = G__6589;
i__6573_6577 = G__6590;
continue;
}
} else
{var k_6591 = cljs.core.first.call(null,seq__6570_6585__$1);var v_6592 = (b[k_6591]);(a[k_6591] = v_6592);
{
var G__6593 = cljs.core.next.call(null,seq__6570_6585__$1);
var G__6594 = null;
var G__6595 = (0);
var G__6596 = (0);
seq__6570_6574 = G__6593;
chunk__6571_6575 = G__6594;
count__6572_6576 = G__6595;
i__6573_6577 = G__6596;
continue;
}
}
} else
{}
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
cognitect.transit.MapBuilder.cljs$lang$type = true;
cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";
cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cognitect.transit/MapBuilder");
});
cognitect.transit.MapBuilder.prototype.init = (function (node){var self__ = this;
var _ = this;return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){var self__ = this;
var _ = this;return cljs.core.assoc_BANG_.call(null,m,k,v);
});
cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){var self__ = this;
var _ = this;return cljs.core.persistent_BANG_.call(null,m);
});
cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){var self__ = this;
var _ = this;return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});
cognitect.transit.__GT_MapBuilder = (function __GT_MapBuilder(){return (new cognitect.transit.MapBuilder());
});

/**
* @constructor
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.cljs$lang$type = true;
cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";
cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cognitect.transit/VectorBuilder");
});
cognitect.transit.VectorBuilder.prototype.init = (function (node){var self__ = this;
var _ = this;return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});
cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){var self__ = this;
var _ = this;return cljs.core.conj_BANG_.call(null,v,x);
});
cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){var self__ = this;
var _ = this;return cljs.core.persistent_BANG_.call(null,v);
});
cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){var self__ = this;
var _ = this;return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});
cognitect.transit.__GT_VectorBuilder = (function __GT_VectorBuilder(){return (new cognitect.transit.VectorBuilder());
});
/**
* Return a transit reader. type may be either :json or :json-verbose.
* opts may be a map optionally containing a :handlers entry. The value
* of :handlers should be map from tag to a decoder function which returns
* then in-memory representation of the semantic transit value.
*/
cognitect.transit.reader = (function() {
var reader = null;
var reader__1 = (function (type){return reader.call(null,type,null);
});
var reader__2 = (function (type,opts){return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){return cljs.core.symbol.call(null,v);
}),":",(function (v){return cljs.core.keyword.call(null,v);
}),"set",(function (v){return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){var i = (0);var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);while(true){
if((i < v.length))
{{
var G__6597 = (i + (2));
var G__6598 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__6597;
ret = G__6598;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,ret);
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
cognitect.transit.read = (function read(r,str){return r.read(str);
});

/**
* @constructor
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.cljs$lang$type = true;
cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";
cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cognitect.transit/KeywordHandler");
});
cognitect.transit.KeywordHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return ":";
});
cognitect.transit.KeywordHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v.fqn;
});
cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return v.fqn;
});
cognitect.transit.__GT_KeywordHandler = (function __GT_KeywordHandler(){return (new cognitect.transit.KeywordHandler());
});

/**
* @constructor
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.cljs$lang$type = true;
cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";
cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cognitect.transit/SymbolHandler");
});
cognitect.transit.SymbolHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "$";
});
cognitect.transit.SymbolHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v.str;
});
cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return v.str;
});
cognitect.transit.__GT_SymbolHandler = (function __GT_SymbolHandler(){return (new cognitect.transit.SymbolHandler());
});

/**
* @constructor
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.cljs$lang$type = true;
cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";
cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cognitect.transit/ListHandler");
});
cognitect.transit.ListHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "list";
});
cognitect.transit.ListHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__6599_6603 = cljs.core.seq.call(null,v);var chunk__6600_6604 = null;var count__6601_6605 = (0);var i__6602_6606 = (0);while(true){
if((i__6602_6606 < count__6601_6605))
{var x_6607 = cljs.core._nth.call(null,chunk__6600_6604,i__6602_6606);ret.push(x_6607);
{
var G__6608 = seq__6599_6603;
var G__6609 = chunk__6600_6604;
var G__6610 = count__6601_6605;
var G__6611 = (i__6602_6606 + (1));
seq__6599_6603 = G__6608;
chunk__6600_6604 = G__6609;
count__6601_6605 = G__6610;
i__6602_6606 = G__6611;
continue;
}
} else
{var temp__4126__auto___6612 = cljs.core.seq.call(null,seq__6599_6603);if(temp__4126__auto___6612)
{var seq__6599_6613__$1 = temp__4126__auto___6612;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6599_6613__$1))
{var c__4410__auto___6614 = cljs.core.chunk_first.call(null,seq__6599_6613__$1);{
var G__6615 = cljs.core.chunk_rest.call(null,seq__6599_6613__$1);
var G__6616 = c__4410__auto___6614;
var G__6617 = cljs.core.count.call(null,c__4410__auto___6614);
var G__6618 = (0);
seq__6599_6603 = G__6615;
chunk__6600_6604 = G__6616;
count__6601_6605 = G__6617;
i__6602_6606 = G__6618;
continue;
}
} else
{var x_6619 = cljs.core.first.call(null,seq__6599_6613__$1);ret.push(x_6619);
{
var G__6620 = cljs.core.next.call(null,seq__6599_6613__$1);
var G__6621 = null;
var G__6622 = (0);
var G__6623 = (0);
seq__6599_6603 = G__6620;
chunk__6600_6604 = G__6621;
count__6601_6605 = G__6622;
i__6602_6606 = G__6623;
continue;
}
}
} else
{}
}
break;
}
return com.cognitect.transit.tagged.call(null,"array",ret);
});
cognitect.transit.ListHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return null;
});
cognitect.transit.__GT_ListHandler = (function __GT_ListHandler(){return (new cognitect.transit.ListHandler());
});

/**
* @constructor
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.cljs$lang$type = true;
cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";
cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cognitect.transit/MapHandler");
});
cognitect.transit.MapHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "map";
});
cognitect.transit.MapHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v;
});
cognitect.transit.MapHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return null;
});
cognitect.transit.__GT_MapHandler = (function __GT_MapHandler(){return (new cognitect.transit.MapHandler());
});

/**
* @constructor
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.cljs$lang$type = true;
cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";
cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cognitect.transit/SetHandler");
});
cognitect.transit.SetHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "set";
});
cognitect.transit.SetHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__6624_6628 = cljs.core.seq.call(null,v);var chunk__6625_6629 = null;var count__6626_6630 = (0);var i__6627_6631 = (0);while(true){
if((i__6627_6631 < count__6626_6630))
{var x_6632 = cljs.core._nth.call(null,chunk__6625_6629,i__6627_6631);ret.push(x_6632);
{
var G__6633 = seq__6624_6628;
var G__6634 = chunk__6625_6629;
var G__6635 = count__6626_6630;
var G__6636 = (i__6627_6631 + (1));
seq__6624_6628 = G__6633;
chunk__6625_6629 = G__6634;
count__6626_6630 = G__6635;
i__6627_6631 = G__6636;
continue;
}
} else
{var temp__4126__auto___6637 = cljs.core.seq.call(null,seq__6624_6628);if(temp__4126__auto___6637)
{var seq__6624_6638__$1 = temp__4126__auto___6637;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6624_6638__$1))
{var c__4410__auto___6639 = cljs.core.chunk_first.call(null,seq__6624_6638__$1);{
var G__6640 = cljs.core.chunk_rest.call(null,seq__6624_6638__$1);
var G__6641 = c__4410__auto___6639;
var G__6642 = cljs.core.count.call(null,c__4410__auto___6639);
var G__6643 = (0);
seq__6624_6628 = G__6640;
chunk__6625_6629 = G__6641;
count__6626_6630 = G__6642;
i__6627_6631 = G__6643;
continue;
}
} else
{var x_6644 = cljs.core.first.call(null,seq__6624_6638__$1);ret.push(x_6644);
{
var G__6645 = cljs.core.next.call(null,seq__6624_6638__$1);
var G__6646 = null;
var G__6647 = (0);
var G__6648 = (0);
seq__6624_6628 = G__6645;
chunk__6625_6629 = G__6646;
count__6626_6630 = G__6647;
i__6627_6631 = G__6648;
continue;
}
}
} else
{}
}
break;
}
return com.cognitect.transit.tagged.call(null,"array",ret);
});
cognitect.transit.SetHandler.prototype.stringRep = (function (){var self__ = this;
var v = this;return null;
});
cognitect.transit.__GT_SetHandler = (function __GT_SetHandler(){return (new cognitect.transit.SetHandler());
});

/**
* @constructor
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.cljs$lang$type = true;
cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";
cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cognitect.transit/VectorHandler");
});
cognitect.transit.VectorHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "array";
});
cognitect.transit.VectorHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__6649_6653 = cljs.core.seq.call(null,v);var chunk__6650_6654 = null;var count__6651_6655 = (0);var i__6652_6656 = (0);while(true){
if((i__6652_6656 < count__6651_6655))
{var x_6657 = cljs.core._nth.call(null,chunk__6650_6654,i__6652_6656);ret.push(x_6657);
{
var G__6658 = seq__6649_6653;
var G__6659 = chunk__6650_6654;
var G__6660 = count__6651_6655;
var G__6661 = (i__6652_6656 + (1));
seq__6649_6653 = G__6658;
chunk__6650_6654 = G__6659;
count__6651_6655 = G__6660;
i__6652_6656 = G__6661;
continue;
}
} else
{var temp__4126__auto___6662 = cljs.core.seq.call(null,seq__6649_6653);if(temp__4126__auto___6662)
{var seq__6649_6663__$1 = temp__4126__auto___6662;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6649_6663__$1))
{var c__4410__auto___6664 = cljs.core.chunk_first.call(null,seq__6649_6663__$1);{
var G__6665 = cljs.core.chunk_rest.call(null,seq__6649_6663__$1);
var G__6666 = c__4410__auto___6664;
var G__6667 = cljs.core.count.call(null,c__4410__auto___6664);
var G__6668 = (0);
seq__6649_6653 = G__6665;
chunk__6650_6654 = G__6666;
count__6651_6655 = G__6667;
i__6652_6656 = G__6668;
continue;
}
} else
{var x_6669 = cljs.core.first.call(null,seq__6649_6663__$1);ret.push(x_6669);
{
var G__6670 = cljs.core.next.call(null,seq__6649_6663__$1);
var G__6671 = null;
var G__6672 = (0);
var G__6673 = (0);
seq__6649_6653 = G__6670;
chunk__6650_6654 = G__6671;
count__6651_6655 = G__6672;
i__6652_6656 = G__6673;
continue;
}
}
} else
{}
}
break;
}
return ret;
});
cognitect.transit.VectorHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return null;
});
cognitect.transit.__GT_VectorHandler = (function __GT_VectorHandler(){return (new cognitect.transit.VectorHandler());
});

/**
* @constructor
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.cljs$lang$type = true;
cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";
cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cognitect.transit/UUIDHandler");
});
cognitect.transit.UUIDHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "u";
});
cognitect.transit.UUIDHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v.uuid;
});
cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){var self__ = this;
var this$ = this;return this$.rep(v);
});
cognitect.transit.__GT_UUIDHandler = (function __GT_UUIDHandler(){return (new cognitect.transit.UUIDHandler());
});
/**
* Return a transit writer. type maybe either :json or :json-verbose.
* opts is a map containing a :handlers entry. :handlers is a JavaScript
* array of interleaved type constructors and handler instances for those
* type constructors.
*/
cognitect.transit.writer = (function() {
var writer = null;
var writer__1 = (function (type){return writer.call(null,type,null);
});
var writer__2 = (function (type,opts){var keyword_handler = (new cognitect.transit.KeywordHandler());var symbol_handler = (new cognitect.transit.SymbolHandler());var list_handler = (new cognitect.transit.ListHandler());var map_handler = (new cognitect.transit.MapHandler());var set_handler = (new cognitect.transit.SetHandler());var vector_handler = (new cognitect.transit.VectorHandler());var uuid_handler = (new cognitect.transit.UUIDHandler());var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){if((x instanceof cljs.core.PersistentArrayMap))
{return x.arr;
} else
{return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x6683 = cljs.core.clone.call(null,handlers);x6683.forEach = ((function (x6683,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){var coll = this;var seq__6684 = cljs.core.seq.call(null,coll);var chunk__6685 = null;var count__6686 = (0);var i__6687 = (0);while(true){
if((i__6687 < count__6686))
{var vec__6688 = cljs.core._nth.call(null,chunk__6685,i__6687);var k = cljs.core.nth.call(null,vec__6688,(0),null);var v = cljs.core.nth.call(null,vec__6688,(1),null);f.call(null,v,k);
{
var G__6690 = seq__6684;
var G__6691 = chunk__6685;
var G__6692 = count__6686;
var G__6693 = (i__6687 + (1));
seq__6684 = G__6690;
chunk__6685 = G__6691;
count__6686 = G__6692;
i__6687 = G__6693;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__6684);if(temp__4126__auto__)
{var seq__6684__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6684__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__6684__$1);{
var G__6694 = cljs.core.chunk_rest.call(null,seq__6684__$1);
var G__6695 = c__4410__auto__;
var G__6696 = cljs.core.count.call(null,c__4410__auto__);
var G__6697 = (0);
seq__6684 = G__6694;
chunk__6685 = G__6695;
count__6686 = G__6696;
i__6687 = G__6697;
continue;
}
} else
{var vec__6689 = cljs.core.first.call(null,seq__6684__$1);var k = cljs.core.nth.call(null,vec__6689,(0),null);var v = cljs.core.nth.call(null,vec__6689,(1),null);f.call(null,v,k);
{
var G__6698 = cljs.core.next.call(null,seq__6684__$1);
var G__6699 = null;
var G__6700 = (0);
var G__6701 = (0);
seq__6684 = G__6698;
chunk__6685 = G__6699;
count__6686 = G__6700;
i__6687 = G__6701;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(x6683,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;
return x6683;
})(), "objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){var G__6682 = obj;G__6682.push(kfn.call(null,k),vfn.call(null,v));
return G__6682;
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
cognitect.transit.write = (function write(w,o){return w.write(o);
});
/**
* Construct a read handler. Implemented as identity, exists primarily
* for API compatiblity with transit-clj
*/
cognitect.transit.read_handler = (function read_handler(from_rep){return from_rep;
});
/**
* Creates a transit write handler whose tag, rep,
* stringRep, and verboseWriteHandler methods
* invoke the provided fns.
*/
cognitect.transit.write_handler = (function() {
var write_handler = null;
var write_handler__2 = (function (tag_fn,rep_fn){return write_handler.call(null,tag_fn,rep_fn,null,null);
});
var write_handler__3 = (function (tag_fn,rep_fn,str_rep_fn){return write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});
var write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){if(typeof cognitect.transit.t6705 !== 'undefined')
{} else
{
/**
* @constructor
*/
cognitect.transit.t6705 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta6706){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta6706 = meta6706;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t6705.cljs$lang$type = true;
cognitect.transit.t6705.cljs$lang$ctorStr = "cognitect.transit/t6705";
cognitect.transit.t6705.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cognitect.transit/t6705");
});
cognitect.transit.t6705.prototype.tag = (function (o){var self__ = this;
var _ = this;return self__.tag_fn.call(null,o);
});
cognitect.transit.t6705.prototype.rep = (function (o){var self__ = this;
var _ = this;return self__.rep_fn.call(null,o);
});
cognitect.transit.t6705.prototype.stringRep = (function (o){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.str_rep_fn))
{return self__.str_rep_fn.call(null,o);
} else
{return null;
}
});
cognitect.transit.t6705.prototype.getVerboseHandler = (function (){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.verbose_handler_fn))
{return self__.verbose_handler_fn.call(null);
} else
{return null;
}
});
cognitect.transit.t6705.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6707){var self__ = this;
var _6707__$1 = this;return self__.meta6706;
});
cognitect.transit.t6705.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6707,meta6706__$1){var self__ = this;
var _6707__$1 = this;return (new cognitect.transit.t6705(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta6706__$1));
});
cognitect.transit.__GT_t6705 = (function __GT_t6705(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta6706){return (new cognitect.transit.t6705(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta6706));
});
}
return (new cognitect.transit.t6705(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,null));
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
cognitect.transit.tagged_value = (function tagged_value(tag,rep){return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
* Returns true if x is a transit tagged value, false otherwise.
*/
cognitect.transit.tagged_value_QMARK_ = (function tagged_value_QMARK_(x){return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
* Construct a transit integer value. Returns JavaScript number if
* in the 53bit integer range, a goog.math.Long instance if above. s
* may be a string or a JavaScript number.
*/
cognitect.transit.integer = (function integer(s){return com.cognitect.transit.types.integer.call(null,s);
});
/**
* Returns true if x is an integer value between the 53bit and 64bit
* range, false otherwise.
*/
cognitect.transit.integer_QMARK_ = (function integer_QMARK_(x){return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigint = (function bigint(s){return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigint_QMARK_ = (function bigint_QMARK_(x){return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigdec = (function bigdec(s){return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigdec_QMARK_ = (function bigdec_QMARK_(x){return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
* Construct a URI from a string.
*/
cognitect.transit.uri = (function uri(s){return com.cognitect.transit.types.uri.call(null,s);
});
/**
* Returns true if x is a transit URI value, false otherwise.
*/
cognitect.transit.uri_QMARK_ = (function uri_QMARK_(x){return com.cognitect.transit.types.isURI.call(null,x);
});
/**
* Construct a UUID from a string.
*/
cognitect.transit.uuid = (function uuid(s){return com.cognitect.transit.types.uuid.call(null,s);
});
/**
* Returns true if x is a transit UUID value, false otherwise.
*/
cognitect.transit.uuid_QMARK_ = (function uuid_QMARK_(x){return com.cognitect.transit.types.isUUID.call(null,x);
});
/**
* Construct a transit binary value. s should be base64 encoded
* string.
*/
cognitect.transit.binary = (function binary(s){return com.cognitect.transit.types.binary.call(null,s);
});
/**
* Returns true if x is a transit binary value, false otherwise.
*/
cognitect.transit.binary_QMARK_ = (function binary_QMARK_(x){return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
* Construct a quoted transit value. x should be a transit
* encodeable value.
*/
cognitect.transit.quoted = (function quoted(x){return com.cognitect.transit.types.quoted.call(null,x);
});
/**
* Returns true if x is a transit quoted value, false otherwise.
*/
cognitect.transit.quoted_QMARK_ = (function quoted_QMARK_(x){return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
* Construct a transit link value. x should be an IMap instance
* containing at a minimum the following keys: :href, :rel. It
* may optionall include :name, :render, and :prompt. :href must
* be a transit URI, all other values are strings, and :render must
* be either :image or :link.
*/
cognitect.transit.link = (function link(x){return com.cognitect.transit.types.link.call(null,x);
});
/**
* Returns true if x a transit link value, false if otherwise.
*/
cognitect.transit.link_QMARK_ = (function link_QMARK_(x){return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map