const toggleIcon = document.querySelector('.toggle-icon');


/*========texto animado =========*/

const text = document.querySelector(".text-animation");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Dev. Frontend"
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



/*=========== dark mode ==========*/
let darkModeIcon = document.querySelector('#darkMode-icon');
let logoSan = document.getElementById('logoSan');

let imgWhite = '/assets/images/logo.png';
let imgDark = '/assets/images/sandino6.png';

function imageChange() {
    document.getElementById('logoSan').src = imgWhite;
    let aux = imgWhite;
    imgWhite = imgDark;
    imgDark = aux;
}


darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
    // logoSan.src = "/assets/images/logo.png";
    imageChange();

};


/*=========== scroll reveal ==========*/
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', {
    origin: 'top'
});
ScrollReveal().reveal('.services-container, .portfolio-box, .contact form', {
    origin: 'bottom'
});
ScrollReveal().reveal('.home-content h1, .about-image img', {
    origin: 'left'
});
ScrollReveal().reveal('.home-content h3, .home-content p, .text-animation, .about-content', {
    origin: 'right'
});

/*=========== forms submit ==========*/
class FormSubmit {
    constructor(settings) {
        this.settings = settings;
        this.form = document.querySelector(settings.form);
        this.formButton = document.querySelector(settings.button);
        if (this.form) {
            this.url = this.form.getAttribute("action");
        }
        this.sendForm = this.sendForm.bind(this);
    }

    displaySuccess() {
        this.form.innerHTML = this.settings.success;
    }

    displayError() {
        this.form.innerHTML = this.settings.error;
    }

    getFormObject() {
        const formObject = {};
        const fields = this.form.querySelectorAll("[name]");
        fields.forEach((field) => {
            formObject[field.getAttribute("name")] = field.value;
        });
        return formObject;
    }

    onSubmission(event) {
        event.preventDefault();
        event.target.disabled = true;
        event.target.innerText = "Enviando...";
    }

    async sendForm(event) {
        try {
            this.onSubmission(event);
            await fetch(this.url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(this.getFormObject()),
            });
            this.displaySuccess();
        } catch (error) {
            this.displayError();
            throw new Error(error);
        }
    }

    init() {
        if (this.form) this.formButton.addEventListener("click", this.sendForm);
        return this;
    }
}

const formSubmit = new FormSubmit({
    form: "[data-form]",
    button: "[data-button]",
    success: "<h1 class='success'>Mensagem enviada!</h1>",
    error: "<h1 class='error'>Não foi possível enviar sua mensagem.</h1>",
});
formSubmit.init();