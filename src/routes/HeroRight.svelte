<script lang="ts">
	import CoverSrcsetWebp from "$lib/asset/Cover.jpg?w=512;1024;2048;4096;5200&format=webp&as=srcset";
	import CoverSrcsetJpeg from "$lib/asset/Cover.jpg?w=512;1024;2048;4096;5200&format=jpeg&as=srcset";
	import CoverFallback from "$lib/asset/Cover.jpg?w=512";
</script>

<section id="hero">
	<section>
		<h1>Jongerenraad Zutphen</h1>
		<h2>
			<span>Zutphen beter, mooier, en leuker,</span>
			<span>voor en door jongeren</span>
		</h2>
		<a href="https://forms.gle/4oSvkNDAt599Mk9U9">
			Word lid (in 5 minuten)
		</a>
	</section>

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
			Foto &copy; <a href="https://beeld.nu">Pieter Kers</a>
		</figcaption>
	</figure>
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

		#hero {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 2rem;

			@include breakpoint.from(md) {
				flex-direction: row;
				justify-content: space-between;
				align-items: stretch;
				gap: 5rem;
			}

			section {
				flex: 1 2 0;

				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;

				h1 {
					margin-bottom: 0;
					width: fit-content;
					text-align: center;
				}

				h2 {
					@include font-weight.value(light, false);
					text-align: center;

					span {
						display: inline-block;
					}
				}

				a {
					width: fit-content;
					display: block;
					padding: 0.75rem 1.5rem;
					margin-top: 1.5rem;
					border-radius: 0.5rem;
					background-color: variable.$color-accent;
					color: variable.$color-light;
					text-decoration: none;
					@include font-weight.value(semi-bold, false);

					font-size: 1rem;

					transition: background 200ms ease-in-out;

					&:hover {
						background: variable.$color-dark-accent;
					}
				}

				@include breakpoint.from(md) {
					align-items: flex-start;

					h1,
					h2 {
						text-align: start;
					}
				}
			}

			figure {
				flex: 2 1 0;

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
					right: 50%;
					transform: translateX(50%);
					padding: 0.25rem 0.5rem;
					opacity: 0.75;
					background: variable.$color-light;

					font-size: 0.75rem;
					@include font-weight.value(semi-bold, false);
					white-space: nowrap;

					@include mixin.border-and-shadow(0, 0.25rem);

					@include breakpoint.between(sm, md) {
						right: 1.5rem;
						transform: none;
					}

					@include breakpoint.from(lg) {
						right: 1.5rem;
						transform: none;
					}

					a {
						color: variable.$color-dark;
					}
				}
			}
		}
	}
</style>
