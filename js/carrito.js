/* carrito */

//Variables
const carrito = document.getElementById('carrito');
const galeriaImagenes = document.getElementById('galleria');
const card = document.getElementById('card');



// Eventos

eventosCargados();

function eventosCargados() {
    galeriaImagenes.addEventListener('click', agregarCurso);
}


// Funciones

function agregarCurso(e) {
    e.preventDefault();

    if (e.target === carrito) {
        const galeria = e.target.parentElement;

        leerDatos(galeria);
    }
}

function leerDatos(galeria) {
    console.log(galeria);
}