<script lang="ts">
	import Logo from "$lib/asset/graphic/Logo.svg";
	import Plus from "$lib/asset/icon/Plus.svelte";
	import { Variant } from "$lib/asset/icon/variant";
	import Searchbox from "$lib/component/Searchbox.svelte";
	import IconLinkedIn from "~icons/mdi/linkedin";
</script>

<header>
	<nav aria-label="Hoofdnavigatie">
		<ul>
			<li>
				<a href="/over-ons">Over ons</a>
				<button aria-label="Open submenu" aria-expanded="false">
					<Plus variant={Variant.Mini} />
				</button>
				<ul>
					<li><a href="/over-ons/bestuur">Bestuur</a></li>
					<li><a href="/over-ons/leden">Leden</a></li>
					<li><a href="/over-ons/doelen">Doelen</a></li>
					<li><a href="/over-ons/tijdlijn">Tijdlijn</a></li>
				</ul>
			</li>
			<li><a href="/blog">Blog</a></li>
			<li><a href="/documenten">Documenten</a></li>
		</ul>
	</nav>

	<a href="/" aria-label="Jongerenraad Zutphen" aria-current="page">
		<img alt="" src={Logo} />
	</a>

	<IconLinkedIn style="font-size: 3rem; color: red;" />

	<section>
		<Searchbox />
		<a href="/contact" class="button">Contact</a>
	</section>
</header>

<style lang="scss">
	@use "sass:color";
	@use "$lib/style/variable";
	@use "$lib/style/mixin";

	header {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 0.5rem;

		padding: 2rem;
		padding-bottom: 1rem;

		> nav {
			display: none;
		}

		> a {
			flex: 0 0 3rem;
			padding: 0.2rem;
		}

		> section {
			flex-grow: 1;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: flex-end;

			gap: 0.5rem;

			> .button {
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: center;

				padding: 0.55rem 1rem 0.65rem 1rem;
				border-radius: 0.5rem;
				background: variable.$color-accent;

				font-size: 1rem;
				font-weight: 600;
				line-height: 1;
				color: variable.$color-background;
				text-decoration: none;
			}
		}
	}
</style>
