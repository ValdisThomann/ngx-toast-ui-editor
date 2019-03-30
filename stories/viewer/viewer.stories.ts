import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withKnobs, text } from "@storybook/addon-knobs";

import "codemirror/lib/codemirror.css";
import "highlight.js/styles/github.css";
import "tui-editor/dist/tui-editor.css";
import "tui-editor/dist/tui-editor-contents.min.css";

import "tui-editor/dist/tui-editor-extScrollSync";
import "tui-editor/dist/tui-editor-extColorSyntax";
import "tui-editor/dist/tui-editor-extUML";
import "tui-editor/dist/tui-editor-extChart";
import "tui-editor/dist/tui-editor-extTable";

import { basicViewerDummy } from "./dummyData";
import { NgxToastUiEditorModule } from "../../projects/ngx-toast-ui-editor/src/public_api";

storiesOf("Viewer", module)
  .addDecorator(
    moduleMetadata({
      imports: [NgxToastUiEditorModule]
    })
  )
  .addDecorator(withKnobs)
  .add("basic", () => {
    const { content } = basicViewerDummy;
    const value = text("value", content);
    return {
      template: "<tui-viewer [value]='value' [options]='options'></tui-viewer>",
      props: {
        value: value,
        options: {
          exts: [
            {
              name: "chart",
              minWidth: 100,
              maxWidth: 600,
              minHeight: 100,
              maxHeight: 300
            },
            "scrollSync",
            "colorSyntax",
            "uml",
            "mark",
            "table"
          ]
        }
      }
    };
  });
