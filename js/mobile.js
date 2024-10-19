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
lb = 0.25*vpHeight;
ub = 0.8*vpHeight;

// interval to make regular checks
highlightInterval = "";

console.log("device was ", navigator)



// detect device type using ternary operator
const detectDeviceType = () =>
    //check for ios tablets and android
    /Mobile|Android|iPod|iPhone|iPad|ipad|tablet/i.test(navigator.userAgent) || navigator.userAgent.includes("Mac") && "ontouchend" in document
      ? 'Mobile'
      : 'Desktop';

// if device is mobile device then remove the special character buttons
if(detectDeviceType()== 'Mobile'){
    setInterval(centralProject,300);
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