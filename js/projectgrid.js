function filterCheck(a, b){
  console.log(a)
  console.log(b)
  let success = 0;
  a.forEach((val) => { 
    b.includes(val)? success = 1 : null;
    console.log(success , val)
  });
  console.log(success)
  return success
}



function clearGrid(){
  document.getElementById('projectgrid').innerHTML = '';
}



function builtProjectBoard(filters){
    // get all project data from the file 
    projects = JSON.parse(data);
    // console.log(projects);
    
    
    //list of all projects used to grab each element for genration
    let projectsList = Object.keys(projects);

    // filter out unwanted projects
    if(filters && filters.length>0){
      toRemove = [];
      projectsList.forEach((projectNumber)=>{
        console.log("the project being checked is ",projectNumber )
        
        
        allTags = Array.from(projects[projectNumber].tags);
        console.log("its tags are ", allTags)
        console.log("Tags to match are ", filters)
        let matches = 0;
        // filterCheck(filters, allTags)?matches = 1:null;  
        // console.log("did it match ", matches)
        filterCheck(filters, allTags)?matches = 1:toRemove.push(projectNumber);  
        // console.log(matches,projects, projectsList )
        });

        console.log("projects to remove are", toRemove)


        toRemove.length>0? toRemove.forEach(el=>{
          remover(projectsList,el)
        }):null;
    }

    else{console.log("no filters showing all projects")}
    // number of panels required
    let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)

    let rows = Math.floor(vw/450);
    rows = rows>0? rows:1;
    console.log("row width is ", rows);

    //filter out work in progress projects
    // projectsList = projectsList.filter((a)=>{if(projects[a].show ==1) return 1});

    // console.log(projectsList);

    // generate project grid
    for(let i = 0; i<projectsList.length; i++){
      console.log("creating", projectsList[i])
      if(i%rows == 0){
        document.getElementById('projectgrid').innerHTML+= `<div id = "row${i/rows}" class = "row"></div>`
      }

      if (projects[projectsList[i]].show == 1 ){
        
        currentProject = projects[projectsList[i]]
        // get project summary

        let summaryString =currentProject.description;
        // get details

        let infoString = '';
        currentProject.specifics.forEach((el)=>{
          infoString += el + '<br>';
        });

        //get project link data
        infoLinks = ""
        let ll =  currentProject.links;
        ll.forEach((el)=>{
          let icon
          el.type == "github"? icon = 'fa-brands fa-github':null;
          el.type == "site"? icon = 'fas fa-globe':null;

          el.dim? dimensions = el.dim:dimensions = "width=600,height=600";
          

          infoLinks +=`<p><i data-name = "${currentProject.name}" data-dimensions = "${dimensions}" data-target = "${el.source}"    class = "backlink ${icon}"></i></p>`
        })

        // console.log(infoLinks)
// <i class = "backlink ${icon}"></i>
        // hammer for in progress indicator
        //<i class="fas fa-hammer"></i>

        currentProject.inprogress? ongoing = `<img class = "inprogress" src = "assets/backgrounds/inprogress.png">`:ongoing = '';
        document.getElementById(`row${Math.floor(i/rows)}`).innerHTML+= 
        
        `<div class="card">
          <img class="background" src="${currentProject.coverimage}">
          ${ongoing}

          <div class="card-content">
          
          <div class = "cardfront">
            <div class = "topline">

              <h3 class="title">${currentProject.name}</h3>
            </div>
            
            <div class = 'break'>
            </div>

            <div class = "bottom">  
              <p>${[... currentProject.tags]}</p>
            </div>
          
            
          </div>
    
          
        </div>
        
        <div class = "cardback hidden">
            <div class = "info">
              <h4>${summaryString}</h4>

              <div class = "cardbacklinks">
                ${infoLinks}
              </div>

              <p class = "infoparagragh">
                ${infoString}
              </p>
              
            </div>

          
            
          </div>

        
        
        `
    }
    else{}
    }
  }


function addListeners(){

    els = [...document.getElementsByClassName("card")]
    console.log("adding click listeners",els)

    els.forEach((el)=>{
      el.addEventListener("pointerup", (e)=>{

        console.log(e.target.tagName, "was clicked")
        if(e.target.tagName!='I' && e.target.tagName != 'A'){
        console.log("triggered a click")

      
        el.getElementsByClassName("card-content")[0].classList.toggle("hidden");
        el.getElementsByClassName("background")[0].classList.toggle("hidden");
        // e.target.getElementsByClassName("backdrop")[0].classList.toggle("hidden");

        el.getElementsByClassName("cardback")[0].classList.toggle("hidden");
        }
        
        else{
          console.log("clicked link to other site")
          try{
            window.open(e.target.dataset.target, e.target.dataset.name , e.target.dataset.dimensions);
          }
          catch{
            confirm(`looks like a popup blocker is stopping you from reaching ${e.target.dataset.target}`)
          }

        }

    });
  });

}





builtProjectBoard()
addListeners()





