import { createText } from "@shopify/restyle";
import { Theme } from "./Theme";

const Text = createText<Theme>();
Text.defaultProps = {
    variant: "body",
};

export default Text;
