(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[7],{67:function(t,e,n){t.exports={mainTitle:"HomeView_mainTitle__2bMib"}},76:function(t,e,n){"use strict";n.r(e);var i=n(32),a=n(33),r=n(35),c=n(34),o=n(0),s=n(36),h=n.n(s),d=n(7),l=n(67),u=n.n(l),p=n(3),b=function(t){Object(r.a)(n,t);var e=Object(c.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={trendingMovies:[]},t}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var t=this;h.a.get("https://api.themoviedb.org/3/trending/movie/day?api_key=140aa2a61156d040b45d8a45da490f38").then((function(e){return t.setState({trendingMovies:e.data.results})}))}},{key:"render",value:function(){var t=this;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{className:u.a.mainTitle,children:" Trending today"}),Object(p.jsx)("hr",{}),Object(p.jsx)("ul",{children:this.state.trendingMovies.map((function(e){return Object(p.jsx)("li",{children:Object(p.jsx)(d.b,{to:{pathname:"".concat(t.props.match.url,"movies/").concat(e.id),state:{from:t.props.location}},children:e.title})},e.id)}))})]})}}]),n}(o.Component);e.default=b}}]);
//# sourceMappingURL=7.a8f6441e.chunk.js.map