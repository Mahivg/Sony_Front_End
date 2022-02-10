console.log("Dom Manipulation...");

var imageElement = document.getElementById('image');
imageElement.innerText = "Image Modified";
imageElement.style.color = "green";

console.log(document.querySelector('h1')); // single object

console.log(document.querySelectorAll('h1')); 
document.querySelectorAll('#image'); //[]

console.log(imageElement);
var myDiv = document.querySelector('#uniq-div-1');
if(!myDiv.classList.contains('img-class')) {
    myDiv.classList.add('img-class');
    myDiv.classList.toggle('img-class');
}
console.dir(myDiv);
console.dir(myDiv.querySelector('h1'));




myDiv.addEventListener('mouseover', function(eventArg) {
    console.log('Mouse hovered on div with Id' + myDiv.id);
});


document.getElementById('btn1').addEventListener('click', function(params) {
    document.getElementById('txtName').value = 'Mounika';
    var s =  document.getElementById('txtName').value;

    document.getElementById('divLorem').classList.toggle('hide');
    document.getElementById('divLorem').classList.toggle('show');
    document.querySelector('body').scrollTop = 0;
    window.open('https:///google.com', '_target');
});

