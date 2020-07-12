import Component from "../component.js";
export class FileBarItem extends Component {
    constructor(text) {
        super();
        this.make("div");
        this.addClasses("lwce-editor-filebar-item");
        this.titleSpan = new Component()
            .make("span")
            .addClasses("lwce-editor-filebar-item-title")
            .mount(this);
        this.indicator = new Component()
            .make("div")
            .addClasses("lwce-editor-filebar-item-indicator")
            .mount(this);
        this.text = text;
    }
    set text(t) {
        this._text = t;
        this.titleSpan.textContent(t);
    }
    get text() {
        return this._text;
    }
}
export class FileBar extends Component {
    constructor() {
        super();
        this._items = new Set();
        this.make("div");
        this.addClasses("lwce-editor-filebar");
    }
    rebuild() {
        this.removeChildren();
        this._items.forEach((item) => {
            this.mountChild(item);
        });
        return this;
    }
    addItem(name) {
        let item = new FileBarItem(name);
        this._items.add(item);
        this.mountChild(item);
        return this;
    }
    getItem(name) {
        for (let item of this._items) {
            if (item.text.toLowerCase() === name.toLowerCase())
                return item;
        }
        return undefined;
    }
    removeItem(item) {
        this._items.delete(item);
    }
}
//# sourceMappingURL=filebar.js.map