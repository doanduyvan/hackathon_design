
const btn_menu = document.getElementById('btn_menu');
const nav = document.getElementById('nav');
const close1 = document.getElementById('close');
const overlay = document.getElementById('overlay');

btn_menu.addEventListener('click',()=>{
    nav.classList.toggle('toggle');
    overlay.classList.toggle('toggle');
})
close1.addEventListener('click',()=>{
    nav.classList.toggle('toggle');
    overlay.classList.toggle('toggle');
})
overlay.addEventListener('click',()=>{
    nav.classList.toggle('toggle');
    overlay.classList.toggle('toggle');
})