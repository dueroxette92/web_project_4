// export function openPopup(popup) {
//     popup.classList.add('popup_is-opened');
//     document.addEventListener('mouseup', closePopupOutside);
//     document.addEventListener('keydown', closePopupEsc);
// }

// export function closePopup(popup) {
//     popup.classList.remove('popup_is-opened');
//     document.removeEventListener('mouseup', closePopupOutside);
//     document.removeEventListener('keydown', closePopupEsc);

// }

// function closePopupOutside(event) {
//     if (event.target.classList.contains('popup_is-opened')) {
//         closePopup(event.target);
//     }
// }

// function closePopupEsc(event) {
//     if (event.key === "Escape") {
//         closePopup(document.querySelector('.popup_is-opened'));

//     }
// }
// const closeButtonList = document.querySelectorAll('.popup__close');
// closeButtonList.forEach(btn => btn.addEventListener('click', () => {
//     const popup = btn.closest('.popup');
//     closePopup(popup);

// }));