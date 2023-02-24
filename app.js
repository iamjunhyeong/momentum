const title = document.querySelector(".hello h1");
console.dir(title)
title.innerText = "Click ME!"

function handleTitleClick(){
    console.log("title was clicked!");
    title.style.color = "blue"
}
function handleMouseEnter(){
    title.innerText = "Mouse is here!"
}
function handleMouseLeave(){
    title.innerText = "Mouse is gone!"
}
function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy(){
        alert("copier");
}
title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);