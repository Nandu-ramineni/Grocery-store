let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('.header-2')
menu.addEventListener('click',()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active')
    if (window.scrollY > 150) {
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }
}
let countDate = new Date('may 4, 2023 00:00:00').getTime();
function countDown() {
    let now = new Date().getTime();
    gap = countDate - now;
    let seconds = 1000;
    let minutes = seconds*60;
    let hours   = minutes*60;
    let day     = hours*24;
    let d = Math.floor(gap / (day));
    let h = Math.floor((gap % (day)) / (hours));
    let m = Math.floor((gap % (hours)) / (minutes));
    let s = Math.floor((gap % (minutes)) / (seconds));
    document.getElementById('day').innerText = d;
    document.getElementById('hour').innerText = h;
    document.getElementById('minute').innerText = m;
    document.getElementById('seconds').innerText= s;
}
setInterval(function(){
    countDown();
},1000);
//add to cart

let cart = document.querySelector('.shopping-cart');
document.querySelector('#cart-icon').onclick = () =>{
    cart.classList.toggle('active');
}