import "codemirror/lib/codemirror.css";
import "highlight.js/styles/github.css";
import "tui-editor/dist/tui-editor.min.css";
import "tui-editor/dist/tui-editor-contents.min.css";

import "tui-editor/dist/tui-editor-extScrollSync";
import "tui-editor/dist/tui-editor-extColorSyntax";
import "tui-editor/dist/tui-editor-extUML";
import "tui-editor/dist/tui-editor-extChart";
import "tui-editor/dist/tui-editor-extTable";

import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withKnobs, array } from "@storybook/addon-knobs";

import { data } from "../storyData";
import { NgxToastUiEditorModule } from "../../projects/ngx-toast-ui-editor/src/public_api";

storiesOf("Editor", module)
  .addDecorator(
    moduleMetadata({
      imports: [NgxToastUiEditorModule]
    })
  )
  .addDecorator(withKnobs)
  .add("demo", () => {
    const { content, exts } = data;
    return {
      template: "<tui-editor [options]='options'></tui-editor>",
      props: {
        options: {
          initialValue: content,
          previewStyle: "vertical",
          height: "600px",
          initialEditType: "markdown",
          useCommandShortcut: true,
          exts: exts
        }
      }
    };
  })
  .add("customize toolbar", () => {
    const toolbarItems = array("toolbarItems", data.toolbarItems);

    return {
      template: "<tui-editor [options]='options'></tui-editor>",
      props: {
        options: {
          intialValue: "hello customize toolbar",
          previewStyle: "vertical",
          height: "400px",
          initialEditType: "markdown",
          toolbarItems: toolbarItems
        }
      }
    };
  });
