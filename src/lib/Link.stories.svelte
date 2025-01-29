<script module lang="ts">
import { defineMeta } from "@storybook/addon-svelte-csf";
import { expect, fn, userEvent, waitFor, within } from "@storybook/test";

import Link from "./Link.svelte";

const { Story } = defineMeta({
	component: Link,
	args: {
		onclick: fn(),
	},
	argTypes: {
		text: {
			description: "The text of the link",
			control: "text",
		},
		href: {
			description: "The URL the link points to",
			control: "text",
		},
	},
});
</script>

<Story
	name="Primary"
	args={{
		text: "Click me",
		href: "https://example.com",
	}}
	parameters={{
		design: [{
			name: "Figma",
			type: "figma",
			url:
				"https://www.figma.com/design/CFg42FVYylTqj5wNEiclDq/Jongerenraad-Website-Redesign?node-id=10-333",
		}],
	}}
	play={async ({ args, canvasElement, step }) => {
		const canvas = within(canvasElement);

		await step("Click the link", async () => {
			await userEvent.click(canvas.getByRole("link"));
		});

		await waitFor(() => expect(args.onclick).toHaveBeenCalled());
	}}
/>
