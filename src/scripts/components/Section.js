class Section {
    constructor({ items }, classSelector) {
        this._items = items;
        this._renderer = document.querySelector(classSelector);
    }
    renderer(cards) {
        cards.forEach(item => {
            this._item = this._renderer(element);

        });
    }
    addItem(element) {
        this._classSelector.prepend(element);
    }

}