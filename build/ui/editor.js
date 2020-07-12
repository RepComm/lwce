import Component from "./component.js";
export class Editor extends Component {
    constructor() {
        super();
        this.make("div");
        this.addClasses("lwce-editor");
        this.codeMirrorInstance = CodeMirror(this.element, {
            lineNumbers: true,
            mode: "text/html",
            value: "<html><body></body></html>",
            matchBrackets: true
        });
    }
    set mode(str) {
    }
}
//# sourceMappingURL=editor.js.map