import Component from "./ui/component.js";
import { get } from "./ui/aliases.js";
import { Editor } from "./ui/editor/editor.js";
//Container of our app on the page
const cont = new Component()
    .useNative(get("container"));
//Editor
const editor = new Editor();
editor.mount(cont);
//# sourceMappingURL=index.js.map