let filters = [];

//remove an element from an array
function remover(array, item){
    const index = array.indexOf(item);
    if (index > -1) { // only splice array when item is found
        array.splice(index, 1); // 2nd parameter means remove one item only
    }
}

// create grid function combines all parts defined in project grid
function createGrid(){
    clearGrid()
    builtProjectBoard(filters)
    addListeners()
}


// elements to add listeners as variables
let showBio = document.getElementById("rightshow");
let hideBio = document.getElementById("righthide");


// add all listeners
showBio.addEventListener("pointerdown",(e)=>{
    document.getElementById("right").classList.remove("hidden")
})


hideBio.addEventListener("pointerdown",(e)=>{
    document.getElementById("right").classList.add("hidden")
})


window.onresize = (e)=>{
    createGrid(filters)
}


// Add listeners to the quick search bar 
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
        

        // Once filters are updated rerender the grid
        createGrid(filters);

    })
    
});