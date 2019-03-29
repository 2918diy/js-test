$(document).ready(function(){
    var elements = document.getElementsByTagName('p');
    var patt=new RegExp("@.+@");
    for (var i = elements.length-1;i>=0;i--){
        var str = elements[i].innerHTML;
        var rst = patt.exec(str);
        if(rst !=null){
            for (var j = rst.length-1;j>=0;j--){
                if(rst[j].search(/@\\]/)!= -1){
                    var cl = getClass(rst[j]);
                    elements[i].setAttribute("class",cl);
                    elements[i].innerText = elements[i].innerText.replace(rst[j], "");
                }
                else{
                    var cl = getClass(rst[j]);
                    var span = document.createElement("span"); 
                    span.setAttribute("class",cl);
                    span.append(getValue(rst[j]));
                    elements[i].innerHTML = elements[i].innerHTML.replace(rst[j],span.outerHTML)
                }
                
            }
        }
       
    }
});

function getClass(rst){
    var patt=new RegExp("\\[.+\\]");
    var cl = patt.exec(rst);
    if(cl !=null){
        cl[0] = cl[0].substring(1,cl[0].length-1)
        return cl[0]
    }
    else{
        return rst
    }
    
}
function getValue(rst){
    var patt=new RegExp("\\].+@");
    var cl = patt.exec(rst);
    if(cl !=null){
        cl[0] = cl[0].substring(1,cl[0].length-1)
        return cl[0]
    }
    else{
        return rst
    }
}
