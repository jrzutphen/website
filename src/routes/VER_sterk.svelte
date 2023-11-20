<script lang="ts">
	import CoverSrcsetWebp from "$lib/asset/VER_sterkBanner.jpg?w=512;1024;2048;4096;5200&format=webp&as=srcset";
	import CoverSrcsetJpeg from "$lib/asset/VER_sterkBanner.jpg?w=512;1024;2048;4096;5200&format=jpeg&as=srcset";
	import CoverFallback from "$lib/asset/VER_sterkBanner.jpg?w=512";

	let buttonText = encodeURIComponent(
		"Hey, ik heb een vraag over de Jongerenraad Zutphen"
	);
</script>

<section id="VER_sterk">
	<figure>
		<picture>
			<source type="image/webp" srcset={CoverSrcsetWebp} />
			<source type="image/jpeg" srcset={CoverSrcsetJpeg} />
			<img
				src={CoverFallback}
				alt="De IJsselkade op een zonnige dag, met de Oude IJsselbrug op de achtergrond"
			/>
		</picture>
		<figcaption>
			&copy; <a href="https://njr.nl/nl/verhalen/ver_sterk">NJR</a>
		</figcaption>
	</figure>

	<section>
		<p>
			Hier tijdens of na VER_sterk? Vragen over onze poster, wat wij doen,
			of waarom onze structuur dé structuur is voor duurzame, bottoms-up
			jeugdparticipatie? Zoek Luka of Milan op, ze lopen ergens rond ^^
		</p>
		<p>
			Kan je ze niet vinden of ben je al weg? Stuur dan gerust een appje:
		</p>
		<div id="buttons">
			<a href="https://wa.me/31624462096?text={buttonText}">Luka</a>
			<a href="https://wa.me/31615358556?text={buttonText}">Milan</a>
		</div>
	</section>
</section>

<style lang="scss">
	@use "$lib/style/variable";
	@use "$lib/style/font-weight";
	@use "$lib/style/breakpoint";
	@use "$lib/style/mixin";
	@use "sass:color";

	$header-height: 6rem;
	$footer-nav-height: 5.25rem;

	:global(main) {
		$main-margin: 1rem;
		// margin: $main-margin !important;
		// margin-top: 0 !important;
		$main-width: calc(100dvw - #{$main-margin} * 2);
		// width: $main-width !important;
		// max-width: $main-width !important;
		// position: relative;

		#VER_sterk {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 2rem;
			width: 100%;
			margin-top: 2rem;
			border-top: 0.25rem solid variable.$color-dark;
			padding-top: 1.5rem;
			padding-right: 0.5rem;

			figure {
				width: 100%;
				margin: 0.5rem;
				position: relative;

				picture,
				picture img {
					width: 100%;
					height: 100%;
					display: block;
					object-fit: cover;
					object-position: center;
				}

				picture {
					@include mixin.border-and-shadow(0.25rem, 0.5rem);
				}

				figcaption {
					position: absolute;
					bottom: 1rem;
					right: 1.5rem;
					padding: 0.25rem 0.5rem;
					opacity: 0.75;
					background: variable.$color-light;

					font-size: 0.75rem;
					@include font-weight.value(semi-bold, false);
					white-space: nowrap;

					@include mixin.border-and-shadow(0, 0.25rem);

					a {
						color: variable.$color-dark;
					}
				}
			}

			section {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: flex-start;
				max-width: 32rem;
				gap: 1rem;

				#buttons {
					display: flex;
					flex-direction: row;
					gap: 0.25rem;

					a {
						width: fit-content;
						display: block;
						padding: 0.75rem 1.5rem;
						border-radius: 0.5rem;
						color: variable.$color-light;
						text-decoration: none;
						@include font-weight.value(semi-bold, false);

						font-size: 1rem;

						transition: background 200ms ease-in-out;

						&:first-of-type {
							background-color: variable.$color-primary;
						}

						&:last-of-type {
							background-color: variable.$color-secondary;
						}

						&:hover {
							background: variable.$color-dark-accent;
						}
					}
				}
			}
		}
	}
</style>
