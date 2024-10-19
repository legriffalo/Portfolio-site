let filters = [];


function remover(array, item){
    const index = array.indexOf(item);
    if (index > -1) { // only splice array when item is found
        array.splice(index, 1); // 2nd parameter means remove one item only
    }
}

function createGrid(){
    clearGrid()
    builtProjectBoard(filters)
    addListeners()
}


let showBio = document.getElementById("rightshow");
let hideBio = document.getElementById("righthide");


showBio.addEventListener("pointerdown",(e)=>{
    document.getElementById("right").classList.remove("hidden")
})


hideBio.addEventListener("pointerdown",(e)=>{
    document.getElementById("right").classList.add("hidden")
})


window.onresize = (e)=>{
    createGrid(filters)
}


let quicksearchs = [...document.getElementsByClassName("searchbuttons")];
quicksearchs.forEach((el) => {
    el.addEventListener("pointerdown",(e)=>{
        // console.log("clicked a quick search button")
        el.classList.toggle("selected");

        if([...el.classList].includes("selected")){
            filtersNew = [...el.dataset.filters.split(',')];
            // console.log(filtersNew, typeof(filtersNew))
            filtersNew.forEach((el)=>{
                filters.push(el);
            });
        }

        else{
            filtersNew = [...el.dataset.filters.split(',')];
            filtersNew.forEach((el)=>{
                remover(filters,el);
            });
        }
        


        createGrid(filters);
        // console.log("current filters being applied are ", filters)

    })
    
});