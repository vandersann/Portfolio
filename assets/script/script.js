const toggleIcon = document.querySelector('.toggle-icon');


/* Texto Animado */

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

/* Final Texto Animado */

window.onscroll = () => {
    const header = document.querySelector('.header');

    header.classList.toggle('sticky', window.scrollY > 100);
};