$(document).ready(function(){
    var elements = document.getElementsByTagName('p');
    var patt=new RegExp("@.+@");
    for (var i = elements.length-1;i>=0;i--){
        var str = elements[i].innerHTML;
        var rst = patt.exec(str);
        for (var j = rst.length-1;j>=0;j--){
            console.log(rst[j]);
        }
    }
});
