//para q cuente cada vez q se le da click al boton like
var likes = 3;
var likesElement = document.querySelector('#likes');

console.log(likesElement);

function sumar(){
    likes++;
    likesElement.innerText = likes + "  like(s)";
    console.log(likes);
}
