
const btn_menu = document.getElementById('btn_menu');
const nav = document.getElementById('nav');
const close1 = document.getElementById('close');
const overlay = document.getElementById('overlay');
const arrA = document.querySelectorAll('#nav ul li a');


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


const home = document.getElementById('header');


document.addEventListener('scroll',()=>{
   home.classList.toggle('active', window.scrollY > 100);
    console.log(window.scrollY);

}) 

arrA.forEach(item=>{
    item.addEventListener('click',()=>{
        nav.classList.remove('toggle');
        overlay.classList.remove('toggle');
    })
})

