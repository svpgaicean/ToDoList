!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);class n{constructor(e){this.dbName=e,this.addUser=e=>new Promise((t,r)=>{this.usernameExists(e.username).then(t=>{if(t)console.log("Err: Username already exists.");else{const t=this.db.transaction(["users"],"readwrite").objectStore("users").add(e);t.onsuccess=function(e){console.log("User added!")},t.onerror=function(e){}}})}),this.usernameExists=e=>new Promise((t,r)=>{this.db.transaction(["users"]).objectStore("users").openCursor().onsuccess=r=>{let n=r.target.result;n?n.value.username===e?t(!0):n.continue():(console.log("No more entries!"),t(!1))}}),this.addNote=e=>{},this.deleteNote=e=>{},this.completeNote=e=>{},this.listNotes=e=>{},this.addCategory=e=>{},this.IndxDb=window.indexedDB,this.db={},this.openDB()}openDB(){return new Promise((e,t)=>{let r;(r=this.IndxDb.open(this.dbName)).onupgradeneeded=e=>{this.db=e.target.result,this.db.createObjectStore("users",{keyPath:"id",autoIncrement:!0}),this.db.createObjectStore("list",{keyPath:"id"}),this.db.createObjectStore("category",{keyPath:"id",autoIncrement:!0}),console.log("Database was set up successfully")},r.onsuccess=t=>{console.log("success"),e(this.db=t.target.result)},r.onerror=()=>{t(console.log("Database failed to open"))}})}}const o=document.querySelector("#db-btn");!function(){let e=new n("database1"),t={username:"a",password:"ab",email:"agdf",deleted:!1};o.addEventListener("click",()=>{e.addUser(t)})}()}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGFiYXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiZXhwb3J0cyIsIm1vZHVsZSIsImkiLCJsIiwibW9kdWxlcyIsImNhbGwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsIkRhdGFiYXNlIiwiZGJOYW1lIiwiYWRkVXNlciIsIm5ld1VzZXIiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInRoaXMiLCJ1c2VybmFtZUV4aXN0cyIsInVzZXJuYW1lIiwidGhlbiIsImV4aXN0cyIsImNvbnNvbGUiLCJsb2ciLCJyZXF1ZXN0IiwiZGIiLCJ0cmFuc2FjdGlvbiIsIm9iamVjdFN0b3JlIiwiYWRkIiwib25zdWNjZXNzIiwiZSIsIm9uZXJyb3IiLCJvcGVuQ3Vyc29yIiwiY3Vyc29yIiwidGFyZ2V0IiwicmVzdWx0IiwiY29udGludWUiLCJhZGROb3RlIiwibm90ZVRleHQiLCJkZWxldGVOb3RlIiwiaWQiLCJjb21wbGV0ZU5vdGUiLCJsaXN0Tm90ZXMiLCJjYXRlZ29yeU5hbWUiLCJhZGRDYXRlZ29yeSIsIkluZHhEYiIsIndpbmRvdyIsImluZGV4ZWREQiIsIm9wZW5EQiIsInJlcSIsIm9wZW4iLCJvbnVwZ3JhZGVuZWVkZWQiLCJjcmVhdGVPYmplY3RTdG9yZSIsImtleVBhdGgiLCJhdXRvSW5jcmVtZW50IiwiZGJCdG4iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ1c2VyIiwicGFzc3dvcmQiLCJlbWFpbCIsImRlbGV0ZWQiLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiYUFDRSxJQUFJQSxFQUFtQixHQUd2QixTQUFTQyxFQUFvQkMsR0FHNUIsR0FBR0YsRUFBaUJFLEdBQ25CLE9BQU9GLEVBQWlCRSxHQUFVQyxRQUduQyxJQUFJQyxFQUFTSixFQUFpQkUsR0FBWSxDQUN6Q0csRUFBR0gsRUFDSEksR0FBRyxFQUNISCxRQUFTLElBVVYsT0FOQUksRUFBUUwsR0FBVU0sS0FBS0osRUFBT0QsUUFBU0MsRUFBUUEsRUFBT0QsUUFBU0YsR0FHL0RHLEVBQU9FLEdBQUksRUFHSkYsRUFBT0QsUUFLZkYsRUFBb0JRLEVBQUlGLEVBR3hCTixFQUFvQlMsRUFBSVYsRUFHeEJDLEVBQW9CVSxFQUFJLFNBQVNSLEVBQVNTLEVBQU1DLEdBQzNDWixFQUFvQmEsRUFBRVgsRUFBU1MsSUFDbENHLE9BQU9DLGVBQWViLEVBQVNTLEVBQU0sQ0FBRUssWUFBWSxFQUFNQyxJQUFLTCxLQUtoRVosRUFBb0JrQixFQUFJLFNBQVNoQixHQUNYLG9CQUFYaUIsUUFBMEJBLE9BQU9DLGFBQzFDTixPQUFPQyxlQUFlYixFQUFTaUIsT0FBT0MsWUFBYSxDQUFFQyxNQUFPLFdBRTdEUCxPQUFPQyxlQUFlYixFQUFTLGFBQWMsQ0FBRW1CLE9BQU8sS0FRdkRyQixFQUFvQnNCLEVBQUksU0FBU0QsRUFBT0UsR0FFdkMsR0FEVSxFQUFQQSxJQUFVRixFQUFRckIsRUFBb0JxQixJQUMvQixFQUFQRSxFQUFVLE9BQU9GLEVBQ3BCLEdBQVcsRUFBUEUsR0FBOEIsaUJBQVZGLEdBQXNCQSxHQUFTQSxFQUFNRyxXQUFZLE9BQU9ILEVBQ2hGLElBQUlJLEVBQUtYLE9BQU9ZLE9BQU8sTUFHdkIsR0FGQTFCLEVBQW9Ca0IsRUFBRU8sR0FDdEJYLE9BQU9DLGVBQWVVLEVBQUksVUFBVyxDQUFFVCxZQUFZLEVBQU1LLE1BQU9BLElBQ3RELEVBQVBFLEdBQTRCLGlCQUFURixFQUFtQixJQUFJLElBQUlNLEtBQU9OLEVBQU9yQixFQUFvQlUsRUFBRWUsRUFBSUUsRUFBSyxTQUFTQSxHQUFPLE9BQU9OLEVBQU1NLElBQVFDLEtBQUssS0FBTUQsSUFDOUksT0FBT0YsR0FJUnpCLEVBQW9CNkIsRUFBSSxTQUFTMUIsR0FDaEMsSUFBSVMsRUFBU1QsR0FBVUEsRUFBT3FCLFdBQzdCLFdBQXdCLE9BQU9yQixFQUFnQixTQUMvQyxXQUE4QixPQUFPQSxHQUV0QyxPQURBSCxFQUFvQlUsRUFBRUUsRUFBUSxJQUFLQSxHQUM1QkEsR0FJUlosRUFBb0JhLEVBQUksU0FBU2lCLEVBQVFDLEdBQVksT0FBT2pCLE9BQU9rQixVQUFVQyxlQUFlMUIsS0FBS3VCLEVBQVFDLElBR3pHL0IsRUFBb0JrQyxFQUFJLEdBSWpCbEMsRUFBb0JBLEVBQW9CbUMsRUFBSSxHLHNDQ2hGckQsTUFBTUMsRUFJTCxZQUFtQkMsR0FBQSxLQUFBQSxTQXFDbkIsS0FBQUMsUUFBV0MsR0FDSCxJQUFJQyxRQUFRLENBQUNDLEVBQVNDLEtBQzVCQyxLQUFLQyxlQUFlTCxFQUFRTSxVQUMxQkMsS0FBTUMsSUFDTixHQUFLQSxFQVlKQyxRQUFRQyxJQUFJLHFDQVpBLENBQ1osTUFBTUMsRUFBVVAsS0FBS1EsR0FBR0MsWUFBWSxDQUFDLFNBQVUsYUFDbkNDLFlBQVksU0FDWkMsSUFBSWYsR0FFaEJXLEVBQVFLLFVBQVksU0FBU0MsR0FDNUJSLFFBQVFDLElBQUksZ0JBRWJDLEVBQVFPLFFBQVUsU0FBU0QsVUFVaEMsS0FBQVosZUFBa0JDLEdBQ1YsSUFBSUwsUUFBUSxDQUFDQyxFQUFTQyxLQUM1QkMsS0FBS1EsR0FBR0MsWUFBWSxDQUFDLFVBQ2RDLFlBQVksU0FDWkssYUFBYUgsVUFBYUMsSUFDMUIsSUFBSUcsRUFBU0gsRUFBRUksT0FBT0MsT0FDbEJGLEVBQ0NBLEVBQU90QyxNQUFNd0IsV0FBYUEsRUFDN0JKLEdBQVEsR0FFUmtCLEVBQU9HLFlBR1JkLFFBQVFDLElBQUksb0JBQ1pSLEdBQVEsT0FjbEIsS0FBQXNCLFFBQVdDLE1BQ1gsS0FBQUMsV0FBY0MsTUFDZCxLQUFBQyxhQUFnQkQsTUFDaEIsS0FBQUUsVUFBYUMsTUFLYixLQUFBQyxZQUFlRCxNQTlGZDFCLEtBQUs0QixPQUFTQyxPQUFPQyxVQUNyQjlCLEtBQUtRLEdBQUssR0FDVlIsS0FBSytCLFNBSU4sU0FDQyxPQUFPLElBQUlsQyxRQUFRLENBQUNDLEVBQVNDLEtBQzVCLElBQUlpQyxHQUNKQSxFQUFNaEMsS0FBSzRCLE9BQU9LLEtBQUtqQyxLQUFLTixTQUd4QndDLGdCQUFtQnJCLElBQ3RCYixLQUFLUSxHQUFLSyxFQUFFSSxPQUFPQyxPQUVuQmxCLEtBQUtRLEdBQUcyQixrQkFBa0IsUUFBUyxDQUFDQyxRQUFTLEtBQU1DLGVBQWUsSUFDbEVyQyxLQUFLUSxHQUFHMkIsa0JBQWtCLE9BQVEsQ0FBQ0MsUUFBUyxPQUM1Q3BDLEtBQUtRLEdBQUcyQixrQkFBa0IsV0FBWSxDQUFDQyxRQUFTLEtBQU1DLGVBQWUsSUFFckVoQyxRQUFRQyxJQUFJLHFDQUdiMEIsRUFBSXBCLFVBQWFDLElBQ2hCUixRQUFRQyxJQUFJLFdBQ1pSLEVBQVFFLEtBQUtRLEdBQUtLLEVBQUVJLE9BQU9DLFNBRTVCYyxFQUFJbEIsUUFBVSxLQUNiZixFQUFPTSxRQUFRQyxJQUFJLGdDQzlCdkIsTUFBTWdDLEVBQVFDLFNBQVNDLGNBQWMsWUFFcEMsV0FFQSxJQUFJaEMsRUFBSyxJQUFJZixFQUFTLGFBRWxCZ0QsRUFBYyxDQUNqQnZDLFNBQVUsSUFDVndDLFNBQVUsS0FDVkMsTUFBTyxPQUNQQyxTQUFTLEdBR1ZOLEVBQU1PLGlCQUFpQixRQUFTLEtBQVFyQyxFQUFHYixRQUFROEMsS0FYcEQiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IHsgSVVzZXIgfSBmcm9tICcuL3V0aWxzJztcclxuXHJcbmNsYXNzIERhdGFiYXNlIHtcclxuXHRwcml2YXRlIEluZHhEYjogSURCRmFjdG9yeTtcclxuXHRwcml2YXRlIGRiOiBJREJEYXRhYmFzZTtcclxuXHRcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgZGJOYW1lOiBzdHJpbmcpIHtcclxuXHRcdHRoaXMuSW5keERiID0gd2luZG93LmluZGV4ZWREQjtcclxuXHRcdHRoaXMuZGIgPSB7fSBhcyBJREJEYXRhYmFzZTtcclxuXHRcdHRoaXMub3BlbkRCKCk7XHJcblx0fVxyXG5cclxuXHQvLyBPcGVuIGRhdGFiYXNlIG9uIGNsYXNzIGluc3RhbnRpYXRpb25cclxuXHRvcGVuREIoKSB7XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRsZXQgcmVxOiBJREJPcGVuREJSZXF1ZXN0O1xyXG5cdFx0XHRyZXEgPSB0aGlzLkluZHhEYi5vcGVuKHRoaXMuZGJOYW1lKTtcclxuXHJcblx0XHRcdC8vIFNldCB1cCB0aGUgb2JqZWN0IHN0b3JlIGlmIG5ldyBkYXRhYmFzZVxyXG5cdFx0XHRyZXEub251cGdyYWRlbmVlZGVkID0gKGU6IGFueSkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuZGIgPSBlLnRhcmdldC5yZXN1bHQ7XHJcblxyXG5cdFx0XHRcdHRoaXMuZGIuY3JlYXRlT2JqZWN0U3RvcmUoXCJ1c2Vyc1wiLCB7a2V5UGF0aDogJ2lkJywgYXV0b0luY3JlbWVudDogdHJ1ZX0pO1xyXG5cdFx0XHRcdHRoaXMuZGIuY3JlYXRlT2JqZWN0U3RvcmUoXCJsaXN0XCIsIHtrZXlQYXRoOiAnaWQnfSk7XHJcblx0XHRcdFx0dGhpcy5kYi5jcmVhdGVPYmplY3RTdG9yZShcImNhdGVnb3J5XCIsIHtrZXlQYXRoOiAnaWQnLCBhdXRvSW5jcmVtZW50OiB0cnVlfSk7XHJcblxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdEYXRhYmFzZSB3YXMgc2V0IHVwIHN1Y2Nlc3NmdWxseScpXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJlcS5vbnN1Y2Nlc3MgPSAoZTogYW55KSA9PiB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ3N1Y2Nlc3MnKTtcclxuXHRcdFx0XHRyZXNvbHZlKHRoaXMuZGIgPSBlLnRhcmdldC5yZXN1bHQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJlcS5vbmVycm9yID0gKCkgPT4ge1xyXG5cdFx0XHRcdHJlamVjdChjb25zb2xlLmxvZygnRGF0YWJhc2UgZmFpbGVkIHRvIG9wZW4nKSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiAgVFJBTlNBQ1RJT05TIFxyXG5cdCAqL1xyXG5cdGFkZFVzZXIgPSAobmV3VXNlcjogSVVzZXIpID0+IHtcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRcdHRoaXMudXNlcm5hbWVFeGlzdHMobmV3VXNlci51c2VybmFtZSlcclxuXHRcdFx0XHQudGhlbigoZXhpc3RzKSA9PiB7XHJcblx0XHRcdFx0XHRpZiAoIWV4aXN0cykge1xyXG5cdFx0XHRcdFx0XHRjb25zdCByZXF1ZXN0ID0gdGhpcy5kYi50cmFuc2FjdGlvbihbXCJ1c2Vyc1wiXSwgXCJyZWFkd3JpdGVcIilcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC5vYmplY3RTdG9yZShcInVzZXJzXCIpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQuYWRkKG5ld1VzZXIpO1xyXG5cclxuXHRcdFx0XHRcdFx0cmVxdWVzdC5vbnN1Y2Nlc3MgPSBmdW5jdGlvbihlOiBhbnkpIHtcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIlVzZXIgYWRkZWQhXCIpO1xyXG5cdFx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdFx0XHRyZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbihlOiBhbnkpIHtcclxuXHRcdFx0XHRcdFx0XHQvLyBoYW5kbGUgZXJyb3JcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJFcnI6IFVzZXJuYW1lIGFscmVhZHkgZXhpc3RzLlwiKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHVzZXJuYW1lRXhpc3RzID0gKHVzZXJuYW1lOiBzdHJpbmcpID0+IHtcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRcdHRoaXMuZGIudHJhbnNhY3Rpb24oW1widXNlcnNcIl0pXHJcblx0XHRcdFx0XHRcdFx0XHRcdC5vYmplY3RTdG9yZShcInVzZXJzXCIpXHJcblx0XHRcdFx0XHRcdFx0XHRcdC5vcGVuQ3Vyc29yKCkub25zdWNjZXNzID0gKGU6IGFueSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxldCBjdXJzb3IgPSBlLnRhcmdldC5yZXN1bHQgYXMgSURCQ3Vyc29yV2l0aFZhbHVlO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChjdXJzb3IpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChjdXJzb3IudmFsdWUudXNlcm5hbWUgPT09IHVzZXJuYW1lKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlc29sdmUodHJ1ZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjdXJzb3IuY29udGludWUoKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ05vIG1vcmUgZW50cmllcyEnKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlc29sdmUoZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0LyoqIFBST1RPVFlQRVMgZm9yIG5vdGUgaGFuZGxpbmdcclxuXHQgKiAgYWRkTm90ZSAtIGFkZHMgdGV4dCBmcm9tIGlucHV0IGZpZWxkXHJcblx0ICogIGRlbGV0ZU5vdGUgLSBkZWxldGVzIG5vdGUgYmFzZWQgb24gbm90ZSBpZFxyXG5cdCAqICBjb21wbGV0ZU5vdGUgLSBjb21wbGV0ZSBub3RlIGJhc2VkIG9uIG5vdGUgaWQgKGNoYW5nZSBjb21wbGV0ZWQgZmllbGQgb2Ygbm90ZSlcclxuXHQgKiAgbGlzdE5vdGVzIC0gbGlzdCBub3RlcyBiYXNlZCBvbiBjYXRlZ29yaWVzIChhbGwsIHgsIHksIHopXHJcblx0ICogXHJcblx0ICogIG9ubHkgbGlzdCBub3RlcyB0aGF0IGRvIG5vdCBoYXZlIGZpZWxkICdkZWxldGVkID0gdHJ1ZSdcclxuXHQgKi9cclxuXHRhZGROb3RlID0gKG5vdGVUZXh0OiBzdHJpbmcpID0+IHt9O1xyXG5cdGRlbGV0ZU5vdGUgPSAoaWQ6IG51bWJlcikgPT4ge307XHJcblx0Y29tcGxldGVOb3RlID0gKGlkOiBudW1iZXIpID0+IHt9O1xyXG5cdGxpc3ROb3RlcyA9IChjYXRlZ29yeU5hbWU6IHN0cmluZykgPT4ge307XHJcblxyXG5cdC8qKlxyXG5cdCAqICBQUk9UT1RZUEVTIGZvciBjYXRlZ29yeSBoYW5kbGluZ1xyXG5cdCAqL1xyXG5cdGFkZENhdGVnb3J5ID0gKGNhdGVnb3J5TmFtZTogc3RyaW5nKSA9PiB7XHJcblx0XHRsZXQgZGVmYXVsdENhdGVnOyAvLyBjaGVjayBpZiB0aGUgZGVmYXVsdCBjYXRlZ29yeSBleGlzdHNcclxuXHRcdGlmICghZGVmYXVsdENhdGVnKSB7IC8vIGNyZWF0ZSBpdCBpZiBpdCBkb2Vzbid0XHJcblx0XHRcdC8vIGNyZWF0ZSBkZWZhdWx0IGNhdGVnXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQvLyBoYW5kbGUgYWRkaW5nIG5ldyBjYXRlZ29yeVxyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuXHJcbmV4cG9ydCB7IERhdGFiYXNlIH07XHJcbiIsIi8vIGltcG9ydCB7IHJlZ2lzdGVyTmV3VXNlciB9IGZyb20gJy4vcmVnaXN0cmF0aW9uJztcclxuaW1wb3J0IHsgRGF0YWJhc2UgfSBmcm9tICcuL2RhdGFiYXNlJztcclxuaW1wb3J0IHsgSVVzZXIgfSBmcm9tICcuL3V0aWxzJztcclxuXHJcbmNvbnN0IGRiQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RiLWJ0bicpIGFzIEhUTUxGb3JtRWxlbWVudDtcclxuXHJcbihmdW5jdGlvbigpIHtcclxuXHQvLyByZWdpc3Rlck5ld1VzZXIoKTtcclxuXHRsZXQgZGIgPSBuZXcgRGF0YWJhc2UoJ2RhdGFiYXNlMScpO1xyXG5cclxuXHRsZXQgdXNlcjogSVVzZXIgPSB7XHJcblx0XHR1c2VybmFtZTogJ2EnLFxyXG5cdFx0cGFzc3dvcmQ6ICdhYicsXHJcblx0XHRlbWFpbDogJ2FnZGYnLFxyXG5cdFx0ZGVsZXRlZDogZmFsc2VcclxuXHR9O1xyXG5cclxuXHRkYkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgZGIuYWRkVXNlcih1c2VyKSB9KTtcclxufSgpKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==