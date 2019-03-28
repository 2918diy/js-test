(function() {
$(document).ready(function(){
    var txt1="<p>文本。</p>";              // 使用 HTML 标签创建文本
    var txt2=$("<p></p>").text("文本。");  // 使用 jQuery 创建文本
    var txt3=document.createElement("p");
    txt3.innerHTML="文本。";               // 使用 DOM 创建文本 text with DOM
    //document.getElementById("div-test").appendChild(txt1,txt2,txt3);
    var n = $(document)[0].childNodes;
    var t = $("#test2");
    t.append(txt3);
    console.log(t);     // 追加新元
});
})();
