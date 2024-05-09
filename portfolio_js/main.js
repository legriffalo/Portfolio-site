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
