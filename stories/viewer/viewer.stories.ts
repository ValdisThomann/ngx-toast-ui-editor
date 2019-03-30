import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withKnobs, text } from "@storybook/addon-knobs";

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
        options: {}
      }
    };
  });
