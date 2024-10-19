function hideShow(el){
    document.getElementById(el).classList.toggle('hidden');
}

let blink  = setInterval(()=>{hideShow('cursor')},600)

function typeWriter(id,i,j){

    let el = document.getElementById(id)
    let typed = el.getElementsByClassName('typed')[0];
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
    setTimeout(()=>{typeWriter(id,i,j)}, speed);
}

typeWriter('sthead',0,0);

