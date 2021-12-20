import { openPopup } from './utils.js';

const popUpImage = document.querySelector('.popup_type_image-card');
const imageElement = popUpImage.querySelector('.popup__image-photo')
const imageTitle = popUpImage.querySelector('.popup__image-title');
export default class Card {
    constructor(cardData, cardTemplateSelector) {
        this._name = cardData.name;
        this._link = cardData.link;
        this._template = document.querySelector(cardTemplateSelector).content.querySelector(".photo-grid__lists");

    }

    _ImagePreview() {
        openPopup(popUpImage);
        imageElement.src = this._link;
        imageElement.alt = this._name;
        imageTitle.textContent = this._name;
    }

    _heartEvent(evt) {
        evt.target.classList.toggle('photo-grid__btnheart_active');
    }
    _cardDelete(evt) {
        evt.target.closest('.photo-grid__lists').remove();
    }
    _addEventListeners() {
        const cardImage = this._card.querySelector('.photo-grid__img');
        const likeBtn = this._card.querySelector('.photo-grid__btnheart');
        const deleteBtn = this._card.querySelector('.photo-grid__deletebtn');

        this._card.querySelector('.photo-grid__des').textContent = this._name;
        cardImage.style.backgroundImage = `url(${this._link})`;

        likeBtn.addEventListener('click', this._heartEvent);
        deleteBtn.addEventListener('click', this._cardDelete);
        cardImage.addEventListener('click', this._ImagePreview.bind(this));


    }

    render() {
        this._card = this._template.cloneNode(true);
        this._addEventListeners();



        return this._card;
    }

}