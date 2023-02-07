(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{133:function(e,t,a){e.exports=a(146)},138:function(e,t,a){},143:function(e,t,a){},146:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),o=a(122),s=a.n(o),i=a(92),l=a(32),c=(a(138),a(78)),d=a(44),p=a(45),m=a(57),u=a(58),h=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).getSelectedElement=function(){var e,t,a=Object(c.a)(document.getElementById("result-list").children);try{for(a.s();!(t=a.n()).done;){var n=t.value;if(n.classList.contains("selected")){e=n;break}}}catch(r){a.e(r)}finally{a.f()}return{cityName:e.dataset.cityName,coordinates:{lat:e.dataset.coordinatesLat,long:e.dataset.coordinatesLong}}},n.onChange=function(e){var t=e.currentTarget.value;fetch("https://roma-claudio-weather.vercel.app/city?address=?"+t).then((function(e){return e.json()})).then((function(e){var a=[],r=[],o=[];e.hasOwnProperty("results")&&e.results.forEach((function(e){"street-square"!==e.category&&"undefined"!==typeof e.position&&(a.push(e.title),r.push(e.distance),o.push(e.position))})),console.log(o),n.setState({selected:-1,suggestions:a,show:!0,input:t,coordinates:o})}))},n.onClick=function(e,t,a,r){n.props.history.push("/Weather/"+t+"&"+a+"&"+r)},n.onKeyDown=function(e){40!==e.keyCode&&38!==e.keyCode&&e.keyCode},n.scrollToSelected=function(e){document.getElementById(e).childNodes.forEach((function(e){e.classList.contains("selected")&&!n.isInViewport(e)&&e.scrollIntoView(!0)}))},n.isInViewport=function(e){var t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)},n.state={suggestions:[],coordinates:[],show:!1,input:"",selectedCoordinates:null},n}return Object(p.a)(a,[{key:"componentDidUpdate",value:function(){this.scrollToSelected("result-list")}},{key:"render",value:function(){var e=this,t=[];return this.state.suggestions.forEach((function(a,n){t.push(r.a.createElement("li",{"data-coordinates-lat":e.state.coordinates[n][0],"data-coordinates-long":e.state.coordinates[n][1],className:a===e.state.input?"list-group-item selected":"list-group-item",onClick:function(t){return e.onClick(t,a,e.state.coordinates[n][0],e.state.coordinates[n][1])},key:a+n},a))})),r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text rounded-0",id:"basic-addon1"},r.a.createElement("i",{className:"fas fa-search fa-xs"}))),r.a.createElement("input",{className:"tiny"===this.props.size?"form-control rounded-0 tiny":"form-control rounded-0",type:"text",placeholder:"City","aria-label":"City",onChange:this.onChange,onKeyDown:this.onKeyDown})),r.a.createElement("ul",{id:"result-list",className:"tiny"===this.props.size?"list-group position-absolute rounded-0 tiny":"list-group rounded-0 position-absolute"},t))}}]),a}(n.Component),v=Object(l.f)(h);a(143);var y=function(){return setTimeout((function(){null!==document.getElementById("loader-overlay")&&(document.getElementById("loader-overlay").style.display="none")}),500),r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"bg-image"}),r.a.createElement("div",{className:"container h-100"},r.a.createElement("div",{className:"row align-items-center h-90"},r.a.createElement("div",{className:"col-10 mx-auto"},r.a.createElement("p",{className:"h2 text-center text-white"},r.a.createElement("strong",null,"Check how the weather looks like",r.a.createElement("br",null),"in the rest of the world")),r.a.createElement("p",{className:"lead text-center text-white mb-5"},"This is a collection of data about temperatures and precipitations, that has been",r.a.createElement("br",null),"recorded in the last 30 years, around the world."),r.a.createElement(v,null)))))},g=a(112),f=a.n(g),E=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"componentDidMount",value:function(){Object.keys(this.props.data).length>0&&this.createGraph()}},{key:"componentDidUpdate",value:function(){Object.keys(this.props.data).length>0&&this.createGraph()}},{key:"createGraph",value:function(){document.getElementById(this.props.id).innerHTML="";var e={series:[{name:"Average precipitation",data:[this.props.data.data[0][this.props.id],this.props.data.data[1][this.props.id],this.props.data.data[2][this.props.id],this.props.data.data[3][this.props.id],this.props.data.data[4][this.props.id],this.props.data.data[5][this.props.id],this.props.data.data[6][this.props.id],this.props.data.data[7][this.props.id],this.props.data.data[8][this.props.id],this.props.data.data[9][this.props.id],this.props.data.data[10][this.props.id],this.props.data.data[11][this.props.id]]}],chart:{type:"bar",height:220,toolbar:{show:!1}},plotOptions:{bar:{horizontal:!1,columnWidth:"55%"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]},fill:{type:"gradient",gradient:{shade:"light",type:"horizontal",shadeIntensity:.25,gradientToColors:void 0,inverseColors:!0,opacityFrom:.85,opacityTo:.85,stops:[50,0,100]}},tooltip:{y:{formatter:function(e){return e+" mm"}}}};new f.a(document.getElementById(this.props.id),e).render()}},{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{id:this.props.id}))}}]),a}(n.Component),b=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={selectedTemperature:"tavg",gradient:["rgba(250,174,50,1)","rgba(250,174,50,0)"],gradientLinearity:[0,0,0,150]},n}return Object(p.a)(a,[{key:"updateSelection",value:function(e,t,a){this.setState((function(n){return{selectedTemperature:e,gradient:t,gradientLinearity:a}}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"card rounded-0"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-5"},r.a.createElement("h5",{className:"card-title"},"Yearly Temperature"))),r.a.createElement("div",null,r.a.createElement(C,{id:this.state.selectedTemperature,data:this.props.data,gradient:this.state.gradient,gradientLinearity:this.state.gradientLinearity}))))}}]),a}(n.Component),C=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={type:n.props.type,id:n.props.id},n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){Object.keys(this.props.data).length>0&&this.createGraph()}},{key:"componentDidUpdate",value:function(){Object.keys(this.props.data).length>0&&this.createGraph()}},{key:"createGraph",value:function(){document.querySelector("#apexChartsId").innerHTML="";var e={series:[{name:"Max",data:[this.props.data.data[0].tmax+"\xb0C",this.props.data.data[1].tmax+"\xb0C",this.props.data.data[2].tmax+"\xb0C",this.props.data.data[3].tmax+"\xb0C",this.props.data.data[4].tmax+"\xb0C",this.props.data.data[5].tmax+"\xb0C",this.props.data.data[6].tmax+"\xb0C",this.props.data.data[7].tmax+"\xb0C",this.props.data.data[8].tmax+"\xb0C",this.props.data.data[9].tmax+"\xb0C",this.props.data.data[10].tmax+"\xb0C",this.props.data.data[11].tmax+"\xb0C"]},{name:"Average",data:[this.props.data.data[0].tavg+"\xb0C",this.props.data.data[1].tavg+"\xb0C",this.props.data.data[2].tavg+"\xb0C",this.props.data.data[3].tavg+"\xb0C",this.props.data.data[4].tavg+"\xb0C",this.props.data.data[5].tavg+"\xb0C",this.props.data.data[6].tavg+"\xb0C",this.props.data.data[7].tavg+"\xb0C",this.props.data.data[8].tavg+"\xb0C",this.props.data.data[9].tavg+"\xb0C",this.props.data.data[10].tavg+"\xb0C",this.props.data.data[11].tavg+"\xb0C"]},{name:"Min",data:[this.props.data.data[0].tmin+"\xb0C",this.props.data.data[1].tmin+"\xb0C",this.props.data.data[2].tmin+"\xb0C",this.props.data.data[3].tmin+"\xb0C",this.props.data.data[4].tmin+"\xb0C",this.props.data.data[5].tmin+"\xb0C",this.props.data.data[6].tmin+"\xb0C",this.props.data.data[7].tmin+"\xb0C",this.props.data.data[8].tmin+"\xb0C",this.props.data.data[9].tmin+"\xb0C",this.props.data.data[10].tmin+"\xb0C",this.props.data.data[11].tmin+"\xb0C"]}],colors:["#e67e7e","#b5b5b5","#47aefc"],legend:{show:!1},chart:{height:220,type:"line",zoom:{enabled:!1},toolbar:{show:!1},dropShadow:{enabled:!0,enabledOnSeries:void 0,top:0,left:10,blur:6,color:"#000",opacity:.15}},dataLabels:{enabled:!1},stroke:{curve:"smooth",dashArray:[0,8,0]},grid:{row:{colors:["transparent"],opacity:.5}},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}};new f.a(document.querySelector("#apexChartsId"),e).render()}},{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{id:"apexChartsId"}))}}]),a}(n.Component),N=b,x=a(73),w=a(95),k=a(128),j=a(129),I=a(130),O=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.createMap()}},{key:"componentDidUpdate",value:function(){this.createMap()}},{key:"createMap",value:function(){x.e(j.a),x.e(I.a);var e=x.c("worldMap",w.a);e.geodata=k.a,e.projection=new w.d.Miller,e.homeZoomLevel=5,e.homeGeoPoint={longitude:parseInt(document.location.pathname.replace("/","").split("&")[2]),latitude:parseInt(document.location.pathname.replace("/","").split("&")[1])};var t=e.series.push(new w.c);t.useGeodata=!0;var a=t.mapPolygons.template;a.tooltipText="{name}",a.polygon.fillOpacity=.6,a.states.create("hover").properties.fill=e.colors.getIndex(0);var n=e.series.push(new w.b);n.mapImages.template.propertyFields.longitude="longitude",n.mapImages.template.propertyFields.latitude="latitude",n.mapImages.template.tooltipText="{title}",n.mapImages.template.propertyFields.url="url";var r=n.mapImages.template.createChild(x.a);r.radius=1,r.propertyFields.fill="color";var o=n.mapImages.template.createChild(x.a);o.radius=1,o.propertyFields.fill="color",o.events.on("inited",(function(e){!function e(t){t.animate([{property:"scale",from:1,to:5},{property:"opacity",from:1,to:0}],1e3,x.d.circleOut).events.on("animationended",(function(t){e(t.target.object)}))}(e.target)}));var s=new x.b;n.data=[{title:decodeURIComponent(document.location.pathname.replace("/Weather/","").split("&")[0]),latitude:parseInt(document.location.pathname.replace("/","").split("&")[1]),longitude:parseInt(document.location.pathname.replace("/","").split("&")[2]),color:s.next()}],document.querySelectorAll("[aria-labelledby]")[0].style.display="none"}},{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{id:"worldMap",className:"h-90"}))}}]),a}(n.Component),M=Object(l.f)(O);var T=function(e){function t(e,t,n){return(a(e,t,n)-12.7).toFixed(1)}function a(e,t,a){if("undefined"!==typeof e.data){var n=0;return e.data.forEach((function(e){n+=e[t]})),(n/a).toFixed(1)}}return r.a.createElement("div",{className:"card rounded-0 h-100"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title one-line"},e.title),r.a.createElement("br",null),r.a.createElement("div",{className:"card-text "+function(e,a,n){var r;switch(a){case"deviation":r=t(e,"tavg",n)>0?"text-warm":"text-cold";break;case"tavg":r="text-muted";break;case"tmax":r="text-warm";break;case"tmin":r="text-cold"}return r}(e.data,e.value,12)},r.a.createElement("h6",null,function(e,n,r){var o;switch(n){case"deviation":o=t(e,"tavg",r);break;case"tavg":o=a(e,n,r);break;case"tmax":o=function(e,t){if("undefined"!==typeof e.data){var a=e.data[0][t];return e.data.forEach((function(e){e[t]>a&&(a=e[t])})),a}}(e,n);break;case"tmin":o=function(e,t){if("undefined"!==typeof e.data){var a=e.data[0][t];return e.data.forEach((function(e){e[t]<a&&(a=e[t])})),a}}(e,n)}return o}(e.data,e.value,12)+"\xb0C"))))},B=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={response:{},selectedTemperature:"tavg",city:decodeURIComponent(document.location.pathname.replace("/Weather/","").split("&")[0])},n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=document.location.pathname.replace("/","").split("&")[1],a=document.location.pathname.replace("/","").split("&")[2];null!==document.getElementById("loader-overlay")&&(document.getElementById("loader-overlay").style.display="block"),fetch("https://roma-claudio-weather.vercel.app/stats?lat="+t+"&long="+a).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState((function(e){return{response:t,city:decodeURIComponent(document.location.pathname.replace("/Weather/","").split("&")[0])}})),null!==document.getElementById("loader-overlay")&&(document.getElementById("loader-overlay").style.display="none")}))}},{key:"componentDidUpdate",value:function(){var e=this;if(this.state.city!==decodeURIComponent(document.location.pathname.replace("/Weather/","").split("&")[0])){var t=document.location.pathname.replace("/","").split("&")[1],a=document.location.pathname.replace("/","").split("&")[2];null!==document.getElementById("loader-overlay")&&(document.getElementById("loader-overlay").style.display="block"),fetch("https://roma-claudio-weather.vercel.app/stats?lat="+t+"&long="+a).then((function(e){return e.json()})).then((function(t){e.setState((function(e){return{response:t,city:decodeURIComponent(document.location.pathname.replace("/Weather/","").split("&")[0])}})),null!==document.getElementById("loader-overlay")&&(document.getElementById("loader-overlay").style.display="none")}))}}},{key:"render",value:function(){var e=this;return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"container-fluid h-100"},r.a.createElement("div",{className:"row header h-60p"},r.a.createElement("div",{className:"col-4 my-auto ml-auto text-muted"},r.a.createElement("h3",null,r.a.createElement("div",{className:"homeButton",onClick:function(){e.props.history.push("/Weather/")}},"Home"))),r.a.createElement("div",{className:"col-5 my-auto mr-auto"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"}),r.a.createElement("div",{className:"col-6"},r.a.createElement(v,{size:"small"}))))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-9 mx-auto"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xl-4 mr-auto"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xl-6 pt-30"},r.a.createElement(T,{title:"Average Temperature",data:this.state.response,value:"tavg"})),r.a.createElement("div",{className:"col-xl-6 pt-30"},r.a.createElement(T,{title:"Maximum Temperature",data:this.state.response,value:"tmax"}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xl-6 pt-30"},r.a.createElement(T,{title:"Minimum Temperature",data:this.state.response,value:"tmin"})),r.a.createElement("div",{className:"col-xl-6 pt-30"},r.a.createElement(T,{title:"Global Average Deviation",data:this.state.response,value:"deviation"})))),r.a.createElement("div",{className:"col-xl-8 pt-30"},r.a.createElement("div",{className:"card rounded-0 h-100"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},decodeURIComponent(document.location.pathname.replace("/Weather/","").split("&")[0])),r.a.createElement(M,null))))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xl-4 pt-30 mr-auto"},r.a.createElement("div",{className:"card rounded-0"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"Yearly precipitation"),r.a.createElement("div",{className:"card-text"},r.a.createElement(E,{id:"prcp",data:this.state.response}))))),r.a.createElement("div",{className:"col-xl-8 pt-30"},r.a.createElement(N,{data:this.state.response})))))))}}]),a}(n.Component),F=Object(l.f)(B);var S=function(){return r.a.createElement("div",{id:"loader-overlay",className:"loader-overlay z-3"},r.a.createElement("div",{id:"loader",className:"loader"}))};s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,null,r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,strict:!0,path:"/Weather/(.*.{1,})"},r.a.createElement(S,null),r.a.createElement(F,{city:decodeURIComponent(document.location.pathname.replace("/Weather/","").split("&")[0])})),r.a.createElement(l.a,null,r.a.createElement(S,null),r.a.createElement(y,null))))),document.getElementById("root"))}},[[133,1,4]]]);
//# sourceMappingURL=main.eb972eea.chunk.js.map