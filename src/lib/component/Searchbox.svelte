<script lang="ts">
	import MagnifyingGlass from "$lib/asset/icon/MagnifyingGlass.svelte";
	import { Variant } from "$lib/asset/icon/variant";
	import { onMount } from "svelte";
	import { query } from "$lib/script/search";

	onMount(recalculateInputBounds);

	const unfocusAnimationLength = 1200;

	export function recalculateInputBounds() {
		const input = document?.getElementById("query") as HTMLInputElement;
		if (input) {
			// Onfocus it first, so that the input is in the correct position
			if (document?.activeElement === input) {
				input.blur();
				setTimeout(recalculateInputBounds, unfocusAnimationLength);
			} else {
				const bounds = input.getBoundingClientRect();
				const html = document?.documentElement;

				html?.style.setProperty(
					"--inputInitialMarginLeft",
					`${bounds.left}px`
				);
				html?.style.setProperty(
					"--inputInitialMarginRight",
					`${html.clientWidth - bounds.right}px`
				);
				html?.style.setProperty(
					"--inputInitialMarginTop",
					`${bounds.top}px`
				);
			}
		}
	}

	export function focusOut(event: FocusEvent) {
		if (event.target as HTMLInputElement) {
			const input = event.target as HTMLInputElement;
			if (event.relatedTarget as HTMLButtonElement) {
				const button = event.relatedTarget as HTMLButtonElement;
				if (button.type === "submit") {
					// Since we lose focus, the button would otherwise disappear before being clicked.
					event.preventDefault();
					button.click();
					return;
				}
			}

			// If reduced motion is not enabled, we want to animate the shrink
			if (
				window.matchMedia("(prefers-reduced-motion: no-preference)")
					.matches
			) {
				input.classList.add("focusOut");
				setTimeout(() => {
					input.classList.remove("focusOut");
				}, unfocusAnimationLength);
			}
		}
	}
</script>

<svelte:window on:resize={recalculateInputBounds} />

<form role="search" action="/zoek" method="GET">
	<input
		type="search"
		id="query"
		name="naar"
		placeholder="Zoek"
		autocorrect="off"
		autocapitalize="none"
		autocomplete="off"
		spellcheck="false"
		bind:value={$query}
		on:focusout={focusOut}
	/>
	<button type="submit" aria-label="Zoek">
		<MagnifyingGlass variant={Variant.Mini} />
	</button>
	<div id="backdrop" />
	<label for="query">
		<figure>
			<MagnifyingGlass variant={Variant.Mini} />
		</figure>
		Zoek…
	</label>
</form>

