(this["webpackJsonpdog-friend"]=this["webpackJsonpdog-friend"]||[]).push([[0],{137:function(e,n,t){"use strict";t.r(n);var c=t(1),o=t.n(c),s=t(15),a=t.n(s),i=t(38),r=t(18),l=t(8),d=(t(44),t(45),t(46),t(47),t.p+"static/media/qr-code.9aa4972f.svg"),b=t(2);var j=function(e){return Object(b.jsxs)("div",{className:"banner",children:[Object(b.jsx)("h1",{className:"banner__title",children:"\u0421\u0442\u0430\u043d\u044c\u0442\u0435 \u0441\u0435\u043c\u044c\u0435\u0439 \u0434\u043b\u044f \u043c\u0430\u043b\u044b\u0448\u0430! \u0412\u043e\u0437\u044c\u043c\u0438\u0442\u0435 \u0441\u043e\u0431\u0430\u043a\u0443 \u0438\u0437 \u043f\u0440\u0438\u044e\u0442\u0430!"}),Object(b.jsx)("img",{className:"banner__qr-code",src:d,alt:"QR-\u043a\u043e\u0434"}),Object(b.jsx)("p",{className:"banner__subtitle",children:"\u0421\u043a\u0430\u043d\u0438\u0440\u0443\u0439\u0442\u0435 QR-\u043a\u043e\u0434 \u0438\u043b\u0438 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u041e\u041a"}),Object(b.jsx)("button",{className:"banner__button",type:"button",onClick:e.onOpenMain,children:"OK"})]})},m=t(39);t(49),t(50);var _=function(e){return Object(b.jsxs)("div",{className:"promo promo__final ".concat(e.isOpen&&"promo__final_opened"),children:[Object(b.jsx)("h1",{className:"promo__final-title",children:"\u0417\u0410\u042f\u0412\u041a\u0410 \u041f\u0420\u0418\u041d\u042f\u0422\u0410"}),Object(b.jsx)("p",{className:"promo__final-text",children:"\u0414\u0435\u0440\u0436\u0438\u0442\u0435 \u0442\u0435\u043b\u0435\u0444\u043e\u043d \u043f\u043e\u0434 \u0440\u0443\u043a\u043e\u0439. \u0421\u043a\u043e\u0440\u043e \u0441 \u0412\u0430\u043c\u0438 \u0441\u0432\u044f\u0436\u0435\u0442\u0441\u044f \u043d\u0430\u0448 \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440."})]})};t(51),t(52);var u=function(e){var n=e.value,t=e.onButtonClick;return Object(b.jsx)("button",{className:"promo__keyboard_btn",onClick:function(){t(n)},children:n})},h=t(35),p=t.n(h);var O=function(e){return Object(b.jsxs)("div",{className:"promo ".concat(e.isOpen&&"promo_disabled"),children:[Object(b.jsx)("h1",{className:"promo__title",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 \u043d\u043e\u043c\u0435\u0440 \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u043e\u0433\u043e \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430"}),Object(b.jsx)(p.a,{className:"promo__input",mask:"+7 (999) 999 - 99 - 99",name:"phone",value:e.name,maskChar:"_",required:!0}),Object(b.jsx)("p",{className:"promo__text",children:"\u0438 \u0441 \u0412\u0430\u043c\u0438 \u0441\u0432\u044f\u0436\u0435\u0442\u0441\u044f \u043d\u0430\u0448 \u043c\u0435\u043d\u0435\u0436\u0434\u0435\u0440 \u0434\u043b\u044f \u0434\u0430\u043b\u044c\u043d\u0435\u0439\u0448\u0435\u0439 \u043a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u0446\u0438\u0438"}),Object(b.jsx)("div",{className:"promo__keyboard",children:e.buttons.map((function(n,t){return Object(b.jsx)(u,{value:n,onButtonClick:e.onHandleBtnClick},t)}))}),Object(b.jsxs)("div",{className:"promo__checkbox",children:[Object(b.jsx)("input",{type:"checkbox",className:"promo__check",checked:e.check,onChange:e.onCheck}),Object(b.jsx)("label",{className:"promo__check_text",children:"\u0421\u043e\u0433\u043b\u0430\u0441\u0438\u0435 \u043d\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445"})]}),Object(b.jsx)("span",{className:"promo__err promo__err_hidden",children:"\u041d\u0415\u0412\u0415\u0420\u041d\u041e \u0412\u0412\u0415\u0414\u0401\u041d \u041d\u041e\u041c\u0415\u0420"}),Object(b.jsx)("button",{className:"promo__btn",type:"button",onClick:e.onOpenFinal,children:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c \u043d\u043e\u043c\u0435\u0440"})]})};var x=function(e){var n=e.isOpen,t=e.onOpenFinal,c=e.onButtonClick,o=e.onCloseMain,s=e.name,a=e.check,i=e.onHandleCheck,r=e.onOpen;return Object(m.a)(e,["isOpen","onOpenFinal","onButtonClick","onCloseMain","name","check","onHandleCheck","onOpen"]),Object(b.jsxs)("div",{className:"main ".concat(n&&"main_opened"),children:[Object(b.jsx)("button",{className:"btn-close",type:"button",onClick:o}),Object(b.jsx)(O,{onOpenFinal:t,buttons:[1,2,3,4,5,6,7,8,9,"\u0421\u0442\u0435\u0440\u0435\u0442\u044c",0],onHandleBtnClick:c,name:s,check:a,onCheck:i,isOpen:r}),Object(b.jsx)(_,{isOpen:r}),Object(b.jsxs)("div",{className:"qr-zone",children:[Object(b.jsx)("p",{className:"qr-zone__text",children:"\u0421\u043a\u0430\u043d\u0438\u0440\u0443\u0439\u0442\u0435 QR-\u043a\u043e\u0434 \u0414\u041b\u042f \u041f\u041e\u041b\u0423\u0427\u0415\u041d\u0418\u042f \u0414\u041e\u041f\u041e\u041b\u041d\u0418\u0422\u0415\u041b\u042c\u041d\u041e\u0419 \u0418\u041d\u0424\u041e\u0420\u041c\u0410\u0426\u0418\u0418"}),Object(b.jsx)("img",{src:d,alt:"QR-\u043a\u043e\u0434",className:"qr-zone__image"})]})]})},k=t(36),f=t.n(k);var v=function(){var e=o.a.useState(!1),n=Object(l.a)(e,2),t=n[0],c=n[1],s=o.a.useState(!1),a=Object(l.a)(s,2),i=a[0],d=a[1],m=o.a.useState(["+7"]),_=Object(l.a)(m,2),u=_[0],h=_[1],p=o.a.useState(!1),O=Object(l.a)(p,2),k=O[0],v=O[1];function N(e,n){var t=document.querySelector(".promo__btn");!0!==e||!0!==n?(t.setAttribute("disabled",!0),t.classList.add("promo__btn_disabled")):!0===e&&!0===n&&(t.classList.remove("promo__btn_disabled"),t.removeAttribute("disabled"))}function C(e){var n=f.a.isMobilePhone(e,"ru-RU","strictMode"),t=document.querySelector(".promo__checkbox"),c=document.querySelector(".promo__err");return!1===n?(t.classList.add("promo__checkbox_hidden"),c.classList.remove("promo__err_hidden"),v(!1),N(k,n)):(t.classList.remove("promo__checkbox_hidden"),c.classList.add("promo__err_hidden")),n}return Object(b.jsxs)("div",{className:"page",children:[Object(b.jsxs)("div",{className:"page__titles ".concat(t&&"page__titles_disabled"),children:[Object(b.jsx)("h2",{className:"titles titles__item",children:"\u0432\u0435\u0440\u043d\u044b\u0439 \u0434\u0440\u0443\u0433"}),Object(b.jsx)("h2",{className:"titles titles__item",children:"\u041e\u043d \u0413\u041e\u0422\u041e\u0412 \u041f\u041e\u0414\u0410\u0420\u0418\u0422\u042c \u0420\u0410\u0414\u041e\u0421\u0422\u042c \u0417\u0410\u0411\u041e\u0422\u042b"}),Object(b.jsx)("h2",{className:"titles titles__item",children:"\u0418 \u041c\u041e\u0420\u0415 \u041f\u041e\u041b\u041e\u0416\u0418\u0422\u0415\u041b\u042c\u041d\u042b\u0425 \u042d\u041c\u041e\u0426\u0418\u0419"}),Object(b.jsx)("h2",{className:"titles titles__item",children:"\u043e\u043d \u0436\u0434\u0435\u0442 \u0442\u0435\u0431\u044f"})]}),Object(b.jsx)(j,{onOpenMain:function(){c(!0),N()}}),Object(b.jsx)(x,{onOpenFinal:function(){d(!0)},onOpen:i,onCloseMain:function(){c(!1),d(!1),h(["+7"]),v(!1)},isOpen:t,name:u,check:k,onHandleCheck:function(e){var n=e.target.checked;v(n),N(n,C(u.join("")))},onButtonClick:function(e){"\u0421\u0442\u0435\u0440\u0435\u0442\u044c"===e&&u.length>1?(u.pop(u.length),h(Object(r.a)(u)),C(u.join(""))):11===u.length?console.log("err to much numbers",u.length):"\u0421\u0442\u0435\u0440\u0435\u0442\u044c"!==e&&(h([].concat(Object(r.a)(u),[e])),u.push(e),C(u.join("")),N(C(u.join(""))))}})]})},N=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,138)).then((function(n){var t=n.getCLS,c=n.getFID,o=n.getFCP,s=n.getLCP,a=n.getTTFB;t(e),c(e),o(e),s(e),a(e)}))};a.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(i.a,{children:Object(b.jsx)(v,{})})}),document.getElementById("root")),N()},44:function(e,n,t){},45:function(e,n,t){},46:function(e,n,t){},47:function(e,n,t){},49:function(e,n,t){},50:function(e,n,t){},51:function(e,n,t){},52:function(e,n,t){}},[[137,1,2]]]);
//# sourceMappingURL=main.0dd66552.chunk.js.map