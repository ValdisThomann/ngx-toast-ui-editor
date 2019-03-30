import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "tui-editor",
  template: "<div #rootEl>test</div>",
  encapsulation: ViewEncapsulation.None
})
export class EditorComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
