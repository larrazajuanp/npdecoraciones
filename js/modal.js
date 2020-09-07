/* Modal */

const modalBtn = document.querySelector('.modal-btn');
const modalBg = document.querySelector('.modal-bg');
const close = document.querySelector('.close');


const modalBtn1 = document.querySelector('.modal-btn1');
const modalBtn2 = document.querySelector('.modal-btn2');
const modalBtn3 = document.querySelector('.modal-btn3');
const modalBtn4 = document.querySelector('.modal-btn4');
const modalBtn5 = document.querySelector('.modal-btn5');
const modalBtn6 = document.querySelector('.modal-btn6');
const modalBtn7 = document.querySelector('.modal-btn7');

modalBtn.addEventListener('click', function () {
    modalBg.classList.add('active');
});

modalBtn1.addEventListener('click', function () {
    modalBg.classList.add('active');

});

modalBtn2.addEventListener('click', function () {
    modalBg.classList.add('active');
});
modalBtn3.addEventListener('click', function () {
    modalBg.classList.add('active');
});
modalBtn4.addEventListener('click', function () {
    modalBg.classList.add('active');
});
modalBtn5.addEventListener('click', function () {
    modalBg.classList.add('active');
});
modalBtn6.addEventListener('click', function () {
    modalBg.classList.add('active');
});
modalBtn7.addEventListener('click', function () {
    modalBg.classList.add('active');
});

close.addEventListener('click', function () {
    modalBg.classList.remove('active');
});


// Funciones

/*function leerDatosCard = {

}*/