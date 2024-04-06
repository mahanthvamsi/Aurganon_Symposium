let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
            })
        }
    })
}
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
document.addEventListener('DOMContentLoaded', (event) => {
    var backVideo = document.getElementById("backVideo");
    if(backVideo) {
        backVideo.muted = true;
        backVideo.play();
    }
});




const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(()=>{
        splash.classList.add('display-none');
    },2000);
})


let imgContainer = document.querySelector(".img-container");
setInterval(() => {
let last = imgContainer.firstElementChild;
last.remove();
imgContainer.appendChild(last);
}, 2500);