const loader = document.querySelector('.loader')
var dosSegundos = false
var cargaTerminada = false

function fin() {
    loader.classList.add('fin')
    document.querySelector('header').classList.add('fin')
    document.querySelector('main').classList.add('fin')
    document.querySelector('footer').classList.add('fin')
    document.querySelector('body').classList.add('fin')
}

window.addEventListener('load', event => {
    cargaTerminada = true
});

setTimeout(() => {
    dosSegundos = true
}, 2500)

const disparador = setInterval(() => {
    if (dosSegundos && cargaTerminada) {
        clearInterval(disparador)
        loader.classList.add('carga-terminada')
        setTimeout(() => {
            loader.classList.add('codo-a-codo')
        }, 1250);
        setTimeout(() => {
            fin()
        }, 3000)
    }
}, 200);

// loader.classList.add('carga-terminada')
// loader.classList.add('codo-a-codo')