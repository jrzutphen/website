import { addons } from "@storybook/manager-api";
import customTheme from "./theme.ts";

addons.setConfig({
	theme: customTheme,
});
