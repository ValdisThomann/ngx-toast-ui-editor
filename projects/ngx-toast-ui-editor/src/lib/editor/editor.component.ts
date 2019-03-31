import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  SimpleChanges
} from "@angular/core";

import Editor from "tui-editor";

enum editorEvents {
  load = "load",
  change = "change",
  stateChange = "stateChange",
  focus = "focus",
  blur = "blur"
}

@Component({
  selector: "tui-editor",
  template: "<div #rootEl>test</div>",
  encapsulation: ViewEncapsulation.None
})
export class EditorComponent implements OnInit {
  @Input() options: tuiEditor.IEditorOptions;

  @Output() load = new EventEmitter();
  @Output() change = new EventEmitter();
  @Output() stateChange = new EventEmitter();
  @Output() focus = new EventEmitter();
  @Output() blur = new EventEmitter();

  @ViewChild("rootEl") rootEl: ElementRef;

  private editorInst = null;

  ngOnInit() {
    this.editorInst = new Editor({
      el: this.rootEl.nativeElement,
      ...this.options
    });

    this.bindEventHandlers();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.options) {
      const { height, previewStyle } = changes.options.currentValue;
      const { prevHeight, prevPreviewStyle } = changes.options.previousValue;
      if (height !== prevHeight) {
        this.editorInst.height(height);
      }
      if (previewStyle !== prevPreviewStyle) {
        this.editorInst.changePreviewStyle(previewStyle);
      }
    }
  }

  private bindEventHandlers() {
    this.editorInst.on(editorEvents.load, event => this.load.emit(event));
    this.editorInst.on(editorEvents.change, event => this.change.emit(event));
    this.editorInst.on(editorEvents.stateChange, event =>
      this.stateChange.emit(event)
    );
    this.editorInst.on(editorEvents.focus, event => this.focus.emit(event));
    this.editorInst.on(editorEvents.blur, event => this.blur.emit(event));
  }
}
