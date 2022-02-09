import FormValidator from "../scripts/components/FormValidator.js";
import Card from "../scripts/components/Card.js";
// import { openPopup, closePopup } from "./utils.js";
import Section from "../scripts/components/Section.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import PopupWithForms from "../scripts/components/PopupWithForms.js";
import UserInfo from "../scripts/components/UserInfo.js";
import "../page/index.css"

const initialCards = [{
        name: "Yosemite Valley",
        link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
    },
    {
        name: "Lake Louise",
        link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
    },
    {
        name: "Bald Mountains",
        link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
    },
    {
        name: "Latemar",
        link: "https://code.s3.yandex.net/web-code/latemar.jpg"
    },
    {
        name: "Vanoise National Park",
        link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
    },
    {
        name: "Lago di Braies",
        link: "https://code.s3.yandex.net/web-code/lago.jpg"
    }
];

const pageSettings = {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible"
}

const profilePopup = document.querySelector('.popup_type_profile');
const popupCard = document.querySelector('.popup_type_add-card');

const profileName = document.querySelector('.profile__name_type_name');
const profileDes = document.querySelector('.profile__name_type_des');
const openEditProfileButton = document.querySelector('.profile__edit-button');

const popupInputName = profilePopup.querySelector('.popup__input_type_name');
const popupInputDes = profilePopup.querySelector('.popup__input_type_des');

//// add Card button //
const popupInputPlace = popupCard.querySelector('.popup__input_type_place');
const popupInputlink = popupCard.querySelector('.popup__input_type_link');
const addButton = document.querySelector('.profile__add-button');

const popupImage = document.querySelector('.popup_type_image-card');

const addFormPopup = popupCard.querySelector('form');
const profilefromPopup = profilePopup.querySelector('form');

const profileformValidator = new FormValidator(pageSettings, profilefromPopup);
profileformValidator.enableValidation();

const addCardformValidator = new FormValidator(pageSettings, addFormPopup);
addCardformValidator.enableValidation();

//------ ImagePopUp ----//
const ImagePopUp = new PopupWithImage('.popup_type_image-card');
ImagePopUp.setEventListeners();

const editProfilePopupForm = new PopupWithForms('.popup_type_profile', submitProfileForm);
editProfilePopupForm.setEventListeners();

const addCardForm = new PopupWithForms('.popup_type_add-card');
addCardForm.setEventListeners();

const userInfo = new UserInfo({ profileName: profileName, profileDes: profileDes });
//add card Template
const photoGridGallery = document.querySelector('.photo-grid__gallery');
const cardTemplateSelector = "#card-template";
// const cardTemplateSelector = "#card-template";
// --------- images/logos ------
const logoImage = document.querySelector(".header__logo");
const profilePic = document.querySelector(".profile__image");
const btnAddbutton = document.querySelector("#add-button");

import logoSrc from "../images/logo.svg";
logoImage.src = logoSrc;

import profileSrc from "../images/profilePic.png";
profilePic.src = profileSrc;

import btnAddbuttonSrc from "../images/AddBtn.svg";
btnAddbutton.src = btnAddbuttonSrc;


//--------------------- Cards -------------------------------------
const renderCard = (data) => {
    const card = new Card(data, cardTemplateSelector, ImagePopUp.open);
    photoGridGallery.prepend(card.render());

}

const cardSection = new Section({
    items: initialCards,
    renderer: renderCard,
}, cardTemplateSelector)
cardSection.renderer();


const addNewCardData = (data) => {
    data.preventDefault();
    const insertNewCard = renderCard({ name: popupInputPlace.value, link: popupInputlink.value });
    cardSection.addItem(insertNewCard);
    addCardForm.close();

}

addButton.addEventListener('click', () => { // addbutton code
    addCardForm.open();
    addCardformValidator.resetValidation();

});

popupCard.addEventListener('submit', addNewCardData);
//---------------------- Profile --------------------
openEditProfileButton.addEventListener('click', () => { //Codes for EditButton
    editProfilePopupForm.open();
    const userData = userInfo.getUserInfo();
    popupInputName.value = userData.name;
    popupInputDes.value = userData.description;
    profileformValidator.resetValidation();
});


function submitProfileForm(e) {
    e.preventDefault();

    userInfo.setUserInfo({ inputName: popupInputName.value, InputDes: popupInputDes.value });
    editProfilePopupForm.close();

}

initialCards.reverse().forEach(renderCard);