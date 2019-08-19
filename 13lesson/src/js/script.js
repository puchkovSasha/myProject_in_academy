var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var main = document.getElementById("main");
var myList = document.getElementById("list");
var ul = document.getElementsByTagName("ul");
var item = myList.getElementsByClassName("item");
var popup	= document.getElementsByClassName("popup");
var open	= document.getElementsByClassName("open")[0];
var close	= document.getElementsByClassName("close")[0];


function addItem() {
	var newLi = document.createElement("li");
					newLi.innerHTML = "Новая задача";
					newLi.className = "item";
					myList.appendChild(newLi);
					open.style.display = "none";

}

function del(){

	myList.removeChild(item[0]);

			if (item.length == 0) {
					open.style.display = "block";

	}
}

function closee(){
	open.style.display = "none";
}

btn1.addEventListener("click", addItem);
btn2.addEventListener("click", del);
close.addEventListener("click", closee);