import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges
} from "@angular/core";
import Viewer from "tui-editor/dist/tui-editor-Viewer";

import { Options } from "./viewer.models";

const viewerEvents = ["load", "change"];

@Component({
  selector: "tui-viewer",
  template: "<div #rootEl></div>",
  encapsulation: ViewEncapsulation.None
})
export class ViewerComponent implements OnInit, OnChanges {
  @Input() value: string;
  @Input() options: Options;

  @Output() load = new EventEmitter();
  @Output() change = new EventEmitter();

  @ViewChild("rootEl") rootEl: ElementRef;

  private viewerInst = null;

  ngOnInit() {
    this.viewerInst = new Viewer({
      el: this.rootEl.nativeElement,
      initialValue: this.value,
      ...this.options
    });

    this.bindEventHandlers();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.value) {
      this.viewerInst.setMarkdown(changes.value.currentValue);
    }
  }

  private bindEventHandlers() {
    viewerEvents.forEach(eventName =>
      this.viewerInst.on(eventName, event => this[eventName].emit(event))
    );
  }
}
