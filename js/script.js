const container = document.body.querySelector('#container');
const gridBox = document.createElement('div');
gridBox.classList.add("ink");

let shake = document.body.querySelector('#shake');

for (let i = 400; i > 0; --i) {
	container.appendChild(gridBox.cloneNode(true));
}

container.addEventListener("mouseover", function(event){
	event.target.style.backgroundColor = "black";
});

shake.addEventListener("click", function(){
	var elements = document.getElementsByClassName('ink');
	for(var i = 0; i < elements.length; i++){
		elements[i].style.backgroundColor = "white";
	}
});