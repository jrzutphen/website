<script lang="ts">
	import IconMagnifyingGlass from "~icons/heroicons/magnifying-glass-20-solid";
	import IconXMark from "~icons/heroicons/x-mark-20-solid";
	// import IconDocumentMagnifyingGlass from "~icons/heroicons/document-magnifying-glass-solid";
</script>

<div>
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
	</form>
	<div id="backdrop" />
</div>

<section id="search-results">
	<p role="status">Type om te zoeken</p>
	<ul>
		<!-- <li>
			<a href="/artikel-1">
				<figure>
					<IconDocumentMagnifyingGlass />
				</figure>
				<article>
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
		<li>
			<a href="/artikel-2">
				<figure>
					<IconDocumentMagnifyingGlass />
				</figure>
				<article>
					<h1>Artikel 2</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Quisquam, voluptatum.
					</p>
					<div />
				</article>
			</a>
		</li>
		<li>
			<a href="/artikel-3">
				<figure>
					<IconDocumentMagnifyingGlass />
				</figure>
				<article>
					<h1>Artikel 3</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Quisquam, voluptatum.
					</p>
					<div>
						<span>Tag 2</span>
					</div>
				</article>
			</a>
		</li>
		<li>
			<a href="/artikel-3">
				<figure>
					<IconDocumentMagnifyingGlass />
				</figure>
				<article>
					<h1>Artikel 3</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Quisquam, voluptatum.
					</p>
					<div>
						<span>Tag 2</span>
					</div>
				</article>
			</a>
		</li>
		<li>
			<a href="/artikel-3">
				<figure>
					<IconDocumentMagnifyingGlass />
				</figure>
				<article>
					<h1>Artikel 3</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Quisquam, voluptatum.
					</p>
					<div>
						<span>Tag 2</span>
					</div>
				</article>
			</a>
		</li>
		<li>
			<a href="/artikel-3">
				<figure>
					<IconDocumentMagnifyingGlass />
				</figure>
				<article>
					<h1>Artikel 3</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Quisquam, voluptatum.
					</p>
					<div>
						<span>Tag 2</span>
					</div>
				</article>
			</a>
		</li>
		<li>
			<a href="/artikel-3">
				<figure>
					<IconDocumentMagnifyingGlass />
				</figure>
				<article>
					<h1>Artikel 3</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Quisquam, voluptatum.
					</p>
					<div>
						<span>Tag 2</span>
					</div>
				</article>
			</a>
		</li>
		<li>
			<a href="/artikel-3">
				<figure>
					<IconDocumentMagnifyingGlass />
				</figure>
				<article>
					<h1>Artikel 3</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Quisquam, voluptatum.
					</p>
					<div>
						<span>Tag 2</span>
						<span>Tag 2</span>
						<span>Tag 2</span>
						<span>Tag 2</span>
						<span>Tag 2</span>
						<span>Tag 2</span>
						<span>Tag 2</span>
						<span>Tag 2</span>
						<span>Tag 2</span>
						<span>Tag 2</span>
						<span>Tag 2</span>
						<span>Tag 2</span>
						<span>Tag 2</span>
						<span>Tag 2</span>
					</div>
				</article>
			</a>
		</li>
		<li>
			<a href="/artikel-3">
				<figure>
					<IconDocumentMagnifyingGlass />
				</figure>
				<article>
					<h1>Artikel 3</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Quisquam, voluptatum.
					</p>
					<div>
						<span>Tag 2</span>
					</div>
				</article>
			</a>
		</li> -->
	</ul>
</section>

