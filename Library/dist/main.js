!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t){class r{constructor(e,t,r,n){this.id=e,this.name=t,this.username=r,this.email=n}}class n{static displayUsers(){let e;o.getUsers().then(t=>{e=t,console.log(e),e.forEach(e=>n.addUserToList(e))})}static showAlert(e,t){const r=document.createElement("div");r.className=`alert alert-${t}`,r.appendChild(document.createTextNode(e));const n=document.querySelector(".container"),o=document.querySelector("#book-form");n.insertBefore(r,o),setTimeout(()=>document.querySelector(".alert").remove(),3e3)}static addUserToList(e){const t=document.querySelector("#book-list"),r=document.createElement("tr");r.innerHTML=`\n           <td>${e.name}</td>\n           <td>${e.username}</td>\n           <td>${e.email}</td>\n           <td><a href="#" class="btn btn-danger btn-sm delete">Delete</a></td>\n           <td><a href="#" class="btn btn-primary btn-sm update">Update</a></td>\n       `,t.appendChild(r)}static deleteUser(e){e.classList.contains("delete")&&e.parentElement.parentElement.remove()}static clearFields(){document.querySelector("#name").value="",document.querySelector("#username").value="",document.querySelector("#email").value="",document.querySelector("#id").value=""}}class o{static getUsers(){return new Promise((e,t)=>{fetch("https://jsonplaceholder.typicode.com/users").then(t=>{e(t.json())}).catch(e=>{})})}static addUser(e){fetch("https://jsonplaceholder.typicode.com/users",{method:"POST",body:JSON.stringify({name:e.name,username:e.username,email:e.email}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then(e=>e.json()).then(e=>console.log(e))}static removeUser(e){const t=o.getUsers();t.forEach((r,n)=>{r.id===e&&t.splice(n,1)}),localStorage.setItem("users",JSON.stringify(t))}}document.querySelector("#book-list").addEventListener("click",e=>{n.deleteUser(e.target),o.removeUser(e.target.parentElement.previousElementSibling.textContent),n.showAlert("User deleted","danger")}),document.addEventListener("DOMContentLoaded",n.displayUsers),document.querySelector("#book-form").addEventListener("submit",e=>{e.preventDefault();const t=document.querySelector("#name").value,s=document.querySelector("#username").value,a=document.querySelector("#email").value,l=document.querySelector("#id").value;if(""===t||""===s||""===a||""===l)n.showAlert("Please fill in all fields","danger");else{const e=new r(t,s,a,l);n.addUserToList(e),o.addUser(e),n.showAlert("User Added","success"),n.clearFields()}})}]);