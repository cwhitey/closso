// Compiled by ClojureScript 0.0-2371
goog.provide('reagent.ratom');
goog.require('cljs.core');
reagent.ratom.debug = false;
reagent.ratom._running = cljs.core.atom.call(null,(0));
reagent.ratom.running = (function running(){return cljs.core.deref.call(null,reagent.ratom._running);
});
reagent.ratom.capture_derefed = (function capture_derefed(f,obj){obj.cljsCaptured = null;
var _STAR_ratom_context_STAR_6762 = reagent.ratom._STAR_ratom_context_STAR_;try{reagent.ratom._STAR_ratom_context_STAR_ = obj;
return f.call(null);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_6762;
}});
reagent.ratom.captured = (function captured(obj){var c = obj.cljsCaptured;obj.cljsCaptured = null;
return c;
});
reagent.ratom.notify_deref_watcher_BANG_ = (function notify_deref_watcher_BANG_(derefable){var obj = reagent.ratom._STAR_ratom_context_STAR_;if((obj == null))
{return null;
} else
{var captured = obj.cljsCaptured;return obj.cljsCaptured = cljs.core.conj.call(null,(((captured == null))?cljs.core.PersistentHashSet.EMPTY:captured),derefable);
}
});

/**
* @constructor
*/
reagent.ratom.RAtom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.RAtom.cljs$lang$type = true;
reagent.ratom.RAtom.cljs$lang$ctorStr = "reagent.ratom/RAtom";
reagent.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"reagent.ratom/RAtom");
});
reagent.ratom.RAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;return cljs.core.reduce_kv.call(null,((function (this$__$1){
return (function (_,key,f){f.call(null,key,this$__$1,oldval,newval);
return null;
});})(this$__$1))
,null,self__.watches);
});
reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){var self__ = this;
var this$__$1 = this;return self__.watches = cljs.core.assoc.call(null,self__.watches,key,f);
});
reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){var self__ = this;
var this$__$1 = this;return self__.watches = cljs.core.dissoc.call(null,self__.watches,key);
});
reagent.ratom.RAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){var self__ = this;
var a__$1 = this;cljs.core._write.call(null,writer,"#<Atom: ");
cljs.core.pr_writer.call(null,self__.state,writer,opts);
return cljs.core._write.call(null,writer,">");
});
reagent.ratom.RAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.meta;
});
reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state));
});
reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x));
});
reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x,y));
});
reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,self__.state,x,y,more));
});
reagent.ratom.RAtom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){var self__ = this;
var a__$1 = this;if((self__.validator == null))
{} else
{if(cljs.core.truth_(self__.validator.call(null,new_value)))
{} else
{throw (new Error(("Assert failed: Validator rejected reference state\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validator","validator",-325659154,null),new cljs.core.Symbol(null,"new-value","new-value",-1567397401,null)))))));
}
}
var old_value = self__.state;self__.state = new_value;
if((self__.watches == null))
{} else
{cljs.core._notify_watches.call(null,a__$1,old_value,new_value);
}
return new_value;
});
reagent.ratom.RAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);
return self__.state;
});
reagent.ratom.RAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
reagent.ratom.__GT_RAtom = (function __GT_RAtom(state,meta,validator,watches){return (new reagent.ratom.RAtom(state,meta,validator,watches));
});
/**
* Like clojure.core/atom, except that it keeps track of derefs.
* @param {...*} var_args
*/
reagent.ratom.atom = (function() {
var atom = null;
var atom__1 = (function (x){return (new reagent.ratom.RAtom(x,null,null,null));
});
var atom__2 = (function() { 
var G__6766__delegate = function (x,p__6763){var map__6765 = p__6763;var map__6765__$1 = ((cljs.core.seq_QMARK_.call(null,map__6765))?cljs.core.apply.call(null,cljs.core.hash_map,map__6765):map__6765);var validator = cljs.core.get.call(null,map__6765__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));var meta = cljs.core.get.call(null,map__6765__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));return (new reagent.ratom.RAtom(x,meta,validator,null));
};
var G__6766 = function (x,var_args){
var p__6763 = null;if (arguments.length > 1) {
  p__6763 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__6766__delegate.call(this,x,p__6763);};
G__6766.cljs$lang$maxFixedArity = 1;
G__6766.cljs$lang$applyTo = (function (arglist__6767){
var x = cljs.core.first(arglist__6767);
var p__6763 = cljs.core.rest(arglist__6767);
return G__6766__delegate(x,p__6763);
});
G__6766.cljs$core$IFn$_invoke$arity$variadic = G__6766__delegate;
return G__6766;
})()
;
atom = function(x,var_args){
var p__6763 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
return atom__2.cljs$core$IFn$_invoke$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$core$IFn$_invoke$arity$1 = atom__1;
atom.cljs$core$IFn$_invoke$arity$variadic = atom__2.cljs$core$IFn$_invoke$arity$variadic;
return atom;
})()
;
reagent.ratom.IDisposable = (function (){var obj6769 = {};return obj6769;
})();
reagent.ratom.dispose_BANG_ = (function dispose_BANG_(this$){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1;
} else
{return and__3628__auto__;
}
})())
{return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (reagent.ratom.dispose_BANG_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (reagent.ratom.dispose_BANG_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDisposable.dispose!",this$);
}
}
})().call(null,this$);
}
});
reagent.ratom.IRunnable = (function (){var obj6771 = {};return obj6771;
})();
reagent.ratom.run = (function run(this$){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.reagent$ratom$IRunnable$run$arity$1;
} else
{return and__3628__auto__;
}
})())
{return this$.reagent$ratom$IRunnable$run$arity$1(this$);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (reagent.ratom.run[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (reagent.ratom.run["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRunnable.run",this$);
}
}
})().call(null,this$);
}
});
reagent.ratom.IComputedImpl = (function (){var obj6773 = {};return obj6773;
})();
reagent.ratom._update_watching = (function _update_watching(this$,derefed){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2;
} else
{return and__3628__auto__;
}
})())
{return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2(this$,derefed);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (reagent.ratom._update_watching[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (reagent.ratom._update_watching["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IComputedImpl.-update-watching",this$);
}
}
})().call(null,this$,derefed);
}
});
reagent.ratom._handle_change = (function _handle_change(k,sender,oldval,newval){if((function (){var and__3628__auto__ = k;if(and__3628__auto__)
{return k.reagent$ratom$IComputedImpl$_handle_change$arity$4;
} else
{return and__3628__auto__;
}
})())
{return k.reagent$ratom$IComputedImpl$_handle_change$arity$4(k,sender,oldval,newval);
} else
{var x__4277__auto__ = (((k == null))?null:k);return (function (){var or__3640__auto__ = (reagent.ratom._handle_change[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (reagent.ratom._handle_change["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IComputedImpl.-handle-change",k);
}
}
})().call(null,k,sender,oldval,newval);
}
});
reagent.ratom.call_watches = (function call_watches(obs,watches,oldval,newval){return cljs.core.reduce_kv.call(null,(function (_,key,f){f.call(null,key,obs,oldval,newval);
return null;
}),null,watches);
});

/**
* @constructor
*/
reagent.ratom.Reaction = (function (f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
this.f = f;
this.state = state;
this.dirty_QMARK_ = dirty_QMARK_;
this.active_QMARK_ = active_QMARK_;
this.watching = watching;
this.watches = watches;
this.auto_run = auto_run;
this.on_set = on_set;
this.on_dispose = on_dispose;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.Reaction.cljs$lang$type = true;
reagent.ratom.Reaction.cljs$lang$ctorStr = "reagent.ratom/Reaction";
reagent.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"reagent.ratom/Reaction");
});
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$ = true;
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_handle_change$arity$4 = (function (this$,sender,oldval,newval){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_((function (){var and__3628__auto__ = self__.active_QMARK_;if(cljs.core.truth_(and__3628__auto__))
{return (cljs.core.not.call(null,self__.dirty_QMARK_)) && (!((oldval === newval)));
} else
{return and__3628__auto__;
}
})()))
{self__.dirty_QMARK_ = true;
return (function (){var or__3640__auto__ = self__.auto_run;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return reagent.ratom.run;
}
})().call(null,this$__$1);
} else
{return null;
}
});
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_update_watching$arity$2 = (function (this$,derefed){var self__ = this;
var this$__$1 = this;var seq__6774_6786 = cljs.core.seq.call(null,derefed);var chunk__6775_6787 = null;var count__6776_6788 = (0);var i__6777_6789 = (0);while(true){
if((i__6777_6789 < count__6776_6788))
{var w_6790 = cljs.core._nth.call(null,chunk__6775_6787,i__6777_6789);if(cljs.core.contains_QMARK_.call(null,self__.watching,w_6790))
{} else
{cljs.core.add_watch.call(null,w_6790,this$__$1,reagent.ratom._handle_change);
}
{
var G__6791 = seq__6774_6786;
var G__6792 = chunk__6775_6787;
var G__6793 = count__6776_6788;
var G__6794 = (i__6777_6789 + (1));
seq__6774_6786 = G__6791;
chunk__6775_6787 = G__6792;
count__6776_6788 = G__6793;
i__6777_6789 = G__6794;
continue;
}
} else
{var temp__4126__auto___6795 = cljs.core.seq.call(null,seq__6774_6786);if(temp__4126__auto___6795)
{var seq__6774_6796__$1 = temp__4126__auto___6795;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6774_6796__$1))
{var c__4410__auto___6797 = cljs.core.chunk_first.call(null,seq__6774_6796__$1);{
var G__6798 = cljs.core.chunk_rest.call(null,seq__6774_6796__$1);
var G__6799 = c__4410__auto___6797;
var G__6800 = cljs.core.count.call(null,c__4410__auto___6797);
var G__6801 = (0);
seq__6774_6786 = G__6798;
chunk__6775_6787 = G__6799;
count__6776_6788 = G__6800;
i__6777_6789 = G__6801;
continue;
}
} else
{var w_6802 = cljs.core.first.call(null,seq__6774_6796__$1);if(cljs.core.contains_QMARK_.call(null,self__.watching,w_6802))
{} else
{cljs.core.add_watch.call(null,w_6802,this$__$1,reagent.ratom._handle_change);
}
{
var G__6803 = cljs.core.next.call(null,seq__6774_6796__$1);
var G__6804 = null;
var G__6805 = (0);
var G__6806 = (0);
seq__6774_6786 = G__6803;
chunk__6775_6787 = G__6804;
count__6776_6788 = G__6805;
i__6777_6789 = G__6806;
continue;
}
}
} else
{}
}
break;
}
var seq__6778_6807 = cljs.core.seq.call(null,self__.watching);var chunk__6779_6808 = null;var count__6780_6809 = (0);var i__6781_6810 = (0);while(true){
if((i__6781_6810 < count__6780_6809))
{var w_6811 = cljs.core._nth.call(null,chunk__6779_6808,i__6781_6810);if(cljs.core.contains_QMARK_.call(null,derefed,w_6811))
{} else
{cljs.core.remove_watch.call(null,w_6811,this$__$1);
}
{
var G__6812 = seq__6778_6807;
var G__6813 = chunk__6779_6808;
var G__6814 = count__6780_6809;
var G__6815 = (i__6781_6810 + (1));
seq__6778_6807 = G__6812;
chunk__6779_6808 = G__6813;
count__6780_6809 = G__6814;
i__6781_6810 = G__6815;
continue;
}
} else
{var temp__4126__auto___6816 = cljs.core.seq.call(null,seq__6778_6807);if(temp__4126__auto___6816)
{var seq__6778_6817__$1 = temp__4126__auto___6816;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6778_6817__$1))
{var c__4410__auto___6818 = cljs.core.chunk_first.call(null,seq__6778_6817__$1);{
var G__6819 = cljs.core.chunk_rest.call(null,seq__6778_6817__$1);
var G__6820 = c__4410__auto___6818;
var G__6821 = cljs.core.count.call(null,c__4410__auto___6818);
var G__6822 = (0);
seq__6778_6807 = G__6819;
chunk__6779_6808 = G__6820;
count__6780_6809 = G__6821;
i__6781_6810 = G__6822;
continue;
}
} else
{var w_6823 = cljs.core.first.call(null,seq__6778_6817__$1);if(cljs.core.contains_QMARK_.call(null,derefed,w_6823))
{} else
{cljs.core.remove_watch.call(null,w_6823,this$__$1);
}
{
var G__6824 = cljs.core.next.call(null,seq__6778_6817__$1);
var G__6825 = null;
var G__6826 = (0);
var G__6827 = (0);
seq__6778_6807 = G__6824;
chunk__6779_6808 = G__6825;
count__6780_6809 = G__6826;
i__6781_6810 = G__6827;
continue;
}
}
} else
{}
}
break;
}
return self__.watching = derefed;
});
reagent.ratom.Reaction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;cljs.core._write.call(null,writer,("#<Reaction "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash.call(null,this$__$1))+": "));
cljs.core.pr_writer.call(null,self__.state,writer,opts);
return cljs.core._write.call(null,writer,">");
});
reagent.ratom.Reaction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
reagent.ratom.Reaction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$ = true;
reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$dispose_BANG_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var seq__6782_6828 = cljs.core.seq.call(null,self__.watching);var chunk__6783_6829 = null;var count__6784_6830 = (0);var i__6785_6831 = (0);while(true){
if((i__6785_6831 < count__6784_6830))
{var w_6832 = cljs.core._nth.call(null,chunk__6783_6829,i__6785_6831);cljs.core.remove_watch.call(null,w_6832,this$__$1);
{
var G__6833 = seq__6782_6828;
var G__6834 = chunk__6783_6829;
var G__6835 = count__6784_6830;
var G__6836 = (i__6785_6831 + (1));
seq__6782_6828 = G__6833;
chunk__6783_6829 = G__6834;
count__6784_6830 = G__6835;
i__6785_6831 = G__6836;
continue;
}
} else
{var temp__4126__auto___6837 = cljs.core.seq.call(null,seq__6782_6828);if(temp__4126__auto___6837)
{var seq__6782_6838__$1 = temp__4126__auto___6837;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6782_6838__$1))
{var c__4410__auto___6839 = cljs.core.chunk_first.call(null,seq__6782_6838__$1);{
var G__6840 = cljs.core.chunk_rest.call(null,seq__6782_6838__$1);
var G__6841 = c__4410__auto___6839;
var G__6842 = cljs.core.count.call(null,c__4410__auto___6839);
var G__6843 = (0);
seq__6782_6828 = G__6840;
chunk__6783_6829 = G__6841;
count__6784_6830 = G__6842;
i__6785_6831 = G__6843;
continue;
}
} else
{var w_6844 = cljs.core.first.call(null,seq__6782_6838__$1);cljs.core.remove_watch.call(null,w_6844,this$__$1);
{
var G__6845 = cljs.core.next.call(null,seq__6782_6838__$1);
var G__6846 = null;
var G__6847 = (0);
var G__6848 = (0);
seq__6782_6828 = G__6845;
chunk__6783_6829 = G__6846;
count__6784_6830 = G__6847;
i__6785_6831 = G__6848;
continue;
}
}
} else
{}
}
break;
}
self__.watching = cljs.core.PersistentHashSet.EMPTY;
self__.state = null;
self__.dirty_QMARK_ = true;
if(cljs.core.truth_(self__.active_QMARK_))
{if(cljs.core.truth_(reagent.ratom.debug))
{cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.dec);
} else
{}
self__.active_QMARK_ = false;
} else
{}
if(cljs.core.truth_(self__.on_dispose))
{return self__.on_dispose.call(null);
} else
{return null;
}
});
reagent.ratom.Reaction.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){var self__ = this;
var a__$1 = this;var old_value = self__.state;self__.state = new_value;
cljs.core._notify_watches.call(null,a__$1,old_value,new_value);
return new_value;
});
reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f__$1){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,self__.state));
});
reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,self__.state,x));
});
reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,self__.state,x,y));
});
reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f__$1,x,y,more){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f__$1,self__.state,x,y,more));
});
reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$ = true;
reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$run$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var oldstate = self__.state;var res = reagent.ratom.capture_derefed.call(null,self__.f,this$__$1);var derefed = reagent.ratom.captured.call(null,this$__$1);if(cljs.core.not_EQ_.call(null,derefed,self__.watching))
{reagent.ratom._update_watching.call(null,this$__$1,derefed);
} else
{}
if(cljs.core.truth_(self__.active_QMARK_))
{} else
{if(cljs.core.truth_(reagent.ratom.debug))
{cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.inc);
} else
{}
self__.active_QMARK_ = true;
}
self__.dirty_QMARK_ = false;
self__.state = res;
reagent.ratom.call_watches.call(null,this$__$1,self__.watches,oldstate,self__.state);
return res;
});
reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(self__.on_set))
{self__.on_set.call(null,oldval,newval);
} else
{}
return reagent.ratom.call_watches.call(null,this$__$1,self__.watches,oldval,newval);
});
reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,wf){var self__ = this;
var this$__$1 = this;return self__.watches = cljs.core.assoc.call(null,self__.watches,k,wf);
});
reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){var self__ = this;
var this$__$1 = this;self__.watches = cljs.core.dissoc.call(null,self__.watches,k);
if(cljs.core.empty_QMARK_.call(null,self__.watches))
{return reagent.ratom.dispose_BANG_.call(null,this$__$1);
} else
{return null;
}
});
reagent.ratom.Reaction.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(cljs.core.not.call(null,(function (){var or__3640__auto__ = self__.auto_run;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return reagent.ratom._STAR_ratom_context_STAR_;
}
})()))
{var x__6005__auto___6849 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.auto_run,reagent.ratom._STAR_ratom_context_STAR_], null);if(!((console.log == null)))
{console.log((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("dbg reagent.ratom:"+177+": [auto-run *ratom-context*]: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,x__6005__auto___6849))))));
} else
{}
} else
{}
if(cljs.core.truth_((function (){var or__3640__auto__ = self__.auto_run;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return reagent.ratom._STAR_ratom_context_STAR_;
}
})()))
{} else
{throw (new Error(("Assert failed: Reaction derefed outside auto-running context\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"auto-run","auto-run",-696035332,null),new cljs.core.Symbol(null,"*ratom-context*","*ratom-context*",-1557728360,null)))))));
}
reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);
if(cljs.core.truth_(self__.dirty_QMARK_))
{return reagent.ratom.run.call(null,this$__$1);
} else
{return self__.state;
}
});
reagent.ratom.__GT_Reaction = (function __GT_Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){return (new reagent.ratom.Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose));
});
/**
* @param {...*} var_args
*/
reagent.ratom.make_reaction = (function() { 
var make_reaction__delegate = function (f,p__6850){var map__6852 = p__6850;var map__6852__$1 = ((cljs.core.seq_QMARK_.call(null,map__6852))?cljs.core.apply.call(null,cljs.core.hash_map,map__6852):map__6852);var derefed = cljs.core.get.call(null,map__6852__$1,new cljs.core.Keyword(null,"derefed","derefed",590684583));var on_dispose = cljs.core.get.call(null,map__6852__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360));var on_set = cljs.core.get.call(null,map__6852__$1,new cljs.core.Keyword(null,"on-set","on-set",-140953470));var auto_run = cljs.core.get.call(null,map__6852__$1,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437));var runner = ((cljs.core._EQ_.call(null,auto_run,true))?reagent.ratom.run:auto_run);var active = !((derefed == null));var dirty = !(active);var reaction = (new reagent.ratom.Reaction(f,null,dirty,active,null,cljs.core.PersistentArrayMap.EMPTY,runner,on_set,on_dispose));if((derefed == null))
{} else
{if(cljs.core.truth_(reagent.ratom.debug))
{cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.inc);
} else
{}
reagent.ratom._update_watching.call(null,reaction,derefed);
}
return reaction;
};
var make_reaction = function (f,var_args){
var p__6850 = null;if (arguments.length > 1) {
  p__6850 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return make_reaction__delegate.call(this,f,p__6850);};
make_reaction.cljs$lang$maxFixedArity = 1;
make_reaction.cljs$lang$applyTo = (function (arglist__6853){
var f = cljs.core.first(arglist__6853);
var p__6850 = cljs.core.rest(arglist__6853);
return make_reaction__delegate(f,p__6850);
});
make_reaction.cljs$core$IFn$_invoke$arity$variadic = make_reaction__delegate;
return make_reaction;
})()
;

//# sourceMappingURL=ratom.js.map