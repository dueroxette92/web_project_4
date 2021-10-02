const profileName = document.querySelector('.profile__name_type_name');
const profileFood = document.querySelector('.profile__name_type_des');
const openEditProfileButton = document.querySelector('.profile__edit-button');
const closeBtn = document.querySelector('.popup__close')

const profilePopup = document.querySelector('.popup_type_profile');
const popupInputName = profilePopup.querySelector('.popup__input_type_name');
const popupInputFood = profilePopup.querySelector('.popup__input_type_des');
const popupSaveProfileButton = profilePopup.querySelector('.popup__button');

// Please ignore it here -- Just put it there for later
// const heart = document.querySelector('.photo__btnheart');
// const whiteHeart = '\u2661';
// const blackHeart = '\u2665';


// heart.addEventListener('click', toggle);

// function toggle() {
//     const like = heart.textContent;
//     if (like == whiteHeart) {
//         heart.textContent = blackHeart;
//     } else {
//         heart.textContent = whiteHeart;
//     }
// }

// for (let i = 0; i < heart.length; i++) {
//     heart[i].addEventListener("click", () => toggle(heart[i]));
// }

function openPopup(popup) {
    popup.classList.add('popup_is-opened');

}

function closePopup(popup) {
    popup.classList.remove('popup_is-opened');
}


profilePopup.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup__closeBtn')) {
        closePopup(profilePopup);
    }
});

openEditProfileButton.addEventListener('click', () => {
    popupInputName.value = profileName.textContent;
    popupInputFood.value = profileFood.textContent;
    openPopup(profilePopup);

});

popupSaveProfileButton.addEventListener('click', (event) => {
    event.preventDefault();
    profileName.textContent = popupInputName.value;
    profileFood.textContent = popupInputFood.value;
    closePopup(profilePopup);
});