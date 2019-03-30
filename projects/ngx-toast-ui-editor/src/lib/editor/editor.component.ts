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

@Component({
  selector: "tui-editor",
  template: "<div #rootEl>test</div>",
  encapsulation: ViewEncapsulation.None
})
export class EditorComponent implements OnInit {
  @Input() value: string;
  // @Input() options: Options;

  @Output() load = new EventEmitter();
  @Output() change = new EventEmitter();

  @ViewChild("rootEl") rootEl: ElementRef;

  private viewerInst = null;

  ngOnInit() {
    this.viewerInst = new Editor({
      el: this.rootEl.nativeElement,
      initialValue: this.value
      // ...this.options
    });

    this.bindEventHandlers();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.value) {
      this.viewerInst.setMarkdown(changes.value.currentValue);
    }
  }

  private bindEventHandlers() {
    // viewerEvents.forEach(eventName =>
    //   this.viewerInst.on(eventName, event => this[eventName].emit(event))
    // );
  }
}
