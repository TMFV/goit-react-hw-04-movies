(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[0],{65:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(34),i=n.n(r),s=n(12),o=n(13),l=n(11),h=n.n(l),j=n(2),d=n(5),m=n(6),u=n(8),p=n(7),f=n(0),b=(a.Component,function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={trendingMovies:[]},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=this;h.a.get("https://api.themoviedb.org/3/trending/movie/day?api_key=140aa2a61156d040b45d8a45da490f38").then((function(t){return e.setState({trendingMovies:t.data.results})}))}},{key:"render",value:function(){var e=this;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h1",{children:" Trending today"}),Object(f.jsx)("ul",{children:this.state.trendingMovies.map((function(t){return Object(f.jsx)("li",{children:Object(f.jsx)(s.b,{to:{pathname:"".concat(e.props.match.url,"movies/").concat(t.id),state:{from:e.props.location}},children:t.title})},t.id)}))})]})}}]),n}(a.Component)),v=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={},e}return Object(m.a)(n,[{key:"render",value:function(){return Object(f.jsx)("h2",{children:"moviesView"})}}]),n}(a.Component),O=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={},e}return Object(m.a)(n,[{key:"render",value:function(){return Object(f.jsx)("h2",{children:"Sorry! Not found 404 ..."})}}]),n}(a.Component),x=n(15),_=n.n(x),g=n(17),y=n(21),w=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={filmId:"",filmActors:[]},e.createActorsList=function(){var t=e.state.filmActors;return console.log(t),t.map((function(e){return Object(f.jsxs)("li",{className:"film_details__actors",children:[Object(f.jsx)("img",{src:"https://www.themoviedb.org/t/p/w138_and_h175_face/".concat(e.profile_path),alt:e.name}),Object(f.jsx)("p",{children:e.name})]},e.id)}))},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=Object(y.a)(_.a.mark((function e(){var t,n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"140aa2a61156d040b45d8a45da490f38",t=this.props.movieId,e.next=4,h.a.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat("140aa2a61156d040b45d8a45da490f38","&language=en-US")).then((function(e){return e.data.cast}));case 4:return n=e.sent,e.next=7,this.setState({filmActors:Object(g.a)(n)});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return console.log("111",this.props),Object(f.jsx)("div",{children:Object(f.jsx)("ul",{children:this.createActorsList()})})}}]),n}(a.Component),k=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={showActors:!1},e.createGenresList=function(){return e.props.dataFilm.filmGenres.map((function(e){return Object(f.jsx)("li",{className:"film_details__genre",children:e.name})}))},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this,t=this.props.dataFilm;return console.log(this.props.location.pathname),Object(f.jsxs)("div",{className:"film",children:[Object(f.jsx)("button",{onClick:function(){return e.props.fn()},children:"\u2190 Go back"}),Object(f.jsxs)("div",{className:"film_info",children:[Object(f.jsx)("div",{className:"film_poster",children:Object(f.jsx)("img",{src:"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/".concat(t.filmPoster),alt:"1"})}),Object(f.jsxs)("div",{className:"film_details",children:[Object(f.jsx)("h1",{className:"film_details__title",children:t.filmTitle}),Object(f.jsx)("p",{className:"film_details__info",children:"User Score: ".concat(10*t.filmUserScore,"%")}),Object(f.jsx)("h2",{className:"film_details__info_title",children:"Overview"}),Object(f.jsx)("p",{className:"film_details__info",children:t.filmOverview}),Object(f.jsx)("h2",{className:"film_details__info_title",children:"Genres"}),Object(f.jsx)("ul",{children:this.createGenresList()}),Object(f.jsx)("p",{className:"film_details__info"})]})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("h2",{className:"film_details__info_title",children:"Additonal information"}),Object(f.jsxs)("ul",{children:[Object(f.jsx)(s.b,{to:"".concat(this.props.match.url,"/actors"),children:Object(f.jsx)("li",{children:"Cast"},"cast")}),Object(f.jsx)(j.a,{path:"".concat(this.props.match.path,"/actors"),render:function(e){return Object(f.jsx)(w,Object(o.a)(Object(o.a)({},e),{},{movieId:t.filmId}))}}),Object(f.jsx)("li",{children:"Reviews"},"revs")]})]})]})}}]),n}(a.Component),N=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={filmId:"",filmGenres:[],filmTitle:"",filmPoster:"",filmActors:[],filmReviews:[]},e.handleGoBack=function(){e.props.history.push(e.props.location.state.from)},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=Object(y.a)(_.a.mark((function e(){var t,n,a,c,r;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="140aa2a61156d040b45d8a45da490f38",n=this.props.match.params.movieId,e.next=4,h.a.get("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat(t)).then((function(e){return e.data})).then((function(e){return e}));case 4:return a=e.sent,console.log(a),e.next=8,h.a.get("https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=").concat(t,"&language=en-US")).then((function(e){return e.data.cast}));case 8:return c=e.sent,e.next=11,h.a.get("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=").concat(t,"&language=en-US&page=1")).then((function(e){return e.data.results}));case 11:return r=e.sent,e.next=14,this.setState({filmId:a.id,filmGenres:a.genres,filmTitle:a.title,filmUserScore:a.vote_average,filmOverview:a.overview,filmPoster:a.poster_path,filmActors:Object(g.a)(c),filmReviews:Object(g.a)(r)});case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return console.log(this.props.match),Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(k,Object(o.a)({dataFilm:this.state,fn:this.handleGoBack},this.props))})}}]),n}(a.Component);var A=function(){return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsxs)("nav",{children:[Object(f.jsx)("li",{children:Object(f.jsx)(s.c,{to:"/",className:"navlink",activeClassName:"navlink--axtive",children:"Home"})}),Object(f.jsx)("li",{children:Object(f.jsx)(s.c,{to:"/movies",className:"navlink",activeClassName:"navlink--axtive",children:"Movies"})})]}),Object(f.jsxs)(j.c,{children:[Object(f.jsx)(j.a,{exact:!0,path:"/",component:b}),Object(f.jsx)(j.a,{path:"/movies/:movieId",render:function(e){return Object(f.jsx)(N,Object(o.a)({},e))}}),Object(f.jsx)(j.a,{exact:!0,path:"/movies",component:v}),Object(f.jsx)(j.a,{component:O})]})]})};i.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(s.a,{children:Object(f.jsx)(A,{})})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.f0309b1b.chunk.js.map