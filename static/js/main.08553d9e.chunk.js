(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,a){e.exports=a(67)},35:function(e,t,a){},60:function(e,t,a){},62:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(26),o=a.n(c),l=(a(35),a(2)),s=a(3),i=a(5),u=a(4),m=a(6),p=a(69),h=a(71),d=a(70),f=a(8),b=a.n(f),v=a(12),E=a(29),y=a(17),j=a(13),O=a.n(j),g=r.a.createContext(),C=function(e,t){switch(t.type){case"DELETE_CONTACT":return Object(y.a)({},e,{contacts:e.contacts.filter(function(e){return e.id!==t.payload})});case"ADD_CONTACT":return Object(y.a)({},e,{contacts:[t.payload].concat(Object(E.a)(e.contacts))});case"UPDATE_CONTACT":return Object(y.a)({},e,{contacts:e.contacts.map(function(e){return e.id===t.payload.id?e=t.payload:e})});default:return e}},N=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={res:{},contacts:[],contacts2:[],dispatch:function(e){a.setState(function(t){return C(t,e)})}},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(b.a.mark(function e(){var t;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://jsonplaceholder.typicode.com/users");case 2:t=e.sent,this.setState({contacts:t.data});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(g.Provider,{value:this.state},this.props.children)}}]),t}(n.Component),k=g.Consumer,w=a(68),x=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).onShowClick=function(e){a.setState({showContactInfo:!a.state.showContactInfo})},a.onDeleteClick=function(){var e=Object(v.a)(b.a.mark(function e(t,a){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.delete("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:a({type:"DELETE_CONTACT",payload:t}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),a({type:"DELETE_CONTACT",payload:t});case 9:case"end":return e.stop()}},e,this,[[0,6]])}));return function(t,a){return e.apply(this,arguments)}}(),a.state={showContactInfo:!0},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.contact,a=t.id,n=t.name,c=t.phone,o=t.email,l=this.state.showContactInfo;return r.a.createElement(k,null,function(t){var s=t.dispatch;return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("h4",null,n," ",r.a.createElement("i",{onClick:e.onShowClick,className:"fa fa-sort-down",style:{cursor:"pointer"}}),r.a.createElement("i",{className:"fas fa-times",style:{cursor:"pointer",float:"right",color:"red"},onClick:e.onDeleteClick.bind(e,a,s)}),r.a.createElement(w.a,{to:"contact/edit/".concat(a)},r.a.createElement("i",{className:"fas fa-pencil-alt",style:{cursor:"pointer",float:"right",color:"black",marginRight:"1rem"}}))),l?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Name : ",n),r.a.createElement("li",{className:"list-group-item"},"Email : ",o),r.a.createElement("li",{className:"list-group-item"},"Phone : ",c)):null)})}}]),t}(n.Component),S=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(k,null,function(e){var t=e.contacts;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"display-4 mb-2"},r.a.createElement("span",{className:"text-danger"},"Contact")," List"),t.map(function(e){return r.a.createElement(x,{key:e.id,contact:e})}))})}}]),t}(n.Component),T=(a(60),function(e){var t=e.branding;return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"/",className:"navbar-brand"},t),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(w.a,{to:"/",className:"nav-link"},r.a.createElement("i",{className:"fas fa-home"}),"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(w.a,{to:"/contact/add",className:"nav-link"},r.a.createElement("i",{className:"fas fa-plus"}),"Add")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(w.a,{to:"/about",className:"nav-link"},r.a.createElement("i",{className:"fas fa-question"}),"About"))))))});T.defaultProps={branding:"My Apps"};var A=T,D=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"About Contact Manager"),r.a.createElement("p",{className:"lead"},"Simple app to save contact"),r.a.createElement("p",{className:"text-secondary"},"Version 1.0.0"))}}]),t}(n.Component),M=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},r.a.createElement("span",{className:"text-danger"},"404 ")," Page not found"),r.a.createElement("p",{className:"lead"},"Sorry, that page did not exists"))}}]),t}(n.Component),P=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",body:""},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("LifecycleMethodTest... componentDidMount"),fetch("https://jsonplaceholder.typicode.com/posts/1").then(function(e){return e.json()}).then(function(t){return e.setState({title:t.title,body:t.body})})}},{key:"componentWillMount",value:function(){console.log("LifecycleMethodTest... componentWillMount")}},{key:"componentDidUpdate",value:function(e,t,a){console.log("LifecycleMethodTest... componentDidUpdate")}},{key:"getSnapshotBeforeUpdate",value:function(e,t){console.log("LifecycleMethodTest... getSnapshotBeforeUpdate")}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"LifecycleMethodTest Component"),r.a.createElement("h2",null,"Post"),r.a.createElement("p",null,this.state.title),r.a.createElement("p",null,this.state.body))}}]),t}(n.Component),L=(a(62),a(64),a(14)),q=a(27),_=a.n(q),U=function(e){var t=e.label,a=e.name,n=e.value,c=e.placeholder,o=e.type,l=e.onChange,s=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:a},t),r.a.createElement("input",{type:o,name:a,className:_()("form-control form-control-lg",{"is-invalid":s}),placeholder:c,value:n,onChange:l}),s&&r.a.createElement("div",{className:"invalid-feedback"},s))};U.defaultProps={type:"text"};var I=U,B=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",address:"",errors:{}},a.onChange=function(e){a.setState(Object(L.a)({},e.target.name,e.target.value))},a.onSubmit=function(){var e=Object(v.a)(b.a.mark(function e(t,n){var r,c,o,l,s,i;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),console.log(a.state),r=a.state,c=r.name,o=r.email,l=r.phone,r.address,""!==c){e.next=6;break}return a.setState({errors:{name:"Name is required"}}),e.abrupt("return");case 6:if(""!==o){e.next=9;break}return a.setState({errors:{email:"Email is required"}}),e.abrupt("return");case 9:if(""!==l){e.next=12;break}return a.setState({errors:{phone:"Phone is required"}}),e.abrupt("return");case 12:return s={name:c,email:o,phone:l},e.next=15,O.a.post("https://jsonplaceholder.typicode.com/users",s);case 15:i=e.sent,t({type:"ADD_CONTACT",payload:i.data}),a.setState({errors:{}}),a.props.history.push("/");case 19:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,c=t.phone,o=t.errors;return r.a.createElement(k,null,function(t){var l=t.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"New Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(I,{label:"Name",onChange:e.onChange,value:a,placeholder:"Enter Name...",name:"name",error:o.name}),r.a.createElement(I,{label:"Email",onChange:e.onChange,value:n,type:n,placeholder:"Enter Email...",name:"email",error:o.email}),r.a.createElement(I,{label:"Phone",onChange:e.onChange,value:c,placeholder:"Enter Phone...",name:"phone",error:o.phone}),r.a.createElement("input",{type:"submit",value:"Add Contact",className:"btn btn-light btn-block"}))))})}}]),t}(n.Component),W=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",address:"",errors:{}},a.onChange=function(e){a.setState(Object(L.a)({},e.target.name,e.target.value))},a.onSubmit=function(){var e=Object(v.a)(b.a.mark(function e(t,n){var r,c,o,l,s,i,u;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),console.log(a.state),r=a.state,c=r.name,o=r.email,l=r.phone,r.address,""!==c){e.next=6;break}return a.setState({errors:{name:"Name is required"}}),e.abrupt("return");case 6:if(""!==o){e.next=9;break}return a.setState({errors:{email:"Email is required"}}),e.abrupt("return");case 9:if(""!==l){e.next=12;break}return a.setState({errors:{phone:"Phone is required"}}),e.abrupt("return");case 12:return s={name:c,email:o,phone:l},i=a.props.match.params.id,e.next=16,O.a.put("https://jsonplaceholder.typicode.com/users/".concat(i),s);case 16:u=e.sent,t({type:"UPDATE_CONTACT",payload:u.data}),a.setState({errors:{}}),a.props.history.push("/");case 20:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(b.a.mark(function e(){var t,a,n;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,O.a.get("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:a=e.sent,n=a.data,this.setState({name:n.name,email:n.email,phone:n.phone});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,c=t.phone,o=t.errors;return r.a.createElement(k,null,function(t){var l=t.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Edit Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(I,{label:"Name",onChange:e.onChange,value:a,placeholder:"Enter Name...",name:"name",error:o.name}),r.a.createElement(I,{label:"Email",onChange:e.onChange,value:n,type:n,placeholder:"Enter Email...",name:"email",error:o.email}),r.a.createElement(I,{label:"Phone",onChange:e.onChange,value:c,placeholder:"Enter Phone...",name:"phone",error:o.phone}),r.a.createElement("input",{type:"submit",value:"Edit Contact",className:"btn btn-light btn-block"}))))})}}]),t}(n.Component),F=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(N,null,r.a.createElement(p.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(A,{branding:"Contact Manager"}),r.a.createElement("div",{className:"container"},r.a.createElement(h.a,null,r.a.createElement(d.a,{exact:!0,path:"/",component:S}),r.a.createElement(d.a,{exact:!0,path:"/about",component:D}),r.a.createElement(d.a,{exact:!0,path:"/contact/add",component:B}),r.a.createElement(d.a,{exact:!0,path:"/contact/edit/:id",component:W}),r.a.createElement(d.a,{exact:!0,path:"/test",component:P}),r.a.createElement(d.a,{component:M}))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,2,1]]]);
//# sourceMappingURL=main.08553d9e.chunk.js.map