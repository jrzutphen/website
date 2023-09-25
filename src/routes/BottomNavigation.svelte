<script lang="ts">
	import IconHomeNonactive from "~icons/heroicons/home";
	import IconHomeActive from "~icons/heroicons/home-solid";
	import IconWhoNonactive from "~icons/heroicons/users";
	import IconWhoActive from "~icons/heroicons/users-solid";
	import IconWhatNonactive from "~icons/heroicons/newspaper";
	import IconWhatActive from "~icons/heroicons/newspaper-solid";
	import IconDocsNonactive from "~icons/heroicons/document-text";
	import IconDocsActive from "~icons/heroicons/document-text-solid";
	import IconInfoNonactive from "~icons/heroicons/information-circle";
	import IconInfoActive from "~icons/heroicons/information-circle-solid";

	import { onMount } from "svelte";
	import { derived } from "svelte/store";
	import { page } from "$app/stores";

	let home: HTMLLIElement;
	let who: HTMLLIElement;
	let what: HTMLLIElement;
	let docs: HTMLLIElement;
	let info: HTMLLIElement;

	let active = derived(page, ($page) => {
		const path = $page.url.pathname;
		if (path === "/") {
			return "home";
		} else if (path.startsWith("/wie")) {
			return "who";
		} else if (path.startsWith("/wat")) {
			return "what";
		} else if (path.startsWith("/docs")) {
			return "docs";
		} else if (path.startsWith("/info")) {
			return "info";
		} else {
			return "";
		}
	});

	onMount(() => {
		active.subscribe((value) => {
			home.classList.toggle("active", value === "home");
			who.classList.toggle("active", value === "who");
			what.classList.toggle("active", value === "what");
			docs.classList.toggle("active", value === "docs");
			info.classList.toggle("active", value === "info");
		});
	});
</script>

<footer>
	<nav aria-label="Hoofdnavigatie">
		<ul>
			<li id="home" bind:this={home}>
				<a href="/">
					<figure>
						{#if $active === "home"}
							<IconHomeActive />
						{:else}
							<IconHomeNonactive />
						{/if}
						<figcaption>Home</figcaption>
					</figure>
				</a>
			</li>
			<li id="who" bind:this={who}>
				<a href="/wie">
					<figure>
						{#if $active === "who"}
							<IconWhoActive />
						{:else}
							<IconWhoNonactive />
						{/if}
						<figcaption>Wie</figcaption>
					</figure>
				</a>
			</li>
			<li id="what" bind:this={what}>
				<a href="/wat">
					<figure>
						{#if $active === "what"}
							<IconWhatActive />
						{:else}
							<IconWhatNonactive />
						{/if}
						<figcaption>Wat</figcaption>
					</figure>
				</a>
			</li>
			<li id="docs" bind:this={docs}>
				<a href="/docs">
					<figure>
						{#if $active === "docs"}
							<IconDocsActive />
						{:else}
							<IconDocsNonactive />
						{/if}
						<figcaption>Docs</figcaption>
					</figure>
				</a>
			</li>
			<li id="info" bind:this={info}>
				<a href="/info">
					<figure>
						{#if $active === "info"}
							<IconInfoActive />
						{:else}
							<IconInfoNonactive />
						{/if}
						<figcaption>Info</figcaption>
					</figure>
				</a>
			</li>
		</ul>
	</nav>
</footer>

<style lang="scss">
	@use "sass:color";
	@use "$lib/style/variable";
	@use "$lib/style/breakpoint";
	@use "$lib/style/font-weight";

	footer {
		position: fixed;
		bottom: 0;
		width: 100dvw;

		@include breakpoint.from(md) {
			display: none;
		}

		nav {
			// 4.5rem + 0.75rem
			padding: 1rem;
			background: variable.$color-light-accent;

			ul {
				padding: 0;
				padding-bottom: calc(0.125rem + 1.5 * 0.75rem);
				list-style: none;
				display: flex;
				flex-direction: row;
				justify-content: space-evenly;

				li {
					$icon-size: 1.5rem;

					a {
						color: variable.$color-dark;
						text-decoration: none;
						width: calc($icon-size + 2rem);
						height: calc($icon-size + 0.25rem);

						figure {
							margin: 0 0.875rem;
							padding: 0.125rem;
							background: transparent;
							transition:
								margin 200ms 100ms ease-in-out,
								padding 200ms 100ms ease-in-out,
								width 200ms 100ms ease-in-out,
								background-color 200ms ease-in-out;
							width: calc($icon-size + 0.25rem);
							height: calc($icon-size + 0.25rem);
							position: relative;
							border-radius: 1rem;

							:global(svg) {
								width: $icon-size;
								height: $icon-size;
							}

							figcaption {
								position: absolute;
								left: 50%;
								transform: translateX(-50%);
								top: calc(#{$icon-size} + 0.25rem + 0.125rem);

								font-size: 0.75rem;
								@include font-weight.value(bold, false);
							}
						}
					}

					&.active {
						a {
							figure {
								background: variable.$color-light;
								margin: 0;
								padding: 0.125rem 1rem;
								width: calc($icon-size + 2rem);
							}
						}
					}

					&:hover {
						a {
							figure {
								background: variable.$color-accent;
								margin: 0;
								padding: 0.125rem 1rem;
								width: calc($icon-size + 2rem);
							}
						}
					}
				}
			}
		}
	}
</style>
