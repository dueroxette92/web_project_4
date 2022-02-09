export default class Card {
    constructor(cardData, cardTemplateSelector, handleCardClick) {
        this._name = cardData.name;
        this._link = cardData.link;
        this._cardSelector = cardTemplateSelector;
        this._handleCardClick = handleCardClick;

    }
    _getTemplate() {
        const cardElement = document
            .querySelector(this._cardSelector)
            .content
            .querySelector(".photo-grid__lists")
            .cloneNode(true);

        return cardElement;
    }

    _previewImage() {
        this._handleCardClick({ link: this._link, name: this._name });
    }

    _handleLike(evt) {
        evt.target.classList.toggle('photo-grid__btnheart_active');
    }
    _handleDelete(evt) {
        evt.target.closest('.photo-grid__lists').remove();
    }
    _addEventListeners() {
        const cardImage = this._card.querySelector('.photo-grid__img');
        const likeBtn = this._card.querySelector('.photo-grid__btnheart');
        const deleteBtn = this._card.querySelector('.photo-grid__deletebtn');

        this._card.querySelector('.photo-grid__des').textContent = this._name;
        cardImage.src = this._link;
        cardImage.alt = this._name;

        likeBtn.addEventListener('click', this._handleLike);
        deleteBtn.addEventListener('click', this._handleDelete);
        cardImage.addEventListener('click', this._previewImage.bind(this));
    }

    render() {
        this._card = this._getTemplate();
        this._addEventListeners();


        return this._card;
    }

}