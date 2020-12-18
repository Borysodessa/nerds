
const feedbackButton = document.querySelector('.contact__button');
const modalForm = document.querySelector('.popup__section');
const closePopup = document.querySelector('.close-popup__wrap');
const login = modalForm.querySelector('[name = name]');


feedbackButton.addEventListener('click', function (evt) {
  evt.preventDefault(evt);
  modalForm.classList.add('display');
  login.focus();
});

closePopup.addEventListener('click', function(evt) {
  evt.preventDefault(evt);
  modalForm.classList.remove('display');
});


$('.slider__list').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});
