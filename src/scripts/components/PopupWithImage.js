import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {

    open = ({ link, name }) => {
        const imageElement = this._popup.querySelector('.popup__image-photo')
        const imageTitle = this._popup.querySelector('.popup__image-title');

        imageElement.src = link;
        imageElement.alt = name;
        imageTitle.textContent = name;

        super.open();
    }
}