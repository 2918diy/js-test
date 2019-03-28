$(document).ready(function(){
    var elements = document.getElementsByTagName('p');
    for (var i = elements.length-1;i>=0;i--){
        console.log(elements[i].innerHTML);
    }
});
