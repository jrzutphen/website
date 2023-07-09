<script lang="ts">
	import { Variant } from "$lib/asset/icon/variant";

	export let width = "100%";
	export let height = "100%";
	export let variant: Variant = Variant.Outline;

	export let title = "Vergrootglas";
	export let description = "Een vergrootglas";
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
			d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
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
			d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
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
			fill-rule="evenodd"
			d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
			clip-rule="evenodd"
		/>
	</svg>
{/if}
