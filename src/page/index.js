import FormValidator from "../scripts/components/FormValidator.js";
import Card from "../scripts/components/Card.js";
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
    popupInputPlace,
    popupInputlink,
    photoGridGallery,
    cardTemplateSelector,
    logoImage,
    profileImg,
    addCardButtonIcon,

} from '../scripts/constants/contants.js'

const popupInputName = profilePopup.querySelector('.popup__input_type_name');
const popupInputDes = profilePopup.querySelector('.popup__input_type_des');
const addButton = document.querySelector('.profile__add-button');

const addFormPopup = popupCard.querySelector('form');
const profilefromPopup = profilePopup.querySelector('form');

const profileValidator = new FormValidator(pageSettings, profilefromPopup);
profileValidator.enableValidation();

const cardValidator = new FormValidator(pageSettings, addFormPopup);
cardValidator.enableValidation();

import logoSrc from "../images/logo.svg";
logoImage.src = logoSrc;

import profileSrc from "../images/profilePic.png";
profileImg.src = profileSrc;

import btnAddbuttonSrc from "../images/AddBtn.svg";
addCardButtonIcon.src = btnAddbuttonSrc;

//------ imagePopUp ----//
const imagePopUp = new PopupWithImage('.popup_type_image-card');
imagePopUp.setEventListeners();

const editProfilePopupForm = new PopupWithForms('.popup_type_profile', submitProfileForm);
editProfilePopupForm.setEventListeners();

const addCardForm = new PopupWithForms('.popup_type_add-card');
addCardForm.setEventListeners();

const userInfo = new UserInfo({ profileName: profileName, profileDes: profileDes });

//--------------------- Cards -------------------------------------
const renderCard = (data) => {
    const card = new Card(data, cardTemplateSelector, imagePopUp.open);
    photoGridGallery.prepend(card.render());

}

const cardSection = new Section({
        items: initialCards,
        renderer: () => {
            const card = renderCard(element);
            cardSection.addItem(card);
        }
    }, cardTemplateSelector)
    // cardSection.renderer();


const addNewCardData = (data) => {
    data.preventDefault();
    renderCard({ name: popupInputPlace.value, link: popupInputlink.value });
    cardSection.addItem(data);
    addCardForm.close();

}

addButton.addEventListener('click', () => { // addbutton code
    addCardForm.open();
    cardValidator.resetValidation();

});

popupCard.addEventListener('submit', addNewCardData);
//---------------------- Profile --------------------
openEditProfileButton.addEventListener('click', () => { //Codes for EditButton
    editProfilePopupForm.open();
    const userData = userInfo.getUserInfo();
    popupInputName.value = userData.name;
    popupInputDes.value = userData.description;
    profileValidator.resetValidation();
});


function submitProfileForm(e) {
    e.preventDefault();

    userInfo.setUserInfo({ inputName: popupInputName.value, inputDescription: popupInputDes.value });
    editProfilePopupForm.close();

}

initialCards.reverse().forEach(renderCard);