
const feedbackButton = document.querySelector('.contact__button');
const modalForm = document.querySelector('.popup__section');
const closePopup = document.querySelector('.close-popup__wrap');

feedbackButton.addEventListener('click', function (evt) {
  evt.preventDefault(evt);
  modalForm.classList.add('display');
});

closePopup.addEventListener('click', function(evt) {
  evt.preventDefault(evt);
  modalForm.classList.remove('display');
});
