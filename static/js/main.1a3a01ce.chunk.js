(this["webpackJsonpwhat-to-watch"]=this["webpackJsonpwhat-to-watch"]||[]).push([[0],{73:function(e,t,a){"use strict";a.r(t);var c,n,r,s,i=a(1),l=a.n(i),o=a(18),d=a.n(o),j=a(6),u=a(2),m=a(9),b=a(4);!function(e){e.SignIn="/login",e.Main="/",e.Film="/films/:id",e.MyList="/my-list",e.Player="/player/:id",e.Favorites="/favorites",e.Overview="/films/:id/overview",e.Reviews="/films/:id/reviews",e.Details="/films/:id/details",e.Similar="/films/:id/similar",e.AddReview="/films/:id/review",e.Comments="/comments/:id",e.Page404="/page404"}(c||(c={})),function(e){e.Films="/films",e.Login="/login",e.Logout="/logout",e.Promo="/promo",e.PostComment="/comments/:id",e.Favorites="/favorite",e.FavoriteStatus="/favorite/:film_id/:status"}(n||(n={})),function(e){e.Auth="AUTH",e.NoAuth="NO_AUTH",e.Unknown="UNKNOWN"}(r||(r={})),function(e){e.SetGenre="genre/setGenre",e.SetGenres="genre/setGenres",e.SetApi="data/setApi",e.LoadFilms="data/loadFilms",e.LoadPromo="data/loadPromo",e.LoadFilmComments="data/loadFilmComments",e.LoadSimilarFilms="data/loadSimilarFilms",e.LoadFavorites="data/loadFavorites",e.RedirectToRoute="data/redirectToRoute",e.SetIsFavoritesLoading="data/setIsFavoritesLoading",e.SetIsFilmsDataLoading="data/setIsFilmsDataLoading",e.SetIsReviewPosting="data/isReviewPosting",e.LoadUserInfo="data/loadUserInfo",e.SetAuthorizationStatus="user/setAuthorizationStatus"}(s||(s={}));var f="All genres",O="\u041f\u0440\u0435\u0434\u043b\u0430\u0433\u0430\u0435\u043c \u0410\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f",h="\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435",_="\u0412\u043e\u0437\u043d\u0438\u043a\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u0444\u0438\u043b\u044c\u043c\u043e\u0432",v="\u0412\u043e\u0437\u043d\u0438\u043a\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u044b\u0445 \u0444\u0438\u043b\u044c\u043c\u043e\u0432",x="\u0412\u043e\u0437\u043d\u0438\u043a\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u043f\u043e\u0445\u043e\u0436\u0438\u0445 \u0444\u0438\u043b\u044c\u043c\u043e\u0432",p="\u0412\u043e\u0437\u043d\u0438\u043a\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0435\u0432",g="\u0412\u043e\u0437\u043d\u0438\u043a\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438",N="\u0412\u043e\u0437\u043d\u0438\u043a\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0432\u043d\u0435\u0441\u0435\u043d\u0438\u0438 \u0432 \u0441\u043f\u0438\u0441\u043e\u043a \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0433\u043e",w=a(0);var y=function(){return Object(w.jsxs)(i.Fragment,{children:[Object(w.jsx)("h1",{children:"server respond 404"}),Object(w.jsx)("p",{children:"Can't find the page"}),Object(w.jsx)(b.a,{to:"/",children:"GO to the Home page"})]})};var k=function(e){var t=e.film,a=Object(i.useState)(!1),n=Object(m.a)(a,2),r=n[0],s=n[1],l=Object(j.h)(),o=Object(i.useRef)(null);if(Object(i.useEffect)((function(){var e;return r?e=setTimeout((function(){var e;return null===(e=o.current)||void 0===e?void 0:e.play()}),1e3):function(e){if(e){var t=e.src;e.src=t}}(o.current),function(){e&&clearTimeout(e)}}),[r]),!t)return Object(w.jsx)(y,{});var d=Object(j.f)(c.Film,{id:t.id});return Object(w.jsxs)("article",{className:"small-film-card catalog__films-card",onMouseEnter:function(){s(!0)},onMouseLeave:function(){s(!1)},onClick:function(){l.push(d)},children:[Object(w.jsx)("div",{className:"small-film-card__image",children:Object(w.jsx)("video",{poster:t.previewImage,src:t.previewVideoLink,ref:o,preload:"none",loop:!0,muted:!0})}),Object(w.jsx)("h3",{className:"small-film-card__title",children:Object(w.jsx)(b.a,{className:"small-film-card__link",to:d,children:t.name})})]})};var S=function(e){var t=e.films;return Object(w.jsx)("div",{className:"catalog__films-list",children:t.map((function(e){return Object(w.jsx)(k,{film:e},null===e||void 0===e?void 0:e.id)}))})};var F,C,L=function(){return Object(w.jsxs)("footer",{className:"page-footer",children:[Object(w.jsx)("div",{className:"logo",children:Object(w.jsxs)(b.a,{to:c.Main,className:"logo__link logo__link--light",children:[Object(w.jsx)("span",{className:"logo__letter logo__letter--1",children:"W"}),Object(w.jsx)("span",{className:"logo__letter logo__letter--2",children:"T"}),Object(w.jsx)("span",{className:"logo__letter logo__letter--3",children:"W"})]})}),Object(w.jsx)("div",{className:"copyright",children:Object(w.jsx)("p",{children:"\xa9 2019 What to watch Ltd."})})]})},A=a(5),I=Object(A.b)(s.SetGenre,(function(e){return{type:s.SetGenre,payload:e}})),R=Object(A.b)(s.LoadFilms,(function(e){return{type:s.LoadFilms,payload:{films:e}}})),T=Object(A.b)(s.LoadFavorites,(function(e){return{type:s.LoadFavorites,payload:e}})),D=Object(A.b)(s.LoadUserInfo,(function(e){return{type:s.LoadUserInfo,payload:e}})),P=Object(A.b)(s.SetGenres,(function(e){return{type:s.SetGenres,payload:{genres:e}}})),M=Object(A.b)(s.LoadPromo,(function(e){return{type:s.LoadPromo,payload:{promo:e}}})),W=Object(A.b)(s.LoadFilmComments,(function(e){return{type:s.LoadFilmComments,payload:e}})),U=Object(A.b)(s.LoadSimilarFilms,(function(e){return{type:s.LoadSimilarFilms,payload:{similarFilms:e}}})),H=Object(A.b)(s.SetIsFilmsDataLoading,(function(e){return{type:s.SetIsFilmsDataLoading,payload:e}})),E=Object(A.b)(s.SetIsFavoritesLoading,(function(e){return{type:s.SetIsFavoritesLoading,payload:e}})),G=Object(A.b)(s.SetIsReviewPosting,(function(e){return{type:s.SetIsReviewPosting,payload:e}})),z=Object(A.b)(s.SetAuthorizationStatus,(function(e){return{type:s.SetAuthorizationStatus,payload:e}})),B=Object(A.b)(s.RedirectToRoute,(function(e){return{type:s.RedirectToRoute,payload:e}})),q=a(17),Y=a.n(q),V=a(21),J=a(15),K={authorizationStatus:r.Unknown},$=Object(A.c)(K,(function(e){e.addCase(z,(function(e,t){e.authorizationStatus=t.payload}))})),Q=Object(A.c)({isFilmsDataLoading:!1,isReviewPosting:!1,isFavoritesLoading:!1},(function(e){e.addCase(H,(function(e,t){e.isFilmsDataLoading=t.payload})).addCase(G,(function(e,t){e.isReviewPosting=t.payload})).addCase(E,(function(e,t){e.isFavoritesLoading=t.payload}))})),X={genre:f,films:[],genres:[f],promo:null,similarFilms:[],comments:[],userInfo:null,favorites:[]},Z=Object(A.c)(X,(function(e){e.addCase(I,(function(e,t){e.genre=t.payload})).addCase(R,(function(e,t){e.films=t.payload.films})).addCase(P,(function(e,t){e.genres=t.payload.genres})).addCase(U,(function(e,t){e.similarFilms=t.payload.similarFilms})).addCase(M,(function(e,t){e.promo=t.payload.promo})).addCase(T,(function(e,t){e.favorites=t.payload})).addCase(W,(function(e,t){e.comments=t.payload})).addCase(D,(function(e,t){e.userInfo=t.payload}))}));!function(e){e.Auth="AUTH",e.Data="DATA",e.Status="STATUS"}(C||(C={}));var ee=Object(J.c)((F={},Object(V.a)(F,C.Auth,$),Object(V.a)(F,C.Data,Z),Object(V.a)(F,C.Status,Q),F)),te=a(20),ae=a(26),ce=a(27),ne=a.n(ce),re=a(41),se=a.n(re);ne.a.extend(se.a);var ie=function(e){var t=e.map((function(e){return(null===e||void 0===e?void 0:e.genre)||""}));return[f].concat(Object(ae.a)(new Set(t))).slice(0,10)},le=function(e){return{id:Number(e.id),name:e.name,posterImage:e.poster_image,previewImage:e.preview_image,backgroundImage:e.background_image,backgroundColor:e.background_color,videoLink:e.video_link,previewVideoLink:e.preview_video_link,description:e.description,rating:Number(e.rating),scoresCount:Number(e.scores_count),director:e.director,starring:e.starring,runTime:Number(e.run_time),genre:e.genre,released:e.released,isFavorite:e.is_favorite}},oe=function(e){return{id:e.id,email:e.email,name:e.name,avatarUrl:e.avatar_url,token:e.token}},de=function(e){switch(!0){case e<3:return"Bad";case e<5:return"Normal";case e<8:return"Good";case e<10:return"Very good";default:return"Awesome"}},je=function(e){var t=Math.floor(e/60),a=e-60*t;return t>0?"".concat(t,"h ").concat(a,"m"):"".concat(a,"m")},ue=function(e){return ne()(e).format("MMMM D, YYYY")},me=function(e){return e[C.Data].films},be=function(e){return e[C.Data].genre},fe=function(e){return e[C.Data].genres},Oe=function(e){return e[C.Data].promo},he=function(e){return e[C.Data].similarFilms},_e=function(e){return e[C.Data].comments},ve=function(e){return e[C.Data].userInfo},xe=function(e){return e[C.Data].favorites},pe=Object(te.a)(me,be,(function(e,t){return e.filter((function(e){return t===f||(null===e||void 0===e?void 0:e.genre)===t}))})),ge=function(e,t){return Y()("catalog__genres-item",{"catalog__genres-item--active":e===t})};var Ne=function(){var e=Object(u.c)(fe),t=Object(u.c)(be),a=Object(u.b)(),c=function(e){e.preventDefault();var t=e.currentTarget.textContent;t&&a(I(t))};if(!e)return Object(w.jsx)("div",{children:"Unknown genre"});var n=e.map((function(e){return Object(w.jsx)("li",{className:ge(t,e),children:Object(w.jsx)("a",{className:"catalog__genres-link",onClick:c,href:"/",children:e})},e)}));return Object(w.jsx)("ul",{className:"catalog__genres-list",children:n})};var we=function(e){var t=e.onClickHandler,a=e.visibility;return Object(w.jsx)("div",{className:"catalog__more",children:Object(w.jsx)("button",{className:Y()("catalog__button",{"visually-hidden":!a}),type:"button",onClick:t,children:"Show more"})})},ye=a(7),ke=a.n(ye),Se=a(16),Fe="wtw-token",Ce=function(e){localStorage.setItem(Fe,e)},Le=a(11),Ae={position:"absolute",top:"50%",left:"50%"};var Ie=function(){return Object(w.jsx)("img",{src:"img/spinner.gif",alt:"Spinner",style:Ae})},Re=function(e){return e[C.Auth].authorizationStatus};var Te=function(){var e=Object(u.c)(Re),t=Object(u.c)(ve),a=Object(j.h)(),s=Object(u.b)();return Object(w.jsxs)("ul",{className:"user-block",children:[e===r.Auth&&t&&Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("li",{className:"user-block__item",children:Object(w.jsx)("div",{className:"user-block__avatar",children:Object(w.jsx)("img",{src:t.avatarUrl,alt:"User avatar",width:"63",height:"63",onClick:function(){return a.push(c.MyList)}})})}),Object(w.jsx)("li",{className:"user-block__item",children:Object(w.jsx)("p",{className:"user-block__link",onClick:function(){return s(function(){var e=Object(Se.a)(ke.a.mark((function e(t,a,s){return ke.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.delete(n.Logout);case 2:localStorage.removeItem(Fe),t(z(r.NoAuth)),t(B(c.Main));case 5:case"end":return e.stop()}}),e)})));return function(t,a,c){return e.apply(this,arguments)}}())},children:"Sign out"})})]}),e!==r.Auth&&Object(w.jsx)("li",{className:"user-block__item",children:Object(w.jsx)("a",{className:"user-block__link",href:c.SignIn,children:"Sign in"})})]})};function De(){return Object(w.jsxs)("header",{className:"page-header film-card__head",children:[Object(w.jsx)("div",{className:"logo",children:Object(w.jsxs)("a",{className:"logo__link",href:"/",children:[Object(w.jsx)("span",{className:"logo__letter logo__letter--1",children:"W"}),Object(w.jsx)("span",{className:"logo__letter logo__letter--2",children:"T"}),Object(w.jsx)("span",{className:"logo__letter logo__letter--3",children:"W"})]})}),Object(w.jsx)(Te,{})]})}var Pe=Object(i.memo)(De);var Me=function(e){var t=e.film,a=Object(u.b)();return Object(w.jsxs)("button",{className:"btn btn--play film-card__button",type:"button",onClick:function(){if(t){var e=Object(j.f)(c.Player,{id:t.id});a(B(e))}},children:[Object(w.jsx)("svg",{viewBox:"0 0 19 19",width:"19",height:"19",children:Object(w.jsx)("use",{xlinkHref:"#play-s"})}),Object(w.jsx)("span",{children:"Play"})]})};var We=function(e){var t=e.film,a=Object(u.c)(Re),s=Object(u.b)();return Object(w.jsxs)("button",{className:"btn btn--list film-card__button",type:"button",onClick:function(){var e,i;a!==r.Auth&&s(B(c.SignIn)),t&&s((e=!t.isFavorite,i=t.id,function(){var t=Object(Se.a)(ke.a.mark((function t(a,c,r){var s,l,o,d,u,m;return ke.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=e?"1":"0",l=Object(j.f)(n.FavoriteStatus,{film_id:i,status:s}),a(E(!0)),t.prev=3,t.next=6,r.post(l);case 6:200===(o=t.sent).status&&(d=le(o.data),u=Object(ae.a)(c().DATA.films),m=u.map((function(e){return(null===e||void 0===e?void 0:e.id)===(null===d||void 0===d?void 0:d.id)?d:e})),a(R(m))),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(3),Object(Le.b)(N);case 13:return t.prev=13,a(E(!1)),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[3,10,13,16]])})));return function(e,a,c){return t.apply(this,arguments)}}()))},children:[Object(w.jsx)("svg",{viewBox:"0 0 19 20",width:"19",height:"20",children:(null===t||void 0===t?void 0:t.isFavorite)&&a===r.Auth?Object(w.jsx)("use",{xlinkHref:"#in-list"}):Object(w.jsx)("use",{xlinkHref:"#add"})}),Object(w.jsx)("span",{children:"My list"})]})};function Ue(e){var t=e.promo;return t?Object(w.jsx)("div",{className:"film-card__wrap",children:Object(w.jsxs)("div",{className:"film-card__info",children:[Object(w.jsx)("div",{className:"film-card__poster",children:Object(w.jsx)("img",{src:t.posterImage,alt:"".concat(t.name," poster"),width:"218",height:"327"})}),Object(w.jsxs)("div",{className:"film-card__desc",children:[Object(w.jsx)("h2",{className:"film-card__title",children:t.name}),Object(w.jsxs)("p",{className:"film-card__meta",children:[Object(w.jsx)("span",{className:"film-card__genre",children:t.genre}),Object(w.jsx)("span",{className:"film-card__year",children:t.released})]}),Object(w.jsxs)("div",{className:"film-card__buttons",children:[Object(w.jsx)(Me,{film:t}),Object(w.jsx)(We,{film:t})]})]})]})}):Object(w.jsx)(y,{})}var He=Object(i.memo)(Ue);var Ee=function(){console.log("MAI");var e=Object(u.c)(be),t=Object(u.c)(me),a=Object(u.c)(Oe),c=Object(i.useState)(8),r=Object(m.a)(c,2),s=r[0],l=r[1],o=Object(u.b)();Object(i.useEffect)((function(){o(function(){var e=Object(Se.a)(ke.a.mark((function e(t,a,c){var r,s,i;return ke.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get(n.Promo);case 2:r=e.sent,s=r.data,i=le(s),t(M(i));case 6:case"end":return e.stop()}}),e)})));return function(t,a,c){return e.apply(this,arguments)}}())}),[o,t]),Object(i.useEffect)((function(){l(8)}),[e]);var d=Object(u.c)(pe),j=Object(i.useMemo)((function(){return d.length>s}),[d.length,s]);return a?Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)("section",{className:"film-card",children:[Object(w.jsx)("div",{className:"film-card__bg",children:Object(w.jsx)("img",{src:a.backgroundImage,alt:"Film background"})}),Object(w.jsx)("h1",{className:"visually-hidden",children:"WTW"}),Object(w.jsx)(Pe,{}),Object(w.jsx)(He,{promo:a})]}),Object(w.jsxs)("div",{className:"page-content",children:[Object(w.jsxs)("section",{className:"catalog",children:[Object(w.jsx)("h2",{className:"catalog__title visually-hidden",children:"Catalog"}),Object(w.jsx)(Ne,{}),Object(w.jsx)(S,{films:d.slice(0,s)}),Object(w.jsx)(we,{onClickHandler:function(){l((function(e){return e+=8}))},visibility:j})]}),Object(w.jsx)(L,{})]})]}):Object(w.jsx)(Ie,{})},Ge=/\D\d|\d\D/i,ze=/^[^\s@]+@[^\s@]+\.[^\s@]+$/i,Be=function(e){return Ge.test(e)},qe=function(e){return ze.test(e)};var Ye=function(){var e=Object(u.c)(Re),t=Object(u.b)();e===r.Auth&&t(B(c.Main));var a=Object(i.useRef)(null),s=Object(i.useRef)(null);return Object(w.jsxs)("div",{className:"user-page",children:[Object(w.jsxs)("header",{className:"page-header user-page__head",children:[Object(w.jsx)("div",{className:"logo",children:Object(w.jsxs)("a",{href:c.Main,className:"logo__link",children:[Object(w.jsx)("span",{className:"logo__letter logo__letter--1",children:"W"}),Object(w.jsx)("span",{className:"logo__letter logo__letter--2",children:"T"}),Object(w.jsx)("span",{className:"logo__letter logo__letter--3",children:"W"})]})}),Object(w.jsx)("h1",{className:"page-title user-page__title",children:"Sign in"})]}),Object(w.jsx)("div",{className:"sign-in user-page__content",children:Object(w.jsxs)("form",{action:"#",className:"sign-in__form",onSubmit:function(e){e.preventDefault(),a.current&&s.current&&Be(s.current.value)&&qe(a.current.value)&&t(function(e){var t=e.login,a=e.password;return function(){var e=Object(Se.a)(ke.a.mark((function e(s,i,l){var o,d,j,u,m,b,f,O;return ke.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.post(n.Login,{email:t,password:a});case 3:o=e.sent,d=o.data,j=oe(d),u=j.id,m=j.email,b=j.name,f=j.avatarUrl,O=j.token,Ce(O),s(D({id:u,email:m,name:b,avatarUrl:f})),s(z(r.Auth)),s(B(c.Main)),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),Le.b.info(g);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t,a,c){return e.apply(this,arguments)}}()}({login:a.current.value,password:s.current.value})),a.current&&!qe(a.current.value)&&Object(Le.b)("\u0412 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043b\u043e\u0433\u0438\u043d\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f\u0442\u0435 \u0432\u0430\u043b\u0438\u0434\u043d\u044b\u0439 \u0430\u0434\u0440\u0435\u0441 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u043f\u043e\u0447\u0442\u044b"),s.current&&!Be(s.current.value)&&Object(Le.b)("\u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u0443 \u0438 \u0431\u0443\u043a\u0432\u0443!")},children:[Object(w.jsxs)("div",{className:"sign-in__fields",children:[Object(w.jsxs)("div",{className:"sign-in__field",children:[Object(w.jsx)("input",{className:"sign-in__input",type:"email",placeholder:"Email address",name:"user-email",id:"user-email",ref:a}),Object(w.jsx)("label",{className:"sign-in__label visually-hidden",htmlFor:"user-email",children:"Email address"})]}),Object(w.jsxs)("div",{className:"sign-in__field",children:[Object(w.jsx)("input",{className:"sign-in__input",type:"password",placeholder:"Password",autoComplete:"off",name:"user-password",id:"user-password",ref:s}),Object(w.jsx)("label",{className:"sign-in__label visually-hidden",htmlFor:"user-password",children:"Password"})]})]}),Object(w.jsx)("div",{className:"sign-in__submit",children:Object(w.jsx)("button",{className:"sign-in__btn",type:"submit",children:"Sign in"})})]})}),Object(w.jsxs)("footer",{className:"page-footer",children:[Object(w.jsx)("div",{className:"logo",children:Object(w.jsxs)("a",{href:"/",className:"logo__link logo__link--light",children:[Object(w.jsx)("span",{className:"logo__letter logo__letter--1",children:"W"}),Object(w.jsx)("span",{className:"logo__letter logo__letter--2",children:"T"}),Object(w.jsx)("span",{className:"logo__letter logo__letter--3",children:"W"})]})}),Object(w.jsx)("div",{className:"copyright",children:Object(w.jsx)("p",{children:"\xa9 2019 What to watch Ltd."})})]})]})};var Ve=function(e){var t=e.exact,a=e.path,n=e.render,s=Object(u.c)(Re);return Object(w.jsx)(j.b,{exact:t,path:a,render:function(){return s===r.Auth?n():Object(w.jsx)(j.a,{to:c.SignIn})}})},Je=function(e){return e[C.Status].isFilmsDataLoading},Ke=function(e){return e[C.Status].isReviewPosting},$e=function(e){return e[C.Status].isFavoritesLoading};var Qe=function(e){var t=e.value,a=e.handleReviewStarClick,c=e.isReviewPosting;return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("input",{className:"rating__input",id:"star-".concat(t),type:"radio",name:"rating",value:t,onChange:a,disabled:c}),Object(w.jsx)("label",{className:"rating__label",htmlFor:"star-".concat(t)})]})},Xe=10,Ze=0,et=50,tt=400,at=Array(Xe).fill(null).map((function(){return!1}));var ct=function(){var e=Object(u.c)(Ke),t=Object(u.b)(),a=Object(i.useState)(at),r=Object(m.a)(a,2),s=r[0],l=r[1],o=Object(i.useState)(""),d=Object(m.a)(o,2),b=d[0],f=d[1],O=Object(j.j)().id,_=function(){return s.findIndex((function(e){return e}))+1},v=function(e){var t=e.target,a=Number(t.value)-1;l(s.map((function(e,t){return t===a})))},x=Array(Xe).fill(null).map((function(t,a){var c=(Xe-a).toString();return Object(w.jsx)(Qe,{isReviewPosting:e,handleReviewStarClick:v,value:c},c)}));return Object(w.jsxs)("form",{className:"add-review__form",onSubmit:function(e){e.preventDefault();var a=String(_());t(function(e,t){var a=e.rating,r=e.comment;return function(){var e=Object(Se.a)(ke.a.mark((function e(s,i,l){var o,d;return ke.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=Object(j.f)(n.PostComment,{id:t}),d=Object(j.f)(c.Film,{id:t}),s(G(!0)),e.prev=3,e.next=6,l.post(o,{rating:a,comment:r}).then((function(){s(B(d)),s(G(!1))}));case 6:e.next=12;break;case 8:e.prev=8,e.t0=e.catch(3),s(G(!1)),Le.b.info(h);case 12:case"end":return e.stop()}}),e,null,[[3,8]])})));return function(t,a,c){return e.apply(this,arguments)}}()}({comment:b,rating:a},O))},children:[Object(w.jsx)("div",{className:"rating",children:Object(w.jsx)("div",{className:"rating__stars",children:x})}),Object(w.jsxs)("div",{className:"add-review__text",children:[Object(w.jsx)("textarea",{className:"add-review__textarea",name:"review-text",id:"review-text",placeholder:"Review text",onChange:function(e){var t=e.target;f(t.value)},disabled:e}),Object(w.jsx)("div",{className:"add-review__submit",children:Object(w.jsx)("button",{className:"add-review__btn",type:"submit",disabled:e||!(_()>Ze&&b.length>=et&&b.length<=tt),children:"Post"})})]})]})};var nt=function(){var e=Object(u.c)(me),t=Object(j.j)().id,a=e.find((function(e){return(null===e||void 0===e?void 0:e.id)===Number(t)})),n=Object(j.i)();if(!a)return Object(w.jsx)(y,{});var r=Object(j.f)(c.Film,{id:a.id});return Object(w.jsxs)("section",{className:"film-card film-card--full",children:[Object(w.jsxs)("div",{className:"film-card__header",children:[Object(w.jsx)("div",{className:"film-card__bg",children:Object(w.jsx)("img",{src:a.backgroundImage,alt:a.name})}),Object(w.jsx)("h1",{className:"visually-hidden",children:"WTW"}),Object(w.jsxs)("header",{className:"page-header",children:[Object(w.jsx)("div",{className:"logo",children:Object(w.jsxs)("a",{href:"/",className:"logo__link",children:[Object(w.jsx)("span",{className:"logo__letter logo__letter--1",children:"W"}),Object(w.jsx)("span",{className:"logo__letter logo__letter--2",children:"T"}),Object(w.jsx)("span",{className:"logo__letter logo__letter--3",children:"W"})]})}),Object(w.jsx)("nav",{className:"breadcrumbs",children:Object(w.jsxs)("ul",{className:"breadcrumbs__list",children:[Object(w.jsx)("li",{className:"breadcrumbs__item",children:Object(w.jsx)(b.a,{to:r,className:"breadcrumbs__link",children:a.name})}),Object(w.jsx)("li",{className:"breadcrumbs__item",children:Object(w.jsx)(b.a,{className:"breadcrumbs__link",to:n.pathname,children:"Add review"})})]})}),Object(w.jsx)(Te,{})]}),Object(w.jsx)("div",{className:"film-card__poster film-card__poster--small",children:Object(w.jsx)("img",{src:a.posterImage,alt:a.name,width:"218",height:"327"})})]}),Object(w.jsx)("div",{className:"add-review",children:Object(w.jsx)(ct,{})})]})};var rt=function(){var e=Object(u.c)(xe),t=Object(u.c)($e),a=Object(u.b)();return Object(i.useEffect)((function(){a(function(){var e=Object(Se.a)(ke.a.mark((function e(t,a,c){var r,s,i;return ke.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(E(!0)),e.next=4,c.get(n.Favorites);case 4:r=e.sent,s=r.data,i=s.map((function(e){return le(e)})),t(T(i)),t(E(!1)),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),t(E(!1)),Object(Le.b)(v);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,a,c){return e.apply(this,arguments)}}())}),[a]),t?Object(w.jsx)(Ie,{}):Object(w.jsxs)("div",{className:"user-page",children:[Object(w.jsxs)("header",{className:"page-header user-page__head",children:[Object(w.jsx)("div",{className:"logo",children:Object(w.jsxs)("a",{href:"/",className:"logo__link",children:[Object(w.jsx)("span",{className:"logo__letter logo__letter--1",children:"W"}),Object(w.jsx)("span",{className:"logo__letter logo__letter--2",children:"T"}),Object(w.jsx)("span",{className:"logo__letter logo__letter--3",children:"W"})]})}),Object(w.jsx)("h1",{className:"page-title user-page__title",children:"My list"}),Object(w.jsx)(Te,{})]}),Object(w.jsxs)("section",{className:"catalog",children:[Object(w.jsx)("h2",{className:"catalog__title visually-hidden",children:"Catalog"}),Object(w.jsx)(S,{films:e})]}),Object(w.jsxs)("footer",{className:"page-footer",children:[Object(w.jsx)("div",{className:"logo",children:Object(w.jsxs)("a",{href:"/",className:"logo__link logo__link--light",children:[Object(w.jsx)("span",{className:"logo__letter logo__letter--1",children:"W"}),Object(w.jsx)("span",{className:"logo__letter logo__letter--2",children:"T"}),Object(w.jsx)("span",{className:"logo__letter logo__letter--3",children:"W"})]})}),Object(w.jsx)("div",{className:"copyright",children:Object(w.jsx)("p",{children:"\xa9 2019 What to watch Ltd."})})]})]})},st=a(32);var it=function(){var e=Object(u.c)(me),t=Object(j.j)().id,a=Object(i.useRef)(null),c=a.current,n=Object(i.useRef)(null),r=n.current,s=Object(i.useState)(!0),l=Object(m.a)(s,2),o=l[0],d=l[1],b=Object(i.useState)(!0),f=Object(m.a)(b,2),O=f[0],h=f[1],_=Object(i.useState)(0),v=Object(m.a)(_,2),x=v[0],p=v[1],g=Object(i.useState)({duration:0,remainingTime:0}),N=Object(m.a)(g,2),k=N[0],S=k.duration,F=k.remainingTime,C=N[1],L=Object(j.h)();if(Object(i.useEffect)((function(){c&&(o?c.play():c.pause())}),[o,c]),Object(i.useEffect)((function(){if(c){var e=Math.round(c.duration);C((function(t){return Object(st.a)(Object(st.a)({},t),{},{duration:e,remainingTime:e})}))}}),[O,c]),void 0===t)return Object(w.jsx)(y,{});var A=O?"":function(e){var t=e>=3600?"-HH:mm:ss":"-mm:ss";return ne.a.duration(e,"seconds").format(t)}(F),I=e.find((function(e){return(null===e||void 0===e?void 0:e.id)===Number(t)}));return I?Object(w.jsxs)("div",{className:"player",children:[O&&Object(w.jsx)(Ie,{}),Object(w.jsx)("video",{src:I.videoLink,className:"player__video",poster:I.posterImage,ref:a,onLoadedData:function(){h(!1)},onTimeUpdate:function(){if(c&&r){var e=c.currentTime,t=e/S*100,a=Math.round(S*(100-t)/100);C((function(e){return{duration:e.duration,remainingTime:a}})),p(t),r.value=e}}}),Object(w.jsx)("button",{type:"button",className:"player__exit",onClick:function(){return L.go(-1)},children:"Exit"}),Object(w.jsxs)("div",{className:"player__controls",children:[Object(w.jsxs)("div",{className:"player__controls-row",children:[Object(w.jsxs)("div",{className:"player__time",children:[Object(w.jsx)("progress",{className:"player__progress",max:S,ref:n}),Object(w.jsx)("div",{className:"player__toggler",style:{left:"".concat(x,"%")},children:"Toggler"})]}),Object(w.jsx)("div",{className:"player__time-value",children:A})]}),Object(w.jsxs)("div",{className:"player__controls-row",children:[Object(w.jsxs)("button",{type:"button",className:"player__play",onClick:function(){d((function(e){return!e}))},children:[o?Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("svg",{viewBox:"0 0 14 21",width:"14",height:"21",children:Object(w.jsx)("use",{xlinkHref:"#pause"})}),Object(w.jsx)("span",{children:"Pause"})]}):Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("svg",{viewBox:"0 0 19 19",width:"19",height:"19",children:Object(w.jsx)("use",{xlinkHref:"#play-s"})}),Object(w.jsx)("span",{children:"Play"})]}),Object(w.jsx)("span",{children:"Play"})]}),Object(w.jsx)("div",{className:"player__name",children:I.name}),Object(w.jsxs)("button",{type:"button",className:"player__full-screen",onClick:function(){c&&c.requestFullscreen()},children:[Object(w.jsx)("svg",{viewBox:"0 0 27 27",width:"27",height:"27",children:Object(w.jsx)("use",{xlinkHref:"#full-screen"})}),Object(w.jsx)("span",{children:"Full screen"})]})]})]})]}):Object(w.jsx)(y,{})};var lt=function(e){var t=e.film;if(!t)return Object(w.jsx)(y,{});var a="".concat(t.starring.join(", "),".");return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)("div",{className:"film-rating",children:[Object(w.jsx)("div",{className:"film-rating__score",children:t.rating}),Object(w.jsxs)("p",{className:"film-rating__meta",children:[Object(w.jsx)("span",{className:"film-rating__level",children:de(t.rating)}),Object(w.jsxs)("span",{className:"film-rating__count",children:[t.scoresCount," ratings"]})]})]}),Object(w.jsxs)("div",{className:"film-card__text",children:[Object(w.jsxs)("p",{children:[t.description,"I"]}),Object(w.jsx)("p",{className:"film-card__director",children:Object(w.jsxs)("strong",{children:["Director: ",t.director]})}),Object(w.jsx)("p",{className:"film-card__starring",children:Object(w.jsxs)("strong",{children:["Starring: ",a]})})]})]})},ot={whiteSpace:"pre-line"};var dt=function(e){var t=e.film;if(!t)return Object(w.jsx)(y,{});var a=t.starring.join(",\n");return Object(w.jsxs)("div",{className:"film-card__text film-card__row",children:[Object(w.jsxs)("div",{className:"film-card__text-col",children:[Object(w.jsxs)("p",{className:"film-card__details-item",children:[Object(w.jsx)("strong",{className:"film-card__details-name",children:"Director"}),Object(w.jsx)("span",{className:"film-card__details-value",children:t.director})]}),Object(w.jsxs)("p",{className:"film-card__details-item",children:[Object(w.jsx)("strong",{className:"film-card__details-name",children:"Starring"}),Object(w.jsx)("span",{className:"film-card__details-value",style:ot,children:a})]})]}),Object(w.jsxs)("div",{className:"film-card__text-col",children:[Object(w.jsxs)("p",{className:"film-card__details-item",children:[Object(w.jsx)("strong",{className:"film-card__details-name",children:"Run Time"}),Object(w.jsx)("span",{className:"film-card__details-value",children:je(t.runTime)})]}),Object(w.jsxs)("p",{className:"film-card__details-item",children:[Object(w.jsx)("strong",{className:"film-card__details-name",children:"Genre"}),Object(w.jsx)("span",{className:"film-card__details-value",children:t.genre})]}),Object(w.jsxs)("p",{className:"film-card__details-item",children:[Object(w.jsx)("strong",{className:"film-card__details-name",children:"Released"}),Object(w.jsx)("span",{className:"film-card__details-value",children:t.released})]})]})]})},jt={wordBreak:"break-all"};var ut=function(e){var t=e.comment,a=new Date(t.date);return Object(w.jsxs)("div",{className:"review",children:[Object(w.jsxs)("blockquote",{className:"review__quote",children:[Object(w.jsx)("p",{className:"review__text",style:jt,children:t.comment}),Object(w.jsxs)("footer",{className:"review__details",children:[Object(w.jsx)("cite",{className:"review__author",children:t.user.name}),Object(w.jsx)("time",{className:"review__date",dateTime:a.toISOString(),children:ue(a)})]})]}),Object(w.jsx)("div",{className:"review__rating",children:t.rating})]})},mt={paddingTop:"20px",display:"grid",gridTemplateColumns:"1fr 1fr",gridAutoColumns:"minmax(0, 380px)",columnGap:"60px"};var bt,ft=function(e){var t=e.comments;return Object(w.jsx)("div",{className:"film-card__reviews film-card__row",style:mt,children:t.map((function(e){return Object(w.jsx)(ut,{comment:e},e.id)}))})};!function(e){e[e.Overview=0]="Overview",e[e.Details=1]="Details",e[e.Reviews=2]="Reviews"}(bt||(bt={}));var Ot=function(e){var t=e.film,a=e.comments,n=Object(i.useState)(bt.Overview),r=Object(m.a)(n,2),s=r[0],l=r[1];if(Object(i.useEffect)((function(){return l(bt.Overview)}),[]),null===t)return Object(w.jsx)(y,{});var o=Y()("film-nav__item",{"film-nav__item--active":s===bt.Overview}),d=Y()("film-nav__item",{"film-nav__item--active":s===bt.Details}),u=Y()("film-nav__item",{"film-nav__item--active":s===bt.Reviews});return Object(w.jsxs)("div",{className:"film-card__desc",children:[Object(w.jsx)("nav",{className:"film-nav film-card__nav",children:Object(w.jsxs)("ul",{className:"film-nav__list",children:[Object(w.jsx)("li",{className:o,children:Object(w.jsx)(b.a,{to:Object(j.f)(c.Overview,{id:t.id}),className:"film-nav__link",onClick:function(){return l(bt.Overview)},children:"Overview"})}),Object(w.jsx)("li",{className:d,children:Object(w.jsx)(b.a,{to:Object(j.f)(c.Details,{id:t.id}),className:"film-nav__link",onClick:function(){return l(bt.Details)},children:"Details"})}),Object(w.jsx)("li",{className:u,children:Object(w.jsx)(b.a,{to:Object(j.f)(c.Reviews,{id:t.id}),className:"film-nav__link",onClick:function(){return l(bt.Reviews)},children:"Reviews"})})]})}),Object(w.jsxs)(j.d,{children:[Object(w.jsx)(j.b,{exact:!0,path:[c.Overview,c.Film],render:function(){return Object(w.jsx)(lt,{film:t})}}),Object(w.jsx)(j.b,{exact:!0,path:c.Details,render:function(){return Object(w.jsx)(dt,{film:t})}}),Object(w.jsx)(j.b,{exact:!0,path:c.Reviews,render:function(){return Object(w.jsx)(ft,{comments:a})}})]})]})};var ht=function(e){var t=e.film,a=Object(u.c)(Re);if(null===t)return Object(w.jsx)(y,{});var n=Object(j.f)(c.AddReview,{id:t.id});return Object(w.jsx)("div",{className:"film-card__wrap",children:Object(w.jsxs)("div",{className:"film-card__desc",children:[Object(w.jsx)("h2",{className:"film-card__title",children:t.name}),Object(w.jsxs)("p",{className:"film-card__meta",children:[Object(w.jsx)("span",{className:"film-card__genre",children:t.genre}),Object(w.jsx)("span",{className:"film-card__year",children:t.released})]}),Object(w.jsxs)("div",{className:"film-card__buttons",children:[Object(w.jsx)(Me,{film:t}),Object(w.jsx)(We,{film:t}),Object(w.jsx)(b.a,{to:n,className:Y()("btn film-card__button",{"visually-hidden":a!==r.Auth}),children:"Add review"})]})]})})};var _t=function(){var e=Object(u.c)(me),t=Object(u.c)(_e),a=Object(u.c)(he),n=Object(j.k)().url,r=Object(j.j)().id,s=Object(u.b)(),l=e.find((function(e){return(null===e||void 0===e?void 0:e.id)===Number(r)})),o=Object(j.f)(c.Similar,{id:r}),d=Object(j.f)(c.Comments,{id:r});if(Object(i.useEffect)((function(){s(function(e){return function(){var t=Object(Se.a)(ke.a.mark((function t(a,c,n){var r,s,i;return ke.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n.get(e);case 3:r=t.sent,s=r.data,i=s.map((function(e){return le(e)})),a(U(i)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),Object(Le.b)(x);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e,a,c){return t.apply(this,arguments)}}()}(o)),s(function(e){return function(){var t=Object(Se.a)(ke.a.mark((function t(a,c,n){var r,s;return ke.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n.get(e);case 3:r=t.sent,s=r.data,a(W(s)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),Object(Le.b)(p);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e,a,c){return t.apply(this,arguments)}}()}(d))}),[n,d,s,o,l]),!l)return Object(w.jsx)(y,{});var m={backgroundColor:l.backgroundColor};return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)("section",{className:"film-card film-card--full",style:m,children:[Object(w.jsxs)("div",{className:"film-card__hero",children:[Object(w.jsx)("div",{className:"film-card__bg",children:Object(w.jsx)("img",{src:l.backgroundImage,alt:l.name})}),Object(w.jsx)("h1",{className:"visually-hidden",children:"WTW"}),Object(w.jsxs)("header",{className:"page-header film-card__head",children:[Object(w.jsx)("div",{className:"logo",children:Object(w.jsxs)(b.a,{to:c.Main,className:"logo__link",children:[Object(w.jsx)("span",{className:"logo__letter logo__letter--1",children:"W"}),Object(w.jsx)("span",{className:"logo__letter logo__letter--2",children:"T"}),Object(w.jsx)("span",{className:"logo__letter logo__letter--3",children:"W"})]})}),Object(w.jsx)(Te,{})]}),Object(w.jsx)(ht,{film:l})]}),Object(w.jsx)("div",{className:"film-card__wrap film-card__translate-top",children:Object(w.jsxs)("div",{className:"film-card__info",children:[Object(w.jsx)("div",{className:"film-card__poster film-card__poster--big",children:Object(w.jsx)("img",{src:l.posterImage,alt:l.name,width:"218",height:"327"})}),Object(w.jsx)(Ot,{film:l,comments:t})]})})]}),Object(w.jsxs)("div",{className:"page-content",children:[Object(w.jsxs)("section",{className:"catalog catalog--like-this",children:[Object(w.jsx)("h2",{className:"catalog__title",children:"More like this"}),Object(w.jsx)(S,{films:a.slice(0,4)})]}),Object(w.jsx)(L,{})]})]})},vt=a(10),xt=Object(vt.a)();var pt,gt=function(){return Object(u.c)(Je)?Object(w.jsx)(Ie,{}):Object(w.jsx)(j.c,{history:xt,children:Object(w.jsxs)(j.d,{children:[Object(w.jsx)(j.b,{exact:!0,path:c.Main,children:Object(w.jsx)(Ee,{})}),Object(w.jsx)(j.b,{exact:!0,path:c.SignIn,render:function(){return Object(w.jsx)(Ye,{})}}),Object(w.jsx)(Ve,{exact:!0,path:c.AddReview,render:function(){return Object(w.jsx)(nt,{})}}),Object(w.jsx)(j.b,{exact:!0,path:c.Page404,render:function(){return Object(w.jsx)(y,{})}}),Object(w.jsx)(j.b,{path:c.Film,render:function(){return Object(w.jsx)(_t,{})}}),Object(w.jsx)(Ve,{exact:!0,path:c.MyList,render:function(){return Object(w.jsx)(rt,{})}}),Object(w.jsx)(j.b,{exact:!0,path:c.Player,render:function(){return Object(w.jsx)(it,{})}}),Object(w.jsx)(Ve,{exact:!0,path:c.Favorites,render:function(){return Object(w.jsx)(rt,{})}}),Object(w.jsx)(j.b,{render:function(){return Object(w.jsx)(y,{})}})]})})},Nt=a(42),wt=a.n(Nt);!function(e){e[e.Unauthorized=401]="Unauthorized"}(pt||(pt={}));var yt=function(e){return function(e){return function(t){return t.type===s.RedirectToRoute&&xt.push(t.payload),e(t)}}},kt=(a(72),function(e){var t=wt.a.create({baseURL:"https://8.react.pages.academy/wtw",timeout:5e3});return t.interceptors.response.use((function(e){return e}),(function(t){var a=t.response;return(null===a||void 0===a?void 0:a.status)===pt.Unauthorized&&e(),Promise.reject(t)})),t.interceptors.request.use((function(e){var t=function(){var e=localStorage.getItem(Fe);return null!==e&&void 0!==e?e:""}();return t&&(e.headers["x-token"]=t),e}),(function(e){return Promise.reject(e)})),t}((function(){St.dispatch(z(r.NoAuth))}))),St=Object(A.a)({reducer:ee,middleware:function(e){return e({thunk:{extraArgument:kt}}).concat(yt)}});St.dispatch(function(){var e=Object(Se.a)(ke.a.mark((function e(t,a,c){return ke.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.get(n.Login).then((function(e){var a=e.data,c=oe(a),n=c.id,s=c.email,i=c.name,l=c.avatarUrl,o=c.token;Ce(o);var d={id:n,email:s,name:i,avatarUrl:l};t(z(r.Auth)),t(D(d))}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),Le.b.info(O);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t,a,c){return e.apply(this,arguments)}}()),St.dispatch(function(){var e=Object(Se.a)(ke.a.mark((function e(t,a,c){var r,s,i;return ke.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(H(!0)),e.next=4,c.get(n.Films);case 4:r=e.sent,s=r.data,i=s.map((function(e){return le(e)})),t(R(i)),t(P(ie(i))),t(H(!1)),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),t(H(!1)),Object(Le.b)(_);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,a,c){return e.apply(this,arguments)}}()),d.a.render(Object(w.jsx)(l.a.StrictMode,{children:Object(w.jsxs)(u.a,{store:St,children:[Object(w.jsx)(Le.a,{}),Object(w.jsx)(gt,{})]})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.1a3a01ce.chunk.js.map