let eventBtn = document.querySelector('#btn');
let overlay = document.querySelector('#popup-close');
let exit = document.querySelector('#exitIcon');

eventBtn.addEventListener('click', showPopup);
exit.addEventListener('click', hidePopup);
overlay.addEventListener('click', hidePopup);

function showPopup() {
    popup.classList.remove('d-none');
}

function hidePopup() {
    popup.classList.add('d-none');
}

