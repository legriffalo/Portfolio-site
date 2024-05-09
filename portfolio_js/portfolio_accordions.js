// populate accordion using data set



projects = JSON.parse(data)
console.log(projects);

let projectsList = Object.keys(projects);

// watch out for hidden in classes
for(let i =0;i<projectsList.length;i++){
  document.getElementById('accordion').innerHTML+= `<div class="card">
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




const cardsContainer = document.querySelector(".container");

cardsContainer.addEventListener("click", (e) => {
  const target = e.target.closest(".card");

  if (!target) return;

  cardsContainer.querySelectorAll(".card").forEach((card) => {
    card.classList.remove("active");
  });

  target.classList.add("active");
});