(this.webpackJsonpmovietracker=this.webpackJsonpmovietracker||[]).push([[0],{89:function(n,e,A){"use strict";A.r(e);var t,i,r,a,c,o,d,s,l,g,m,h,b,j,p,f,u=A(0),v=A.n(u),w=A(23),O=A.n(w),x=A(4),B=A(7),E=A(21),Q=A.n(E),I=A(26),C=A(20),y=A.n(C),z="4e44d9029b1270a757cddc766a1bcb63",k="https://api.themoviedb.org/",S="3/discover/movie?api_key=".concat(z,"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_watch_monetization_types=flatrate"),N="https://content.jwplatform.com/manifests/yp34SRmf.m3u8",M=function(n){return"".concat(k,"3/movie/").concat(n,"/reviews?api_key=").concat(z,"&language=en-US")},D=function(n){return"".concat(k,"3/movie/").concat(n,"/videos?api_key=").concat(z,"&language=en-US")},L=A(90),P=A(5),F=A(6),Z=A(28),R=A(32),Y=A.n(R),H={whileHover:{scale:1.1},transition:{duration:2,ease:"easeOut"}},T={visible:{opacity:1,y:0,transition:{duration:.5,ease:"easeOut"}},hidden:{opacity:0,y:-100},exit:{opacity:0,y:0,transition:{duration:.5,ease:"easeOut"}}},G={whileHover:{scale:1.1},whileFocus:{scale:1.2},transition:{duration:2,ease:"easeOut"}},X=A(45),W=A.n(X),J=A(1),U=function(){var n=Object(R.useModali)({animated:!0,large:!0,closeButton:!0,centered:!0}),e=Object(Z.a)(n,2),A=e[0],t=e[1];return Object(J.jsxs)("div",{children:[Object(J.jsx)(V,{children:Object(J.jsx)(L.a.button,{variants:H,whileHover:"whileHover",className:"preview",onClick:t,children:"Preview"})}),Object(J.jsx)(Y.a.Modal,Object(F.a)(Object(F.a)({},A),{},{children:Object(J.jsx)(W.a,{url:"https://content.jwplatform.com/manifests/yp34SRmf.m3u8",autoplay:!0,controls:!0,width:"100%",height:"100%"})}))]})},V=P.b.div(t||(t=Object(x.a)(["\n  button {\n    border-bottom-left-radius: 1rem;\n    border-bottom-right-radius: 1rem;\n    color: white;\n    height: 30px;\n    background-color: #00000060;\n    width: 100%;\n    overflow: hidden;\n    border: none;\n    &:hover {\n      border-bottom-left-radius: 1rem;\n      border-bottom-right-radius: 1rem;\n      display: block;\n      transition: all 0.2s ease-in-out;\n      background-color: #34c717a4;\n\n      cursor: pointer;\n    }\n  }\n"]))),_=function(n){return function(){var e=Object(I.a)(Q.a.mark((function e(A){var t,i,r;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get((a=n,"".concat(k,"3/movie/").concat(a,"?api_key=").concat(z,"&language=en-US")));case 2:return t=e.sent,e.next=5,y.a.get(D(n));case 5:return i=e.sent,e.next=8,y.a.get(M(n));case 8:r=e.sent,console.log(i),A({type:"LOADING_DETAILS"}),A({type:"GET_DETAIL",payload:{previewMovie:N,reviews:r.data.results,detail:t.data,trailers:i.data.results}});case 12:case"end":return e.stop()}var a}),e)})));return function(n){return e.apply(this,arguments)}}()},q=A(9),K=Object(P.b)(L.a.div)(i||(i=Object(x.a)(['\n  cursor: "pointer";\n  button {\n    border-top-left-radius: 1rem;\n    border-top-right-radius: 1rem;\n    color: white;\n    height: 30px;\n    background-color: #00000060;\n    width: 100%;\n    overflow: hidden;\n    border: none;\n    &:hover {\n      border-top-left-radius: 1rem;\n      border-top-right-radius: 1rem;\n      display: block;\n      transition: all 0.2s ease-in-out;\n      background-color: #34c717a4;\n\n      cursor: pointer;\n    }\n  }\n']))),$=Object(P.b)(L.a.div)(r||(r=Object(x.a)(["\n  background-color: white;\n  border-radius: 2%;\n  cursor: pointer;\n\n  .default-image {\n    height: 500px;\n    img {\n      height: 500px;\n    }\n  }\n\n  img {\n    display: block;\n    width: 100%;\n    object-fit: cover;\n    min-height: 40vh;\n    max-height: 40vh;\n  }\n\n  box-shadow: #130101ba 1px 1px 20px;\n  @media only screen and (max-width: 600px) {\n    img {\n      min-height: 30vh;\n      max-height: 30vh;\n    }\n  }\n"]))),nn=function(n){var e=n.name,A=n.rating,t=n.date,i=n.votes,r=n.img,a=n.id,c=(n.MoviePreview,Object(B.b)());return Object(J.jsxs)("div",{children:[Object(J.jsxs)(K,{children:[Object(J.jsx)(L.a.button,{variants:H,whileHover:"whileHover",onClick:function(){return c(function(n){return{type:"ADD_FAVOURITE",payload:n}}({name:e,rating:A,date:t,votes:i,img:r,id:a}))},children:"add to favorites"}),Object(J.jsx)(q.c,{to:"/movie/".concat(a),style:{textDecoration:"none",color:"black"},children:Object(J.jsxs)($,{variants:H,whileHover:"whileHover",onClick:function(){document.body.style.overflow="auto",c(_(a))},children:[Object(J.jsx)("div",{className:"poster",children:Object(J.jsx)("img",{src:r?" https://image.tmdb.org/t/p/w342"+r:Object(J.jsx)("div",{className:"default-image",children:" notFound "}),alt:r})}),Object(J.jsxs)("h4",{children:["votes:",Object(J.jsx)("span",{children:i}),A]})]})})]}),Object(J.jsx)(U,{})]})},en=A.p+"static/media/starEmpty.845bba13.png",An=A.p+"static/media/starFull.f14d6279.png",tn=A.p+"static/media/default.0bceeb80.png",rn=A(3),an=Object(P.b)(L.a.div)(a||(a=Object(x.a)(["\n  background: #00000049;\n  min-height: 100vh;\n  width: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  overflow-y: scroll;\n  padding: 5rem 0rem;\n  z-index: 4;\n"]))),cn=Object(P.b)(L.a.div)(c||(c=Object(x.a)(['\n  position: absolute;\n  left: 10%;\n  justify-content: center;\n  flex-flow: column;\n  text-align: center;\n  color: white;\n  padding: 2rem 2rem;\n  background: radial-gradient(#000000, #181818);\n  width: 80%;\n  margin: auto;\n\n  .wrapperR {\n    display: flex;\n    flex-direction: row;\n  }\n  .reviews {\n    padding: 2rem;\n\n    overflow: hidden;\n\n    text-overflow: ellipsis;\n\n    h3 {\n      font-size: 0.8rem;\n    }\n    h2 {\n      font-size: 0.9rem;\n    }\n    p {\n      width: 20rem;\n      margin: auto;\n      font-size: 0.81rem;\n      text-align: justify;\n      height: 100px;\n      overflow-y: auto;\n\n      ::-webkit-scrollbar {\n        display: none;\n      }\n    }\n    .avatar {\n      img {\n        width: 19%;\n      }\n    }\n  }\n  img {\n    border-radius: 2%;\n    padding: 2rem;\n  }\n\n  h1 {\n    font-family: "Francois One", sans-serif;\n    font-size: 1.2rem;\n    padding: 1rem;\n  }\n\n  .description {\n    .notFound {\n      width: 90%;\n      margin: auto;\n      text-align: center;\n    }\n\n    p {\n      font-family: "Raleway", sans-serif;\n      font-weight: bolder;\n      width: 50%;\n      margin: auto;\n      padding: 4rem;\n      text-align: justify;\n    }\n  }\n  .trailer {\n    padding: 2rem;\n\n    h1 {\n      padding: 2rem;\n    }\n  }\n\n  .genres {\n    display: flex;\n    flex-flow: column;\n    justify-content: center;\n    padding: 2rem;\n    flex-wrap: wrap;\n    flex-direction: row;\n\n    h3 {\n      font-family: "Francois One", sans-serif;\n      font-size: 0.7rem;\n      padding: 1rem;\n    }\n  }\n  .rating {\n    display: flex;\n    justify-content: center;\n    width: 40%;\n    background: #ffffff3d;\n    border-radius: 2rem;\n    margin: 4rem auto;\n  }\n  .star {\n    z-index: 11;\n    display: flex;\n    padding: 2rem;\n\n    img {\n      width: 30px;\n      padding: 0rem;\n    }\n  }\n\n  @media only screen and (max-width: 600px) {\n    .reviews {\n      width: 100%;\n      padding: 0rem;\n      margin: 2rem auto;\n      h3 {\n        font-size: 0.6rem;\n      }\n      h2 {\n        font-size: 0.6rem;\n      }\n\n      p {\n        padding: 0rem;\n        text-align: center;\n        width: 100%;\n        font-size: 0.6rem;\n      }\n      .avatar {\n        img {\n          width: 40%;\n        }\n      }\n    }\n\n    .rating {\n      display: flex;\n\n      width: 90%;\n      margin: auto;\n      justify-content: center;\n\n      img {\n        width: 15px;\n      }\n    }\n\n    h1,\n    h2,\n    h3,\n    h4 {\n      font-size: 0.7rem;\n    }\n    .genres {\n      display: block;\n      padding: 0.2rem;\n      h3 {\n        font-size: 0.5rem;\n        padding: 0.4rem;\n      }\n    }\n    .trailer {\n      width: 100%;\n      padding: 1rem;\n      iframe {\n        width: 100%;\n        height: 100%;\n      }\n\n      h1 {\n        padding: 0.6rem;\n      }\n    }\n    .description {\n      padding: 2rem;\n\n      p {\n        font-size: 0.6rem;\n        padding: 0;\n        text-align: justify;\n        width: 100%;\n      }\n    }\n    img {\n      width: 100%;\n    }\n  }\n']))),on=function(n){n.pathVar;var e=Object(rn.e)(),A=Object(B.c)((function(n){return n.detail})),t=A.detail,i=A.trailers,r=A.isLoading,a=A.reviews;return Object(J.jsx)(J.Fragment,{children:!r&&Object(J.jsx)(an,{className:"fix",onClick:function(n){n.target.classList.contains("fix")&&(document.body.style.overflow="auto",e.push("/movie"))},variants:T,initial:"hidden",animate:"visible",children:Object(J.jsxs)(cn,{children:[Object(J.jsx)("div",{className:"title",children:Object(J.jsx)("h1",{children:t.original_title})}),Object(J.jsxs)("h1",{children:["Audience : ",t.adult?"Mature":"UA"]}),Object(J.jsxs)("div",{className:"image-movie",children:[Object(J.jsx)("div",{className:"rating",children:Object(J.jsx)("div",{className:"star",children:function(){for(var n=[],e=Math.floor(t.vote_average),A=1;A<=10;A++)A<=e?n.push(Object(J.jsx)("img",{alt:"star",src:en},A)):n.push(Object(J.jsx)("img",{alt:"star",src:An},A));return n}()})}),Object(J.jsx)("img",{src:t.poster_path?"https://image.tmdb.org/t/p/w342"+t.poster_path:tn,alt:"poster"})]}),Object(J.jsx)("div",{className:"genres",children:t.genres.map((function(n){return Object(J.jsx)("div",{children:Object(J.jsx)("h3",{children:n.name})})}))}),Object(J.jsxs)("div",{className:"description",children:[Object(J.jsx)("h1",{children:"Summary"}),Object(J.jsx)("p",{children:t.overview?t.overview:""})]}),Object(J.jsx)("div",{className:"reviews ",children:a.slice(0,2).map((function(n){return Object(J.jsx)("div",{className:"wrapperR",children:Object(J.jsxs)("div",{className:"reviews",children:[Object(J.jsx)("h2",{children:n.author}),Object(J.jsx)("div",{className:"avatar",children:Object(J.jsx)("img",{src:tn,alt:"avatar"})}),Object(J.jsxs)("p",{children:[" ",n.content]})]})})}))}),Object(J.jsx)("div",{className:"trailer",children:i.slice(0,2).map((function(n){return Object(J.jsxs)("div",{children:[Object(J.jsxs)("h1",{children:[n.name," "]}),Object(J.jsx)("iframe",{width:"320",height:"215",allow:"fullscreen",frameBorder:"0",controls:"1",src:"https://www.youtube.com/embed/"+n.key,title:n.name})]})}))})]})})})},dn=Object(P.b)(L.a.div)(o||(o=Object(x.a)(['\n  text-align: center;\n  h1 {\n    width: 20%;\n    border: solid 2px;\n    color: #fdfdfdf8;\n    background: #00000088;\n    font-weight: bolder;\n    padding: 1rem 0rem;\n    margin: 2rem auto;\n    font-size: 1.5rem;\n    letter-spacing: 0.1rem;\n    font-family: "Archivo Black", sans-serif;\n  }\n\n  @media only screen and (max-width: 450px) {\n    h1 {\n      font-size: 0.8rem;\n      width: 40%;\n    }\n  }\n']))),sn=Object(P.b)(L.a.div)(d||(d=Object(x.a)(["\n  padding: 2rem;\n  min-height: 90vh;\n  display: grid;\n  grid-gap: 3rem;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n\n  h2 {\n    font-weight: bolder;\n    padding: 1rem;\n    font-size: 0.7rem;\n  }\n  h3 {\n    padding: 1rem;\n    font-size: 0.8rem;\n  }\n  h4 {\n    padding: 1rem;\n    font-size: 0.7rem;\n\n    span {\n      padding: 1rem;\n      margin-right: 30%;\n    }\n  }\n\n  @media only screen and (max-width: 450px) {\n    grid-template-columns: repeat(auto-fit, minmax(100px, 3fr));\n\n    h2,\n    h1,\n    h3 {\n      font-size: 0.4rem;\n    }\n    h4 {\n      font-size: 0.5rem;\n      span {\n        padding: 0.5rem;\n        margin-right: 30%;\n      }\n    }\n  }\n"]))),ln=function(){var n=Object(B.b)();Object(u.useEffect)((function(){n(function(){var n=Object(I.a)(Q.a.mark((function n(e){var A,t;return Q.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,y.a.get("".concat(k).concat(S));case 2:return A=n.sent,n.next=5,y.a.get(N);case 5:t=n.sent,console.log(t),e({type:"FETCH_MOVIES",payload:{popularMovies:A.data.results,previewMovie:"https://content.jwplatform.com/manifests/yp34SRmf.m3u8"}});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())}),[n]);var e=Object(B.c)((function(n){return n.movies})),A=e.popularMovies,t=e.preview,i=Object(rn.f)().pathname.split("/")[2];return Object(J.jsxs)("div",{children:[Object(J.jsx)(dn,{}),i&&Object(J.jsx)(on,{}),Object(J.jsxs)(dn,{children:[Object(J.jsx)("h1",{children:"Popular Movies"}),Object(J.jsx)(sn,{children:A.map((function(n){return Object(J.jsx)("div",{children:Object(J.jsx)(nn,{MoviePreview:t,name:n.title,rating:n.vote_average,date:n.release_date?n.release_date:"To Be Announced",votes:n.vote_count,img:n.poster_path,id:n.id},n.id)})}))})]})]})},gn=Object(P.b)(L.a.div)(s||(s=Object(x.a)(["\n  background: #00000049;\n  min-height: 100vh;\n  width: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  overflow-y: scroll;\n  padding: 5rem 0rem;\n  z-index: 4;\n"]))),mn=Object(P.b)(L.a.div)(l||(l=Object(x.a)(['\n  position: absolute;\n  left: 10%;\n  justify-content: center;\n  flex-flow: column;\n  text-align: center;\n  color: white;\n  padding: 2rem 2rem;\n  background: radial-gradient(#000000, #181818);\n  width: 80%;\n  margin: auto;\n\n  .wrapperR {\n    display: flex;\n    flex-direction: row;\n  }\n  .reviews {\n    padding: 2rem;\n\n    overflow: hidden;\n\n    text-overflow: ellipsis;\n\n    h3 {\n      font-size: 0.8rem;\n    }\n    h2 {\n      font-size: 0.9rem;\n    }\n    p {\n      width: 20rem;\n      margin: auto;\n      font-size: 0.81rem;\n      text-align: justify;\n      height: 100px;\n      overflow-y: auto;\n\n      ::-webkit-scrollbar {\n        display: none;\n      }\n    }\n    .avatar {\n      img {\n        width: 19%;\n      }\n    }\n  }\n  img {\n    border-radius: 2%;\n    padding: 2rem;\n  }\n\n  h1 {\n    font-family: "Francois One", sans-serif;\n    font-size: 1.2rem;\n    padding: 1rem;\n  }\n\n  .description {\n    .notFound {\n      width: 90%;\n      margin: auto;\n      text-align: center;\n    }\n\n    p {\n      font-family: "Raleway", sans-serif;\n      font-weight: bolder;\n      width: 50%;\n      margin: auto;\n      padding: 4rem;\n      text-align: justify;\n    }\n  }\n  .trailer {\n    padding: 2rem;\n\n    h1 {\n      padding: 2rem;\n    }\n  }\n\n  .genres {\n    display: flex;\n    flex-flow: column;\n    justify-content: center;\n    padding: 2rem;\n    flex-wrap: wrap;\n    flex-direction: row;\n\n    h3 {\n      font-family: "Francois One", sans-serif;\n      font-size: 0.7rem;\n      padding: 1rem;\n    }\n  }\n  .rating {\n    display: flex;\n    justify-content: center;\n    width: 40%;\n    background: #ffffff3d;\n    border-radius: 2rem;\n    margin: 4rem auto;\n  }\n  .star {\n    z-index: 11;\n    display: flex;\n    padding: 2rem;\n\n    img {\n      width: 30px;\n      padding: 0rem;\n    }\n  }\n\n  @media only screen and (max-width: 600px) {\n    .reviews {\n      width: 100%;\n      padding: 0rem;\n      margin: 2rem auto;\n      h3 {\n        font-size: 0.6rem;\n      }\n      h2 {\n        font-size: 0.6rem;\n      }\n\n      p {\n        padding: 0rem;\n        text-align: center;\n        width: 100%;\n        font-size: 0.6rem;\n      }\n      .avatar {\n        img {\n          width: 40%;\n        }\n      }\n    }\n\n    .rating {\n      display: flex;\n\n      width: 90%;\n      margin: auto;\n      justify-content: center;\n\n      img {\n        width: 15px;\n      }\n    }\n\n    h1,\n    h2,\n    h3,\n    h4 {\n      font-size: 0.7rem;\n    }\n    .genres {\n      display: block;\n      padding: 0.2rem;\n      h3 {\n        font-size: 0.5rem;\n        padding: 0.4rem;\n      }\n    }\n    .trailer {\n      width: 100%;\n      padding: 1rem;\n      iframe {\n        width: 100%;\n        height: 100%;\n      }\n\n      h1 {\n        padding: 0.6rem;\n      }\n    }\n    .description {\n      padding: 2rem;\n\n      p {\n        font-size: 0.6rem;\n        padding: 0;\n        text-align: justify;\n        width: 100%;\n      }\n    }\n    img {\n      width: 100%;\n    }\n  }\n']))),hn=function(n){n.pathVar;var e=Object(rn.e)(),A=Object(B.c)((function(n){return n.detail})),t=A.detail,i=A.trailers,r=A.isLoading,a=A.reviews;return Object(J.jsx)(J.Fragment,{children:!r&&Object(J.jsx)(gn,{className:"fix",onClick:function(n){n.target.classList.contains("fix")&&(document.body.style.overflow="auto",e.push("/favorites"))},variants:T,initial:"hidden",animate:"visible",children:Object(J.jsxs)(mn,{children:[Object(J.jsx)("div",{className:"title",children:Object(J.jsx)("h1",{children:t.original_title})}),Object(J.jsxs)("h1",{children:["Audience : ",t.adult?"Mature":"UA"]}),Object(J.jsxs)("div",{className:"image-movie",children:[Object(J.jsx)("div",{className:"rating",children:Object(J.jsx)("div",{className:"star",children:function(){for(var n=[],e=Math.floor(t.vote_average),A=1;A<=10;A++)A<=e?n.push(Object(J.jsx)("img",{alt:"star",src:en},A)):n.push(Object(J.jsx)("img",{alt:"star",src:An},A));return n}()})}),Object(J.jsx)("img",{src:t.poster_path?"https://image.tmdb.org/t/p/w342"+t.poster_path:tn,alt:"poster"})]}),Object(J.jsx)("div",{className:"genres",children:t.genres.map((function(n){return Object(J.jsx)("div",{children:Object(J.jsx)("h3",{children:n.name})})}))}),Object(J.jsxs)("div",{className:"description",children:[Object(J.jsx)("h1",{children:"Summary"}),Object(J.jsx)("p",{children:t.overview?t.overview:""})]}),Object(J.jsx)("div",{className:"reviews ",children:a.slice(0,2).map((function(n){return Object(J.jsx)("div",{className:"wrapperR",children:Object(J.jsxs)("div",{className:"reviews",children:[Object(J.jsx)("h2",{children:n.author}),Object(J.jsx)("div",{className:"avatar",children:Object(J.jsx)("img",{src:tn,alt:"avatar"})}),Object(J.jsxs)("p",{children:[" ",n.content]})]})})}))}),Object(J.jsx)("div",{className:"trailer",children:i.slice(0,2).map((function(n){return Object(J.jsxs)("div",{children:[Object(J.jsxs)("h1",{children:[n.name," "]}),Object(J.jsx)("iframe",{width:"320",height:"215",allow:"fullscreen",frameBorder:"0",controls:"1",src:"https://www.youtube.com/embed/"+n.key,title:n.name})]})}))})]})})})},bn=Object(P.b)(L.a.div)(g||(g=Object(x.a)(['\n  cursor: "pointer";\n\n  button {\n    border-top-left-radius: 1rem;\n    border-top-right-radius: 1rem;\n    color: white;\n    height: 30px;\n    background-color: #00000060;\n    width: 100%;\n    overflow: hidden;\n    border: none;\n    &:hover {\n      border-top-left-radius: 1rem;\n      border-top-right-radius: 1rem;\n      display: block;\n      transition: all 0.2s ease-in-out;\n      background-color: #b92512a3;\n\n      cursor: pointer;\n    }\n  }\n']))),jn=Object(P.b)(L.a.div)(m||(m=Object(x.a)(["\n  background-color: white;\n  border-radius: 2%;\n  cursor: pointer;\n\n  .default-image {\n    height: 500px;\n    img {\n      height: 500px;\n    }\n  }\n\n  img {\n    display: block;\n    width: 100%;\n    /* object-fit: cover; */\n    min-height: 50vh;\n    max-height: 50vh;\n  }\n\n  box-shadow: #130101ba 1px 1px 20px;\n  @media only screen and (max-width: 800px) {\n    img {\n      min-height: 30vh;\n      max-height: 30vh;\n    }\n  }\n"]))),pn=function(n){var e=n.name,A=n.rating,t=(n.date,n.votes),i=n.img,r=n.id,a=(n.isLoading,Object(B.b)());return Object(J.jsxs)("div",{children:[Object(J.jsxs)(bn,{children:[Object(J.jsx)(L.a.button,{variants:H,whileHover:"whileHover",onClick:function(){return function(n){a(function(n){return{type:"REMOVE_FAVOURITE",payload:n}}(n)),alert(e+" removed from favourites")}(r)},children:"remove"}),Object(J.jsxs)(q.c,{to:"/favorites/".concat(r),style:{textDecoration:"none",color:"black"},children:[Object(J.jsxs)(jn,{variants:H,whileHover:"whileHover",onClick:function(){document.body.style.overflow="auto",a(_(r))},children:[Object(J.jsx)("div",{className:"poster",children:Object(J.jsx)("img",{src:i?" https://image.tmdb.org/t/p/w342"+i:Object(J.jsx)("div",{className:"default-image",children:" notFound "}),alt:i})}),Object(J.jsxs)("h4",{children:["votes:",Object(J.jsx)("span",{children:t}),A]})]}),Object(J.jsx)("div",{})]})]}),Object(J.jsx)(U,{})]})},fn=Object(P.b)(L.a.div)(h||(h=Object(x.a)(['\n  text-align: center;\n  h1 {\n    width: 20%;\n    border: solid 2px;\n    color: #fdfdfdf8;\n    background: #00000088;\n    font-weight: bolder;\n    padding: 1rem 0rem;\n    margin: 2rem auto;\n    font-size: 1.5rem;\n    letter-spacing: 0.1rem;\n    font-family: "Archivo Black", sans-serif;\n  }\n\n  @media only screen and (max-width: 600px) {\n    h1 {\n      font-size: 0.8rem;\n      width: 40%;\n    }\n  }\n']))),un=Object(P.b)(L.a.div)(b||(b=Object(x.a)(["\n  width: 100%;\n  padding: 1rem;\n  min-height: 70vh;\n  display: grid;\n  grid-gap: 3rem;\n  grid-template-columns:\n    minmax(100px, 1fr) minmax(100px, 1fr) minmax(100px, 1fr)\n    minmax(100px, 1fr) minmax(100px, 1fr);\n\n  h2 {\n    font-weight: bolder;\n    padding: 1rem;\n    font-size: 0.7rem;\n  }\n  h3 {\n    padding: 1rem;\n    font-size: 0.8rem;\n  }\n  h4 {\n    padding: 1rem;\n    font-size: 0.7rem;\n\n    span {\n      padding: 1rem;\n      margin-right: 30%;\n    }\n  }\n\n  @media only screen and (max-width: 450px) {\n    grid-template-columns: minmax(150px, 1fr) minmax(150px, 1fr);\n    overflow-x: hidden;\n    h2,\n    h1,\n    h3 {\n      font-size: 0.4rem;\n    }\n    h4 {\n      font-size: 0.5rem;\n      span {\n        padding: 0.5rem;\n        margin-right: 30%;\n      }\n    }\n  }\n"]))),vn=function(){var n=Object(B.c)((function(n){return n.favorites})).favorites,e=Object(rn.f)().pathname.split("/")[2];return Object(J.jsxs)("div",{children:[Object(J.jsx)(fn,{}),e&&Object(J.jsx)(hn,{}),Object(J.jsxs)(fn,{children:[Object(J.jsx)("h1",{children:"Favorites"}),Object(J.jsx)(un,{children:n.map((function(n){return Object(J.jsx)(pn,{name:n.name,rating:n.rating,date:n.date?n.date:"To Be Announced",votes:n.votes,img:n.img,id:n.id},n.id)}))})]})]})},wn=Object(P.b)(L.a.div)(j||(j=Object(x.a)(['\n  display: flex;\n  align-self: center;\n  position: sticky;\n  top: 0%;\n  z-index: 2;\n\n  .navbar {\n    background-color: #0000001c;\n  }\n\n  .navbar.colorChange {\n    background-color: #000000da;\n  }\n  a {\n    text-decoration: none;\n  }\n  nav {\n    width: 100%;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    padding: 1rem;\n  }\n  .nav-items {\n    ul {\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      list-style: none;\n      ListItem {\n        font-weight: bolder;\n        margin: 0rem 2rem;\n        cursor: pointer;\n      }\n      a {\n        font-weight: bold;\n        text-decoration: none;\n        color: #fff1f1;\n      }\n    }\n  }\n  .logo {\n    img {\n      width: 8%;\n    }\n    /* \n    h1 {\n      color: #ffffff;\n      font-family: "Parisienne", cursive;\n    } */\n  }\n  @media only screen and (max-width: 600px) {\n    nav {\n      display: block;\n      text-align: center;\n      padding: 0.8rem;\n    }\n\n    .nav-items {\n      ul {\n        display: block;\n\n        list-style: none;\n        ListItem {\n          margin: 0rem 1rem;\n        }\n      }\n    }\n  }\n']))),On=Object(P.b)(L.a.div)(p||(p=Object(x.a)(["\n  font-weight: bolder;\n  margin: 0rem 2rem;\n  cursor: pointer;\n  &:hover {\n    color: #0bd69271;\n  }\n"]))),xn=function(){var n=Object(u.useState)(!1),e=Object(Z.a)(n,2),A=e[0],t=e[1];return window.addEventListener("scroll",(function(){window.scrollY>=80?t(!0):t(!1)})),Object(J.jsx)(wn,{children:Object(J.jsxs)("nav",{className:A?"navbar colorChange":"navbar",children:[Object(J.jsx)("div",{className:"logo",children:Object(J.jsx)(q.c,{to:"/",children:Object(J.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFFmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDYwLCAyMDIwLzA1LzEyLTE2OjA0OjE3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTA3LTA3VDExOjM4OjI1KzA1OjQ1IiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0wNy0wOVQxMTozOTozNyswNTo0NSIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMS0wNy0wOVQxMTozOTozNyswNTo0NSIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxYzBkZDJjOC03ZDczLThl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",alt:""})})}),Object(J.jsx)("div",{className:"nav-items",children:Object(J.jsxs)("ul",{children:[Object(J.jsx)(q.c,{to:"/movie",children:Object(J.jsx)(On,{variants:G,whileFocus:"whileFocus",whileHover:"whileHover",children:"Movies"})}),Object(J.jsx)(q.c,{to:"/favorites",children:Object(J.jsx)(On,{variants:G,whileFocus:"whileFocus",whileHover:"whileHover",children:"favorites"})})]})})]})})},Bn=Object(P.a)(f||(f=Object(x.a)(["\n\n\n*{\n    box-sizing: border-box;\nmargin: 0px;\npadding: 0px;\n\n* {\n  scrollbar-width: none;\n}\n\n*::-webkit-scrollbar {\n  width: 0.3rem;\n  \n \n}\n\n*::-webkit-scrollbar-button {\n  background: transparent;\n  \n}\n\n*::-webkit-scrollbar-track {\n  background: transparent;\n \n}\n\n*::-webkit-scrollbar-thumb {\n  background-color: rgba(109, 105, 105, 0);\n  border-radius: 50px;\n  border: solid 10px;\n  color: black;\n\n}\n\nbody{\n    background: radial-gradient( #3a3535da,#000000);\n\n   \n}\n\n\nh2{\n    font-family: 'Francois One', sans-serif;\n\n   font-weight: lighter;\n   \n}\n\n}\n\nLink{\ntext-decoration: none;\n}\n\n\n"])));var En=function(){return Object(J.jsx)("div",{className:"App",children:Object(J.jsxs)(q.b,{basename:"/",children:[Object(J.jsx)(Bn,{}),Object(J.jsx)(xn,{}),Object(J.jsx)(rn.a,{path:"/",exact:!0,children:Object(J.jsx)(ln,{})}),Object(J.jsx)(rn.a,{exact:!0,path:["/movie/:id","/movie"],children:Object(J.jsx)(ln,{})}),Object(J.jsx)(rn.a,{exact:!0,path:["/favorites/:id","/favorites"],children:Object(J.jsx)(vn,{})})]})})},Qn=function(n){n&&n instanceof Function&&A.e(3).then(A.bind(null,91)).then((function(e){var A=e.getCLS,t=e.getFID,i=e.getFCP,r=e.getLCP,a=e.getTTFB;A(n),t(n),i(n),r(n),a(n)}))},In=A(22),Cn=A(49),yn={popularMovies:[],preview:[]},zn={detail:{genres:[]},trailers:[],reviews:[],isLoading:!0},kn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:zn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"GET_DETAIL":return Object(F.a)(Object(F.a)({},n),{},{reviews:e.payload.reviews,detail:e.payload.detail,trailers:e.payload.trailers,isLoading:!1});case"LOADING_DETAILS":return Object(F.a)(Object(F.a)({},n),{},{isLoading:!0});default:return Object(F.a)({},n)}},Sn=A(35),Nn={favorites:[]},Mn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Nn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_FAVOURITE":return Object(F.a)(Object(F.a)({},n),{},{favorites:[].concat(Object(Sn.a)(n.favorites),[e.payload])});case"REMOVE_FAVOURITE":return Object(F.a)(Object(F.a)({},n),{},{favorites:Object(Sn.a)(n.favorites.filter((function(n){return n.id!==e.payload})))});default:return Object(F.a)({},n)}},Dn=Object(In.b)({movies:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:yn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"FETCH_MOVIES":return Object(F.a)(Object(F.a)({},n),{},{popularMovies:e.payload.popularMovies,preview:e.payload.previewMovie});default:return Object(F.a)({},n)}},detail:kn,favorites:Mn}),Ln=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||In.c,Pn=Object(In.d)(Dn,Ln(Object(In.a)(Cn.a)));O.a.render(Object(J.jsx)(v.a.StrictMode,{children:Object(J.jsx)(B.a,{store:Pn,children:Object(J.jsx)(q.a,{children:Object(J.jsx)(En,{})})})}),document.getElementById("root")),Qn()}},[[89,1,2]]]);
//# sourceMappingURL=main.9cbdfe96.chunk.js.map