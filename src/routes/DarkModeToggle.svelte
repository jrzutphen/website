<script lang="ts">
	import { currentTheme as theme } from "$lib/script/DarkMode";
	import DarkMode from "$lib/script/DarkMode";

	import IconLightMode from "~icons/heroicons/sun-solid";
	import IconDarkMode from "~icons/heroicons/moon-solid";
	import IconSystemPreference from "~icons/heroicons/cog-6-tooth-solid";

	$: tooltip =
		$theme == DarkMode.Theme.Dark
			? "Forceer lichte modus"
			: $theme == DarkMode.Theme.Light
			? "Gebruik systeemvoorkeur"
			: "Forceer donkere modus";

	function toggle() {
		theme.update((setting) => {
			if (setting === DarkMode.Theme.Dark) {
				return DarkMode.Theme.Light;
			} else if (setting === DarkMode.Theme.Light) {
				return DarkMode.Theme.System;
			} else {
				return DarkMode.Theme.Dark;
			}
		});
	}
</script>

<button on:click={toggle}>
	{#if $theme == DarkMode.Theme.Dark}
		<IconDarkMode style="font-size: 1.5rem;" />
	{:else if $theme == DarkMode.Theme.Light}
		<IconLightMode style="font-size: 1.5rem;" />
	{:else}
		<IconSystemPreference style="font-size: 1.5rem;" />
	{/if}
	<div class="tooltip">{tooltip}</div>
</button>

<style lang="scss">
	@use "$lib/style/variable";
	@use "$lib/style/font-weight";

	button {
		position: relative;
		background: variable.$color-light-accent;
		border-radius: 0.5rem;
		border: none;
		width: 3rem;
		height: 3rem;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		color: variable.$color-dark;
		transition: color 200ms ease-in-out;

		.tooltip {
			display: none;
		}

		&:hover {
			color: variable.$color-dark-accent;

			.tooltip {
				z-index: 2;
				overflow: hidden;
				white-space: nowrap;
				display: block;
				position: absolute;
				top: 3.5rem;
				left: 50%;
				transform: translateX(-50%);
				transform-origin: center bottom;
				animation: rotateIn 200ms ease-in-out forwards;

				@keyframes rotateIn {
					0% {
						transform: translateX(-50%) rotateX(30deg);
					}
					100% {
						transform: translateX(-50%) rotateX(0deg);
					}
				}

				padding: 1em;
				background: variable.$color-light-accent;
				border: 0.25em solid variable.$color-light;
				color: variable.$color-dark;
				font-size: 0.75rem;
				@include font-weight.value(semi-bold, false);
				box-shadow: 0.5em 0.5em 0 variable.$color-dark;
			}
		}
	}
</style>
