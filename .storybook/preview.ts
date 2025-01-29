import type { Preview } from "@storybook/svelte";

import "@fontsource-variable/fira-code";
import "@fontsource-variable/gantari";
import "@fontsource-variable/lexend-deca";
import "@fontsource-variable/lexend-exa";
import "@fontsource-variable/lexend-mega";

import customTheme from "./theme.ts";

export default {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		docs: {
			theme: customTheme,
			toc: {
				headingSelector: "h2, h3",
			},
		},
	},
} satisfies Preview;
