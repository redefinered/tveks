(this.webpackJsonptveks=this.webpackJsonptveks||[]).push([[0],{131:function(e,t,n){e.exports=n(226)},141:function(e,t,n){},143:function(e,t,n){},197:function(e,t,n){},198:function(e,t,n){},226:function(e,t,n){"use strict";n.r(t);n(132);var a,r,c=n(0),s=n.n(c),u=n(10),o=n.n(u),i=n(50),l=n(36),m=n(111),p=(n(141),n(262)),b=n(261),g=n(74),h=n(117),d=Object(h.a)({palette:{primary:{main:"#556cd6"},secondary:{main:"#19857b"},error:{main:g.a.A400},background:{default:"#fff"}}}),O=n(66),f=n(67),j=n(73),v=n(71),E=n(22),S=n(12),x=n.n(S),k=n(52),I=n(252),w=n(257),C=n(255),U=n(254),y=n(265),F=n(264),N=n(119),_=(n(143),function(e){var t=e.handleChange,n=e.label,a=Object(N.a)(e,["handleChange","label"]);return s.a.createElement("div",{className:"group"},s.a.createElement("input",Object.assign({className:"form-input",onChange:t},a)),n?s.a.createElement("label",{className:"".concat(a.value.length?"shrink":""," form-input-label")},n):null)}),A=n(34),G=Object(A.createActions)({googleSignIn:[],emailSignIn:["data"],signInSuccess:["currentUser"],signInFailure:["error"],signOut:[],signOutSuccess:[],signOutFailure:["error"],signUp:["data"],signUpSuccess:[],signUpFailure:["error"],checkUserSession:[],purgeStore:[]}),T=G.Types,B=G.Creators,L=(n(197),function(e){Object(j.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(O.a)(this,n),(a=t.call(this,e)).handleSubmit=function(){var e=Object(k.a)(x.a.mark((function e(t){var n,r,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),n=a.state,r=n.email,c=n.password,a.props.emailSignInAction({email:r,password:c});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.handleChange=function(e){var t=e.target,n=t.value,r=t.name;a.setState(Object(E.a)({},r,n))},a.state={email:"",password:""},a}return Object(f.a)(n,[{key:"render",value:function(){var e=this.props,t=e.isFetching,n=e.error;return s.a.createElement(I.a,{maxWidth:"sm"},t&&s.a.createElement(U.a,null),s.a.createElement(F.a,{pt:2},s.a.createElement(C.a,{variant:"h3",gutterBottom:!0},"I-login mo email mo, beks."),s.a.createElement(C.a,{variant:"subtitle1",gutterBottom:!0},"Kung wala kang account, lumayas ka dito!"," ",s.a.createElement("span",{role:"img","aria-label":"angry"},"\ud83d\ude21"))),n&&s.a.createElement(y.a,{style:{marginBottom:10},severity:"error"},n),s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement(_,{name:"email",type:"email",handleChange:this.handleChange,value:this.state.email,label:"email",required:!0}),s.a.createElement(_,{name:"password",type:"password",value:this.state.password,handleChange:this.handleChange,label:"password",required:!0}),s.a.createElement("div",{className:"buttons"},s.a.createElement(w.a,{type:"submit",variant:"contained",color:"primary"},"I-pasok mo!"))))}}]),n}(s.a.Component)),R={emailSignInAction:B.emailSignIn,googleSignInAction:B.googleSignIn},P=Object(l.b)((function(e){var t=e.auth;return{isFetching:t.isFetching,error:t.error}}),R)(L),W=(n(198),function(){return s.a.createElement("div",{className:"sign-in-and-sign-up"},s.a.createElement(P,null))}),H=n(75),D=n(112),M=n.n(D),z=n(16),J=n(25),K=n(256),q=n(114),V=n.n(q),Q=n(113),X=n.n(Q),Y=n(263),Z=n(266),$=Object(J.a)(),ee=function(e){for(var t=e.maxNumberChannel,n=e.selectedChannel,a=s.a.useState(null),r=Object(H.a)(a,2),c=r[0],u=r[1],o=function(){u(null)},i=[],l=1;l<=t;l++)i.push(l);return s.a.createElement(s.a.Fragment,null,s.a.createElement(w.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){u(e.currentTarget)}},"Channel ".concat(n)),s.a.createElement(Y.a,{id:"simple-menu",anchorEl:c,keepMounted:!0,open:Boolean(c),onClose:o},i.map((function(e){return s.a.createElement(Z.a,{key:e,onClick:o},e)}))))},te=function(){var e=Object(z.e)().channel;console.log({channel:e});var t=s.a.useState(e),n=Object(H.a)(t,2),a=n[0],r=n[1],c=s.a.useState(null),u=Object(H.a)(c,2),o=u[0],i=u[1];s.a.useEffect((function(){console.log({selectedChannel:a}),parseInt(a)<1&&r(99),parseInt(a)>99&&r(1),$.push("/".concat(a))}),[a]);return s.a.createElement(I.a,{maxWidth:"sm"},s.a.createElement(F.a,{my:2,style:{textAlign:"right"}},s.a.createElement(ee,{maxNumberChannel:99,selectedChannel:a}),s.a.createElement(K.a,{onClick:function(){return e=parseInt(a)-1,r(e),void i(null)}},s.a.createElement(X.a,null)),s.a.createElement(K.a,{onClick:function(){return e=parseInt(a)+1,r(e),void i(null)}},s.a.createElement(V.a,null))),s.a.createElement(F.a,null,o&&s.a.createElement(y.a,{style:{marginBottom:10},severity:"error"},o),s.a.createElement(M.a,{url:"http://195.181.160.220:2080/".concat(a,"/video.m3u8"),controls:!0,onError:function(){i("Failed to load the stream, please try other channels.")},onBuffer:function(){return console.log("Buffering...")},style:{maxWidth:"100%",backgroundColor:"black"}})))},ne=n(42),ae=Object(ne.a)([function(e){return e.auth}],(function(e){return e.currentUser})),re=n(258),ce=n(259),se=n(260),ue=n(115),oe=n.n(ue),ie=Object(re.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)},flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),le=Object(ne.b)({currentUser:ae}),me=Object(l.b)(le)((function(e){var t=e.logoutAction,n=e.currentUser,a=ie();return s.a.createElement(s.a.Fragment,null,s.a.createElement(ce.a,{position:"static"},s.a.createElement(se.a,null,s.a.createElement(K.a,{edge:"start",className:a.menuButton,color:"inherit","aria-label":"menu"},s.a.createElement(oe.a,null)),s.a.createElement(C.a,{variant:"h6",className:a.title},"TVeks"),s.a.createElement(w.a,{onClick:function(){n&&t()},color:"inherit"},n?"Sign out":"Sign in"))),s.a.createElement(i.a,{basename:"/tveks"},s.a.createElement(z.a,{path:"/:channel",component:te})))})),pe=function(e){Object(j.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(O.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleLogout=function(){e.props.signOutAction()},e}return Object(f.a)(n,[{key:"componentDidMount",value:function(){this.props.checkUserSessionAction()}},{key:"render",value:function(){return this.props.currentUser?s.a.createElement(me,{logoutAction:this.handleLogout}):s.a.createElement(W,null)}}]),n}(s.a.Component),be=Object(ne.b)({currentUser:ae}),ge={checkUserSessionAction:B.checkUserSession,signOutAction:B.signOut,purgeStoreAction:B.purgeStore},he=Object(l.b)(be,ge)(pe),de=n(28),Oe=n(70),fe=n(116),je=n(118),ve=n(88),Ee=n.n(ve),Se=n(9),xe=Object(A.createReducer)({currentUser:null,isFetching:!1,error:null},(a={},Object(E.a)(a,T.EMAIL_SIGN_IN,(function(e){return Object(Se.a)(Object(Se.a)({},e),{},{isFetching:!0,error:null})})),Object(E.a)(a,T.SIGN_IN_SUCCESS,(function(e,t){var n=t.currentUser;return Object(Se.a)(Object(Se.a)({},e),{},{currentUser:n,isFetching:!1,error:null})})),Object(E.a)(a,T.SIGN_OUT,(function(e){return Object(Se.a)(Object(Se.a)({},e),{},{isFetching:!0,error:null})})),Object(E.a)(a,T.SIGN_OUT_SUCCESS,(function(e){return Object(Se.a)(Object(Se.a)({},e),{},{currentUser:null,isFetching:!1,error:null})})),Object(E.a)(a,T.SIGN_IN_FAILURE,(function(e,t){return Object(Se.a)(Object(Se.a)({},e),{},{isFetching:!1,error:t.error})})),Object(E.a)(a,T.SIGN_OUT_FAILURE,(function(e,t){return Object(Se.a)(Object(Se.a)({},e),{},{isFetching:!1,error:t.error})})),Object(E.a)(a,T.SIGN_UP_SUCCESS,(function(e){return Object(Se.a)(Object(Se.a)({},e),{},{error:null})})),Object(E.a)(a,T.SIGN_UP_FAILURE,(function(e,t){return Object(Se.a)(Object(Se.a)({},e),{},{error:t.error})})),a)),ke=Object(A.createActions)({getHost:[],getHostSuccess:["data"],getHostFailure:["error"]}),Ie=ke.Types,we=(ke.Creators,Object(A.createReducer)({host:null,error:null,isFetching:!1},(r={},Object(E.a)(r,Ie.GET_HOST,(function(e){return Object(Se.a)(Object(Se.a)({},e),{},{error:null,isFetching:!0})})),Object(E.a)(r,Ie.GET_HOST_SUCCESS,(function(e,t){var n=t.data.host;return Object(Se.a)(Object(Se.a)({},e),{},{isFetching:!1,host:n})})),Object(E.a)(r,Ie.GET_HOST_FAILURE,(function(e,t){var n=t.error;return Object(Se.a)(Object(Se.a)({},e),{},{isFetching:!1,error:n})})),r))),Ce={key:"root",storage:Ee.a},Ue=Object(Oe.a)(Ce,{auth:xe,channel:we}),ye=n(19),Fe=n(46),Ne=n.n(Fe);n(220),n(224);Ne.a.initializeApp({apiKey:"AIzaSyCpo_Cnun5J1tzu7WEWDi-41644e7s5WeM",authDomain:"tveks-7bd0d.firebaseapp.com",databaseURL:"https://tveks-7bd0d.firebaseio.com",projectId:"tveks-7bd0d",storageBucket:"tveks-7bd0d.appspot.com",messagingSenderId:"688558364783",appId:"1:688558364783:web:b427b4a5ea9e3c5830959a"});var _e=function(){var e=Object(k.a)(x.a.mark((function e(t,n){var a,r,c,s;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return a=Ge.doc("users/".concat(t.uid)),e.next=5,a.get();case 5:if(e.sent.exists){e.next=17;break}return r=t.displayName,c=t.email,s=new Date,e.prev=9,e.next=12,a.set(Object(Se.a)({displayName:r,email:c,createdAt:s},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",a);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,n){return e.apply(this,arguments)}}(),Ae=Ne.a.auth(),Ge=Ne.a.firestore(),Te=new Ne.a.auth.GoogleAuthProvider;Te.setCustomParameters({prompt:"select_account"});Ne.a;var Be=x.a.mark(Me),Le=x.a.mark(ze),Re=x.a.mark(Je),Pe=x.a.mark(Ke),We=x.a.mark(qe),He=x.a.mark(Ve),De=x.a.mark(Qe);function Me(e,t){var n,a;return x.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(ye.b)(_e,e,t);case 3:return n=r.sent,r.next=6,n.get();case 6:return a=r.sent,r.next=9,Object(ye.d)(B.signInSuccess(Object(Se.a)({id:a.id},a.data())));case 9:r.next=15;break;case 11:return r.prev=11,r.t0=r.catch(0),r.next=15,Object(ye.d)(B.signInFailure(r.t0));case 15:case"end":return r.stop()}}),Be,null,[[0,11]])}function ze(){var e,t;return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Ae.signInWithPopup(Te);case 3:return e=n.sent,t=e.user,n.next=7,Me(t);case 7:n.next=13;break;case 9:return n.prev=9,n.t0=n.catch(0),n.next=13,Object(ye.d)(B.signInFailure(n.t0.message));case 13:case"end":return n.stop()}}),Le,null,[[0,9]])}function Je(e){var t,n,a,r,c;return x.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return t=e.data,n=t.email,a=t.password,console.log("user",n),s.prev=2,s.next=5,Ae.signInWithEmailAndPassword(n,a);case 5:return r=s.sent,c=r.user,console.log("user",c),s.next=10,Me(c);case 10:s.next=16;break;case 12:return s.prev=12,s.t0=s.catch(2),s.next=16,Object(ye.d)(B.signInFailure(s.t0.message));case 16:case"end":return s.stop()}}),Re,null,[[2,12]])}function Ke(){var e;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,new Promise((function(e,t){var n=Ae.onAuthStateChanged((function(t){n(),e(t)}),t)}));case 3:if(e=t.sent){t.next=6;break}return t.abrupt("return");case 6:return t.next=8,Me(e);case 8:t.next=14;break;case 10:return t.prev=10,t.t0=t.catch(0),t.next=14,Object(ye.d)(B.signInFailure(t.t0));case 14:case"end":return t.stop()}}),Pe,null,[[0,10]])}function qe(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Ae.signOut();case 3:return e.next=5,Object(ye.d)(B.signOutSuccess());case 5:e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(0),e.next=11,Object(ye.d)(B.signOutFailure(e.t0));case 11:case"end":return e.stop()}}),We,null,[[0,7]])}function Ve(e){var t,n,a,r,c,s;return x.a.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return u.prev=0,t=e.data,n=t.displayName,a=t.email,r=t.password,u.next=4,Ae.createUserWithEmailAndPassword(a,r);case 4:return c=u.sent,s=c.user,u.next=8,Me(s,{displayName:n});case 8:return u.next=10,Object(ye.d)(B.signUpSuccess());case 10:u.next=16;break;case 12:return u.prev=12,u.t0=u.catch(0),u.next=16,Object(ye.d)(B.signUpFailure(u.t0.message));case 16:case"end":return u.stop()}}),He,null,[[0,12]])}function Qe(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ye.e)(T.GOOGLE_SIGN_IN,ze);case 2:return e.next=4,Object(ye.e)(T.EMAIL_SIGN_IN,Je);case 4:return e.next=6,Object(ye.e)(T.CHECK_USER_SESSION,Ke);case 6:return e.next=8,Object(ye.e)(T.SIGN_OUT,qe);case 8:return e.next=10,Object(ye.e)(T.SIGN_UP,Ve);case 10:case"end":return e.stop()}}),De)}var Xe=x.a.mark(Ye);function Ye(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ye.a)([Object(ye.c)(Qe)]);case 2:case"end":return e.stop()}}),Xe)}Object(fe.createLogger)({collapsed:!0});var Ze=Object(je.a)(),$e=[Ze];var et=Object(de.e)((function(e,t){return"PURGE_STORE"===t.type&&(console.log("store purged!"),Ee.a.removeItem("persist:primary"),e=void 0),Ue(e,t)}),de.a.apply(void 0,$e));Ze.run(Ye);var tt=Object(Oe.b)(et),nt=function(){return s.a.createElement(l.a,{store:et},s.a.createElement(i.a,null,s.a.createElement(m.a,{persistor:tt},s.a.createElement(b.a,{theme:d},s.a.createElement(p.a,null),s.a.createElement(he,null)))))};o.a.render(s.a.createElement(nt,null),document.getElementById("root"))}},[[131,1,2]]]);
//# sourceMappingURL=main.cf507387.chunk.js.map