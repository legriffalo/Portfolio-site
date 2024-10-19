//check if any cross over between two arrays
// used to check project tags against search filters 
function filterCheck(a, b){
  let success = 0;
  a.forEach((val) => { 
    b.includes(val)? success = 1 : null;
  });
  return success
}
// clear the project display grid ready to be redrawn
function clearGrid(){
  document.getElementById('projectgrid').innerHTML = '';
}


// build process for DOM elements
function builtProjectBoard(filters){
    // get all project data from the file 
    projects = JSON.parse(data);
    // console.log(projects);
    //list of all projects used to grab each element for genration
    let projectsList = Object.keys(projects);
    
    
    // filter out unwanted projects using quick search filters in head
    if(filters && filters.length>0){
      toRemove = [];
      projectsList.forEach((projectNumber)=>{
        // console.log("the project being checked is ",projectNumber )
        
        allTags = Array.from(projects[projectNumber].tags);
        // console.log("its tags are ", allTags)
        // console.log("Tags to match are ", filters)
        let matches = 0;
        // if no matches add project to removal list
        filterCheck(filters, allTags)? matches = 1:toRemove.push(projectNumber);  
        });
        // console.log("projects to remove are", toRemove)

        // remove all unwanted projects
        toRemove.length>0? toRemove.forEach(el=>{
          remover(projectsList,el)
        }):null;
    }

    else{console.log("no filters showing all projects")}

    // number of panels required
    let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)

    // poor variable name choice here but I'm not going to change it just yet
    let rows = Math.floor(vw/450);
    rows = rows>0? rows:1;
    console.log("row width is ", rows);

    //cycle through projects data and build them in DOM
    // generate project grid
    for(let i = 0; i<projectsList.length; i++){
      console.log("creating", projectsList[i])

      if(i%rows == 0){
        document.getElementById('projectgrid').innerHTML+= `<div id = "row${i/rows}" class = "row"></div>`
      }

      
      // show flag allows data for many projects to be stored and quick changes to be made
      if (projects[projectsList[i]].show == 1 ){
        

        currentProject = projects[projectsList[i]]
        
        // get project summary
        let summaryString =currentProject.description;
        
        // get details
        let infoString = '';
        currentProject.specifics.forEach((el)=>{
          infoString += el + '<br>';
        });

        // get project links data
        infoLinks = ""


        let ll =  currentProject.links;
    
        ll.forEach((el)=>{
          let icon

          // currently only two link types but will expand with google play etc as needed
          // could use a mapping if this expands sufficiently
          el.type == "github"? icon = 'fa-brands fa-github':null;
          el.type == "site"? icon = 'fas fa-globe':null;

          el.dim? dimensions = el.dim:dimensions = "width=600,height=600";
          infoLinks +=`<p><i data-name = "${currentProject.name} ${el.type}" data-dimensions = "${dimensions}" data-target = "${el.source}"    class = "backlink ${icon}"></i></p>`
        })

        // inprogress flag adds hammer icon to projects that are not fully polished yet
        currentProject.inprogress? ongoing = `<img class = "inprogress" src = "assets/backgrounds/inprogress.png">`:ongoing = '';
        
        // build the DOM element using previously determined variables 
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

// once grid is built in DOM add listeners
function addListeners(){
    // get all cards to add pointer listeners
    els = [...document.getElementsByClassName("card")]

    els.forEach((el)=>{
      el.addEventListener("pointerdown", (e)=>{

        // console.log(e.target.tagName, "was clicked")

        // stop embedded links from triggering listener hideshow action 
        if(e.target.tagName!='I' && e.target.tagName != 'A'){

          el.getElementsByClassName("card-content")[0].classList.toggle("hidden");
          el.getElementsByClassName("background")[0].classList.toggle("hidden");
          // e.target.getElementsByClassName("backdrop")[0].classList.toggle("hidden");

          el.getElementsByClassName("cardback")[0].classList.toggle("hidden");
        }
        
        else{
          console.log("clicked link to other site")

          //try to open my project/site in new window
          try{
            windowName = e.target.dataset.name
            window.open(e.target.dataset.target, windowName , e.target.dataset.dimensions);
          }

          // just in case there is security/pop up blocker
          catch{
            confirm(`looks like a popup blocker is stopping you from reaching ${e.target.dataset.target}`)
          }

        }

    });
  });

}


// could use createGrid in main.js but file order may need switching so leave for now
// make sure the grid is built at load time
builtProjectBoard()
addListeners()





