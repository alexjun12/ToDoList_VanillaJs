const title = document.querySelector("div.hello:first-child h1");

function isTitleClicked(){
    title.style.color = 'red';
}
function isMoouseHere(){
    title.style.color = "blue";
}
function isMouseNotHere(){
    title.style.color = "black";
}
function ifResized(){
    document.body.style.backgroundColor = "tomato";
}
function ifCopied(){
    alert("COPIER!!");
}

title.addEventListener("click",isTitleClicked);
title.addEventListener("mouseenter",isMoouseHere);
title.addEventListener("mouseleave",isMouseNotHere);
window.addEventListener("resize",ifResized);
window.addEventListener("copy",ifCopied);