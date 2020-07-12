import Component from "../component.js";
import { FileBar } from "./filebar.js";
export class Editor extends Component {
    constructor() {
        super();
        this.make("div");
        this.addClasses("lwce-editor");
        this.fileBar = new FileBar();
        this.fileBar.addItem("demo.html");
        this.fileBar.addItem("index.js");
        this.fileBar.mount(this);
        this.codeContainer = new Component()
            .make("div")
            .addClasses("lwce-editor-code-container")
            .mount(this);
        this.codeMirrorInstance = CodeMirror(this.codeContainer.element, {
            lineNumbers: true,
            mode: "javascript",
            value: "function main () {\n  console.log('hi');\n}",
            matchBrackets: true,
            autofocus: true,
            theme: "material",
            scrollbarStyle: "native",
            styleActiveLine: true
        });
        setTimeout(() => {
            this.codeMirrorInstance.refresh();
        }, 400);
    }
    set mode(str) {
    }
}
//# sourceMappingURL=editor.js.map