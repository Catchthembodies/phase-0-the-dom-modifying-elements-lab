// Write your code here!
document.getElementById('main').remove();

var newHeader = document.createElement('h1');
newHeader.setAttribute('id', "victory");
newHeader.innerHTML = "Ikmann is the champion";

document.body.appendChild(newHeader);