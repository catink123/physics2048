(function(t){function r(r){for(var e,a,c=r[0],s=r[1],u=r[2],f=0,l=[];f<c.length;f++)a=c[f],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&l.push(n[a][0]),n[a]=0;for(e in s)Object.prototype.hasOwnProperty.call(s,e)&&(t[e]=s[e]);d&&d(r);while(l.length)l.shift()();return o.push.apply(o,u||[]),i()}function i(){for(var t,r=0;r<o.length;r++){for(var i=o[r],e=!0,c=1;c<i.length;c++){var s=i[c];0!==n[s]&&(e=!1)}e&&(o.splice(r--,1),t=a(a.s=i[0]))}return t}var e={},n={app:0},o=[];function a(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=t,a.c=e,a.d=function(t,r,i){a.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:i})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,r){if(1&r&&(t=a(t)),8&r)return t;if(4&r&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var e in t)a.d(i,e,function(r){return t[r]}.bind(null,e));return i},a.n=function(t){var r=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(r,"a",r),r},a.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},a.p="/physics-2048/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=r,c=c.slice();for(var u=0;u<c.length;u++)r(c[u]);var d=s;o.push([0,"chunk-vendors"]),i()})({0:function(t,r,i){t.exports=i("56d7")},"034f":function(t,r,i){"use strict";i("85ec")},"56d7":function(t,r,i){"use strict";i.r(r);i("e260"),i("e6cf"),i("cca6"),i("a79d");var e=i("2b0e"),n=function(){var t=this,r=t.$createElement,i=t._self._c||r;return i("div",{attrs:{id:"app"}},[t._m(0),i("p",[t._v("Используйте стрелки клавиатуры или кнопки ниже для управления.")]),i("div",{staticClass:"container"},[i("table",[i("tr",[i("td"),i("td",[i("button",{on:{click:function(r){return t.move("up")}}},[t._v("Вверх")])]),i("td")]),i("tr",[i("td",[i("button",{on:{click:function(r){return t.move("left")}}},[t._v("Влево")])]),i("td"),i("td",[i("button",{on:{click:function(r){return t.move("right")}}},[t._v("Вправо")])])]),i("tr",[i("td"),i("td",[i("button",{on:{click:function(r){return t.move("down")}}},[t._v("Вниз")])]),i("td")])])])])},o=[function(){var t=this,r=t.$createElement,i=t._self._c||r;return i("div",{staticClass:"container"},[i("canvas",{attrs:{id:"c",width:"401",height:"401"}})])}],a=(i("99af"),i("cb29"),i("4de4"),i("7db0"),{startingTiles:["c","m","∆t"],fontSizes:[64,48,32],appearance:{c:{color:"rgb(255, 0, 0)"},m:{color:"rgb(0, 255, 0)"},cm:{color:"rgb(0, 0, 255)"},"∆t":{color:"rgb(0, 0, 0)"},Q:{color:"rgb(0, 255, 255)"}},combinations:{c:[{with:"m",result:"cm"}],m:[{with:"c",result:"cm"}],"∆t":[{with:"cm",result:"Q"}]}}),c={name:"App",data:function(){return{grid:[["","","",""],["","","",""],["","","",""],["","","",""]]}},computed:{arrayForGrid:function(){var t=[];for(var r in t=t.concat(this.grid[0]),t=t.concat(this.grid[1]),t=t.concat(this.grid[2]),t=t.concat(this.grid[3]),t)t[r]={key:r,value:t[r]};return t},valueGrid:function(t){var r;for(var i in t){var e=[];for(var n in i)e.push(n.value);r.push(e)}return r}},beforeMount:function(){for(var t=this,r=[],i=0;i<4;i++){for(var e=[],n=0;n<4;n++)e.push("");r.push(e)}this.grid=r,this.putRandomNumber(),this.putRandomNumber(),document.addEventListener("keydown",(function(r){switch(r.key){case"ArrowLeft":t.move("left");break;case"ArrowUp":t.move("up");break;case"ArrowRight":t.move("right");break;case"ArrowDown":t.move("down");break;default:break}}))},methods:{putRandomNumber:function(){var t=this.grid,r=[];for(var i in t)for(var e in t)""==t[i][e]&&r.push([parseInt(i),parseInt(e)]);var n=r[Math.floor(Math.random()*r.length)],o=a.startingTiles[Math.floor(Math.random()*a.startingTiles.length)];t[n[0]][n[1]]=o,this.grid=t},slideRow:function(t){var r=t.filter((function(t){return""!==t})),i=Array(4-r.length).fill("");return r=i.concat(r),r},combineRow:function(t){for(var r=t,i=function(t){var i=r[t],e=r[t-1],n=void 0;void 0!==a.combinations[i]&&(n=a.combinations[i].find((function(t){return t.with==e}))),void 0!==n&&(r[t]=n.result,r[t-1]="")},e=3;e>=1;e--)i(e);return r},operate:function(t,r){var i=t;return i=this.slideRow(i,r),i=this.combineRow(i),i=this.slideRow(i,r),i},copyGrid:function(t){var r=[["","","",""],["","","",""],["","","",""],["","","",""]];for(var i in t)for(var e in t)r[i][e]=t[i][e];return r},compareGrid:function(t,r){for(var i in t)for(var e in t)return t[i][e]!=r[i][e]},flipGrid:function(t){var r=t;for(var i in r)r[i].reverse();return r},rotateGrid:function(t){var r=[["","","",""],["","","",""],["","","",""],["","","",""]];for(var i in t)for(var e in t)r[i][e]=t[e][i];return r},updateCanvas:function(){var t=this,r=document.querySelector("#c"),i=r.getContext("2d"),e=100,n=100,o=t.$data.grid;for(var c in i.clearRect(0,0,r.width,r.height),o)for(var s in o)if(i.strokeRect(s*e+5,c*n+5,95,95),""!=o[c][s]){var u=a.appearance[o[c][s]],d=a.fontSizes[o[c][s].length-1],f=u.fontSize;u?(i.fillStyle=u.color?u.color:"black",i.font=void 0!==f?f+"px sans":void 0!==d?d+"px sans":"64px sans"):(i.fillStyle="black",i.font="64px sans"),i.fillRect(s*e+5,c*n+5,95,95),i.fillStyle=u&&u.fontColor?u.fontColor:"white",i.textAlign="center",i.textBaseline="middle",i.fillText(o[c][s],s*e+e/2+2.5,c*n+n/2+2.5)}},isGameOver:function(){for(var t=this.grid,r=0;r<4;r++)for(var i=0;i<4;i++){if(""==t[r][i])return!1;if(3!==r&&t[r][i]===t[r+1][i])return!1;if(3!==i&&t[r][i]===t[r][i+1])return!1}return!0},move:function(t){var r,i=this.copyGrid(this.grid),e=!1,n=!1;switch(t){case"left":this.grid=this.flipGrid(this.grid),e=!0;break;case"right":break;case"up":this.grid=this.rotateGrid(this.grid),this.grid=this.flipGrid(this.grid),n=!0,e=!0;break;case"down":this.grid=this.rotateGrid(this.grid),n=!0;break;default:break}for(r in this.grid)this.grid[r]=this.slideRow(this.grid[r]),this.grid[r]=this.combineRow(this.grid[r]),this.grid[r]=this.slideRow(this.grid[r]);e&&(this.grid=this.flipGrid(this.grid)),n&&(this.grid=this.rotateGrid(this.grid),n=!1),this.compareGrid(i,this.grid)&&this.putRandomNumber(),this.updateCanvas();var o=this.isGameOver();o&&console.log("GAME OVER")}},mounted:function(){this.updateCanvas()}},s=c,u=(i("034f"),i("2877")),d=Object(u["a"])(s,n,o,!1,null,null,null),f=d.exports;e["a"].config.productionTip=!1,new e["a"]({render:function(t){return t(f)}}).$mount("#app")},"85ec":function(t,r,i){}});
//# sourceMappingURL=app.eb7b6912.js.map