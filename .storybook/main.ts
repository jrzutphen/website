import type { StorybookConfig } from "@storybook/sveltekit";

import remarkGfm from "remark-gfm";
import remarkGitHub from "remark-github";

export default {
	core: {
		disableTelemetry: true,
		builder: "@storybook/builder-vite",
	},

	framework: "@storybook/sveltekit",

	addons: [
		"@storybook/addon-svelte-csf",
		"@storybook/addon-essentials",
		"@storybook/addon-a11y",
		"@storybook/addon-designs",
		{
			name: "@storybook/addon-docs",
			options: {
				mdxPluginOptions: {
					mdxCompileOptions: {
						remarkPlugins: [
							remarkGfm,
							[remarkGitHub, { repository: "jrzutphen/website" }],
						],
					},
				},
			},
		},
		"@storybook/addon-interactions",
	],

	stories: [
		"../src/**/*.mdx",
		"../src/**/*.stories.@(js|ts|svelte)",
	],

	staticDirs: [
		"../static/",
	],
} satisfies StorybookConfig;
