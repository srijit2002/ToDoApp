(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a.n(n),c=a(8),l=a.n(c),o=a(3),i=a(5),d=a(11),r=function(e,t){if("INVALID_INPUT"===t.type)return Object(o.a)(Object(o.a)({},e),{},{modalCotent:t.payload,modalClass:"danger",isModalOpen:!0});if("ADD_ITEM"===t.type)return Object(o.a)(Object(o.a)({},e),{},{tasks:[].concat(Object(d.a)(e.tasks),[{content:t.payload,id:(new Date).getTime().toString()}]),modalCotent:"Item Added Successfully",modalClass:"success",isModalOpen:!0});if("EDIT_ITEM"===t.type){var a=e.tasks.map((function(e){return e.id===t.payload.id?Object(o.a)(Object(o.a)({},e),{},{content:t.payload.input}):e}));return Object(o.a)(Object(o.a)({},e),{},{tasks:a,modalCotent:"Item Edited Successfully",modalClass:"success",isModalOpen:!0,buttonText:"Add"})}if("DELETE_ITEM"===t.type){var n=e.tasks.filter((function(e){return e.id!==t.payload}));return Object(o.a)(Object(o.a)({},e),{},{tasks:n,modalCotent:"Item Deleted Successfully",modalClass:"success",isModalOpen:!0})}if("HIDE"===t.type)return Object(o.a)(Object(o.a)({},e),{},{isModalOpen:!1});if("EDITING_MODE"===t.type)return Object(o.a)(Object(o.a)({},e),{},{buttonText:t.payload,modalCotent:"Item is in editing mode",modalClass:"warning",isModalOpen:!0});if("CLEAR_ALL"===t.type)return Object(o.a)(Object(o.a)({},e),{},{tasks:[],modalCotent:"All Items cleared successfuly",modalClass:"success",isModalOpen:!0});throw new Error("Invalid Action Type")},u=a(1),j=s.a.createContext(),O=function(e){var t=e.children,a=Object(n.useState)(!1),s=Object(i.a)(a,2),c=s[0],l=s[1],o=Object(n.useState)(""),d=Object(i.a)(o,2),O=d[0],b=d[1],p=Object(n.useState)(""),m=Object(i.a)(p,2),f=m[0],y=m[1],E={tasks:localStorage.getItem("PendingTasks")&&JSON.parse(localStorage.getItem("PendingTasks"))||[],isModalOpen:!1,modalCotent:"",modalClass:"danger",buttonText:"Add"},I=Object(n.useReducer)(r,E),x=Object(i.a)(I,2),h=x[0],C=x[1];Object(n.useEffect)((function(){h.tasks!==[]&&localStorage.setItem("PendingTasks",JSON.stringify(h.tasks))}),[h.tasks]);Object(n.useEffect)((function(){if(h.isModalOpen){var e=setTimeout((function(){C({type:"HIDE",action:"Hide"})}),3e3);return function(){clearTimeout(e)}}}),[h]);return Object(u.jsx)(j.Provider,{value:{isInEditingMode:c,state:h,input:f,setInput:y,handleEvent:function(){f?c?(C({type:"EDIT_ITEM",payload:{id:O,input:f}}),y(""),l(!1),b("")):(C({type:"ADD_ITEM",payload:f}),y("")):(C({type:"INVALID_INPUT",payload:"Please enter some text"}),y(""))},handleEdit:function(e,t){b(e),l(!0),y(t),C({type:"EDITING_MODE",payload:"Save"})},handleDelete:function(e){C({type:"DELETE_ITEM",payload:e})},clearAll:function(){C({type:"CLEAR_ALL",payload:"success"})}},children:t})},b=function(e){var t=e.modalCotent,a=e.modalClass;return Object(u.jsx)("div",{className:"alert alert--".concat(a),children:t})},p=a(9),m=a(10),f=function(e){var t=e.content,a=e.id,s=Object(n.useContext)(j),c=s.handleEdit,l=s.handleDelete;return Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("h2",{className:"card__title",children:t}),Object(u.jsxs)("div",{className:"card__icons",children:[Object(u.jsx)(p.a,{className:"icon icon--edit",onClick:function(){return c(a,t)}}),Object(u.jsx)(m.a,{className:"icon icon--delete",onClick:function(){return l(a)}})]})]})},y=function(){var e=Object(n.useContext)(j),t=e.state,a=e.input,s=e.setInput,c=e.handleEvent,l=e.clearAll;return Object(u.jsxs)(u.Fragment,{children:[t.isModalOpen&&Object(u.jsx)(b,Object(o.a)({},t)),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("div",{className:"input__container",children:[Object(u.jsx)("input",{type:"text",value:a,onChange:function(e){s(e.target.value)},placeholder:"Enter Task"}),Object(u.jsx)("button",{className:"btn",onClick:c,children:t.buttonText})]}),Object(u.jsx)("div",{className:"tasks__container",children:t.tasks.map((function(e,t){return Object(u.jsx)(f,Object(o.a)({},e),e.id)}))}),0!==t.tasks.length&&Object(u.jsx)("button",{className:"btn btn--clr",onClick:l,children:"Clear All"})]})]})},E=function(){return Object(u.jsx)(O,{children:Object(u.jsx)(y,{})})};a(17);l.a.render(Object(u.jsx)(E,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.be43e778.chunk.js.map