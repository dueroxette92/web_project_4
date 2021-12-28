import FormValidator from "./FormValidator.js";
import Card from "./Card.js";
import { openPopup, closePopup } from "./utils.js";

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

const formSelector = ".popup__form";
const pageSettings = {
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
//const closeBtn = document.querySelector('.popup__close')

const popupInputName = profilePopup.querySelector('.popup__input_type_name');
const popupInputDes = profilePopup.querySelector('.popup__input_type_des');
const popupSaveProfileButton = profilePopup.querySelector('.popup__button');

//// add Card button //
const popupInputPlace = popupCard.querySelector('.popup__input_type_place');
const popupInputlink = popupCard.querySelector('.popup__input_type_link');
const addButton = document.querySelector('.profile__add-button');



const addFormPopup = popupCard.querySelector('form');
const profilefromPopup = profilePopup.querySelector('form');

const profileformValidator = new FormValidator(pageSettings, profilefromPopup);
profileformValidator.enableValidation();

const AddCardformValidator = new FormValidator(pageSettings, addFormPopup);
AddCardformValidator.enableValidation();


//add card Template
const photoGridGallery = document.querySelector('.photo-grid__gallery');
const cardTemplateSelector = '#card-template';

//--------------------- card -------------------------------------

function createCard(data) {
    const card = new Card(data, cardTemplateSelector);
    const cardElement = card.render();
    photoGridGallery.prepend(cardElement);

}

function addNewCard(event) { // function that add new card
    event.preventDefault();
    createCard({
        name: popupInputPlace.value,
        link: popupInputlink.value,
    }, cardTemplateSelector)
    closePopup(popupCard);
    popupInputPlace.value = "";
    popupInputlink.value = "";
}


popupCard.addEventListener('submit', addNewCard);

addButton.addEventListener('click', () => { // addbutton code
    openPopup(popupCard)
    AddCardformValidator.checkSubmitButtonValidity();

});


//---------------------- Profile --------------------
openEditProfileButton.addEventListener('click', () => { //Codes for EditButton
    popupInputName.value = profileName.textContent;
    popupInputDes.value = profileDes.textContent;
    openPopup(profilePopup);


});

popupSaveProfileButton.addEventListener('click', (event) => { //codes for save button
    event.preventDefault();
    profileName.textContent = popupInputName.value;
    profileDes.textContent = popupInputDes.value;
    profileformValidator.checkSubmitButtonValidity();
    closePopup(profilePopup);

});

initialCards.reverse().forEach(initialCardData => {
    const card = new Card(initialCardData, cardTemplateSelector);
    photoGridGallery.prepend(card.render());

});