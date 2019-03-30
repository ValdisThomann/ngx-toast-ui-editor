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

import { ViewerOptions } from "./viewer.models";

enum viewerEvents {
  load = "load",
  change = "change"
}

@Component({
  selector: "tui-viewer",
  template: "<div #rootEl></div>",
  encapsulation: ViewEncapsulation.None
})
export class ViewerComponent implements OnInit, OnChanges {
  @Input() value: string;
  @Input() options: ViewerOptions;

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
    this.viewerInst.on(viewerEvents.load, event => this.load.emit(event));
    this.viewerInst.on(viewerEvents.change, event => this.change.emit(event));
  }
}
