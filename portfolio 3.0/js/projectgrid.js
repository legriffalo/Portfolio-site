// get all project data from the file 
projects = JSON.parse(data)
console.log(projects);



//list of all projects used to grab each element for genration
let projectsList = Object.keys(projects);
// number of panels required
let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)

let rows = Math.floor(vw/350);
console.log("row width is ", rows);

//filter out work in progress projects
// projectsList = projectsList.filter((a)=>{if(projects[a].show ==1) return 1});

console.log(projectsList);

// generate project grid
for(let i = 0; i<projectsList.length; i++){
  console.log("creating", projectsList[i])
  if(i%rows == 0){
    document.getElementById('projectgrid').innerHTML+= `<div id = "row${i/rows}" class = "row"></div>`
  }

  if (projects[projectsList[i]].show == 1 ){

    let infostring = '';
    projects[projectsList[i]].specifics.forEach((el)=>{
      infostring += el + '<br>';
    })

    console.log(infostring)

    document.getElementById(`row${Math.floor(i/rows)}`).innerHTML+= 
    
    `<div class="card">
      <img class="background" src="${projects[projectsList[i]].coverimage}">
      <div class="card-content">
      
      <div class = "cardfront">
        <div class = "topline">
          <div class="profile-image">
            <a href= "${projects[projectsList[i]].link.source}" target = "none"><i class = 'far fa-eye'></i></a>
          </div>

          <h3 class="title">${projects[projectsList[i]].name}</h3>
        </div>
        
        <div class = 'break'>
        </div>

        <div class = "bottom">  
          <p>${[... projects[projectsList[i]].tags]}</p>
        </div>
      
        
      </div>

      



      
      
      
    </div>
    
    <div class = "cardback hidden">
        <div class = "info">
          <p class = "infoparagragh">
            ${infostring}
          </p>
        </div>

      
        
      </div>

    
    
    `
}
else{}
}


els = [...document.getElementsByClassName("card")]

els.forEach((el)=>{
  el.addEventListener("click", (e)=>{
   

    el.getElementsByClassName("card-content")[0].classList.toggle("hidden");
    el.getElementsByClassName("background")[0].classList.toggle("hidden");
    // e.target.getElementsByClassName("backdrop")[0].classList.toggle("hidden");

    el.getElementsByClassName("cardback")[0].classList.toggle("hidden");
    

})});
// // start up with panel0 shown
// let selected = 0;
// document.getElementsByClassName('panel')[selected].classList.add('panelshown');



// const cardsContainer = document.querySelector(".container");

// cardsContainer.addEventListener("click", (e) => {
//   const target = e.target.closest(".card");

//   if (!target) return;

//   cardsContainer.querySelectorAll(".card").forEach((card) => {
//     card.classList.remove("active");
//   });

//   target.classList.add("active");
// });