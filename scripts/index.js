import FormValidator from "./FormValidator.js";
import Card from "./card.js";
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

// const formSelector = ".popup__form";
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
//const closeBtn = document.querySelector('.popup__close')

const popupInputName = profilePopup.querySelector('.popup__input_type_name');
const popupInputDes = profilePopup.querySelector('.popup__input_type_des');
const popupSaveProfileButton = profilePopup.querySelector('.popup__button');

//// add Card button //
const popupInputPlace = popupCard.querySelector('.popup__input_type_place');
const popupInputlink = popupCard.querySelector('.popup__input_type_link');
const addButton = document.querySelector('.profile__add-button');


// 
const addFormPopup = popupCard.querySelector('form');
const profilefromPopup = profilePopup.querySelector('form');

const profileformValidator = new FormValidator(pageSettings, profilefromPopup);
profileformValidator.enableValidation();

const AddCardformValidator = new FormValidator(pageSettings, addFormPopup);
AddCardformValidator.enableValidation();


//add card Template
const photoGridGallery = document.querySelector('.photo-grid__gallery');
// const createCard = document.querySelector('.popup__btnSubmit');
const cardTemplateSelector = '#card-template';

//--------------------- card -------------------------------------
function addNewCard(event) { // function that add new card
    event.preventDefault();
    const createCard = new Card({
        name: popupInputPlace.value,
        link: popupInputlink.value
    }, cardTemplateSelector);

    photoGridGallery.prepend(createCard.render());
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
<<<<<<< HEAD
    profileformValidator.checkSubmitButtonValidity();
    closePopup(profilePopup);

});
// ----------------------------------------------
=======
    closePopup(profilePopup);

});

addButton.addEventListener('click', () => { // addbutton code
    openPopup(popupCard);

});
>>>>>>> 6b193da0441de56e5d77aaafb7a03459ed309925


initialCards.reverse().forEach(initialCardData => {
    const card = new Card(initialCardData, cardTemplateSelector);
    photoGridGallery.prepend(card.render());
});


const forms = Array.from(document.querySelectorAll(formSelector));
forms.forEach((formElement) => {
    const formValidator = new FormValidator(pageSettings, formElement);
    formValidator.enableValidation();

});
