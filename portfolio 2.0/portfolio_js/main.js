const change = document.getElementById('see_projects');
console.log(change)



// toggle between projects and personal
change.addEventListener('pointerdown',(e)=>{
    console.log('yoyoyoyoyoyo')

    document.getElementById('pane1').classList.toggle('hidden');
    document.getElementById('pane2').classList.toggle('hidden');
    document.getElementById('searchbar').classList.toggle('hidden');
    document.getElementById('xx').classList.toggle('frozen');

    document.getElementById('pic').classList.toggle('frozen');
    // document.getElementById('xx').classList.toggle('frozen');
    let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
    let slots = vw/100;
    
    console.log(vw,vh)
})

const pic = document.getElementById('pic');
let p = 0
pic.addEventListener('pointerdown',(e)=>{

if(p==0){
    pic.getElementsByTagName('img')[0].src = './portfolio_assets/grifalogomedium.png';
    p=1;
}
else{
    pic.getElementsByTagName('img')[0].src = './portfolio_assets/profile.png';
    p = 0;

}

});

let panechange1 = document.getElementById('panechange1');
panechange1.addEventListener("pointerdown",(e)=>{
    //change pane shown
    // console.log(e.target.id);
    document.getElementsByClassName('panel')[selected].classList.remove('panelshown');
    selected = selected==0? document.getElementsByClassName('panel').length -1 : selected-=1;
    console.log(selected);
    document.getElementsByClassName('panel')[selected].classList.add('panelshown');
})

let panechange2 = document.getElementById('panechange2');
panechange2.addEventListener("pointerdown",(e)=>{
    // console.log(e.target.id)
    //change pane shown
    document.getElementsByClassName('panel')[selected].classList.remove('panelshown');
    selected = selected== document.getElementsByClassName('panel').length -1?  selected = 0: selected+=1;
    console.log(selected);
    document.getElementsByClassName('panel')[selected].classList.add('panelshown');
})
