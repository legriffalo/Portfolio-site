// populate accordion using data set



projects = JSON.parse(data)
console.log(projects);

let projectsList = Object.keys(projects);
// number of panels required
let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
let panels = Math.floor(vw/240);
console.log(panels);

//filter out work in progress projects
projectsList = projectsList.filter((a)=>{if(projects[a].show ==1) return 1});

console.log(projectsList);
// watch out for hidden in classes
for(let i =0;i<projectsList.length;i++){
  if(i%panels == 0){
    document.getElementById('accordion').innerHTML+= `<div id = "panel${i/panels}" class = "panel"></div>`
  }

  if (projects[projectsList[i]].show == 1 ){
  document.getElementById(`panel${Math.floor(i/panels)}`).innerHTML+= `<div class="card">
    <img class="background" src="${projects[projectsList[i]].coverimage}">
    <div class="card-content">
      <div class="profile-image">
      <a href= "${projects[projectsList[i]].link.source}" target = "none"><i class = 'far fa-eye'></i></a>
      </div>
    <h3 class="title">${projects[projectsList[i]].name}</h3>
    <div class = 'break'></div>
      
    <p>${[... projects[projectsList[i]].tags]}</p>
    
      
    </div>
    
  <div class="backdrop"></div>
  </div>`
}
else{}
}

// start up with panel0 shown
let selected = 0;
document.getElementsByClassName('panel')[selected].classList.add('panelshown');



const cardsContainer = document.querySelector(".container");

cardsContainer.addEventListener("click", (e) => {
  const target = e.target.closest(".card");

  if (!target) return;

  cardsContainer.querySelectorAll(".card").forEach((card) => {
    card.classList.remove("active");
  });

  target.classList.add("active");
});