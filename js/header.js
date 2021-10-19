let navbar = document.querySelector('.navbar');
let toggle = document.querySelector('.toggle');

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

document.querySelector('header').classList.add('fin')
document.querySelector('footer').classList.add('fin')