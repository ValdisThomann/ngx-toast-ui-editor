import { storiesOf } from "@storybook/angular";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { basicViewerDummy } from "./dummyData";

import { Welcome, Button } from "@storybook/angular/demo";

const stories = storiesOf("Viewer", module);
// .addDecorator(withKnobs);

stories.add("basic", () => ({
  component: Button,
  props: {
    text: "Hello Button"
  }
}));
