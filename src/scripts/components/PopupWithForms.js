import Popup from "./Popup.js";

export default class PopupWithForms extends Popup {
    constructor(popupSelector, submitForm) {
        super(popupSelector);
        this._submitForm = submitForm;
    }
    _getInputValues() {
        const inputInfo = {};
        const inputList = this._popup.querySelectorAll('.popup__input');
        inputList.forEach((item) => inputInfo[item.name] = item.value);
        return inputInfo;
    }
    setEventListeners() {
        super.setEventListeners();
        this._popup.addEventListener('submit', this._submitForm);
    }
    close() {
        super.close();
        this._popup.querySelector('.popup__form').reset();
    }
}