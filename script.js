var div = document.getElementById("tooltip");
function clickObj(e){

    var left  = e.clientX  + "px";
    var top  = e.clientY  + "px";

    
    div.style.left = left;
    div.style.top = top;
    div.innerText = e.currentTarget.getAttribute("title");
    div.style.display = "block";

}