qx.$$packageData['a9543c290b34']={"locales":{},"resources":{"qx/static/blank.gif":[1,1,"gif","qx"],"widgetbrowser/people.json":"widgetbrowser"},"translations":{}};

qx.Part.$$notifyLoad("a9543c290b34", function() {
(function(){var o="failed",n="sending",m="completed",k="receiving",j="aborted",h="timeout",g="qx.event.type.Event",f="Connection dropped",d="qx.io.remote.Response",c="=",bp="configured",bo="&",bn="Unknown status code. ",bm="qx.io.remote.transport.XmlHttp",bl="qx.io.remote.transport.Abstract",bk="Request-URL too large",bj="MSHTML-specific HTTP status code",bi="Not available",bh="Precondition failed",bg="Server error",v="Moved temporarily",w="qx.io.remote.Exchange",t="Possibly due to a cross-domain request?",u="Bad gateway",r="Gone",s="See other",p="Partial content",q="Server timeout",B="qx.io.remote.transport.Script",C="HTTP version not supported",L="Unauthorized",I="Possibly due to application URL using 'file:' protocol?",T="Multiple choices",O="Payment required",bc="Not implemented",Y="Proxy authentication required",E="Length required",bf="_applyState",be="changeState",bd="Not modified",D="qx.io.remote.Request",G="Connection closed by server",H="Moved permanently",K="_applyImplementation",M="",P="Method not allowed",V="Forbidden",bb="Use proxy",x="Ok",y="Conflict",F="Not found",S="Not acceptable",R="Request time-out",Q="Bad request",X="No content",W="file:",N="qx.io.remote.transport.Iframe",U="Request entity too large",a="Unknown status code",ba="Unsupported media type",z="Gateway time-out",A="created",J="Out of resources",b="undefined";
qx.Class.define(w,{extend:qx.core.Object,construct:function(bq){qx.core.Object.call(this);
this.setRequest(bq);
bq.setTransport(this);
},events:{"sending":g,"receiving":g,"completed":d,"aborted":g,"failed":d,"timeout":d},statics:{typesOrder:[bm,N,B],typesReady:false,typesAvailable:{},typesSupported:{},registerType:function(br,bs){qx.io.remote.Exchange.typesAvailable[bs]=br;
},initTypes:function(){if(qx.io.remote.Exchange.typesReady){return;
}
for(var bu in qx.io.remote.Exchange.typesAvailable){var bt=qx.io.remote.Exchange.typesAvailable[bu];

if(bt.isSupported()){qx.io.remote.Exchange.typesSupported[bu]=bt;
}}qx.io.remote.Exchange.typesReady=true;

if(qx.lang.Object.isEmpty(qx.io.remote.Exchange.typesSupported)){throw new Error("No supported transport types were found!");
}},canHandle:function(bv,bw,bx){if(!qx.lang.Array.contains(bv.handles.responseTypes,bx)){return false;
}
for(var by in bw){if(!bv.handles[by]){return false;
}}return true;
},_nativeMap:{0:A,1:bp,2:n,3:k,4:m},wasSuccessful:function(bz,bA,bB){if(bB){switch(bz){case null:case 0:return true;
case -1:return bA<4;
default:return typeof bz===b;
}}else{switch(bz){case -1:{};
return bA<4;
case 200:case 304:return true;
case 201:case 202:case 203:case 204:case 205:return true;
case 206:{};
return bA!==4;
case 300:case 301:case 302:case 303:case 305:case 400:case 401:case 402:case 403:case 404:case 405:case 406:case 407:case 408:case 409:case 410:case 411:case 412:case 413:case 414:case 415:case 500:case 501:case 502:case 503:case 504:case 505:{};
return false;
case 12002:case 12007:case 12029:case 12030:case 12031:case 12152:case 13030:{};
return false;
default:if(bz>206&&bz<300){return true;
}qx.log.Logger.debug(this,"Unknown status code: "+bz+" ("+bA+")");
return false;
}}},statusCodeToString:function(bC){switch(bC){case -1:return bi;
case 0:var bD=window.location.href;
if(qx.lang.String.startsWith(bD.toLowerCase(),W)){return (bn+I);
}else{return (bn+t);
}break;
case 200:return x;
case 304:return bd;
case 206:return p;
case 204:return X;
case 300:return T;
case 301:return H;
case 302:return v;
case 303:return s;
case 305:return bb;
case 400:return Q;
case 401:return L;
case 402:return O;
case 403:return V;
case 404:return F;
case 405:return P;
case 406:return S;
case 407:return Y;
case 408:return R;
case 409:return y;
case 410:return r;
case 411:return E;
case 412:return bh;
case 413:return U;
case 414:return bk;
case 415:return ba;
case 500:return bg;
case 501:return bc;
case 502:return u;
case 503:return J;
case 504:return z;
case 505:return C;
case 12002:return q;
case 12029:return f;
case 12030:return f;
case 12031:return f;
case 12152:return G;
case 13030:return bj;
default:return a;
}}},properties:{request:{check:D,nullable:true},implementation:{check:bl,nullable:true,apply:K},state:{check:[bp,n,k,m,j,h,o],init:bp,event:be,apply:bf}},members:{send:function(){var bH=this.getRequest();

if(!bH){return this.error("Please attach a request object first");
}qx.io.remote.Exchange.initTypes();
var bF=qx.io.remote.Exchange.typesOrder;
var bE=qx.io.remote.Exchange.typesSupported;
var bJ=bH.getResponseType();
var bK={};

if(bH.getAsynchronous()){bK.asynchronous=true;
}else{bK.synchronous=true;
}
if(bH.getCrossDomain()){bK.crossDomain=true;
}
if(bH.getFileUpload()){bK.fileUpload=true;
}for(var bI in bH.getFormFields()){bK.programaticFormFields=true;
break;
}var bL,bG;

for(var i=0,l=bF.length;i<l;i++){bL=bE[bF[i]];

if(bL){if(!qx.io.remote.Exchange.canHandle(bL,bK,bJ)){continue;
}
try{bG=new bL;
this.setImplementation(bG);
bG.setUseBasicHttpAuth(bH.getUseBasicHttpAuth());
bG.send();
return true;
}catch(bM){this.error("Request handler throws error");
this.error(bM);
return;
}}}this.error("There is no transport implementation available to handle this request: "+bH);
},abort:function(){var bN=this.getImplementation();

if(bN){bN.abort();
}else{this.setState(j);
}},timeout:function(){var bQ=this.getImplementation();

if(bQ){var bP=M;

for(var bO in bQ.getParameters()){bP+=bo+bO+c+bQ.getParameters()[bO];
}this.warn("Timeout: implementation "+bQ.toHashCode()+", "+bQ.getUrl()+" ["+bQ.getMethod()+"], "+bP);
bQ.timeout();
}else{this.warn("Timeout: forcing state to timeout");
this.setState(h);
}this.__sa();
},__sa:function(){var bR=this.getRequest();

if(bR){bR.setTimeout(0);
}},_onsending:function(e){this.setState(n);
},_onreceiving:function(e){this.setState(k);
},_oncompleted:function(e){this.setState(m);
},_onabort:function(e){this.setState(j);
},_onfailed:function(e){this.setState(o);
},_ontimeout:function(e){this.setState(h);
},_applyImplementation:function(bS,bT){if(bT){bT.removeListener(n,this._onsending,this);
bT.removeListener(k,this._onreceiving,this);
bT.removeListener(m,this._oncompleted,this);
bT.removeListener(j,this._onabort,this);
bT.removeListener(h,this._ontimeout,this);
bT.removeListener(o,this._onfailed,this);
}
if(bS){var bV=this.getRequest();
bS.setUrl(bV.getUrl());
bS.setMethod(bV.getMethod());
bS.setAsynchronous(bV.getAsynchronous());
bS.setUsername(bV.getUsername());
bS.setPassword(bV.getPassword());
bS.setParameters(bV.getParameters(false));
bS.setFormFields(bV.getFormFields());
bS.setRequestHeaders(bV.getRequestHeaders());
if(bS instanceof qx.io.remote.transport.XmlHttp){bS.setParseJson(bV.getParseJson());
}var bY=bV.getData();

if(bY===null){var ca=bV.getParameters(true);
var bX=[];

for(var bU in ca){var bW=ca[bU];

if(bW instanceof Array){for(var i=0;i<bW.length;i++){bX.push(encodeURIComponent(bU)+c+encodeURIComponent(bW[i]));
}}else{bX.push(encodeURIComponent(bU)+c+encodeURIComponent(bW));
}}
if(bX.length>0){bS.setData(bX.join(bo));
}}else{bS.setData(bY);
}bS.setResponseType(bV.getResponseType());
bS.addListener(n,this._onsending,this);
bS.addListener(k,this._onreceiving,this);
bS.addListener(m,this._oncompleted,this);
bS.addListener(j,this._onabort,this);
bS.addListener(h,this._ontimeout,this);
bS.addListener(o,this._onfailed,this);
}},_applyState:function(cb,cc){switch(cb){case n:this.fireEvent(n);
break;
case k:this.fireEvent(k);
break;
case m:case j:case h:case o:var ce=this.getImplementation();

if(!ce){break;
}this.__sa();

if(this.hasListener(cb)){var cf=qx.event.Registration.createEvent(cb,qx.io.remote.Response);

if(cb==m){var cd=ce.getResponseContent();
cf.setContent(cd);
if(cd===null){cb=o;
}}else if(cb==o){cf.setContent(ce.getResponseContent());
}cf.setStatusCode(ce.getStatusCode());
cf.setResponseHeaders(ce.getResponseHeaders());
this.dispatchEvent(cf);
}this.setImplementation(null);
ce.dispose();
break;
}}},environment:{"qx.ioRemoteDebug":false,"qx.ioRemoteDebugData":false},destruct:function(){var cg=this.getImplementation();

if(cg){this.setImplementation(null);
cg.dispose();
}this.setRequest(null);
}});
})();
(function(){var q="qx.event.type.Event",p="String",o="failed",n="timeout",m="created",l="aborted",k="sending",j="configured",i="receiving",h="completed",c="Object",g="Boolean",f="abstract",b="_applyState",a="GET",e="changeState",d="qx.io.remote.transport.Abstract";
qx.Class.define(d,{type:f,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.setRequestHeaders({});
this.setParameters({});
this.setFormFields({});
},events:{"created":q,"configured":q,"sending":q,"receiving":q,"completed":q,"aborted":q,"failed":q,"timeout":q},properties:{url:{check:p,nullable:true},method:{check:p,nullable:true,init:a},asynchronous:{check:g,nullable:true,init:true},data:{check:p,nullable:true},username:{check:p,nullable:true},password:{check:p,nullable:true},state:{check:[m,j,k,i,h,l,n,o],init:m,event:e,apply:b},requestHeaders:{check:c,nullable:true},parameters:{check:c,nullable:true},formFields:{check:c,nullable:true},responseType:{check:p,nullable:true},useBasicHttpAuth:{check:g,nullable:true}},members:{send:function(){throw new Error("send is abstract");
},abort:function(){this.setState(l);
},timeout:function(){this.setState(n);
},failed:function(){this.setState(o);
},setRequestHeader:function(r,s){throw new Error("setRequestHeader is abstract");
},getResponseHeader:function(t){throw new Error("getResponseHeader is abstract");
},getResponseHeaders:function(){throw new Error("getResponseHeaders is abstract");
},getStatusCode:function(){throw new Error("getStatusCode is abstract");
},getStatusText:function(){throw new Error("getStatusText is abstract");
},getResponseText:function(){throw new Error("getResponseText is abstract");
},getResponseXml:function(){throw new Error("getResponseXml is abstract");
},getFetchedLength:function(){throw new Error("getFetchedLength is abstract");
},_applyState:function(u,v){switch(u){case m:this.fireEvent(m);
break;
case j:this.fireEvent(j);
break;
case k:this.fireEvent(k);
break;
case i:this.fireEvent(i);
break;
case h:this.fireEvent(h);
break;
case l:this.fireEvent(l);
break;
case o:this.fireEvent(o);
break;
case n:this.fireEvent(n);
break;
}return true;
}},destruct:function(){this.setRequestHeaders(null);
this.setParameters(null);
this.setFormFields(null);
}});
})();
(function(){var a="qx.ui.list.provider.IListProvider";
qx.Interface.define(a,{members:{createLayer:function(){},createItemRenderer:function(){},createGroupRenderer:function(){},styleSelectabled:function(b){},styleUnselectabled:function(c){},isSelectable:function(d){},setLabelPath:function(e){},setIconPath:function(f){},setLabelOptions:function(g){},setIconOptions:function(h){},setDelegate:function(i){},removeBindings:function(){}}});
})();
(function(){var a="qx.ui.virtual.core.IWidgetCellProvider";
qx.Interface.define(a,{members:{getCellWidget:function(b,c){},poolCellWidget:function(d){}}});
})();
(function(){var k="cell.type",j="group",i="String",h="model",g="",f="changeDelegate",d="label",c="qx.ui.list.core.MWidgetController",b="icon",a="value";
qx.Mixin.define(c,{construct:function(){this.__JL=[];
},properties:{labelPath:{check:i,nullable:true},iconPath:{check:i,nullable:true},groupLabelPath:{check:i,nullable:true},labelOptions:{nullable:true},iconOptions:{nullable:true},groupLabelOptions:{nullable:true},delegate:{event:f,init:null,nullable:true}},members:{__JL:null,bindDefaultProperties:function(l,m){if(l.getUserData(k)!=j){this.bindProperty(g,h,null,l,m);
this.bindProperty(this.getLabelPath(),d,this.getLabelOptions(),l,m);

if(this.getIconPath()!=null){this.bindProperty(this.getIconPath(),b,this.getIconOptions(),l,m);
}}else{this.bindProperty(this.getGroupLabelPath(),a,this.getGroupLabelOptions(),l,m);
}},bindProperty:function(n,o,p,q,r){var u=q.getUserData(k);
var s=this.__JM(r,n,u);
var t=this._list;

if(u==j){t=this._list._groups;
}var v=t.bind(s,q,o,p);
this.__JN(q,v);
},bindPropertyReverse:function(w,x,y,z,A){var D=z.getUserData(k);
var B=this.__JM(A,w,D);
var C=this._list;

if(D==j){C=this._list._groups;
}var E=z.bind(x,C,B,y);
this.__JN(z,E);
},removeBindings:function(){while(this.__JL.length>0){var F=this.__JL.pop();
this._removeBindingsFrom(F);
}},_configureItem:function(G){var H=this.getDelegate();

if(H!=null&&H.configureItem!=null){H.configureItem(G);
}},_configureGroupItem:function(I){var J=this.getDelegate();

if(J!=null&&J.configureGroupItem!=null){J.configureGroupItem(I);
}},_bindItem:function(K,L){var M=this.getDelegate();

if(M!=null&&M.bindItem!=null){M.bindItem(this,K,L);
}else{this.bindDefaultProperties(K,L);
}},_bindGroupItem:function(N,O){var P=this.getDelegate();

if(P!=null&&P.bindGroupItem!=null){P.bindGroupItem(this,N,O);
}else{this.bindDefaultProperties(N,O);
}},_removeBindingsFrom:function(Q){var R=this.__JO(Q);

while(R.length>0){var S=R.pop();

try{this._list.removeBinding(S);
}catch(e){try{this._list._groups.removeBinding(S);
}catch(e){Q.removeBinding(S);
}}}
if(qx.lang.Array.contains(this.__JL,Q)){qx.lang.Array.remove(this.__JL,Q);
}},__JM:function(T,U,V){var W="model["+T+"]";

if(V=="group"){W="["+T+"]";
}
if(U!=null&&U!=""){W+="."+U;
}return W;
},__JN:function(X,Y){var ba=this.__JO(X);

if(!qx.lang.Array.contains(ba,Y)){ba.push(Y);
}
if(!qx.lang.Array.contains(this.__JL,X)){this.__JL.push(X);
}},__JO:function(bb){var bc=bb.getUserData("BindingIds");

if(bc==null){bc=[];
bb.setUserData("BindingIds",bc);
}return bc;
}},destruct:function(){this.__JL=null;
}});
})();
(function(){var i="cell.type",h="created",g="item",f="group",e="changeDelegate",d="qx.ui.list.provider.WidgetProvider",c="createItem",b="group-item",a="createGroupItem";
qx.Class.define(d,{extend:qx.core.Object,implement:[qx.ui.virtual.core.IWidgetCellProvider,qx.ui.list.provider.IListProvider],include:[qx.ui.list.core.MWidgetController],construct:function(j){qx.core.Object.call(this);
this._list=j;
this._itemRenderer=this.createItemRenderer();
this._groupRenderer=this.createGroupRenderer();
this._itemRenderer.addListener(h,this._onItemCreated,this);
this._groupRenderer.addListener(h,this._onGroupItemCreated,this);
this._list.addListener(e,this._onChangeDelegate,this);
},members:{_itemRenderer:null,_groupRenderer:null,getCellWidget:function(k,l){var m=null;

if(!this._list._isGroup(k)){m=this._itemRenderer.getCellWidget();
m.setUserData(i,g);
this._bindItem(m,this._list._lookup(k));

if(this._list._manager.isItemSelected(k)){this._styleSelectabled(m);
}else{this._styleUnselectabled(m);
}}else{m=this._groupRenderer.getCellWidget();
m.setUserData(i,f);
this._bindGroupItem(m,this._list._lookupGroup(k));
}return m;
},poolCellWidget:function(n){this._removeBindingsFrom(n);

if(n.getUserData(i)==g){this._itemRenderer.pool(n);
}else if(n.getUserData(i)==f){this._groupRenderer.pool(n);
}},createLayer:function(){return new qx.ui.virtual.layer.WidgetCell(this);
},createItemRenderer:function(){var o=qx.util.Delegate.getMethod(this.getDelegate(),c);

if(o==null){o=function(){return new qx.ui.form.ListItem();
};
}var p=new qx.ui.virtual.cell.WidgetCell();
p.setDelegate({createWidget:o});
return p;
},createGroupRenderer:function(){var q=qx.util.Delegate.getMethod(this.getDelegate(),a);

if(q==null){q=function(){var s=new qx.ui.basic.Label();
s.setAppearance(b);
return s;
};
}var r=new qx.ui.virtual.cell.WidgetCell();
r.setDelegate({createWidget:q});
return r;
},styleSelectabled:function(t){var u=this.__JP(t);
this._styleSelectabled(u);
},styleUnselectabled:function(v){var w=this.__JP(v);
this._styleUnselectabled(w);
},isSelectable:function(x){if(this._list._isGroup(x)){return false;
}var y=this._list._layer.getRenderedCellWidget(x,0);

if(y!=null){return y.isEnabled();
}else{return true;
}},_styleSelectabled:function(z){this.__JQ(z,{selected:1});
},_styleUnselectabled:function(A){this.__JQ(A,{});
},_onItemCreated:function(event){var B=event.getData();
this._configureItem(B);
},_onGroupItemCreated:function(event){var C=event.getData();
this._configureGroupItem(C);
},_onChangeDelegate:function(event){this._itemRenderer.dispose();
this._itemRenderer=this.createItemRenderer();
this._itemRenderer.addListener(h,this._onItemCreated,this);
this._groupRenderer.dispose();
this._groupRenderer=this.createGroupRenderer();
this._groupRenderer.addListener(h,this._onGroupItemCreated,this);
this.removeBindings();
this._list.getPane().fullUpdate();
},__JP:function(D){return this._list._layer.getRenderedCellWidget(D,0);
},__JQ:function(E,F){if(E==null){return;
}this._itemRenderer.updateStates(E,F);
}},destruct:function(){this._itemRenderer.dispose();
this._groupRenderer.dispose();
this._itemRenderer=this._groupRenderer=null;
}});
})();
(function(){var a="qx.data.marshal.IMarshaler";
qx.Interface.define(a,{members:{toClass:function(b,c){},toModel:function(d){}}});
})();
(function(){var k="qx.data.model.",j="",h="_validate",g='"',f="qx.debug.databinding",e="change",d="qx.data.marshal.Json",c="qx.debug",b="set",a="_applyEventPropagation";
qx.Class.define(d,{extend:qx.core.Object,implement:[qx.data.marshal.IMarshaler],construct:function(l){qx.core.Object.call(this);
this.__xo=l;
},statics:{__xp:null,createModel:function(m,n){if(this.__xp===null){this.__xp=new qx.data.marshal.Json();
}this.__xp.toClass(m,n);
return this.__xp.toModel(m);
}},members:{__xo:null,__xq:function(o){var p=[];

for(var q in o){p.push(q);
}return p.sort().join(g);
},toClass:function(r,s){if(qx.lang.Type.isNumber(r)||qx.lang.Type.isString(r)||qx.lang.Type.isBoolean(r)||r==null||r instanceof qx.core.Object){return;
}if(qx.lang.Type.isArray(r)){for(var i=0;i<r.length;i++){this.toClass(r[i],s);
}return ;
}var u=this.__xq(r);
if(this.__xo&&this.__xo.getModelClass&&this.__xo.getModelClass(u)!=null){return;
}for(var v in r){this.toClass(r[v],s);
}if(qx.Class.isDefined(k+u)){return;
}var B={};
var A={__xr:this.__xr};

for(var v in r){v=v.replace(/-/g,j);
B[v]={};
B[v].nullable=true;
B[v].event=e+qx.lang.String.firstUp(v);
if(s){B[v].apply=a;
}if(this.__xo&&this.__xo.getValidationRule){var x=this.__xo.getValidationRule(u,v);

if(x){B[v].validate=h+v;
A[h+v]=x;
}}}if(this.__xo&&this.__xo.getModelSuperClass){var z=this.__xo.getModelSuperClass(u)||qx.core.Object;
}else{var z=qx.core.Object;
}var w=[];

if(this.__xo&&this.__xo.getModelMixins){var y=this.__xo.getModelMixins(u);
if(!qx.lang.Type.isArray(y)){if(y!=null){w=[y];
}}}if(s){w.push(qx.data.marshal.MEventBubbling);
}var t={extend:z,include:w,properties:B,members:A,destruct:this.__xs};
qx.Class.define(k+u,t);
},__xs:function(){var C=qx.util.PropertyUtil.getAllProperties(this.constructor);

for(var D in C){this.__xr(this.get(C[D].name));
}},__xr:function(E){if(!(E instanceof qx.core.Object)){return ;
}if(E.isDisposed()){return;
}if(qx.Class.implementsInterface(E,qx.data.IListData)){for(var i=0;i<E.getLength();i++){this.__xr(E.getItem(i));
}}E.dispose();
},__xt:function(F){var G;
if(this.__xo&&this.__xo.getModelClass){G=this.__xo.getModelClass(F);
}
if(G!=null){return (new G());
}else{var H=qx.Class.getByName(k+F);
return (new H());
}},toModel:function(I){if(qx.lang.Type.isNumber(I)||qx.lang.Type.isString(I)||qx.lang.Type.isBoolean(I)||qx.lang.Type.isDate(I)||I==null||I instanceof qx.core.Object){return I;
}else if(qx.lang.Type.isArray(I)){var M=new qx.data.Array();

for(var i=0;i<I.length;i++){M.push(this.toModel(I[i]));
}return M;
}else if(qx.lang.Type.isObject(I)){var J=this.__xq(I);
var N=this.__xt(J);
for(var L in I){var K=L.replace(/-/g,j);
if((qx.core.Environment.get(c))&&qx.core.Environment.get(f)){if(L!=K){this.warn("The model contained an illegal name: '"+L+"'. Replaced it with '"+K+"'.");
}}N[b+qx.lang.String.firstUp(K)](this.toModel(I[L]));
}return N;
}throw new Error("Unsupported type!");
}},destruct:function(){this.__xo=null;
}});
})();
(function(){var p="Boolean",o="change",n="single",m="changeSelection",l="qx.ui.list.core.MSelectionHandling",k="one",j="_applyDragSelection",h="qx.data.Array",g="multi",f="selected",b="_applySelection",d="_applyQuickSelection",c="_applySelectionMode",a="additive";
qx.Mixin.define(l,{construct:function(){this._initSelectionManager();
this.initSelection(new qx.data.Array());
},properties:{selection:{check:h,event:m,apply:b,nullable:false,deferredInit:true},selectionMode:{check:[n,g,a,k],init:n,apply:c},dragSelection:{check:p,init:false,apply:j},quickSelection:{check:p,init:false,apply:d}},members:{_manager:null,__Kq:false,__Kr:false,_initSelectionManager:function(){var self=this;
var q={isItemSelectable:function(r){return self._provider.isSelectable(r);
},styleSelectable:function(s,t,u){if(t!=f){return;
}
if(u){self._provider.styleSelectabled(s);
}else{self._provider.styleUnselectabled(s);
}}};
this._manager=new qx.ui.virtual.selection.Row(this.getPane(),q);
this._manager.attachMouseEvents(this.getPane());
this._manager.attachKeyEvents(this);
this._manager.addListener(m,this._onManagerChangeSelection,this);
this._manager._applyDefaultSelection();
},_applySelection:function(v,w){v.addListener(o,this._onChangeSelection,this);

if(w!=null){w.removeListener(o,this._onChangeSelection,this);
}this._onChangeSelection();
},_applySelectionMode:function(x,y){this._manager.setMode(x);
},_applyDragSelection:function(z,A){this._manager.setDrag(z);
},_applyQuickSelection:function(B,C){this._manager.setQuick(B);
},_onChangeSelection:function(e){if(this.__Kr==true){return;
}this.__Kq=true;
var E=this.getSelection();
var G=[];

for(var i=0;i<E.getLength();i++){var F=E.getItem(i);
var D=this.getModel().indexOf(F);
var H=this._reverseLookup(D);

if(H>=0){G.push(H);
}}
try{this._manager.replaceSelection(G);
}catch(e){this._manager.selectItem(G[G.length-1]);
}this.__Ks();
this.__Kq=false;
},_onManagerChangeSelection:function(e){if(this.__Kq==true){return;
}var I=this.getSelection();
var K=e.getData();
this.__Kr=true;
this.__Ks();

if(I.getLength()>0){var J=I.getLength()-1;
I.splice(J,1,this._getDataFromRow(K[J]));
}else{I.removeAll();
}this.__Kr=false;
},__Ks:function(){var M=this.getSelection();
var L=M.toArray();
var N=this._manager.getSelection();
qx.lang.Array.removeAll(L);

for(var i=0;i<N.length;i++){L.push(this._getDataFromRow(N[i]));
}M.length=L.length;
},_applyDefaultSelection:function(){if(this._manager!=null){this._manager._applyDefaultSelection();
}}},destruct:function(){this._manager.dispose();
this._manager=null;
}});
})();
(function(){var f="pane",d="scrollY",c="qx.ui.virtual.core.Scroller",b="update",a="scrollX";
qx.Class.define(c,{extend:qx.ui.core.scroll.AbstractScrollArea,construct:function(g,h,i,j){qx.ui.core.scroll.AbstractScrollArea.call(this);
this.__Kt=new qx.ui.virtual.core.Pane(g,h,i,j);
this.__Kt.addListener(b,this._computeScrollbars,this);
this.__Kt.addListener(a,this._onScrollPaneX,this);
this.__Kt.addListener(d,this._onScrollPaneY,this);
this._add(this.__Kt,{row:0,column:0});
},properties:{width:{refine:true,init:null},height:{refine:true,init:null}},members:{__Kt:null,getPane:function(){return this.__Kt;
},_createChildControlImpl:function(k,l){if(k==f){return this.__Kt;
}else{return qx.ui.core.scroll.AbstractScrollArea.prototype._createChildControlImpl.call(this,k);
}},getItemTop:function(m){throw new Error("The method 'getItemTop' is not implemented!");
},getItemBottom:function(n){throw new Error("The method 'getItemBottom' is not implemented!");
},getItemLeft:function(o){throw new Error("The method 'getItemLeft' is not implemented!");
},getItemRight:function(p){throw new Error("The method 'getItemRight' is not implemented!");
},_onScrollBarX:function(e){this.__Kt.setScrollX(e.getData());
},_onScrollBarY:function(e){this.__Kt.setScrollY(e.getData());
}},destruct:function(){this.__Kt.dispose();
this.__Kt=null;
}});
})();
(function(){var p="String",o="change",n="row-layer",m="changeModel",j="resize",h="_applyLabelOptions",g="_applyLabelPath",f="qx.data.Array",d="_applyGroupLabelOptions",c="filter",B="Integer",A="_applyModel",z="sorter",y="group",x="_applyIconPath",w="_applyDelegate",v="changeDelegate",u="_applyRowHeight",t="virtual-list",s="_applyGroupLabelPath",q="_applyIconOptions",r="qx.ui.list.List";
qx.Class.define(r,{extend:qx.ui.virtual.core.Scroller,include:[qx.ui.list.core.MSelectionHandling],construct:function(C){qx.ui.virtual.core.Scroller.call(this,0,1,20,100);
this._init();

if(C!=null){this.initModel(C);
}else{this.initModel(new qx.data.Array());
}this.initItemHeight();
},properties:{appearance:{refine:true,init:t},focusable:{refine:true,init:true},width:{refine:true,init:100},height:{refine:true,init:200},model:{check:f,apply:A,event:m,nullable:false,deferredInit:true},itemHeight:{check:B,init:25,apply:u,themeable:true},labelPath:{check:p,apply:g,nullable:true},iconPath:{check:p,apply:x,nullable:true},groupLabelPath:{check:p,apply:s,nullable:true},labelOptions:{apply:h,nullable:true},iconOptions:{apply:q,nullable:true},groupLabelOptions:{apply:d,nullable:true},delegate:{apply:w,event:v,init:null,nullable:true}},members:{_background:null,_provider:null,_layer:null,__Ku:null,_groups:null,__Kv:null,__Kw:null,__Kx:null,__Ky:false,__Kz:false,__KA:false,_createChildControlImpl:function(D,E){var F;

switch(D){case n:F=new qx.ui.virtual.layer.Row(null,null);
break;
}return F||qx.ui.virtual.core.Scroller.prototype._createChildControlImpl.call(this,D);
},_init:function(){this._provider=new qx.ui.list.provider.WidgetProvider(this);
this.__Ku=[];
this.__Kv=[];
this.__Kw={};
this.__Ky=false;
this.__Kz=false;
this.__KA=false;
this._groups=new qx.data.Array();
this.getPane().addListener(j,this._onResize,this);
this._initBackground();
this._initLayer();
},_initBackground:function(){this._background=this.getChildControl(n);
this.getPane().addLayer(this._background);
},_initLayer:function(){this._layer=this._provider.createLayer();
this.getPane().addLayer(this._layer);
},_getDataFromRow:function(G){var H=null;

if(this._isGroup(G)){H=this._groups.getItem(this._lookupGroup(G));
}else{H=this.getModel().getItem(this._lookup(G));
}
if(H!=null){return H;
}else{return null;
}},_getLookupTable:function(){return this.__Ku;
},_lookup:function(I){return this.__Ku[I];
},_lookupGroup:function(J){return this.__Kv.indexOf(J);
},_reverseLookup:function(K){return this.__Ku.indexOf(K);
},_isGroup:function(L){return this._lookup(L)==-1;
},_applyModel:function(M,N){M.addListener(o,this._onModelChange,this);

if(N!=null){N.removeListener(o,this._onModelChange,this);
}this._provider.removeBindings();
this._onModelChange();
},_applyRowHeight:function(O,P){this.getPane().getRowConfig().setDefaultItemSize(O);
},_applyLabelPath:function(Q,R){this._provider.setLabelPath(Q);
},_applyIconPath:function(S,T){this._provider.setIconPath(S);
},_applyGroupLabelPath:function(U,V){this._provider.setGroupLabelPath(U);
},_applyLabelOptions:function(W,X){this._provider.setLabelOptions(W);
},_applyIconOptions:function(Y,ba){this._provider.setIconOptions(Y);
},_applyGroupLabelOptions:function(bb,bc){this._provider.setGroupLabelOptions(bb);
},_applyDelegate:function(bd,be){this._provider.setDelegate(bd);
this.__KC();
},_onResize:function(e){this.getPane().getColumnConfig().setItemSize(0,e.getData().width);
},_onModelChange:function(e){this.__KC();
this._applyDefaultSelection();
},__KB:function(){this.getPane().getRowConfig().setItemCount(this.__Ku.length);
this.getPane().fullUpdate();
},__KC:function(){this.__Ku=[];
this.__Kv=[];
this.__Kw={};
this.__Kx=[];
this._groups.removeAll();
var bf=this.getModel();

if(bf==null){return;
}this._runDelegateFilter(bf);
this._runDelegateSorter(bf);
this._runDelegateGroup(bf);
this.__KB();
},_runDelegateFilter:function(bg){var bh=qx.util.Delegate.getMethod(this.getDelegate(),c);

for(var i=0,l=bg.length;i<l;++i){if(bh==null||bh(bg.getItem(i))){this.__Ku.push(i);
}}},_runDelegateSorter:function(bi){if(this.__Ku.length==0){return;
}var bj=qx.util.Delegate.getMethod(this.getDelegate(),z);

if(bj!=null){this.__Ku.sort(function(a,b){return bj(bi.getItem(a),bi.getItem(b));
});
}},_runDelegateGroup:function(bk){var bo=qx.util.Delegate.getMethod(this.getDelegate(),y);

if(bo!=null){for(var i=0,l=this.__Ku.length;i<l;++i){var bl=this.__Ku[i];
var bn=this.getModel().getItem(bl);
var bm=bo(bn);
this.__KD(bm,bl);
}this.__Ku=this.__KE();
}},__KD:function(bp,bq){if(bp==null){this.__KA=true;
bp="???";
}var name=this.__KF(bp);

if(this.__Kw[name]==null){this.__Kx.push(name);
this.__Kw[name]=[];
this._groups.push(bp);
}this.__Kw[name].push(bq);
},__KE:function(){this.__KG();
var bs=[];
var bu=0;

for(var i=0;i<this.__Kx.length;i++){var bt=this.__Kx[i];
bs.push(-1);
this.__Kv.push(bu);
bu++;
var br=this.__Kw[bt];

for(var k=0;k<br.length;k++){bs.push(br[k]);
bu++;
}}return bs;
},__KF:function(bv){var name=null;

if(!qx.lang.Type.isString(bv)){var bw=this._groups.indexOf(bv);
this.__Kz=true;
name="group";

if(bw==-1){name+=this._groups.getLength();
}else{name+=bw;
}}else{this.__Ky=true;
var name=bv;
}return name;
},__KG:function(){if(this.__Kz&&this.__KA||this.__Kz&&this.__Ky){throw new Error("GroupingTypeError: You can't mix 'Objects' and 'Strings' as"+" group identifier!");
}}},destruct:function(){this._background.dispose();
this._provider.dispose();
this._layer.dispose();
this._groups.dispose();
this._background=this._provider=this._layer=this._groups=this.__Ku=this.__Kv=this.__Kw=this.__Kx=null;
}});
})();
(function(){var l="=",k="",j="engine.name",h="&",g="application/xml",f="application/json",d="text/html",c="textarea",b="_data_",a="load",G="text/plain",F="text/javascript",E="readystatechange",D="completed",C="?",B="qx.io.remote.transport.Iframe",A="none",z="display",y="gecko",x="frame_",s="aborted",t="pre",q="javascript:void(0)",r="sending",o="form",p="failed",m="mshtml",n="form_",u="opera",v="timeout",w="qx/static/blank.gif";
qx.Class.define(B,{extend:qx.io.remote.transport.Abstract,construct:function(){qx.io.remote.transport.Abstract.call(this);
var H=(new Date).valueOf();
var I=x+H;
var J=n+H;
var K;

if((qx.core.Environment.get(j)==m)){K=q;
}this.__sb=qx.bom.Iframe.create({id:I,name:I,src:K});
qx.bom.element.Style.set(this.__sb,z,A);
this.__sc=qx.bom.Element.create(o,{id:J,name:J,target:I});
qx.bom.element.Style.set(this.__sc,z,A);
qx.dom.Element.insertEnd(this.__sc,qx.dom.Node.getBodyElement(document));
this.__sd=qx.bom.Element.create(c,{id:b,name:b});
qx.dom.Element.insertEnd(this.__sd,this.__sc);
qx.dom.Element.insertEnd(this.__sb,qx.dom.Node.getBodyElement(document));
qx.event.Registration.addListener(this.__sb,a,this._onload,this);
this.__se=qx.lang.Function.listener(this._onreadystatechange,this);
qx.bom.Event.addNativeListener(this.__sb,E,this.__se);
},statics:{handles:{synchronous:false,asynchronous:true,crossDomain:false,fileUpload:true,programaticFormFields:true,responseTypes:[G,F,f,g,d]},isSupported:function(){return true;
},_numericMap:{"uninitialized":1,"loading":2,"loaded":2,"interactive":3,"complete":4}},members:{__sd:null,__sf:0,__sc:null,__sb:null,__se:null,send:function(){var M=this.getMethod();
var O=this.getUrl();
var S=this.getParameters(false);
var R=[];

for(var N in S){var P=S[N];

if(P instanceof Array){for(var i=0;i<P.length;i++){R.push(encodeURIComponent(N)+l+encodeURIComponent(P[i]));
}}else{R.push(encodeURIComponent(N)+l+encodeURIComponent(P));
}}
if(R.length>0){O+=(O.indexOf(C)>=0?h:C)+R.join(h);
}if(this.getData()===null){var S=this.getParameters(true);
var R=[];

for(var N in S){var P=S[N];

if(P instanceof Array){for(var i=0;i<P.length;i++){R.push(encodeURIComponent(N)+l+encodeURIComponent(P[i]));
}}else{R.push(encodeURIComponent(N)+l+encodeURIComponent(P));
}}
if(R.length>0){this.setData(R.join(h));
}}var L=this.getFormFields();

for(var N in L){var Q=document.createElement(c);
Q.name=N;
Q.appendChild(document.createTextNode(L[N]));
this.__sc.appendChild(Q);
}this.__sc.action=O;
this.__sc.method=M;
this.__sd.appendChild(document.createTextNode(this.getData()));
this.__sc.submit();
this.setState(r);
},_onload:qx.event.GlobalError.observeMethod(function(e){if(qx.core.Environment.get(j)==u&&this.getIframeHtmlContent()==k){return;
}
if(this.__sc.src){return;
}this._switchReadyState(qx.io.remote.transport.Iframe._numericMap.complete);
}),_onreadystatechange:qx.event.GlobalError.observeMethod(function(e){this._switchReadyState(qx.io.remote.transport.Iframe._numericMap[this.__sb.readyState]);
}),_switchReadyState:function(T){switch(this.getState()){case D:case s:case p:case v:this.warn("Ignore Ready State Change");
return;
}while(this.__sf<T){this.setState(qx.io.remote.Exchange._nativeMap[++this.__sf]);
}},setRequestHeader:function(U,V){},getResponseHeader:function(W){return null;
},getResponseHeaders:function(){return {};
},getStatusCode:function(){return 200;
},getStatusText:function(){return k;
},getIframeWindow:function(){return qx.bom.Iframe.getWindow(this.__sb);
},getIframeDocument:function(){return qx.bom.Iframe.getDocument(this.__sb);
},getIframeBody:function(){return qx.bom.Iframe.getBody(this.__sb);
},getIframeTextContent:function(){var X=this.getIframeBody();

if(!X){return null;
}
if(!X.firstChild){return k;
}if(X.firstChild.tagName&&X.firstChild.tagName.toLowerCase()==t){return X.firstChild.innerHTML;
}else{return X.innerHTML;
}},getIframeHtmlContent:function(){var Y=this.getIframeBody();
return Y?Y.innerHTML:null;
},getFetchedLength:function(){return 0;
},getResponseContent:function(){if(this.getState()!==D){return null;
}var ba=this.getIframeTextContent();

switch(this.getResponseType()){case G:{};
return ba;
break;
case d:ba=this.getIframeHtmlContent();
{};
return ba;
break;
case f:ba=this.getIframeHtmlContent();
{};

try{return ba&&ba.length>0?qx.util.Json.parse(ba,false):null;
}catch(bb){return this.error("Could not execute json: ("+ba+")",bb);
}case F:ba=this.getIframeHtmlContent();
{};

try{return ba&&ba.length>0?window.eval(ba):null;
}catch(bc){return this.error("Could not execute javascript: ("+ba+")",bc);
}case g:ba=this.getIframeDocument();
{};
return ba;
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}}},defer:function(){qx.io.remote.Exchange.registerType(qx.io.remote.transport.Iframe,B);
},destruct:function(){if(this.__sb){qx.event.Registration.removeListener(this.__sb,a,this._onload,this);
qx.bom.Event.removeNativeListener(this.__sb,E,this.__se);
if((qx.core.Environment.get(j)==y)){this.__sb.src=qx.util.ResourceManager.getInstance().toUri(w);
}qx.dom.Element.remove(this.__sb);
}
if(this.__sc){qx.dom.Element.remove(this.__sc);
}this.__sb=this.__sc=this.__sd=null;
}});
})();
(function(){var j="aborted",i="changeState",h="completed",g="failed",f="configured",e="timeout",d="changeModel",c="application/json",b="GET",a="loaded",v="qx.event.type.Data",u="error",t="receiving",s="qx.event.type.Event",r="queued",q="String",p="sending",o="_marshaler",n="__zf",m="qx.data.store.Json",k="changeUrl",l="_applyUrl";
qx.Class.define(m,{extend:qx.core.Object,construct:function(w,x){qx.core.Object.call(this);
this._marshaler=new qx.data.marshal.Json(x);
this._delegate=x;

if(w!=null){this.setUrl(w);
}},events:{"loaded":v,"error":s},properties:{model:{nullable:true,event:d},state:{check:[f,r,p,t,h,j,e,g],init:f,event:i},url:{check:q,apply:l,event:k,nullable:true}},members:{__zf:null,_delegate:null,_applyUrl:function(y,z){if(y!=null){this._createRequest(y);
}},_createRequest:function(A){this.__zf=new qx.io.remote.Request(A,b,c);
this.__zf.addListener(h,this.__zg,this);
var B=this._delegate;

if(B&&qx.lang.Type.isFunction(B.configureRequest)){this._delegate.configureRequest(this.__zf);
}this.__zf.addListener(i,function(C){var D=C.getData();
this.setState(D);

if(D===g||D===j||D===e){this.fireEvent(u);
}},this);
this.__zf.send();
},__zg:function(E){var G=E.getContent();
var F=this._delegate;

if(F&&qx.lang.Type.isFunction(F.manipulateData)){G=this._delegate.manipulateData(G);
}this._marshaler.toClass(G,true);
var H=this.getModel();
this.setModel(this._marshaler.toModel(G));
if(H&&H.dispose){H.dispose();
}this.fireDataEvent(a,this.getModel());
},reload:function(){var I=this.getUrl();

if(I!=null){this._createRequest(I);
}}},destruct:function(){this._disposeObjects(o,n);
this._delegate=null;
}});
})();
(function(){var n=",",m="",k='"',j="string",h="null",g=':',f="engine.name",e="qx.jsonDebugging",d='-',c='\\u00',Q="__rl",P="new Date(Date.UTC(",O="__rk",N="__rm",M='\\\\',L='\\f',K="__rt",J='\\"',I="))",H='T',u="}",v='(',s='.',t="{",q='\\r',r=":",o="__rj",p='\\t',w="]",x="opera",A="[",z="__ru",C="mshtml",B="qx.jsonEncodeUndefined",E='\\b',D="qx.util.Json",y='Z"',G=')',F='\\n';
qx.Class.define(D,{statics:{__rh:null,BEAUTIFYING_INDENT:"  ",BEAUTIFYING_LINE_END:"\n",CONVERT_DATES:null,__ri:{"function":o,"boolean":O,"number":Q,"string":N,"object":K,"undefined":z},NUMBER_FORMAT:new qx.util.format.NumberFormat(),__rj:function(R,S){return String(R);
},__rk:function(T,U){return String(T);
},__rl:function(V,W){return isFinite(V)?String(V):h;
},__rm:function(X,Y){var ba;

if(/["\\\x00-\x1f]/.test(X)){ba=X.replace(/([\x00-\x1f\\"])/g,qx.util.Json.__ro);
}else{ba=X;
}return k+ba+k;
},__rn:{'\b':E,'\t':p,'\n':F,'\f':L,'\r':q,'"':J,'\\':M},__ro:function(a,b){var bb=qx.util.Json.__rn[b];

if(bb){return bb;
}bb=b.charCodeAt();
return c+Math.floor(bb/16).toString(16)+(bb%16).toString(16);
},__rp:function(bc,bd){var bf=[],bi=true,bh,be;
var bg=qx.util.Json.__rw;
bf.push(A);

if(bg){qx.util.Json.__rq+=qx.util.Json.BEAUTIFYING_INDENT;
bf.push(qx.util.Json.__rq);
}
for(var i=0,l=bc.length;i<l;i++){be=bc[i];
bh=this.__ri[typeof be];

if(bh){be=this[bh](be,i+m);

if(typeof be==j){if(!bi){bf.push(n);

if(bg){bf.push(qx.util.Json.__rq);
}}bf.push(be);
bi=false;
}}}
if(bg){qx.util.Json.__rq=qx.util.Json.__rq.substring(0,qx.util.Json.__rq.length-qx.util.Json.BEAUTIFYING_INDENT.length);
bf.push(qx.util.Json.__rq);
}bf.push(w);
return bf.join(m);
},__rr:function(bj,bk){if(!qx.util.Json.CONVERT_DATES){if(bj.toJSON&&qx.core.Environment.get(f)!=x&&qx.core.Environment.get(f)!=C){return k+bj.toJSON()+k;
}var bl=this.NUMBER_FORMAT;
bl.setMinimumIntegerDigits(2);
var bn=bj.getUTCFullYear()+d+bl.format(bj.getUTCMonth()+1)+d+bl.format(bj.getUTCDate())+H+bl.format(bj.getUTCHours())+g+bl.format(bj.getUTCMinutes())+g+bl.format(bj.getUTCSeconds())+s;
bl.setMinimumIntegerDigits(3);
return k+bn+bl.format(bj.getUTCMilliseconds())+y;
}else{var bm=bj.getUTCFullYear()+n+bj.getUTCMonth()+n+bj.getUTCDate()+n+bj.getUTCHours()+n+bj.getUTCMinutes()+n+bj.getUTCSeconds()+n+bj.getUTCMilliseconds();
return P+bm+I;
}},__rs:function(bo,bp){var bs=[],bu=true,br,bq;
var bt=qx.util.Json.__rw;
bs.push(t);

if(bt){qx.util.Json.__rq+=qx.util.Json.BEAUTIFYING_INDENT;
bs.push(qx.util.Json.__rq);
}
for(var bp in bo){bq=bo[bp];
br=this.__ri[typeof bq];

if(br){bq=this[br](bq,bp);

if(typeof bq==j){if(!bu){bs.push(n);

if(bt){bs.push(qx.util.Json.__rq);
}}bs.push(this.__rm(bp),r,bq);
bu=false;
}}}
if(bt){qx.util.Json.__rq=qx.util.Json.__rq.substring(0,qx.util.Json.__rq.length-qx.util.Json.BEAUTIFYING_INDENT.length);
bs.push(qx.util.Json.__rq);
}bs.push(u);
return bs.join(m);
},__rt:function(bv,bw){if(bv){if(qx.lang.Type.isFunction(bv.toJSON)&&bv.toJSON!==this.__rh){return this.__rv(bv.toJSON(bw),bw);
}else if(qx.lang.Type.isDate(bv)){return this.__rr(bv,bw);
}else if(qx.lang.Type.isArray(bv)){return this.__rp(bv,bw);
}else if(qx.lang.Type.isObject(bv)){return this.__rs(bv,bw);
}return m;
}return h;
},__ru:function(bx,by){if(qx.core.Environment.get(B)){return h;
}},__rv:function(bz,bA){return this[this.__ri[typeof bz]](bz,bA);
},stringify:function(bB,bC){this.__rw=bC;
this.__rq=this.BEAUTIFYING_LINE_END;
var bD=this.__rv(bB,m);

if(typeof bD!=j){bD=null;
}if(qx.core.Environment.get(e)){qx.log.Logger.debug(this,"JSON request: "+bD);
}return bD;
},parse:function(bE,bF){if(bF===undefined){bF=true;
}
if(qx.core.Environment.get(e)){qx.log.Logger.debug(this,"JSON response: "+bE);
}
if(bF){if(/[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/.test(bE.replace(/"(\\.|[^"\\])*"/g,m))){throw new Error("Could not parse JSON string!");
}}
try{var bG=(bE&&bE.length>0)?eval(v+bE+G):null;
return bG;
}catch(bH){throw new Error("Could not evaluate JSON string: "+bH.message);
}}},environment:{"qx.jsonEncodeUndefined":true,"qx.jsonDebugging":false},defer:function(bI){bI.__rh=Date.prototype.toJSON;
}});
})();
(function(){var m="failed",k="completed",j="=",h="aborted",g="sending",f="",d="&",c="engine.name",b="configured",a="timeout",L="application/xml",K="qx.io.remote.transport.XmlHttp",J="application/json",I="text/html",H="receiving",G="text/plain",F="text/javascript",E="?",D="created",C="Boolean",u='Referer',v="engine.version",r='Basic ',t="\n</pre>",p="string",q='Authorization',n="<pre>Could not execute json: \n",o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",w="mshtml",x=':',z="parseerror",y="file:",B="webkit",A="object";
qx.Class.define(K,{extend:qx.io.remote.transport.Abstract,statics:{handles:{synchronous:true,asynchronous:true,crossDomain:false,fileUpload:false,programaticFormFields:false,responseTypes:[G,F,J,L,I]},createRequestObject:qx.core.Environment.select(c,{"default":function(){return new XMLHttpRequest;
},"mshtml":function(){if(window.ActiveXObject&&qx.xml.Document.XMLHTTP){return new ActiveXObject(qx.xml.Document.XMLHTTP);
}
if(window.XMLHttpRequest){return new XMLHttpRequest;
}}}),isSupported:function(){return !!this.createRequestObject();
}},properties:{parseJson:{check:C,init:true}},members:{__sk:false,__sl:0,__sm:null,getRequest:function(){if(this.__sm===null){this.__sm=qx.io.remote.transport.XmlHttp.createRequestObject();
this.__sm.onreadystatechange=qx.lang.Function.bind(this._onreadystatechange,this);
}return this.__sm;
},send:function(){this.__sl=0;
var Q=this.getRequest();
var M=this.getMethod();
var T=this.getAsynchronous();
var S=this.getUrl();
var O=(window.location.protocol===y&&!(/^http(s){0,1}\:/.test(S)));
this.__sk=O;
var W=this.getParameters(false);
var U=[];

for(var N in W){var R=W[N];

if(R instanceof Array){for(var i=0;i<R.length;i++){U.push(encodeURIComponent(N)+j+encodeURIComponent(R[i]));
}}else{U.push(encodeURIComponent(N)+j+encodeURIComponent(R));
}}
if(U.length>0){S+=(S.indexOf(E)>=0?d:E)+U.join(d);
}if(this.getData()===null){var W=this.getParameters(true);
var U=[];

for(var N in W){var R=W[N];

if(R instanceof Array){for(var i=0;i<R.length;i++){U.push(encodeURIComponent(N)+j+encodeURIComponent(R[i]));
}}else{U.push(encodeURIComponent(N)+j+encodeURIComponent(R));
}}
if(U.length>0){this.setData(U.join(d));
}}var V=function(X){var bd=o;
var bh=f;
var bb,ba,Y;
var be,bf,bg,bc;
var i=0;

do{bb=X.charCodeAt(i++);
ba=X.charCodeAt(i++);
Y=X.charCodeAt(i++);
be=bb>>2;
bf=((bb&3)<<4)|(ba>>4);
bg=((ba&15)<<2)|(Y>>6);
bc=Y&63;

if(isNaN(ba)){bg=bc=64;
}else if(isNaN(Y)){bc=64;
}bh+=bd.charAt(be)+bd.charAt(bf)+bd.charAt(bg)+bd.charAt(bc);
}while(i<X.length);
return bh;
};
try{if(this.getUsername()){if(this.getUseBasicHttpAuth()){Q.open(M,S,T);
Q.setRequestHeader(q,r+V(this.getUsername()+x+this.getPassword()));
}else{Q.open(M,S,T,this.getUsername(),this.getPassword());
}}else{Q.open(M,S,T);
}}catch(bi){this.error("Failed with exception: "+bi);
this.failed();
return;
}if(!(qx.core.Environment.get(c)==B)){Q.setRequestHeader(u,window.location.href);
}var P=this.getRequestHeaders();

for(var N in P){Q.setRequestHeader(N,P[N]);
}try{if(O&&T&&qx.core.Environment.get(c)==w&&qx.core.Environment.get(v)==9){qx.event.Timer.once(function(){Q.send(this.getData());
},this,0);
}else{Q.send(this.getData());
}}catch(bj){if(O){this.failedLocally();
}else{this.error("Failed to send data: "+bj,"send");
this.failed();
}return;
}if(!T){this._onreadystatechange();
}},failedLocally:function(){if(this.getState()===m){return;
}this.warn("Could not load from file: "+this.getUrl());
this.failed();
},_onreadystatechange:qx.event.GlobalError.observeMethod(function(e){switch(this.getState()){case k:case h:case m:case a:{};
return;
}var bk=this.getReadyState();

if(bk==4){if(!qx.io.remote.Exchange.wasSuccessful(this.getStatusCode(),bk,this.__sk)){if(this.getState()===b){this.setState(g);
}this.failed();
return;
}}if(bk==3&&this.__sl==1){this.setState(qx.io.remote.Exchange._nativeMap[++this.__sl]);
}while(this.__sl<bk){this.setState(qx.io.remote.Exchange._nativeMap[++this.__sl]);
}}),getReadyState:function(){var bl=null;

try{bl=this.getRequest().readyState;
}catch(bm){}return bl;
},setRequestHeader:function(bn,bo){this.getRequestHeaders()[bn]=bo;
},getResponseHeader:function(bp){var bq=null;

try{bq=this.getRequest().getResponseHeader(bp)||null;
}catch(br){}return bq;
},getStringResponseHeaders:function(){var bt=null;

try{var bs=this.getRequest().getAllResponseHeaders();

if(bs){bt=bs;
}}catch(bu){}return bt;
},getResponseHeaders:function(){var bx=this.getStringResponseHeaders();
var by={};

if(bx){var bv=bx.split(/[\r\n]+/g);

for(var i=0,l=bv.length;i<l;i++){var bw=bv[i].match(/^([^:]+)\s*:\s*(.+)$/i);

if(bw){by[bw[1]]=bw[2];
}}}return by;
},getStatusCode:function(){var bz=-1;

try{bz=this.getRequest().status;
if(bz===1223){bz=204;
}}catch(bA){}return bz;
},getStatusText:function(){var bB=f;

try{bB=this.getRequest().statusText;
}catch(bC){}return bB;
},getResponseText:function(){var bD=null;

try{bD=this.getRequest().responseText;
}catch(bE){bD=null;
}return bD;
},getResponseXml:function(){var bH=null;
var bF=this.getStatusCode();
var bG=this.getReadyState();

if(qx.io.remote.Exchange.wasSuccessful(bF,bG,this.__sk)){try{bH=this.getRequest().responseXML;
}catch(bI){}}if(typeof bH==A&&bH!=null){if(!bH.documentElement){var s=String(this.getRequest().responseText).replace(/<\?xml[^\?]*\?>/,f);
bH.loadXML(s);
}if(!bH.documentElement){throw new Error("Missing Document Element!");
}
if(bH.documentElement.tagName==z){throw new Error("XML-File is not well-formed!");
}}else{throw new Error("Response was not a valid xml document ["+this.getRequest().responseText+"]");
}return bH;
},getFetchedLength:function(){var bJ=this.getResponseText();
return typeof bJ==p?bJ.length:0;
},getResponseContent:function(){var bK=this.getState();

if(bK!==k&&bK!=m){return null;
}var bM=this.getResponseText();

if(bK==m){return bM;
}
switch(this.getResponseType()){case G:case I:{};
return bM;
case J:{};

try{if(bM&&bM.length>0){var bL;

if(this.getParseJson()){bL=qx.util.Json.parse(bM,false);
bL=(bL===0?0:(bL||null));
}else{bL=bM;
}return bL;
}else{return null;
}}catch(bN){this.error("Could not execute json: ["+bM+"]",bN);
return n+bM+t;
}case F:{};

try{if(bM&&bM.length>0){var bL=window.eval(bM);
return (bL===0?0:(bL||null));
}else{return null;
}}catch(bO){this.error("Could not execute javascript: ["+bM+"]",bO);
return null;
}case L:bM=this.getResponseXml();
{};
return (bM===0?0:(bM||null));
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}},_applyState:function(bP,bQ){switch(bP){case D:this.fireEvent(D);
break;
case b:this.fireEvent(b);
break;
case g:this.fireEvent(g);
break;
case H:this.fireEvent(H);
break;
case k:this.fireEvent(k);
break;
case m:this.fireEvent(m);
break;
case h:this.getRequest().abort();
this.fireEvent(h);
break;
case a:this.getRequest().abort();
this.fireEvent(a);
break;
}}},defer:function(){qx.io.remote.Exchange.registerType(qx.io.remote.transport.XmlHttp,K);
},destruct:function(){var bR=this.getRequest();

if(bR){bR.onreadystatechange=qx.lang.Function.empty;
switch(bR.readyState){case 1:case 2:case 3:bR.abort();
}}this.__sm=null;
}});
})();
(function(){var b="Integer",a="qx.ui.virtual.core.CellEvent";
qx.Class.define(a,{extend:qx.event.type.Mouse,properties:{row:{check:b,nullable:true},column:{check:b,nullable:true}},members:{init:function(c,d,e,f){d.clone(this);
this.setBubbles(false);
this.setRow(e);
this.setColumn(f);
}}});
})();
(function(){var a="qx.ui.virtual.cell.IWidgetCell";
qx.Interface.define(a,{members:{getCellWidget:function(b,c){},pool:function(d){},updateStates:function(e,f){},updateData:function(g,h){}}});
})();
(function(){var d="cell.states",c="created",b="qx.ui.virtual.cell.AbstractWidget",a="qx.event.type.Data";
qx.Class.define(b,{extend:qx.core.Object,implement:[qx.ui.virtual.cell.IWidgetCell],construct:function(){qx.core.Object.call(this);
this.__JY=[];
},events:{"created":a},members:{__JY:null,_createWidget:function(){throw new Error("abstract method call");
},updateData:function(e,f){throw new Error("abstract method call");
},updateStates:function(g,h){var k=g.getUserData(d);
if(k){var i=h||{};

for(var j in k){if(!i[j]){g.removeState(j);
}}}else{k={};
}if(h){for(var j in h){if(!k.state){g.addState(j);
}}}g.setUserData(d,h);
},getCellWidget:function(l,m){var n=this.__Ka();
this.updateStates(n,m);
this.updateData(n,l);
return n;
},pool:function(o){this.__JY.push(o);
},_cleanupPool:function(){var p=this.__JY.pop();

while(p){p.destroy();
p=this.__JY.pop();
}},__Ka:function(){var q=this.__JY.pop();

if(q==null){q=this._createWidget();
this.fireDataEvent(c,q);
}return q;
}},destruct:function(){this.__JY=null;
}});
})();
(function(){var b="_applyDelegate",a="qx.ui.virtual.cell.WidgetCell";
qx.Class.define(a,{extend:qx.ui.virtual.cell.AbstractWidget,properties:{delegate:{apply:b,init:null,nullable:true}},members:{_applyDelegate:function(c,d){this._cleanupPool();
},_createWidget:function(){var e=this.getDelegate();

if(e!=null&&e.createWidget!=null){return e.createWidget();
}else{return new qx.ui.core.Widget();
}},updateData:function(f,g){for(var h in g){if(qx.Class.hasProperty(f.constructor,h)){qx.util.PropertyUtil.setUserValue(f,h,g[h]);
}else{throw new Error("Can't update data! The key '"+h+"' is not a Property!");
}}}}});
})();
(function(){var r="&",q="=",p="?",o="application/json",n="completed",m="text/plain",l="text/javascript",k="qx.io.remote.transport.Script",j="",h="_ScriptTransport_data",c="script",g="timeout",f="_ScriptTransport_",b="_ScriptTransport_id",a="aborted",e="utf-8",d="failed";
qx.Class.define(k,{extend:qx.io.remote.transport.Abstract,construct:function(){qx.io.remote.transport.Abstract.call(this);
var s=++qx.io.remote.transport.Script.__sh;

if(s>=2000000000){qx.io.remote.transport.Script.__sh=s=1;
}this.__si=null;
this.__sh=s;
},statics:{__sh:0,_instanceRegistry:{},ScriptTransport_PREFIX:f,ScriptTransport_ID_PARAM:b,ScriptTransport_DATA_PARAM:h,handles:{synchronous:false,asynchronous:true,crossDomain:true,fileUpload:false,programaticFormFields:false,responseTypes:[m,l,o]},isSupported:function(){return true;
},_numericMap:{"uninitialized":1,"loading":2,"loaded":2,"interactive":3,"complete":4},_requestFinished:qx.event.GlobalError.observeMethod(function(t,content){var u=qx.io.remote.transport.Script._instanceRegistry[t];

if(u==null){}else{u._responseContent=content;
u._switchReadyState(qx.io.remote.transport.Script._numericMap.complete);
}})},members:{__sj:0,__si:null,__sh:null,send:function(){var x=this.getUrl();
x+=(x.indexOf(p)>=0?r:p)+qx.io.remote.transport.Script.ScriptTransport_ID_PARAM+q+this.__sh;
var A=this.getParameters();
var z=[];

for(var w in A){if(w.indexOf(qx.io.remote.transport.Script.ScriptTransport_PREFIX)==0){this.error("Illegal parameter name. The following prefix is used internally by qooxdoo): "+qx.io.remote.transport.Script.ScriptTransport_PREFIX);
}var y=A[w];

if(y instanceof Array){for(var i=0;i<y.length;i++){z.push(encodeURIComponent(w)+q+encodeURIComponent(y[i]));
}}else{z.push(encodeURIComponent(w)+q+encodeURIComponent(y));
}}
if(z.length>0){x+=r+z.join(r);
}var v=this.getData();

if(v!=null){x+=r+qx.io.remote.transport.Script.ScriptTransport_DATA_PARAM+q+encodeURIComponent(v);
}qx.io.remote.transport.Script._instanceRegistry[this.__sh]=this;
this.__si=document.createElement(c);
this.__si.charset=e;
this.__si.src=x;
document.body.appendChild(this.__si);
},_switchReadyState:function(B){switch(this.getState()){case n:case a:case d:case g:this.warn("Ignore Ready State Change");
return;
}while(this.__sj<B){this.setState(qx.io.remote.Exchange._nativeMap[++this.__sj]);
}},setRequestHeader:function(C,D){},getResponseHeader:function(E){return null;
},getResponseHeaders:function(){return {};
},getStatusCode:function(){return 200;
},getStatusText:function(){return j;
},getFetchedLength:function(){return 0;
},getResponseContent:function(){if(this.getState()!==n){return null;
}
switch(this.getResponseType()){case m:case o:case l:{};
var F=this._responseContent;
return (F===0?0:(F||null));
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}}},defer:function(){qx.io.remote.Exchange.registerType(qx.io.remote.transport.Script,k);
},destruct:function(){if(this.__si){delete qx.io.remote.transport.Script._instanceRegistry[this.__sh];
document.body.removeChild(this.__si);
}this.__si=this._responseContent=null;
}});
})();
(function(){var a="qx.ui.virtual.core.ILayer";
qx.Interface.define(a,{members:{fullUpdate:function(b,c,d,e){this.assertArgumentsCount(arguments,6,6);
this.assertPositiveInteger(b);
this.assertPositiveInteger(c);
this.assertArray(d);
this.assertArray(e);
},updateLayerWindow:function(f,g,h,i){this.assertArgumentsCount(arguments,6,6);
this.assertPositiveInteger(f);
this.assertPositiveInteger(g);
this.assertArray(h);
this.assertArray(i);
},updateLayerData:function(){}}});
})();
(function(){var b="qx.ui.virtual.layer.Abstract",a="abstract";
qx.Class.define(b,{extend:qx.ui.core.Widget,type:a,implement:[qx.ui.virtual.core.ILayer],construct:function(){qx.ui.core.Widget.call(this);
this.__JR={};
},properties:{anonymous:{refine:true,init:true}},members:{__JR:null,__JS:null,__JT:null,__JU:null,__JV:null,__JW:null,getFirstRow:function(){return this.__JT;
},getFirstColumn:function(){return this.__JU;
},getRowSizes:function(){return this.__JV||[];
},getColumnSizes:function(){return this.__JW||[];
},syncWidget:function(){if(!this.getContentElement().getDomElement()){return;
}
if(this.__JR.fullUpdate||this.__JR.updateLayerWindow&&this.__JR.updateLayerData){this._fullUpdate.apply(this,this.__JS);
}else if(this.__JR.updateLayerWindow){this._updateLayerWindow.apply(this,this.__JS);
}else if(this.__JR.updateLayerData&&this.__JV){this._updateLayerData();
}
if(this.__JR.fullUpdate||this.__JR.updateLayerWindow){var c=this.__JS;
this.__JT=c[0];
this.__JU=c[1];
this.__JV=c[2];
this.__JW=c[3];
}this.__JR={};
},_updateLayerData:function(){this._fullUpdate(this.__JT,this.__JU,this.__JV,this.__JW);
},_fullUpdate:function(d,e,f,g){throw new Error("Abstract method '_fullUpdate' called!");
},_updateLayerWindow:function(h,i,j,k){this._fullUpdate(h,i,j,k);
},updateLayerData:function(){this.__JR.updateLayerData=true;
qx.ui.core.queue.Widget.add(this);
},fullUpdate:function(l,m,n,o){this.__JS=arguments;
this.__JR.fullUpdate=true;
qx.ui.core.queue.Widget.add(this);
},updateLayerWindow:function(p,q,r,s){this.__JS=arguments;
this.__JR.updateLayerWindow=true;
qx.ui.core.queue.Widget.add(this);
}},destruct:function(){this.__JR=this.__JS=this.__JV=this.__JW=null;
}});
})();
(function(){var c="Integer",b="Object",a="qx.io.remote.Response";
qx.Class.define(a,{extend:qx.event.type.Event,properties:{state:{check:c,nullable:true},statusCode:{check:c,nullable:true},content:{nullable:true},responseHeaders:{check:b,nullable:true}},members:{clone:function(d){var e=qx.event.type.Event.prototype.clone.call(this,d);
e.setType(this.getType());
e.setState(this.getState());
e.setStatusCode(this.getStatusCode());
e.setContent(this.getContent());
e.setResponseHeaders(this.getResponseHeaders());
return e;
},getResponseHeader:function(f){var g=this.getResponseHeaders();

if(g){return g[f]||null;
}return null;
}}});
})();
(function(){var v="appear",u="qx.ui.virtual.core.CellEvent",t="change",s="qx.event.type.Data",r="qx.ui.virtual.core.Pane",q="resize",p="click",o="update",n="scrollX",m="dblclick",d="contextmenu",l="cellClick",h="__KI",c="cellContextmenu",b="qx.event.type.Event",g="__KQ",f="__KH",j="__KP",a="cellDblclick",k="scrollY";
qx.Class.define(r,{extend:qx.ui.core.Widget,construct:function(w,x,y,z){qx.ui.core.Widget.call(this);
this.__KH=new qx.ui.virtual.core.Axis(y,w);
this.__KI=new qx.ui.virtual.core.Axis(z,x);
this.__KJ=0;
this.__KK=0;
this.__KL=0;
this.__KM=0;
this.__KN={};
this.__KO={};
this.__KP=new qx.ui.container.Composite();
this.__KP.setUserBounds(0,0,0,0);
this._add(this.__KP);
this.__KQ=[];
this.__KH.addListener(t,this.fullUpdate,this);
this.__KI.addListener(t,this.fullUpdate,this);
this.addListener(q,this._onResize,this);
this.addListenerOnce(v,this._onAppear,this);
this.addListener(p,this._onClick,this);
this.addListener(m,this._onDblclick,this);
this.addListener(d,this._onContextmenu,this);
},events:{cellClick:u,cellContextmenu:u,cellDblclick:u,update:b,scrollX:s,scrollY:s},properties:{width:{refine:true,init:400},height:{refine:true,init:300}},members:{__KH:null,__KI:null,__KJ:null,__KK:null,__KL:null,__KM:null,__KN:null,__KO:null,__KP:null,__KQ:null,__KR:null,__KS:null,__KT:null,getRowConfig:function(){return this.__KH;
},getColumnConfig:function(){return this.__KI;
},getChildren:function(){return [this.__KP];
},addLayer:function(A){this.__KQ.push(A);
A.setUserBounds(0,0,0,0);
this.__KP.add(A);
},getLayers:function(){return this.__KQ;
},getVisibleLayers:function(){var B=[];

for(var i=0;i<this.__KQ.length;i++){var C=this.__KQ[i];

if(C.isVisible()){B.push(C);
}}return B;
},getScrollMaxX:function(){var D=this.getBounds();

if(D){return Math.max(0,this.__KI.getTotalSize()-D.width);
}return 0;
},getScrollMaxY:function(){var E=this.getBounds();

if(E){return Math.max(0,this.__KH.getTotalSize()-E.height);
}return 0;
},setScrollY:function(F){var G=this.getScrollMaxY();

if(F<0){F=0;
}else if(F>G){F=G;
}
if(this.__KJ!==F){var H=this.__KJ;
this.__KJ=F;
this._deferredUpdateScrollPosition();
this.fireDataEvent(k,F,H);
}},getScrollY:function(){return this.__KJ;
},setScrollX:function(I){var J=this.getScrollMaxX();

if(I<0){I=0;
}else if(I>J){I=J;
}
if(I!==this.__KK){var K=this.__KK;
this.__KK=I;
this._deferredUpdateScrollPosition();
this.fireDataEvent(n,I,K);
}},getScrollX:function(){return this.__KK;
},getScrollSize:function(){return {width:this.__KI.getTotalSize(),height:this.__KH.getTotalSize()};
},scrollRowIntoView:function(L){var O=this.getBounds();

if(!O){this.addListenerOnce(v,function(){qx.event.Timer.once(function(){this.scrollRowIntoView(L);
},this,0);
},this);
return;
}var P=this.__KH.getItemPosition(L);
var N=P+this.__KH.getItemSize(L);
var M=this.getScrollY();

if(P<M){this.setScrollY(P);
}else if(N>M+O.height){this.setScrollY(N-O.height);
}},scrollColumnIntoView:function(Q){var T=this.getBounds();

if(!T){this.addListenerOnce(v,function(){qx.event.Timer.once(function(){this.scrollColumnIntoView(Q);
},this,0);
},this);
return;
}var S=this.__KI.getItemPosition(Q);
var R=S+this.__KI.getItemSize(Q);
var U=this.getScrollX();

if(S<U){this.setScrollX(S);
}else if(R>U+T.width){this.setScrollX(R-T.width);
}},scrollCellIntoView:function(V,W){var X=this.getBounds();

if(!X){this.addListenerOnce(v,function(){qx.event.Timer.once(function(){this.scrollCellIntoView(V,W);
},this,0);
},this);
return;
}this.scrollColumnIntoView(V);
this.scrollRowIntoView(W);
},getCellAtPosition:function(Y,ba){var bb,bc;
var bd=this.getContentLocation();

if(!bd||ba<bd.top||ba>=bd.bottom||Y<bd.left||Y>=bd.right){return null;
}bb=this.__KH.getItemAtPosition(this.getScrollY()+ba-bd.top);
bc=this.__KI.getItemAtPosition(this.getScrollX()+Y-bd.left);

if(!bb||!bc){return null;
}return {row:bb.index,column:bc.index};
},prefetchX:function(be,bf,bg,bh){var bi=this.getVisibleLayers();

if(bi.length==0){return;
}var bk=this.getBounds();

if(!bk){return;
}var bl=this.__KK+bk.width;
var bm=this.__KM-bl;

if(this.__KK-this.__KN.left<Math.min(this.__KK,be)||this.__KN.right-bl<Math.min(bm,bg)){var bn=Math.min(this.__KK,bf);
var bj=Math.min(bm,bh);
this._setLayerWindow(bi,this.__KK-bn,this.__KJ,bk.width+bn+bj,bk.height,false);
}},prefetchY:function(bo,bp,bq,br){var bs=this.getVisibleLayers();

if(bs.length==0){return;
}var bv=this.getBounds();

if(!bv){return;
}var bt=this.__KJ+bv.height;
var bu=this.__KL-bt;

if(this.__KJ-this.__KN.top<Math.min(this.__KJ,bo)||this.__KN.bottom-bt<Math.min(bu,bq)){var bx=Math.min(this.__KJ,bp);
var bw=Math.min(bu,br);
this._setLayerWindow(bs,this.__KK,this.__KJ-bx,bv.width,bv.height+bx+bw,false);
}},_onResize:function(){if(this.getContainerElement().getDomElement()){this.__KR=true;
this._updateScrollPosition();
this.__KR=null;
this.fireEvent(o);
}},_onAppear:function(){this.fullUpdate();
},_onClick:function(e){this.__KU(e,l);
},_onContextmenu:function(e){this.__KU(e,c);
},_onDblclick:function(e){this.__KU(e,a);
},__KU:function(e,by){var bz=this.getCellAtPosition(e.getDocumentLeft(),e.getDocumentTop());

if(!bz){return;
}this.fireNonBubblingEvent(by,qx.ui.virtual.core.CellEvent,[this,e,bz.row,bz.column]);
},syncWidget:function(){if(this.__KO._fullUpdate){this._fullUpdate();
}else if(this.__KO._updateScrollPosition){this._updateScrollPosition();
}this.__KO={};
},_setLayerWindow:function(bA,bB,top,bC,bD,bE){var bJ=this.__KH.getItemAtPosition(top);

if(bJ){var bL=bJ.index;
var bP=this.__KH.getItemSizes(bL,bD+bJ.offset);
var bK=qx.lang.Array.sum(bP);
var bR=top-bJ.offset;
var bO=top-bJ.offset+bK;
}else{var bL=0;
var bP=[];
var bK=0;
var bR=0;
var bO=0;
}var bN=this.__KI.getItemAtPosition(bB);

if(bN){var bH=bN.index;
var bG=this.__KI.getItemSizes(bH,bC+bN.offset);
var bM=qx.lang.Array.sum(bG);
var bQ=bB-bN.offset;
var bI=bB-bN.offset+bM;
}else{var bH=0;
var bG=[];
var bM=0;
var bQ=0;
var bI=0;
}this.__KN={top:bR,bottom:bO,left:bQ,right:bI};
this.__KP.setUserBounds(this.__KN.left-this.__KK,this.__KN.top-this.__KJ,bM,bK);
this.__KS=bG;
this.__KT=bP;

for(var i=0;i<this.__KQ.length;i++){var bF=this.__KQ[i];
bF.setUserBounds(0,0,bM,bK);

if(bE){bF.fullUpdate(bL,bH,bP,bG);
}else{bF.updateLayerWindow(bL,bH,bP,bG);
}}},__KV:function(){if(this.__KR){return;
}var bS=this.getScrollSize();

if(this.__KL!==bS.height||this.__KM!==bS.width){this.__KL=bS.height;
this.__KM=bS.width;
this.fireEvent("update");
}},fullUpdate:function(){this.__KO._fullUpdate=1;
qx.ui.core.queue.Widget.add(this);
},isUpdatePending:function(){return !!this.__KO._fullUpdate;
},_fullUpdate:function(){var bT=this.getVisibleLayers();

if(bT.length==0){this.__KV();
return;
}
if(!this.getContainerElement().getDomElement()){return ;
}var bU=this.getBounds();
this._setLayerWindow(bT,this.__KK,this.__KJ,bU.width,bU.height,true);
this.__KV();
},_deferredUpdateScrollPosition:function(){this.__KO._updateScrollPosition=1;
qx.ui.core.queue.Widget.add(this);
},_updateScrollPosition:function(){var bV=this.getVisibleLayers();

if(bV.length==0){this.__KV();
return;
}var bX=this.getBounds();

if(!bX){return ;
}var bW={top:this.__KJ,bottom:this.__KJ+bX.height,left:this.__KK,right:this.__KK+bX.width};

if(this.__KN.top<=bW.top&&this.__KN.bottom>=bW.bottom&&this.__KN.left<=bW.left&&this.__KN.right>=bW.right){this.__KP.setUserBounds(this.__KN.left-bW.left,this.__KN.top-bW.top,this.__KN.right-this.__KN.left,this.__KN.bottom-this.__KN.top);
}else{this._setLayerWindow(bV,this.__KK,this.__KJ,bX.width,bX.height,false);
}this.__KV();
}},destruct:function(){this._disposeArray(g);
this._disposeObjects(f,h,j);
this.__KN=this.__KO=this.__KS=this.__KT=null;
}});
})();
(function(){var t="Integer",s="aborted",r="_onaborted",q="_on",p="_applyEnabled",o="Boolean",n="sending",m="interval",l="__rX",k="failed",c="qx.io.remote.RequestQueue",j="timeout",g="completed",b="__rV",a="queued",f="io.maxrequests",d="receiving",h="singleton";
qx.Class.define(c,{type:h,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__rU=[];
this.__rV=[];
this.__rW=0;
this.__rX=new qx.event.Timer(500);
this.__rX.addListener(m,this._oninterval,this);
},properties:{enabled:{init:true,check:o,apply:p},maxTotalRequests:{check:t,nullable:true},maxConcurrentRequests:{check:t,init:qx.core.Environment.get(f)},defaultTimeout:{check:t,init:5000}},members:{__rU:null,__rV:null,__rW:null,__rX:null,getRequestQueue:function(){return this.__rU;
},getActiveQueue:function(){return this.__rV;
},_debug:function(){var u;
},_check:function(){this._debug();
if(this.__rV.length==0&&this.__rU.length==0){this.__rX.stop();
}if(!this.getEnabled()){return;
}if(this.__rU.length==0||(this.__rU[0].isAsynchronous()&&this.__rV.length>=this.getMaxConcurrentRequests())){return;
}if(this.getMaxTotalRequests()!=null&&this.__rW>=this.getMaxTotalRequests()){return;
}var v=this.__rU.shift();
var w=new qx.io.remote.Exchange(v);
this.__rW++;
this.__rV.push(w);
this._debug();
w.addListener(n,this._onsending,this);
w.addListener(d,this._onreceiving,this);
w.addListener(g,this._oncompleted,this);
w.addListener(s,this._oncompleted,this);
w.addListener(j,this._oncompleted,this);
w.addListener(k,this._oncompleted,this);
w._start=(new Date).valueOf();
w.send();
if(this.__rU.length>0){this._check();
}},_remove:function(x){qx.lang.Array.remove(this.__rV,x);
x.dispose();
this._check();
},__rY:0,_onsending:function(e){e.getTarget().getRequest()._onsending(e);
},_onreceiving:function(e){e.getTarget().getRequest()._onreceiving(e);
},_oncompleted:function(e){var z=e.getTarget().getRequest();
var y=q+e.getType();
this._remove(e.getTarget());
try{if(z[y]){z[y](e);
}}catch(A){this.error("Request "+z+" handler "+y+" threw an error: ",A);
try{if(z[r]){var event=qx.event.Registration.createEvent(s,qx.event.type.Event);
z[r](event);
}}catch(B){}}},_oninterval:function(e){var I=this.__rV;

if(I.length==0){this.__rX.stop();
return;
}var D=(new Date).valueOf();
var G;
var E;
var H=this.getDefaultTimeout();
var F;
var C;

for(var i=I.length-1;i>=0;i--){G=I[i];
E=G.getRequest();

if(E.isAsynchronous()){F=E.getTimeout();
if(F==0){continue;
}
if(F==null){F=H;
}C=D-G._start;

if(C>F){this.warn("Timeout: transport "+G.toHashCode());
this.warn(C+"ms > "+F+"ms");
G.timeout();
}}}},_applyEnabled:function(J,K){if(J){this._check();
}this.__rX.setEnabled(J);
},add:function(L){L.setState(a);

if(L.isAsynchronous()){this.__rU.push(L);
}else{this.__rU.unshift(L);
}this._check();

if(this.getEnabled()){this.__rX.start();
}},abort:function(M){var N=M.getTransport();

if(N){N.abort();
}else if(qx.lang.Array.contains(this.__rU,M)){qx.lang.Array.remove(this.__rU,M);
}}},destruct:function(){this._disposeArray(b);
this._disposeObjects(l);
this.__rU=null;
}});
})();
(function(){var f="cell.empty",e="cell.column",d="updated",c="cell.row",b="qx.event.type.Event",a="qx.ui.virtual.layer.WidgetCell";
qx.Class.define(a,{extend:qx.ui.virtual.layer.Abstract,include:[qx.ui.core.MChildrenHandling],construct:function(g){qx.ui.virtual.layer.Abstract.call(this);
this.setZIndex(2);
this._cellProvider=g;
this.__JX=[];
},properties:{anonymous:{refine:true,init:false}},events:{updated:b},members:{__JX:null,getRenderedCellWidget:function(h,j){var k=this.getColumnSizes().length;
var p=this.getRowSizes().length;
var o=this.getFirstRow();
var n=this.getFirstColumn();

if(h<o||h>=o+p||j<n||j>=n+k){return null;
}var m=(j-n)+(h-o)*k;
var l=this._getChildren()[m];

if(l.getUserData(f)){return null;
}else{return l;
}},_getSpacer:function(){var q=this.__JX.pop();

if(!q){q=new qx.ui.core.Spacer();
q.setUserData(f,1);
}return q;
},_activateNotEmptyChild:function(r){var s=qx.ui.core.FocusHandler.getInstance().getActiveWidget();
if(s==r||qx.ui.core.Widget.contains(r,s)){var t=this._getChildren();

for(var i=t.length-1;i>=0;i--){if(!t[i].getUserData(f)){t[i].activate();
break;
}}}},_fullUpdate:function(u,v,w,z){var B=this._cellProvider;
var F=this._getChildren();

for(var i=0;i<F.length;i++){var D=F[i];

if(D.getUserData(f)){this.__JX.push(D);
}else{this._activateNotEmptyChild(D);
B.poolCellWidget(D);
}}this._removeAll();
var top=0;
var G=0;

for(var y=0;y<w.length;y++){for(var x=0;x<z.length;x++){var E=u+y;
var C=v+x;
var A=B.getCellWidget(E,C)||this._getSpacer();
A.setUserBounds(G,top,z[x],w[y]);
A.setUserData(c,E);
A.setUserData(e,C);
this._add(A);
G+=z[x];
}top+=w[y];
G=0;
}this.fireEvent(d);
},_updateLayerWindow:function(H,I,J,K){var W=H+J.length-1;
var N=I+K.length-1;
var S={firstRow:Math.max(H,this.getFirstRow()),lastRow:Math.min(W,this._lastRow),firstColumn:Math.max(I,this.getFirstColumn()),lastColumn:Math.min(N,this._lastColumn)};
this._lastColumn=N;
this._lastRow=W;

if(S.firstRow>S.lastRow||S.firstColumn>S.lastColumn){return this._fullUpdate(H,I,J,K);
}var X=this._getChildren();
var L=this.getColumnSizes().length;
var U=[];
var R={};

for(var Y=H;Y<=W;Y++){U[Y]=[];

for(var Q=I;Q<=N;Q++){if(Y>=S.firstRow&&Y<=S.lastRow&&Q>=S.firstColumn&&Q<=S.lastColumn){var x=Q-this.getFirstColumn();
var y=Y-this.getFirstRow();
var M=y*L+x;
U[Y][Q]=X[M];
R[M]=true;
}}}var T=this._cellProvider;
var X=this._getChildren();

for(var i=0;i<X.length;i++){if(!R[i]){var V=X[i];

if(V.getUserData(f)){this.__JX.push(V);
}else{this._activateNotEmptyChild(V);
T.poolCellWidget(V);
}}}this._removeAll();
var top=0;
var O=0;

for(var y=0;y<J.length;y++){for(var x=0;x<K.length;x++){var Y=H+y;
var Q=I+x;
var P=U[Y][Q]||T.getCellWidget(Y,Q)||this._getSpacer();
P.setUserBounds(O,top,K[x],J[y]);
P.setUserData(c,Y);
P.setUserData(e,Q);
this._add(P);
O+=K[x];
}top+=J[y];
O=0;
}this.fireEvent(d);
}},destruct:function(){var ba=this._getChildren();

for(var i=0;i<ba.length;i++){ba[i].dispose();
}this._cellProvider=this.__JX=null;
}});
})();
(function(){var i="mouseup",h="mousedown",g="losecapture",f="mouseover",e="mousemove",d="removeItem",c="keypress",b="addItem",a="qx.ui.virtual.selection.Abstract";
qx.Class.define(a,{extend:qx.ui.core.selection.Abstract,construct:function(j,k){qx.ui.core.selection.Abstract.call(this);
this._pane=j;
this._delegate=k||{};
},members:{_isSelectable:function(l){return this._delegate.isItemSelectable?this._delegate.isItemSelectable(l):true;
},_styleSelectable:function(m,n,o){if(this._delegate.styleSelectable){this._delegate.styleSelectable(m,n,o);
}},attachMouseEvents:function(){var p=this._pane.getContainerElement();
p.addListener(h,this.handleMouseDown,this);
p.addListener(i,this.handleMouseUp,this);
p.addListener(f,this.handleMouseOver,this);
p.addListener(e,this.handleMouseMove,this);
p.addListener(g,this.handleLoseCapture,this);
},detatchMouseEvents:function(){var q=this._pane.getContainerElement();
q.removeListener(h,this.handleMouseDown,this);
q.removeListener(i,this.handleMouseUp,this);
q.removeListener(f,this.handleMouseOver,this);
q.removeListener(e,this.handleMouseMove,this);
q.removeListener(g,this.handleLoseCapture,this);
},attachKeyEvents:function(r){r.addListener(c,this.handleKeyPress,this);
},detachKeyEvents:function(s){s.removeListener(c,this.handleKeyPress,this);
},attachListEvents:function(t){t.addListener(b,this.handleAddItem,this);
t.addListener(d,this.handleRemoveItem,this);
},detachListEvents:function(u){u.removeListener(b,this.handleAddItem,this);
u.removeListener(d,this.handleRemoveItem,this);
},_capture:function(){this._pane.capture();
},_releaseCapture:function(){this._pane.releaseCapture();
},_getScroll:function(){return {left:this._pane.getScrollX(),top:this._pane.getScrollY()};
},_scrollBy:function(v,w){this._pane.setScrollX(this._pane.getScrollX()+v);
this._pane.setScrollY(this._pane.getScrollY()+w);
},_getLocation:function(){var x=this._pane.getContentElement().getDomElement();
return x?qx.bom.element.Location.get(x):null;
},_getDimension:function(){return this._pane.getInnerSize();
}},destruct:function(){this._pane=this._delegate=null;
}});
})();
(function(){var d="Color",c="_applyColorOdd",b="_applyColorEven",a="qx.ui.virtual.layer.AbstractBackground";
qx.Class.define(a,{extend:qx.ui.virtual.layer.Abstract,construct:function(e,f){qx.ui.virtual.layer.Abstract.call(this);

if(e){this.setColorEven(e);
}
if(f){this.setColorOdd(f);
}this.__Lb={};
this.__Lc={};
},properties:{colorEven:{nullable:true,check:d,apply:b,themeable:true},colorOdd:{nullable:true,check:d,apply:c,themeable:true}},members:{__Ld:null,__Le:null,__Lb:null,__Lc:null,setColor:function(g,h){if(h){this.__Lb[g]=qx.theme.manager.Color.getInstance().resolve(h);
}else{delete (this.__Lb[g]);
}},clearCustomColors:function(){this.__Lb={};
this.updateLayerData();
},getColor:function(i){var j=this.__Lb[i];

if(j){return j;
}else{return i%2==0?this.__Ld:this.__Le;
}},_applyColorEven:function(k,l){if(k){this.__Ld=qx.theme.manager.Color.getInstance().resolve(k);
}else{this.__Ld=null;
}this.updateLayerData();
},_applyColorOdd:function(m,n){if(m){this.__Le=qx.theme.manager.Color.getInstance().resolve(m);
}else{this.__Le=null;
}this.updateLayerData();
},setBackground:function(o,p){if(p){this.__Lc[o]=qx.theme.manager.Decoration.getInstance().resolve(p);
}else{delete (this.__Lc[o]);
}this.updateLayerData();
},getBackground:function(q){return this.__Lc[q];
}},destruct:function(){this.__Lb=this.__Lc=null;
}});
})();
(function(){var i="widgetbrowser/people.json",h="model",g="widgetbrowser.pages.List",f="no model...",e="model.people",d="firstname",c=", ";
qx.Class.define(g,{extend:widgetbrowser.pages.AbstractPage,construct:function(){widgetbrowser.pages.AbstractPage.call(this);
this.initWidgets();
this.loadData();
},members:{__Rz:null,initWidgets:function(){var j=this._widgets;
var k=this.__Rz=new qx.ui.list.List().set({height:280,width:150,labelPath:d,labelOptions:{converter:function(m,n){return n?n.getLastname()+c+m:f;
}}});
j.push(k);
this.add(k);
var l={sorter:function(a,b){a=a.getLastname();
b=b.getLastname();
return a>b?1:a<b?-1:0;
},group:function(o){return o.getLastname().charAt(0).toUpperCase();
}};
k.setDelegate(l);
},loadData:function(){var p=i;
p=qx.util.ResourceManager.getInstance().toUri(p);
var q=new qx.data.store.Json(p);
q.bind(e,this.__Rz,h);
}}});
})();
(function(){var d="qx.ui.virtual.selection.Row",c="above",b="under",a="one";
qx.Class.define(d,{extend:qx.ui.virtual.selection.Abstract,members:{_getItemCount:function(){return this._pane.getRowConfig().getItemCount();
},_getSelectableFromMouseEvent:function(event){var e=this._pane.getCellAtPosition(event.getDocumentLeft(),event.getDocumentTop());

if(!e){return null;
}return this._isSelectable(e.row)?e.row:null;
},getSelectables:function(f){var g=[];

for(var i=0,l=this._getItemCount();i<l;i++){if(this._isSelectable(i)){g.push(i);
}}return g;
},_getSelectableRange:function(h,j){var k=[];
var n=Math.min(h,j);
var m=Math.max(h,j);

for(var i=n;i<=m;i++){if(this._isSelectable(i)){k.push(i);
}}return k;
},_getFirstSelectable:function(){var o=this._getItemCount();

for(var i=0;i<o;i++){if(this._isSelectable(i)){return i;
}}return null;
},_getLastSelectable:function(){var p=this._getItemCount();

for(var i=p-1;i>=0;i--){if(this._isSelectable(i)){return i;
}}return null;
},_getRelatedSelectable:function(q,r){if(r==c){var t=q-1;
var s=0;
var u=-1;
}else if(r==b){var t=q+1;
var s=this._getItemCount()-1;
var u=1;
}else{return null;
}
for(var i=t;i!==s+u;i+=u){if(this._isSelectable(i)){return i;
}}return null;
},_getPage:function(v,w){if(w){return this._getFirstSelectable();
}else{return this._getLastSelectable();
}},_selectableToHashCode:function(x){return x;
},_scrollItemIntoView:function(y){this._pane.scrollRowIntoView(y);
},_getSelectableLocationX:function(z){return {left:0,right:this._pane.getColumnConfig().getTotalSize()-1};
},_getSelectableLocationY:function(A){var D=this._pane.getRowConfig();
var C=D.getItemPosition(A);
var B=C+D.getItemSize(A)-1;
return {top:C,bottom:B};
},_applyDefaultSelection:function(){if(this.getMode()===a&&this.isSelectionEmpty()){var E=this._getFirstSelectable();

if(E!=null){this.selectItem(E);
}}}}});
})();
(function(){var e="change",d="qx.event.type.Event",c="qx.ui.virtual.core.Axis";
qx.Class.define(c,{extend:qx.core.Object,construct:function(f,g){qx.core.Object.call(this);
this.itemCount=g;
this.defaultItemSize=f;
this.customSizes={};
},events:{"change":d},members:{__KW:null,getDefaultItemSize:function(){return this.defaultItemSize;
},setDefaultItemSize:function(h){if(this.defaultItemSize!==h){this.defaultItemSize=h;
this.__KW=null;
this.fireNonBubblingEvent(e);
}},getItemCount:function(){return this.itemCount;
},setItemCount:function(j){if(this.itemCount!==j){this.itemCount=j;
this.__KW=null;
this.fireNonBubblingEvent(e);
}},setItemSize:function(k,l){if(this.customSizes[k]==l){return;
}
if(l===null){delete this.customSizes[k];
}else{this.customSizes[k]=l;
}this.__KW=null;
this.fireNonBubblingEvent(e);
},getItemSize:function(m){return this.customSizes[m]||this.defaultItemSize;
},resetItemSizes:function(){this.customSizes={};
this.__KW=null;
this.fireNonBubblingEvent(e);
},__KX:function(){if(this.__KW){return this.__KW;
}var p=this.defaultItemSize;
var w=this.itemCount;
var r=[];

for(var t in this.customSizes){var n=parseInt(t,10);

if(n<w){r.push(n);
}}
if(r.length==0){var s=[{startIndex:0,endIndex:w-1,firstItemSize:p,rangeStart:0,rangeEnd:w*p-1}];
this.__KW=s;
return s;
}r.sort(function(a,b){return a>b?1:-1;
});
var s=[];
var o=0;

for(var i=0;i<r.length;i++){var n=r[i];

if(n>=w){break;
}var v=this.customSizes[n];
var q=n*p+o;
o+=v-p;
s[i]={startIndex:n,firstItemSize:v,rangeStart:q};

if(i>0){s[i-1].rangeEnd=q-1;
s[i-1].endIndex=n-1;
}}if(s[0].rangeStart>0){s.unshift({startIndex:0,endIndex:s[0].startIndex-1,firstItemSize:p,rangeStart:0,rangeEnd:s[0].rangeStart-1});
}var x=s[s.length-1];
var u=(w-x.startIndex-1)*p;
x.rangeEnd=x.rangeStart+x.firstItemSize+u-1;
x.endIndex=w-1;
this.__KW=s;
return s;
},__KY:function(y){var z=this.__KW||this.__KX();
var A=0;
var C=z.length-1;
while(true){var D=A+((C-A)>>1);
var B=z[D];

if(B.rangeEnd<y){A=D+1;
}else if(B.rangeStart>y){C=D-1;
}else{return B;
}}},getItemAtPosition:function(E){if(E<0||E>=this.getTotalSize()){return null;
}var G=this.__KY(E);
var I=G.rangeStart;
var F=G.startIndex;
var J=G.firstItemSize;

if(I+J>E){return {index:F,offset:E-I};
}else{var H=this.defaultItemSize;
return {index:F+1+Math.floor((E-I-J)/H),offset:(E-I-J)%H};
}},__La:function(K){var L=this.__KW||this.__KX();
var M=0;
var O=L.length-1;
while(true){var P=M+((O-M)>>1);
var N=L[P];

if(N.endIndex<K){M=P+1;
}else if(N.startIndex>K){O=P-1;
}else{return N;
}}},getItemPosition:function(Q){if(Q<0||Q>=this.itemCount){return null;
}var R=this.__La(Q);

if(R.startIndex==Q){return R.rangeStart;
}else{return R.rangeStart+R.firstItemSize+(Q-R.startIndex-1)*this.defaultItemSize;
}},getTotalSize:function(){var S=this.__KW||this.__KX();
return S[S.length-1].rangeEnd+1;
},getItemSizes:function(T,U){var V=this.customSizes;
var Y=this.defaultItemSize;
var X=0;
var W=[];
var i=0;

while(X<U){var ba=V[T++]||Y;
X+=ba;
W[i++]=ba;

if(T>=this.itemCount){break;
}}return W;
}},destruct:function(){this.customSizes=this.__KW=null;
}});
})();
(function(){var q="px;",p="left: 0;",o="</div>",n="top:",m="position: absolute;",k="<div style='",j="'>",h="background-color:",g="",f="qx.ui.virtual.layer.Row",c="block",e="width:",d="height:",b="row-layer",a="none";
qx.Class.define(f,{extend:qx.ui.virtual.layer.AbstractBackground,properties:{appearance:{refine:true,init:b}},members:{_fullUpdate:function(r,s,t,u){var B=[];
var A=qx.lang.Array.sum(u);
var C=[];
var top=0;
var E=r;
var x=0;

for(var y=0;y<t.length;y++){var D=this.getBackground(E);

if(D){C.push({childIndex:x,decorator:D,width:A,height:t[y]});
B.push(k,m,p,n,top,q,j,D.getMarkup(),o);
x++;
}else{var z=this.getColor(E);

if(z){B.push(k,m,p,n,top,q,d,t[y],q,e,A,q,h,z,j,o);
x++;
}}top+=t[y];
E+=1;
}var v=this.getContentElement().getDomElement();
v.style.display=a;
v.innerHTML=B.join(g);
for(var i=0,l=C.length;i<l;i++){var w=C[i];
w.decorator.resize(v.childNodes[w.childIndex].firstChild,w.width,w.height);
}v.style.display=c;
this._width=A;
},_updateLayerWindow:function(F,G,H,I){if(F!==this.getFirstRow()||H.length!==this.getRowSizes().length||this._width<qx.lang.Array.sum(I)){this._fullUpdate(F,G,H,I);
}},setColor:function(J,K){qx.ui.virtual.layer.AbstractBackground.prototype.setColor.call(this,J,K);

if(this.__Lf(J)){this.updateLayerData();
}},setBackground:function(L,M){qx.ui.virtual.layer.AbstractBackground.prototype.setBackground.call(this,L,M);

if(this.__Lf(L)){this.updateLayerData();
}},__Lf:function(N){var P=this.getFirstRow();
var O=P+this.getRowSizes().length-1;
return N>=P&&N<=O;
}}});
})();
(function(){var k="Boolean",j="qx.event.type.Event",i="queued",h="String",g="sending",f="receiving",d="aborted",c="failed",b="nocache",a="completed",P="qx.io.remote.Response",O="POST",N="configured",M="timeout",L="GET",K="Pragma",J="no-url-params-on-post",I="PUT",H="no-cache",G="Cache-Control",r="Content-Type",s="text/plain",p="application/xml",q="application/json",n="text/html",o="application/x-www-form-urlencoded",l="qx.io.remote.Exchange",m="Integer",t="X-Qooxdoo-Response-Type",u="HEAD",y="qx.io.remote.Request",x="_applyResponseType",A="_applyState",z="text/javascript",C="changeState",B="_applyProhibitCaching",w="",F="_applyMethod",E="DELETE",D="boolean";
qx.Class.define(y,{extend:qx.core.Object,construct:function(Q,R,S){qx.core.Object.call(this);
this.__rO={};
this.__rP={};
this.__rQ={};
this.__rR={};

if(Q!==undefined){this.setUrl(Q);
}
if(R!==undefined){this.setMethod(R);
}
if(S!==undefined){this.setResponseType(S);
}this.setProhibitCaching(true);
this.__rS=++qx.io.remote.Request.__rS;
},events:{"created":j,"configured":j,"sending":j,"receiving":j,"completed":P,"aborted":j,"failed":P,"timeout":P},statics:{__rS:0,methodAllowsRequestBody:function(T){return (T==O)||(T==I);
}},properties:{url:{check:h,init:w},method:{check:[L,O,I,u,E],apply:F,init:L},asynchronous:{check:k,init:true},data:{check:h,nullable:true},username:{check:h,nullable:true},password:{check:h,nullable:true},state:{check:[N,i,g,f,a,d,M,c],init:N,apply:A,event:C},responseType:{check:[s,z,q,p,n],init:s,apply:x},timeout:{check:m,nullable:true},prohibitCaching:{check:function(v){return typeof v==D||v===J;
},init:true,apply:B},crossDomain:{check:k,init:false},fileUpload:{check:k,init:false},transport:{check:l,nullable:true},useBasicHttpAuth:{check:k,init:false},parseJson:{check:k,init:true}},members:{__rO:null,__rP:null,__rQ:null,__rR:null,__rS:null,send:function(){qx.io.remote.RequestQueue.getInstance().add(this);
},abort:function(){qx.io.remote.RequestQueue.getInstance().abort(this);
},reset:function(){switch(this.getState()){case g:case f:this.error("Aborting already sent request!");
case i:this.abort();
break;
}},isConfigured:function(){return this.getState()===N;
},isQueued:function(){return this.getState()===i;
},isSending:function(){return this.getState()===g;
},isReceiving:function(){return this.getState()===f;
},isCompleted:function(){return this.getState()===a;
},isAborted:function(){return this.getState()===d;
},isTimeout:function(){return this.getState()===M;
},isFailed:function(){return this.getState()===c;
},__rT:qx.event.GlobalError.observeMethod(function(e){var U=e.clone();
U.setTarget(this);
this.dispatchEvent(U);
}),_onqueued:function(e){this.setState(i);
this.__rT(e);
},_onsending:function(e){this.setState(g);
this.__rT(e);
},_onreceiving:function(e){this.setState(f);
this.__rT(e);
},_oncompleted:function(e){this.setState(a);
this.__rT(e);
this.dispose();
},_onaborted:function(e){this.setState(d);
this.__rT(e);
this.dispose();
},_ontimeout:function(e){this.setState(M);
this.__rT(e);
this.dispose();
},_onfailed:function(e){this.setState(c);
this.__rT(e);
this.dispose();
},_applyState:function(V,W){},_applyProhibitCaching:function(X,Y){if(!X){this.removeParameter(b);
this.removeRequestHeader(K);
this.removeRequestHeader(G);
return;
}if(X!==J||this.getMethod()!=O){this.setParameter(b,new Date().valueOf());
}else{this.removeParameter(b);
}this.setRequestHeader(K,H);
this.setRequestHeader(G,H);
},_applyMethod:function(ba,bb){if(qx.io.remote.Request.methodAllowsRequestBody(ba)){this.setRequestHeader(r,o);
}else{this.removeRequestHeader(r);
}var bc=this.getProhibitCaching();
this._applyProhibitCaching(bc,bc);
},_applyResponseType:function(bd,be){this.setRequestHeader(t,bd);
},setRequestHeader:function(bf,bg){this.__rO[bf]=bg;
},removeRequestHeader:function(bh){delete this.__rO[bh];
},getRequestHeader:function(bi){return this.__rO[bi]||null;
},getRequestHeaders:function(){return this.__rO;
},setParameter:function(bj,bk,bl){if(bl){this.__rQ[bj]=bk;
}else{this.__rP[bj]=bk;
}},removeParameter:function(bm,bn){if(bn){delete this.__rQ[bm];
}else{delete this.__rP[bm];
}},getParameter:function(bo,bp){if(bp){return this.__rQ[bo]||null;
}else{return this.__rP[bo]||null;
}},getParameters:function(bq){return (bq?this.__rQ:this.__rP);
},setFormField:function(br,bs){this.__rR[br]=bs;
},removeFormField:function(bt){delete this.__rR[bt];
},getFormField:function(bu){return this.__rR[bu]||null;
},getFormFields:function(){return this.__rR;
},getSequenceNumber:function(){return this.__rS;
}},destruct:function(){this.setTransport(null);
this.__rO=this.__rP=this.__rQ=this.__rR=null;
}});
})();
(function(){var a="qx.util.Delegate";
qx.Class.define(a,{statics:{getMethod:function(b,c){if(qx.util.Delegate.containsMethod(b,c)){return b[c];
}return null;
},containsMethod:function(d,e){var f=qx.lang.Type;

if(f.isObject(d)){return f.isFunction(d[e]);
}return false;
}}});
})();

});