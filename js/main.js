let navbar = document.querySelector('.navbar');
let toggle = document.querySelector('.toggle');
let imgs = document.querySelectorAll('.img-speaker');
let descriptions = document.querySelectorAll('.description');

window.addEventListener('scroll', () => {
    CheckScroll()
})

function CheckScroll() {
    if (window.innerWidth > 1200) {
        navbar.classList.toggle('sticky', window.scrollY > 0);
    }
}

window.addEventListener('resize', () => {
    if (window.innerWidth > 1200) {
        if (window.scrollY > 0 && !navbar.classList.contains('sticky')) {
            navbar.classList.add('sticky');
        }
        if (toggle.classList.contains('active')) {
            Toggle()
        }
    }
    else {
        navbar.classList.remove('sticky', navbar.classList.contains('sticky'));
    }
})

function Toggle() {
    navbar.classList.toggle('active');
    toggle.classList.toggle('active');
    if(navbar.classList.contains('close'))
        navbar.classList.remove('close')
}

//La idea de este método es que el navbar se cierre al hacerle click a alguno de sus enlaces peeeero, por el hover no se cierra y queda bugueado :/ Como no tengo tiempo para resolver este bug elegí eliminar esta funcion.
function ToggleClose() {
    navbar.classList.remove('active');
    toggle.classList.remove('active');
    navbar.classList.add('close');
}

VanillaTilt.init(document.querySelectorAll('.card'), {
    max: 15,
    speed: 1000,
});

function SearchChecked() {
    let found = false
    let i = 0
    while (!found && i < imgs.length) {
        if (imgs[i].classList.contains('checked')) {
            found = true
        }
        else {
            i++
        }
    }
    if (found) {
        return i
    }
    else {
        console.error('Checked not found')
        // voy a adoptar el -1 como "código de error" para evitar que los siguientes métodos intenten acceder al array
        return -1
    }
}

function NextImg() {
    let i = SearchChecked()
    if (i >= 0) {
        imgs[i].classList.remove('checked')
        descriptions[i].classList.remove('checked')
        if (i == imgs.length - 1) {
            //vuelve a la primera carta
            i = 0
        }
        else {
            //pasa a la siguiente carta
            i++
        }
        imgs[i].classList.add('checked')
        descriptions[i].classList.add('checked')
    }
}

function PreviousImg() {
    let i = SearchChecked()
    if (i >= 0) {
        imgs[i].classList.remove('checked')
        descriptions[i].classList.remove('checked')
        if (i == 0) {
            //pasa a la ultima carta
            i = imgs.length - 1
        }
        else {
            //vuelve a la carta anterior
            i--
        }
        imgs[i].classList.add('checked')
        descriptions[i].classList.add('checked')
    }
}

CheckScroll()