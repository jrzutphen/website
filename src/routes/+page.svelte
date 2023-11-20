<script lang="ts">
	import Hero from "./HeroRight.svelte";
	import VER_sterk from "./VER_sterk.svelte";
</script>

<div id="announcement">
	<h1>Onze site is nog in aanbouw!</h1>
	<p>Een hoop knopjes zullen het nog niet doen.</p>
	<p>
		Als je vragen hebt, neem dan gerust contact op met de contactgegevens
		onderaan deze pagina!
	</p>
</div>

<Hero />

<VER_sterk />

<style lang="scss">
	@use "$lib/style/variable";
	@use "$lib/style/font-weight";
	@use "$lib/style/breakpoint";
	@use "$lib/style/mixin";

	#announcement {
		width: calc(100% - 0.5rem);

		@include mixin.border-and-shadow(
			0.25rem,
			0.5rem,
			$borderColor: variable.$color-light,
			$shadowColor: variable.$color-dark
		);

		margin-bottom: 1rem;
		margin-right: 0.5rem;
		padding: 1rem;

		background: variable.$color-secondary;
		color: variable.$color-light;

		h1 {
			font-size: 1.5rem;
			text-align: left;
			line-height: 140%;
		}
	}
</style>
