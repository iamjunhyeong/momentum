const title = document.querySelector("div.hello h1");
console.dir(title);
title.innerText = "Click ME!";

function handleTitleClick(){
    const currentColoer = title.style.color;
    let newColoer;
    if (currentColoer === "blue"){
        newColoer = "tomato";
    }else{
        newColoer = "blue";
    }
    title.style.color = newColoer;
}
title.addEventListener("click", handleTitleClick);