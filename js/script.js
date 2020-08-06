const container = document.body.querySelector('#container');
const gridBox = document.createElement('div');

for (let i = 256; i > 0; --i) {
	container.appendChild(gridBox.cloneNode(true));
}
