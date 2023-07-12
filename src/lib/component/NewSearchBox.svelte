<script lang="ts">
	import IconMagnifyingGlass from "~icons/heroicons/magnifying-glass-20-solid";
	import IconXMark from "~icons/heroicons/x-mark-20-solid";
	import IconDocumentMagnifyingGlass from "~icons/heroicons/document-magnifying-glass-solid";
</script>

<form role="search" action="/zoek" method="GET">
	<button type="submit" aria-label="Zoek">
		<IconMagnifyingGlass />
	</button>
	<input
		type="search"
		id="query"
		name="naar"
		placeholder="Zoek…"
		aria-label="Zoek door de website content"
		autocorrect="off"
		autocapitalize="none"
		autocomplete="off"
		spellcheck="false"
	/>
	<button type="reset" aria-label="Wis zoekopdracht">
		<IconXMark />
	</button>

	<div id="backdrop" />
</form>

<section id="search-results">
	<p role="status">Type om te zoeken</p>
	<ul>
		<li>
			<a href="/artikel-1">
				<article>
					<figure>
						<IconDocumentMagnifyingGlass />
					</figure>
					<h1>Artikel 1</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Quisquam, voluptatum.
					</p>
					<div>
						<span>Tag 1</span><span>Tag 2</span>
					</div>
				</article>
			</a>
		</li>
		<li>Example result 2</li>
		<li>Example result 3</li>
		<li>Example result 4</li>
		<li>Example result 5</li>
	</ul>
</section>

<style lang="scss">
	@use "sass:color";
	@use "$lib/style/variable";

	$focusWidth: 80vw;
	$height: calc(1.2 * 1rem + 2 * 0.5rem);
	$focusHeight: 3rem;
	$focusButtonPadding: calc(($focusHeight - 1.2 * 1rem) / 2);
	$inputHorizontalPadding: calc(2 * $focusButtonPadding + 1.2 * 1rem);

	form {
		position: relative;
		width: 100%;
		height: $height;
		line-height: 1.2;

		#backdrop {
			z-index: 1;

			position: fixed;
			top: 0;
			left: 0;
			width: 100vw;
			height: 100vh;

			opacity: 0;
			pointer-events: none;
		}

		button {
			z-index: 3;

			position: absolute;
			top: 0;
			width: $height;
			height: $height;
			margin: 0;
			padding: 0.5rem;

			border: none;
			background: none;
			fill: variable.$color-text;
			cursor: pointer;

			&[type="submit"] {
				left: 0;
			}

			&[type="reset"] {
				right: 0;

				opacity: 0;
			}
		}

		input {
			// Hide the default Chromium clear button
			&::-webkit-search-cancel-button,
			&::-webkit-search-decoration {
				-webkit-appearance: none;
				appearance: none;
			}

			z-index: 2;

			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			padding: 0.5rem 2.5rem;

			outline: none;
			border: none;
			border-radius: 0.5rem;
			background: color.adjust(
				variable.$color-background,
				$blackness: +10%
			);

			&::placeholder {
				color: variable.$color-text;
			}
		}

		&:focus-within {
			position: fixed;

			top: calc(2rem + (3rem - $focusHeight) / 2);
			left: calc((100vw - $focusWidth) / 2);
			width: $focusWidth;
			height: $focusHeight;

			#backdrop {
				background: rgba(0, 0, 0, 0.5);
				opacity: 1;
			}

			button {
				width: $focusHeight;
				height: $focusHeight;
				padding: $focusButtonPadding;

				&[type="reset"] {
					opacity: 1;
				}
			}

			input {
				box-shadow: 0 0 0.5rem variable.$color-text;

				border-radius: 0.5rem 0.5rem 0 0;
				padding: 0.5rem $inputHorizontalPadding;

				&::placeholder {
					visibility: hidden;
				}
			}

			~ #search-results {
				display: block;
			}
		}
	}

	#search-results {
		z-index: 2;

		display: none;
		position: fixed;
		left: calc((100vw - $focusWidth) / 2);
		top: calc(2rem + (3rem + $focusHeight) / 2);
		width: $focusWidth;

		border-radius: 0 0 0.5rem 0.5rem;

		p[role="status"] {
			margin: 0;
			padding: 0.5rem $inputHorizontalPadding;
			// font-weight: 300;
			font-size: 0.8rem;
			background: variable.$color-background;
			color: variable.$color-text;
		}

		ul {
			position: relative;
			width: 100%;
			line-height: 1.2;

			background: color.adjust(
				variable.$color-background,
				$blackness: +10%
			);

			li {
				a {
					display: block;

					text-decoration: none;
					color: variable.$color-text;

					&:hover {
						background: color.adjust(
							variable.$color-background,
							$blackness: +20%
						);
					}

					article {
						position: relative;

						display: flex;
						flex-direction: column;

						padding: 0.5rem $inputHorizontalPadding;
					}
				}
			}
		}
	}
</style>
