(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n.n(r),s=n(4),a=n.n(s),i=(n(14),n(3)),o=n.n(i),u=n(5),j=n(6),p=n(7),b=n(9),h=n(8),d=(n(16),n(0)),f=function(t){Object(b.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(j.a)(this,n);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={isLoading:!0,groups:[]},t}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var t=Object(u.a)(o.a.mark((function t(){var e,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/api/customer");case 2:return e=t.sent,t.next=5,e.json();case 5:n=t.sent,this.setState({customer:n,isLoading:!1});case 7:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state,e=t.customer;return t.isLoading?Object(d.jsx)("p",{children:"Loading..."}):Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h2",{children:"Customer Info"}),"Firstname: ",e.firstname,Object(d.jsx)("br",{}),"Lastname: ",e.lastname,Object(d.jsx)("br",{}),"Age: ",e.age,Object(d.jsx)("br",{}),"Address: ",e.address,Object(d.jsx)("br",{}),"Copyrightby: ",Object(d.jsx)("a",{href:"{customer.copyright}",children:e.copyright}),Object(d.jsx)("br",{})]})}}]),n}(r.Component),g=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,s=e.getLCP,a=e.getTTFB;n(t),r(t),c(t),s(t),a(t)}))};a.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root")),g()}},[[18,1,2]]]);
//# sourceMappingURL=main.84b96c80.chunk.js.map