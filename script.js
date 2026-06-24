//your JS code here. If required.
const title=document.getElementById("title");
const author=document.getElementById("author");
const isbn=document.getElementById("isbn");
const button=document.getElementById("submit");
const table=document.getElementById("book-list")
button.addEventListener("click",function(){
	let tr = document.createElement("tr");

let td1 = document.createElement("td");
let td2 = document.createElement("td");
let td3 = document.createElement("td");
let td4 = document.createElement("td");

td1.textContent = title.value;
td2.textContent = author.value;
td3.textContent = isbn.value;
	let clear=document.createElement("button")
	clear.textContent="clear";
td4.appendChild(clear)
tr.append(td1, td2, td3,td4);
document.getElementById("book-list").appendChild(tr);

	clear.addEventListener("click",function(){
		tr.remove();
	});

	document.querySelector("form").reset();

});