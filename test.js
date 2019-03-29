$(document).ready(function(){
    var elements = document.getElementsByTagName('p');
    var patt=new RegExp("@.+@");
    for (var i = elements.length-1;i>=0;i--){
        var str = elements[i].innerHTML;
        var rst = patt.exec(str);
        if(rst !=null){
            for (var j = rst.length-1;j>=0;j--){
                str = str.replace(rst[j],'<span class="hint">我是注释</span>')
                console.log(rst[j]);
                console.log(str);
            }
        }
        elements[i].innerHTML = str;
    }
});
