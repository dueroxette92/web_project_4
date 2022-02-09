import FormValidator from "../scripts/components/FormValidator.js";
import Card from "../scripts/components/Card.js";
// import { openPopup, closePopup } from "./utils.js";
import Section from "../scripts/components/Section.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import PopupWithForms from "../scripts/components/PopupWithForms.js";
import UserInfo from "../scripts/components/UserInfo.js";
import "../page/index.css"
import {
    initialCards,
    pageSettings,
    profilePopup,
    popupCard,
    profileName,
    profileDes,
    openEditProfileButton,
    popupInputName,
    popupInputDes,
    popupInputPlace,
    popupInputlink,
    photoGridGallery,
    cardTemplateSelector
} from '../scripts/constants/contants.js'

const logoImage = document.querySelector(".header__logo");
const profilePic = document.querySelector(".profile__image");
const btnAddbutton = document.querySelector("#add-button");

const addButton = document.querySelector('.profile__add-button');

const addFormPopup = popupCard.querySelector('form');
const profilefromPopup = profilePopup.querySelector('form');

const profileformValidator = new FormValidator(pageSettings, profilefromPopup);
profileformValidator.enableValidation();

const addCardformValidator = new FormValidator(pageSettings, addFormPopup);
addCardformValidator.enableValidation();

import logoSrc from "../images/logo.svg";
logoImage.src = logoSrc;

import profileSrc from "../images/profilePic.png";
profilePic.src = profileSrc;

import btnAddbuttonSrc from "../images/AddBtn.svg";
btnAddbutton.src = btnAddbuttonSrc;

//------ ImagePopUp ----//
const ImagePopUp = new PopupWithImage('.popup_type_image-card');
ImagePopUp.setEventListeners();

const editProfilePopupForm = new PopupWithForms('.popup_type_profile', submitProfileForm);
editProfilePopupForm.setEventListeners();

const addCardForm = new PopupWithForms('.popup_type_add-card');
addCardForm.setEventListeners();

const userInfo = new UserInfo({ profileName: profileName, profileDes: profileDes });

//--------------------- Cards -------------------------------------
const renderCard = (data) => {
    const card = new Card(data, cardTemplateSelector, ImagePopUp.open);
    photoGridGallery.prepend(card.render());

}

const cardSection = new Section({
        items: initialCards,
        renderer: (element) => {
            const card = renderCard(element);
            cardSection.addItem(card);
        }
    }, cardTemplateSelector)
    // cardSection.renderer();


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