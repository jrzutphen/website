<script lang="ts">
	import CoverSrcsetWebp from "$lib/asset/Cover.jpg?w=512;1024;2048;4096;5200&format=webp&as=srcset";
	import CoverSrcsetJpeg from "$lib/asset/Cover.jpg?w=512;1024;2048;4096;5200&format=jpeg&as=srcset";
	import CoverFallback from "$lib/asset/Cover.jpg?w=512";
</script>

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

<section>
	<h1>Jongerenraad Zutphen</h1>
	<h2>
		<span>Zutphen beter, mooier, en leuker,</span>
		<span>voor en door jongeren</span>
	</h2>
	<a href="https://forms.gle/4oSvkNDAt599Mk9U9">Word lid (in 5 minuten)</a>
</section>

<style lang="scss">
	@use "$lib/style/variable.scss";
	@use "$lib/style/font-weight.scss";
	@use "$lib/style/breakpoint.scss";
	@use "sass:color";

	$header-height: 6rem;
	$footer-nav-height: 5.25rem;

	:global(main) {
		$main-margin: 1rem;
		margin: $main-margin !important;
		margin-top: 0 !important;
		$main-width: calc(100dvw - #{$main-margin} * 2);
		width: $main-width !important;
		max-width: $main-width !important;
		position: relative;

		figure {
			height: calc(
				100dvh - #{$header-height} - #{$main-margin} - #{$footer-nav-height}
			);
			@include breakpoint.from(md) {
				height: calc(100dvh - #{$header-height} - #{$main-margin});
			}

			position: relative;

			// Have the picture take up the entire space,
			// zooming in on the top center of the image if necessary
			picture {
				height: 100%;
				width: 100%;
				display: block;
				overflow: hidden;
				border-radius: 1.5rem;

				img {
					height: 100%;
					width: 100%;
					object-fit: cover;
					object-position: top center;
				}
			}

			figcaption {
				position: absolute;
				bottom: 1rem;
				right: 50%;
				transform: translateX(50%);
				padding: 0.25rem 0.5rem;
				opacity: 0.75;
				background: variable.$color-light;
				border-radius: 1.5rem;
				font-size: 0.75rem;
				@include font-weight.value(semi-bold, false);

				@include breakpoint.from(sm) {
					right: 1.5rem;
					transform: none;
				}

				a {
					color: variable.$color-dark;
				}
			}
		}

		section {
			position: absolute;
			top: min(4rem, 7.5dvw);
			left: 0;
			width: 100%;
			text-align: center;

			h1 {
				margin-bottom: 0;
				font-size: min(2.5rem, 5dvw);
			}

			h2 {
				@include font-weight.value(light, false);
				margin: 0 auto;
				max-width: 80%;
				font-size: min(1rem, 4dvw);

				@include breakpoint.from(lg) {
					max-width: 60%;
				}

				span {
					display: inline-block;
				}
			}

			a {
				width: fit-content;
				display: block;
				padding: 0.75rem 1.5rem;
				margin: 1.5rem auto;
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
		}
	}
</style>
