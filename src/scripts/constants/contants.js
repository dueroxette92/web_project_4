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



//add card Template
const photoGridGallery = document.querySelector('.photo-grid__gallery');
const cardTemplateSelector = "#card-template";

export {
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
}