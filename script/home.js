const open_nav = document.getElementById('open-nav')
const close_nav = document.getElementById('close-nav')

open_nav.addEventListener("click",()=>{
    document.getElementById('mobile-nav').style.display = 'flex';
    close_nav.style.display = 'flex';
    
    document.getElementById('main-title').style.display = 'none';
    open_nav.style.display = 'none';
})
close_nav.addEventListener("click",()=>{
    document.getElementById('mobile-nav').style.display = 'none';
    close_nav.style.display = 'none';
    
    document.getElementById('main-title').style.display = 'flex';
    open_nav.style.display = 'flex';
})


