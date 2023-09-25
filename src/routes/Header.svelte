<script lang="ts">
	import Logo from "$lib/asset/Logo.svg";
	// import SearchBox from "./SearchBox.svelte";
	import HeaderNavigationItem from "./HeaderNavigationItem.svelte";
	import { Variant } from "./HeaderNavigationItem.svelte";
	// import DarkModeToggle from "./DarkModeToggle.svelte";
</script>

<header>
	<nav aria-label="Hoofdnavigatie">
		<ul>
			<HeaderNavigationItem variant={Variant.Who} />
			<HeaderNavigationItem variant={Variant.What} />
			<HeaderNavigationItem variant={Variant.Docs} />
			<HeaderNavigationItem variant={Variant.Info} />
		</ul>
	</nav>

	<a href="/" aria-label="Jongerenraad Zutphen" aria-current="page">
		<img alt="" src={Logo} />
	</a>

	<div>
		<!-- <DarkModeToggle /> -->
		<!-- <SearchBox /> -->
		<a href="/info/contact" class="button disabled">Contact</a>
	</div>
</header>

<style lang="scss">
	@use "sass:color";
	@use "$lib/style/variable";
	@use "$lib/style/breakpoint";

	header {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 0.5rem;

		padding: 2rem;
		padding-bottom: 1rem;

		nav {
			flex: 1 1 0;

			@include breakpoint.until(md) {
				display: none;
			}

			ul {
				display: flex;
				flex-direction: row;
				gap: 1rem;
				list-style: none;
			}
		}

		a {
			flex: 0 0 3rem;
			padding: 0.2rem;
		}

		div {
			flex: 1 1 0;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: flex-end;

			gap: 0.5rem;

			.button {
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: center;

				height: 3rem;

				padding: 0.5rem 1.5rem;
				border-radius: 0.5rem;
				background: variable.$color-accent;
				transition: background 200ms ease-in-out;

				font-size: 1rem;
				font-weight: variable.$font-weight-semibold;
				line-height: 1;
				color: variable.$color-light;
				text-decoration: none;

				&:hover {
					background: variable.$color-dark-accent;
				}
			}
		}
	}
</style>
