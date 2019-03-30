import { NgModule } from "@angular/core";
import { ViewerComponent } from "./viewer/viewer.component";
import { EditorComponent } from "./editor/editor.component";

@NgModule({
  declarations: [ViewerComponent, EditorComponent],
  imports: [],
  exports: [ViewerComponent, EditorComponent]
})
export class NgxToastUiEditorModule {}
