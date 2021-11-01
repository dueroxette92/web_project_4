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


const profileName = document.querySelector('.profile__name_type_name');
const profileDes = document.querySelector('.profile__name_type_des');
const openEditProfileButton = document.querySelector('.profile__edit-button');
//const closeBtn = document.querySelector('.popup__close')

const profilePopup = document.querySelector('.popup_type_profile');
const popupInputName = profilePopup.querySelector('.popup__input_type_name');
const popupInputDes = profilePopup.querySelector('.popup__input_type_des');
const popupSaveProfileButton = profilePopup.querySelector('.popup__button');

//// add Card button //
const popupCard = document.querySelector('.popup_type_add-card');
const popupInputPlace = popupCard.querySelector('.popup__input_type_place');
const popupInputlink = popupCard.querySelector('.popup__input_type_link');
const addButton = document.querySelector('.profile__add-button');
const btn = document.querySelector('.popup__closebtn');
const createBtn = popupCard.querySelector('.popup__btnSubmit');

//add card Template
const photoGridGallery = document.querySelector('.photo-grid__gallery');
const cardTemplate = document.querySelector('#card-template').content.querySelector('.photo-grid__lists');
const heartWhite = cardTemplate.querySelector('.photo-grid__btnheart');
const createCard = document.querySelector('.popup__btnSubmit');
const popUpImage = document.querySelector('.popup_type_image-card');


function createCardElement(cardData) { // consist the value name, link
    const card = cardTemplate.cloneNode(true);
    card.querySelector('.photo-grid__des').textContent = cardData.name;
    card.querySelector('.photo-grid__img').style.backgroundImage = `url(${cardData.link})`;

    card.querySelector('.photo-grid__btnheart').addEventListener('click', (event) => {
        event.target.classList.add('photo-grid__btnheart_active');
    });
    card.querySelector('.photo-grid__deletebtn').addEventListener('click', () => {
        card.remove();
    });
    card.querySelector('.photo-grid__img').addEventListener('click', () => {
        openPopup(popUpImage);
        popUpImage.querySelector('.popup__image-title').textContent = cardData.name;
        popUpImage.querySelector('.popup__image-photo').src = cardData.link;

    });

    return card;
}

function addNewCard(event) { // function that add new card
    event.preventDefault();
    const cardElement = createCardElement({
        name: popupInputPlace.value,
        link: popupInputlink.value
    });

    photoGridGallery.prepend(cardElement);
    closePopup(popupCard);


}

popupCard.addEventListener('submit', addNewCard);

// function to open and close the popUp//
function openPopup(popup) {
    popup.classList.add('popup_is-opened');
    document.addEventListener('mouseup', closePopupOutside);
    document.addEventListener('keydown', closePopupEsc);


}

function closePopup(popup) {
    popup.classList.remove('popup_is-opened');
}

openEditProfileButton.addEventListener('click', () => { //Codes for EditButton
    popupInputName.value = profileName.textContent;
    popupInputDes.value = profileDes.textContent;
    openPopup(profilePopup);

});

popupSaveProfileButton.addEventListener('click', (event) => { //codes for save button
    event.preventDefault();
    profileName.textContent = popupInputName.value;
    profileDes.textContent = popupInputDes.value;
    checkSubmitButtonValidity(profilePopup.querySelector('form'), pageSettings);
    closePopup(profilePopup);
});

addButton.addEventListener('click', () => { // addbutton code
    checkSubmitButtonValidity(popupCard.querySelector('form'), pageSettings);
    openPopup(popupCard);

});

// CODE TO close the CLOSE BUTTON 
const closeButtonList = document.querySelectorAll('.popup__close');
closeButtonList.forEach(btn => btn.addEventListener('click', () => {
    const popup = btn.closest('.popup');
    closePopup(popup);
}));

// CARD TEMPLATE CODE //

initialCards.reverse().forEach(initialCardData => {
    photoGridGallery.prepend(createCardElement(initialCardData));
});