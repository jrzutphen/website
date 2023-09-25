<script lang="ts">
	import Logo from "$lib/asset/Logo.svg";
	import Instagram from "~icons/mdi/instagram";
	import LinkedIn from "~icons/mdi/linkedin";
	import Location from "~icons/heroicons/map-pin-20-solid";
	import Email from "~icons/heroicons/envelope-20-solid";
	import Phone from "~icons/heroicons/phone-20-solid";
</script>

<footer>
	<section id="top">
		<section id="description">
			<a href="/" aria-label="Jongerenraad Zutphen" aria-current="page">
				<img alt="Het logo van de Jongerenraad Zutphen" src={Logo} />
			</a>

			<h1>Jongerenraad Zutphen</h1>
			<p>
				<span>Wij vergroten de impact van jongeren</span>
				<span>door hun stem krachtig te laten klinken,</span>
				<span>voor positieve transformatie in Zutphen</span>
			</p>
			<ul>
				<li>
					<a href="//instagram.com/jrzutphen">
						<Instagram />
					</a>
				</li>
				<li>
					<a href="//linkedin.com/company/jrzutphen">
						<LinkedIn />
					</a>
				</li>
			</ul>
		</section>
		<section id="contact">
			<ul>
				<li>
					<!-- TODO add link to Google Maps -->
					<a href="//maps.google.com" class="disabled">
						<figure>
							<Location />
						</figure>
						<p>
							<span>Jongerenraad Zutphen</span>
							<span>Wilhelminastraat 54-12</span>
							<span>7511 DP Enschede</span>
						</p>
					</a>
				</li>
				<li>
					<a href="mailto:info@jrzutphen.nl">
						<figure>
							<Email />
						</figure>
						<p>info@jrzutphen.nl</p>
					</a>
				</li>
				<li>
					<a href="tel:+31-6-17-544-554">
						<figure>
							<Phone />
						</figure>
						<p>+31 6 17 544 554</p>
					</a>
				</li>
			</ul>
		</section>
	</section>
	<section id="bottom">
		<section id="copyright">
			<a href="/licentie">
				<span>© 2021 Jongerenraad Zutphen</span>
				<span>— geen rechten voorbehouden</span>
			</a>
		</section>
		<section id="statements">
			<a href="/" class="disabled">Schoon en duurzaam</a>
			<a href="/" class="disabled">Privacy statement</a>
		</section>
	</section>
</footer>

<style lang="scss">
	@use "$lib/style/variable";
	@use "$lib/style/breakpoint";
	@use "$lib/style/font-weight";

	footer {
		display: flex;
		flex-direction: column;

		margin-bottom: 5.25rem;

		@include breakpoint.from(md) {
			margin-bottom: 0;
		}
		> section {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			padding: 2rem calc((100dvw - 25rem) / 2);
			justify-content: space-evenly;

			@include breakpoint.from(md) {
				flex-direction: row;
				align-items: flex-end;
				padding: 2rem;
			}

			@media screen and (min-width: 100rem) {
				$padding: calc((100dvw - 100rem) / 2);
				padding-left: $padding !important;
				padding-right: $padding !important;
			}

			&#top {
				gap: 2rem;
				background: variable.$color-light-accent;

				section {
					flex: 1 1 0;
					max-width: 25rem;

					&#description {
						a {
							display: block;
							height: 4rem;
							width: 4rem;
							padding: 0.5rem;

							:global(svg) {
								height: 100%;
								width: 100%;
							}
						}

						h1 {
							font-size: 1rem;
							@include font-weight.value(semi-bold, false);
						}

						p {
							font-size: 1rem;

							span {
								display: inline-block;
							}
						}

						ul {
							display: flex;
							flex-direction: row;
							gap: 0;
							list-style: none;
							padding: 0;
							margin-top: 1rem;

							li {
								a {
									display: block;
									height: 2.5rem;
									width: 2.5rem;

									padding: 0.25rem;
									color: variable.$color-dark;
									transition:
										padding 200ms ease-in-out,
										color 200ms ease-in-out;

									:global(svg) {
										height: 100%;
										width: 100%;
									}

									&:hover {
										padding: 0;
									}
								}

								&:nth-child(odd) {
									a:hover {
										color: variable.$color-primary;
									}
								}

								&:nth-child(even) {
									a:hover {
										color: variable.$color-secondary;
									}
								}
							}
						}
					}

					&#contact {
						ul {
							display: flex;
							flex-direction: column;
							gap: 0;
							list-style: none;
							padding: 0;
							margin-top: 1rem;

							li {
								a {
									display: flex;
									flex-direction: row;
									align-items: flex-start;
									gap: 0.5rem;
									padding: 0;
									width: fit-content;

									text-decoration: none;
									color: variable.$color-dark;
									transition: color 200ms ease-in-out;

									figure {
										width: 2rem;
										height: 2rem;
										padding: 0.25rem;
										transition: padding 200ms ease-in-out;

										:global(svg) {
											height: 100%;
											width: 100%;
										}
									}

									p {
										display: flex;
										flex-direction: column;
										gap: 0rem;

										line-height: 2rem;

										span {
											&:first-of-type {
												margin-top: 0.25rem;
											}

											&:last-of-type {
												margin-bottom: 0.25rem;
											}

											display: block;
											line-height: 1.5rem;
										}
									}

									&:hover {
										color: variable.$color-accent;

										figure {
											padding: 0;
										}
									}
								}
							}
						}
					}
				}
			}

			&#bottom {
				gap: 1rem;
				background: variable.$color-dark;
				padding: 1rem;

				@include breakpoint.from(md) {
					padding: 0.25rem 1rem;
				}

				section {
					&#copyright {
						flex: 1 1 0;

						a {
							text-decoration: none;
							color: variable.$color-light;
							transition: color 200ms ease-in-out;

							&:hover {
								color: variable.$color-accent;
							}

							display: flex;
							flex-direction: column;
							gap: 0rem;

							@include breakpoint.from(lg) {
								display: inline-block;
							}

							span {
								display: inline-block;

								&:not(:first-of-type) {
									margin-left: 1em;

									@include breakpoint.from(lg) {
										margin-left: 0;
									}
								}
							}
						}
					}

					&#statements {
						flex: 0 1 auto;

						display: flex;
						flex-direction: column;
						gap: 0rem;
						list-style: none;
						padding: 0;

						@include breakpoint.from(lg) {
							flex-direction: row;
							align-items: center;
							justify-content: space-between;
							gap: 1rem;
						}

						a {
							text-decoration: none;
							color: variable.$color-light;
							transition: color 200ms ease-in-out;

							&:hover {
								color: variable.$color-accent;
							}
						}
					}
				}
			}
		}
	}
</style>
