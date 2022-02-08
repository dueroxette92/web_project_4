export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector)
    }
    setEventListeners() {
        this._popup.addEventListener("click", (event) => {
            if (event.target.classList.contains('popup') || event.target.classList.contains('popup__close')) {
                this.close();
            }
        });
    }
    open() {
        this._popup.classList.add('popup_is-opened');
        document.addEventListener('keydown', this._handleEscapeClose);

    }
    close() {
        this._popup.classList.remove('popup_is-opened');
        document.removeEventListener('keydown', this._handleEscapeClose);

    }
    _handleEscapeClose = (event) => {
        if (event.key === "Escape") {
            this.close();
        }
    }
}