<style lang="scss">
	@use "sass:color";
	@use "$lib/style/variable";
	@use "$lib/style/mixin";

	$focusWidth: 80vw;
	$height: 3rem;
	$focusHeight: 3rem;
	$focusButtonPadding: calc(($focusHeight - 1.2 * 1rem) / 2);
	$inputHorizontalPadding: calc(2 * $focusButtonPadding + 1.2 * 1rem);

	div {
		form {
			position: relative;
			width: 100%;
			height: $height;
			line-height: 1.2;
			z-index: 11;

			@include mixin.media-to(md) {
				width: 100%;
			}

			@include mixin.media-from(md) {
				width: 12rem;
			}

			button {
				z-index: 13;

				position: absolute;
				top: 0;
				width: $focusHeight;
				height: $focusHeight;
				padding: $focusButtonPadding;
				margin: 0;

				border: none;
				background: none;
				fill: variable.$color-dark;
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

				z-index: 12;

				position: absolute;
				left: 0;
				top: 0;
				width: 100%;
				height: 100%;
				padding: 0.5rem $inputHorizontalPadding;

				outline: none;
				border: none;
				border-radius: 0.5rem;
				background: variable.$color-light-accent;

				&::placeholder {
					color: variable.$color-dark;
				}
			}
		}

		#backdrop {
			z-index: 10;

			position: fixed;
			top: 0;
			left: 0;
			width: 100vw;
			height: 100vh;

			opacity: 0;
			pointer-events: none;

			transition: opacity 400ms ease-in-out;
		}

		&:focus-within {
			form {
				position: fixed;

				top: calc(2rem + (3rem - $focusHeight) / 2);
				left: calc((100vw - $focusWidth) / 2);
				width: $focusWidth;
				max-width: 100vw;
				height: $focusHeight;

				transform: scaleX(0);
				transform-origin: center right;
				animation: scaleSearch 400ms ease-in-out forwards;

				@keyframes scaleSearch {
					0% {
						transform: scaleX(0);
					}
					100% {
						transform: scaleX(1);
					}
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
					padding: 0.5rem $inputHorizontalPadding;

					animation: roundCorners 400ms ease-in-out forwards;

					@keyframes roundCorners {
						0% {
							border-radius: 0.5rem;
						}
						100% {
							border-radius: 0.5rem 0.5rem 0 0;
						}
					}

					&::placeholder {
						visibility: hidden;
					}
				}
			}

			#backdrop {
				background: rgba(0, 0, 0, 0.5);
				opacity: 1;
			}

			~ #search-results {
				display: block;

				transform: scaleY(0);
				transform-origin: top center;
				animation: scaleResults 400ms ease-in-out 350ms forwards;

				@keyframes scaleResults {
					0% {
						transform: scaleY(0);
					}
					80% {
						transform: scaleY(1.05);
					}
					100% {
						transform: scaleY(1);
					}
				}
			}
		}
	}

	#search-results {
		z-index: 12;

		display: none;
		position: fixed;
		left: calc((100vw - $focusWidth) / 2);
		top: calc(2rem + (3rem + $focusHeight) / 2);
		width: $focusWidth;

		border-radius: 0 0 0.5rem 0.5rem;

		overflow: auto;

		p[role="status"] {
			margin: 0;
			padding: 0.5rem $inputHorizontalPadding;
			font-weight: variable.$font-weight-light;
			font-size: 0.8rem;
			background: variable.$color-light;
			color: variable.$color-dark;
		}

		ul {
			position: relative;
			width: 100%;
			line-height: 1.2;
			overflow: auto;
			max-height: calc(85vh - 2 * 0.5rem - 0.8rem);

			background: variable.$color-light-accent;

			li {
				a {
					display: flex;
					flex-direction: row;

					text-decoration: none;
					color: variable.$color-dark;
					padding: 0.5rem 0;

					&:hover {
						background: variable.$color-accent;
					}

					figure {
						width: $focusHeight;
						height: $focusHeight;
						padding: $focusButtonPadding;
					}

					article {
						position: relative;

						display: flex;
						flex-direction: column;

						h1 {
							height: $focusHeight;
							padding: $focusButtonPadding 0;
						}

						p {
							font-weight: variable.$font-weight-regular;
						}

						div {
							margin: 1rem 0;
							display: flex;
							flex-wrap: wrap;
							flex-direction: row;
							gap: 1rem;

							span {
								background: variable.$color-light;
								padding: 0.5rem 1rem;
								box-shadow: 0.5rem 0.5rem 0 variable.$color-dark;
							}
						}
					}
				}
			}
		}
	}
</style>
