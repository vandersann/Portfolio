const toggleIcon = document.querySelector('.toggle-icon');


/*========texto animado =========*/

const text = document.querySelector(".text-animation");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Developer Frontend"
    }, 0);
    setTimeout(() => {
        text.textContent = "Ui Desingner"
    }, 4000);
    setTimeout(() => {
        text.textContent = "Freelancer"
    }, 8000);
}

textLoad();
setInterval(textLoad, 12000);

/*======== menu icon navbar =========*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}


/*=========== sticky navbar ==========*/
window.onscroll = () => {
    let header = document.querySelector('.header');

    header.classList.toggle('sticky', window.scrollY > 100);


    /*======== remove menu icon navbar =========*/

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};