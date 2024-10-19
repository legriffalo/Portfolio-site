// detect device type using ternary operator
const detectDeviceType = () =>
    /Mobile|Android|iPhone|iPad/i.test(navigator.userAgent)
      ? 'Mobile'
      : 'Desktop';



vpHeight = window.innerHeight; 

lb = 0.05*vpHeight;
ub = 0.5*vpHeight;

highlightInterval = "";




// console.log("margins are ", ub , lb )

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