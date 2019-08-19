var list = document.getElementById("list"),
				btn1 = document.getElementById("btn1"),
				btn2 = document.getElementById("btn2"),
				item = document.getElementsByClassName("item"),
				open = document.getElementsByClassName("open")[0],
				close = document.getElementsByClassName("close")[0];


console.log(list);
console.log(btn1);
console.log(btn2);
console.log(item);
console.log(open);

function add() {
					var newLi = document.createElement('li');
					newLi.innerHTML = 'Новая задача';
					newLi.className = 'item';
					list.appendChild(newLi);
					open.style.display = "none";

	// body...
}
function delItem() {

	list.removeChild(item[0]);

			if (item.length == 0) {
					open.style.display = "block";

	}
	// body...
}

function closee() {
	open.style.display = "none";
	// body...
}



btn1.addEventListener('click', add);
btn2.addEventListener('click', delItem);
close.addEventListener('click', closee);