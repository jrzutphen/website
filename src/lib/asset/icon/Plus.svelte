<script lang="ts">
	import { Variant } from "$lib/asset/icon/variant";

	export let width = "100%";
	export let height = "100%";
	export let variant: Variant = Variant.Outline;

	export let title = "Plus";
	export let description = "Een plus";
</script>

{#if variant == Variant.Outline}
	<svg
		class={$$props.class}
		{width}
		{height}
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="currentColor"
	>
		<title>{title}</title>
		<desc>{description}</desc>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M12 4.5v15m7.5-7.5h-15"
		/>
	</svg>
{:else if variant == Variant.Solid}
	<svg
		class={$$props.class}
		{width}
		{height}
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
	>
		<title>{title}</title>
		<desc>{description}</desc>
		<path
			fill-rule="evenodd"
			d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
			clip-rule="evenodd"
		/>
	</svg>
{:else if variant == Variant.Mini}
	<svg
		class={$$props.class}
		{width}
		{height}
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 20 20"
		fill="currentColor"
	>
		<title>{title}</title>
		<desc>{description}</desc>
		<path
			d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"
		/>
	</svg>
{/if}
