// check if rows are ned highlighting
function centralProject(){
    rows = [...document.getElementsByClassName("row")];
    rows.forEach(el=>{
        var rect = el.getBoundingClientRect();
        if(lb < rect.y && rect.y < ub){
            (console.log("highighting", el.id))
            el.classList.add("hover")
        }
        else{
            el.classList.remove("hover");
        }
    })
}

// get viewport height
vpHeight = window.innerHeight; 
//set bounds for "viewing area"

// When top left of row is between 5vh and 50vh from the top 
lb = 0.05*vpHeight;
ub = 0.5*vpHeight;

// interval to make regular checks
highlightInterval = "";


// detect device type using ternary operator
const detectDeviceType = () =>
    /Mobile|Android|iPhone|iPad/i.test(navigator.userAgent)
      ? 'Mobile'
      : 'Desktop';


// if device is mobile device then remove the special character buttons
if(detectDeviceType()== 'Mobile'){
    setInterval(centralProject,500);
}


//     console.log("mobile device using alternative method")
    
//     document.addEventListener("scrollstart",(e)=>{
//         console.l0g("started scroll")
//         setInterval(centralProject,500);
//     })
    
    
//     // listen for scroll ends
//     document.addEventListener("scrollend",(e)=>{

//         //find top project and highlight
//         clearInterval(highlightInterval);
//         highlightInterval = '';
//     })
// };