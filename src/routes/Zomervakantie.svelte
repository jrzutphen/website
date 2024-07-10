<section id="Zomervakantie">
	<section>
		<h2>Wij zijn met zomervakantie!</h2>
		<p>
			Daarom nemen wij de telefoon (waarschijnlijk) niet op! Voor vragen
			kun je
			<a href="mailto:hallo@jrzutphen.nl">mailen</a>.
		</p>
		<p>
			Heb je een dringende vraag? Neem dan contact op met een van de
			volgende personen:
		</p>
		<div id="buttons">
			<a href="tel:31-6-24462096">Luka</a>
			<a href="tel:31-6-15358556">Milan</a>
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

		#Zomervakantie {
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
