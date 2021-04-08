// no longer has DOM node 'main#main'
// has a 'newHeader' variable that points to node 'h1#victory'
// has a 'newHeader' variable that points to node 'h1#victory'
// has a 'newHeader' variable that points to node 'h1#victory' with "YOUR-NAME is the champion" inside

document.getElementById('main').remove()
let newHeader = document.createElement('h1')
let newContent = document.createTextNode("Udenna is the champion");
newHeader.setAttribute('id','victory');
newHeader.appendChild(newContent);
