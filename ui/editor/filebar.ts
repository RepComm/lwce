
import Component from "../component.js";

export class FileBarItem extends Component {
  _text: string;
  titleSpan: Component;
  indicator: Component;
  constructor (text: string) {
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

  set text (t: string) {
    this._text = t;
    this.titleSpan.textContent(t);
  }

  get text (): string {
    return this._text;
  }
}

export class FileBar extends Component {
  _items: Set<FileBarItem> = new Set();
  constructor () {
    super();
    this.make("div");
    this.addClasses("lwce-editor-filebar");
  }

  rebuild (): FileBar {
    this.removeChildren();

    this._items.forEach((item)=>{
      this.mountChild(item);
    });

    return this;
  }

  addItem (name: string): FileBar {
    let item = new FileBarItem(name);

    this._items.add(item);

    this.mountChild(item);
    return this;
  }

  getItem (name: string): FileBarItem|undefined {
    for (let item of this._items) {
      if (item.text.toLowerCase() === name.toLowerCase()) return item;
    }
    return undefined;
  }

  removeItem (item: FileBarItem) {
    this._items.delete(item);
  }
}