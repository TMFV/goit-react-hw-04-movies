(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[10],{39:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function i(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(e,"a",(function(){return i}))},75:function(t,e,n){"use strict";n.r(e);var r=n(37),i=n.n(r),a=n(39),o=n(38),c=n(32),s=n(33),u=n(35),l=n(34),f=n(0),p=n(1),h=n(36),m=n.n(h),v=n(3),d=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(c.a)(this,n);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return(t=e.call.apply(e,[this].concat(i))).state={movieId:"",filmReviews:[]},t.createReviewsList=function(){return t.state.filmReviews.map((function(t){return Object(v.jsxs)("li",{children:[Object(v.jsx)("p",{children:"Author: ".concat(t.author)}),Object(v.jsx)("p",{children:t.content})]},t.id)}))},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=Object(o.a)(i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"140aa2a61156d040b45d8a45da490f38",this.setState({movieId:this.props.match.params.movieId}),t.next=4,m.a.get("https://api.themoviedb.org/3/movie/".concat(this.props.match.params.movieId,"/reviews?api_key=").concat("140aa2a61156d040b45d8a45da490f38","&language=en-US&page=1")).then((function(t){return t.data.results}));case 4:return e=t.sent,t.next=7,this.setState({filmReviews:Object(a.a)(e)});case 7:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"emptyReviews",value:function(){return 0===this.state.filmReviews.length?Object(v.jsx)("p",{children:"Sorry ... No reviews !!!"}):Object(v.jsx)("div",{children:Object(v.jsx)("ul",{children:this.createReviewsList()})})}},{key:"componentWillUnmount",value:function(){this.setState({movieId:"",filmReviews:[]})}},{key:"render",value:function(){return console.log(this.state.filmReviews),this.emptyReviews()}}]),n}(f.Component);e.default=Object(p.f)(d)}}]);
//# sourceMappingURL=10.8f2082ad.chunk.js.map