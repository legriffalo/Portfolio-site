//hide or show elements by adding/removing class 

function hideShow(el){
    document.getElementById(el).classList.toggle('hidden');
}

//interval to make cursor blink
let blink  = setInterval(()=>{hideShow('cursor')},600)

//function to "type" text
// id is element to use, i tracks line length and j tracks lines of text to type
function typeWriter(id,i,j){

    let el = document.getElementById(id)
    let typed = el.getElementsByClassName('typed')[0];
    // data is stored as an object in the HTML 
    let messages = [...JSON.parse(el.dataset.text).messages];
    let txt = messages[j];
    let speed = 100;
    
    
    if (i < txt.length && j <messages.length) {

        typed.innerHTML += txt.charAt(i);
        i++;  
    }
    else if(j < messages.length-1){
        typed.innerHTML  += '<br>';
        i = 0;
        speed = 1600;
        j++
    }
    else{
        setTimeout(()=>{typed.innerHTML ='';},1300);
        setTimeout(()=>{document.getElementById('typed').classList.remove('highlighted');},1300);

        document.getElementById('typed').classList.add('highlighted');
        i = 0;
        j = 0;
        speed = 1800;

    }

    // function is recursive and cycles through the message data at different 
    // speeds depoending on features of the text hence speed variable being used
    setTimeout(()=>{typeWriter(id,i,j)}, speed);
}

typeWriter('sthead',0,0);

