/* Modal */

const modalBtn = document.querySelector('.modal-btn');
const modalBg = document.querySelector('.modal-bg');
const close = document.querySelector('.close');

const modalBtn1 = document.querySelector('.modal-btn1');

modalBtn.addEventListener('click', function () {
    modalBg.classList.add('active');
});

modalBtn1.addEventListener('click', function () {
    modalBg.classList.add('active');
});

close.addEventListener('click', function () {
    modalBg.classList.remove('active');
});