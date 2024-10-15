let showBio = document.getElementById("rightshow");
let hideBio = document.getElementById("righthide");


showBio.addEventListener("pointerdown",(e)=>{
    document.getElementById("right").classList.remove("hidden")
})


hideBio.addEventListener("pointerdown",(e)=>{
    document.getElementById("right").classList.add("hidden")
})


window.onresize = (e)=>{
    clearGrid()
    builtProjectBoard()
}