<style lang="scss">
	@use "sass:color";
	@use "$lib/style/variable";
	@use "$lib/style/mixin";

	form {
		--form-width: 100%;
		--input-left: 2rem;
		--input-width: calc(100vw - 4rem);

		@include mixin.media-from(sm) {
			--form-width: min(100%, 12rem);
		}

		@include mixin.media-from(md) {
			--input-left: 30vw;
			--input-width: 40vw;
		}

		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-end;
		position: relative;
		width: var(--form-width);
		height: calc(1rem * 1.2 + 2 * 0.5rem);

		> input {
			z-index: 2;
			position: relative;
			top: 0;
			left: 0;

			width: 100%;
			height: 100%;
			padding: 0.5rem 1rem;

			border: none;
			outline: none;
			border-radius: 0.5rem;
			background: color.adjust(
				variable.$color-background,
				$blackness: +10%
			);

			font-size: 1rem;
			line-height: 1.2;
			color: black;

			&:focus {
				position: fixed;
				padding-right: calc(0.5rem + 1rem * 1.2 + 1rem);
				left: var(--input-left);
				top: 2rem;
				width: var(--input-width);
				height: calc(1rem * 1.2 + 2 * 0.5rem + 1rem);

				& ~ button {
					position: fixed;
					top: 2.5rem;
					right: calc(var(--input-left) + 0.5rem);
					opacity: 1;
					pointer-events: auto;
				}

				& ~ #backdrop {
					opacity: 1;
				}

				& ~ label {
					width: 0;
					opacity: 0;
				}
			}

			&:not(:placeholder-shown) {
				& ~ label {
					width: 0;
					opacity: 0;
				}
			}

			&:global(.focusOut) {
				position: fixed;
				padding-right: calc(0.5rem + 1rem * 1.2 + 1rem);
				animation: shrink 0.3s 0.2s ease-in-out forwards;
				left: var(--input-left);
				top: 2rem;
				width: var(--input-width);
				height: calc(1rem * 1.2 + 2 * 0.5rem + 1rem);

				& ~ button {
					position: fixed;
					top: 2.5rem;
					right: calc(var(--input-left) + 0.5rem);
				}
			}
		}

		> button {
			z-index: 2;
			position: absolute;
			top: 0;
			right: 0;
			width: calc(1rem * 1.2 + 1rem);
			height: calc(1rem * 1.2 + 1rem);
			border: none;
			background: none;
			padding: 0.5rem;
			color: variable.$color-text;

			opacity: 0;
			pointer-events: none;
			cursor: pointer;
		}

		> #backdrop {
			z-index: 1;
			position: fixed;
			top: 0;
			left: 0;
			width: 100vw;
			height: 100vh;

			background: rgba(0, 0, 0, 0.5);

			opacity: 0;
			pointer-events: none;
		}

		> label {
			z-index: 3;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;

			display: flex;
			opacity: 1;
			flex-direction: row;
			align-items: center;
			justify-content: flex-start;
			padding: 0.5rem;

			font-size: 1rem;
			font-weight: 300;
			line-height: 1.2;
			color: variable.$color-text;

			pointer-events: none;

			> figure {
				width: calc(1rem * 1.2);
				height: calc(1rem * 1.2);
				margin-right: 0.5rem;
				color: variable.$color-text;
			}
		}

		@media (prefers-reduced-motion: no-preference) {
			> input {
				&:focus {
					left: var(--inputInitialMarginLeft);
					top: 2.5rem;
					width: calc(
						100vw - var(--inputInitialMarginLeft) -
							var(--inputInitialMarginRight)
					);
					height: calc(1rem * 1.2 + 2 * 0.5rem);
					animation: expand 0.3s 0.4s ease-in-out forwards;

					& ~ button {
						transition: opacity 0.1s 0.8s ease-in-out;
					}

					& ~ #backdrop {
						transition: opacity 0.3s ease-in-out;
					}

					& ~ label {
						transition: opacity 0.3s ease-in-out,
							width 0.3s ease-in-out;
					}
				}

				&:global(.focusOut) {
					position: fixed;
					padding-right: calc(0.5rem + 1rem * 1.2 + 1rem);
					animation: shrink 0.3s 0.2s ease-in-out forwards;
					left: var(--input-left);
					top: 2rem;
					width: var(--input-width);
					height: calc(1rem * 1.2 + 2 * 0.5rem + 1rem);

					& ~ button {
						position: fixed;
						top: 2.5rem;
						right: calc(var(--input-left) + 0.5rem);
						transition: opacity 0.1s ease-in-out;
					}

					& ~ #backdrop {
						transition: opacity 0.3s 0.8s ease-in-out;
					}

					& ~ label {
						transition: opacity 0.3s 0.5s ease-in-out,
							width 0.3s 0.5s ease-in-out;
					}
				}

				@keyframes shrink {
					100% {
						left: var(--inputInitialMarginLeft);
						top: var(--inputInitialMarginTop);
						width: calc(
							100vw - var(--inputInitialMarginLeft) -
								var(--inputInitialMarginRight)
						);
						height: calc(1rem * 1.2 + 2 * 0.5rem);
					}

					0% {
						left: var(--input-left);
						top: 2rem;
						width: var(--input-width);
						height: calc(1rem * 1.2 + 2 * 0.5rem + 1rem);
					}
				}

				@keyframes expand {
					0% {
						left: var(--inputInitialMarginLeft);
						top: var(--inputInitialMarginTop);
						width: calc(
							100vw - var(--inputInitialMarginLeft) -
								var(--inputInitialMarginRight)
						);
						height: calc(1rem * 1.2 + 2 * 0.5rem);
					}

					100% {
						left: var(--input-left);
						top: 2rem;
						width: var(--input-width);
						height: calc(1rem * 1.2 + 2 * 0.5rem + 1rem);
					}
				}
			}
		}
	}
</style>
