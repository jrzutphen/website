<script lang="ts" context="module">
	export enum Variant {
		Who,
		What,
		Docs,
		Info
	}
</script>

<script lang="ts">
	import IconBoard from "~icons/heroicons/users-solid";
	import IconMembers from "~icons/heroicons/user-group-solid";
	import IconBecomeMember from "~icons/heroicons/user-plus-solid";
	import IconThemes from "~icons/heroicons/globe-europe-africa-solid";
	import IconNews from "~icons/heroicons/newspaper-solid";
	import IconTimeline from "~icons/heroicons/clock-solid";
	import IconAdvices from "~icons/heroicons/chat-bubble-bottom-center-text-solid";
	import IconRules from "~icons/heroicons/document-text-solid";
	import IconLegal from "~icons/heroicons/scale-solid";
	import IconFAQ from "~icons/heroicons/question-mark-circle-solid";
	import IconCorporateIdentity from "~icons/heroicons/paint-brush-solid";
	import IconContact from "~icons/heroicons/chat-bubble-left-right-solid";

	export let variant: Variant;
</script>

{#if variant === Variant.Who}
	<li id="wie">
		<a href="/wie">Wie</a>
		<nav aria-label="Subnavigatie: Wie">
			<div />
			<ul>
				<li>
					<a href="/wie/bestuur">
						<figure>
							<IconBoard />
						</figure>
						<div>
							<h1>Bestuur</h1>
							<p>Huidige en voormalige bestuursleden</p>
						</div>
					</a>
				</li>
				<li>
					<a href="/wie/leden">
						<figure>
							<IconMembers />
						</figure>
						<div>
							<h1>Leden</h1>
							<p>Huidige en voormalige leden</p>
						</div>
					</a>
				</li>
				<li>
					<a href="/wie/lid-worden">
						<figure>
							<IconBecomeMember />
						</figure>
						<div>
							<h1>Lid worden</h1>
							<p>Informatie over lid worden</p>
						</div>
					</a>
				</li>
			</ul>
		</nav>
	</li>
{:else if variant === Variant.What}
	<li id="wat">
		<a href="/wat">Wat</a>
		<nav aria-label="Subnavigatie: Wat">
			<div />
			<ul>
				<li>
					<a href="/wat/themas">
						<figure>
							<IconThemes />
						</figure>
						<div>
							<h1>Thema's</h1>
							<p>Wat wij belangrijk vinden</p>
						</div>
					</a>
				</li>
				<li>
					<a href="/wat/nieuws">
						<figure>
							<IconNews />
						</figure>
						<div>
							<h1>Nieuws</h1>
							<p>Onze laatste updates</p>
						</div>
					</a>
				</li>
				<li>
					<a href="/wat/tijdlijn">
						<figure>
							<IconTimeline />
						</figure>
						<div>
							<h1>Tijdlijn</h1>
							<p>Wat wij gedaan hebben</p>
						</div>
					</a>
				</li>
			</ul>
		</nav>
	</li>
{:else if variant === Variant.Docs}
	<li id="docs">
		<a href="/docs">Docs</a>
		<nav aria-label="Subnavigatie: Docs">
			<div />
			<ul>
				<li>
					<a href="/docs/adviezen">
						<figure>
							<IconAdvices />
						</figure>
						<div>
							<h1>Adviezen</h1>
							<p>Onze uitgebrachte adviezen</p>
						</div>
					</a>
				</li>
				<li>
					<a href="/docs/regels">
						<figure>
							<IconRules />
						</figure>
						<div>
							<h1>Regels</h1>
							<p>Onze statuten en reglementen</p>
						</div>
					</a>
				</li>
				<li>
					<a href="/docs/legaal">
						<figure>
							<IconLegal />
						</figure>
						<div>
							<h1>Legaal</h1>
							<p>Onze jaarrapporten en -begrotingen</p>
						</div>
					</a>
				</li>
			</ul>
		</nav>
	</li>
{:else if variant === Variant.Info}
	<li id="info">
		<a href="/info">Info</a>
		<nav aria-label="Subnavigatie: Info">
			<div />
			<ul>
				<li>
					<a href="/info/faq">
						<figure>
							<IconFAQ />
						</figure>
						<div>
							<h1>FAQ</h1>
							<p>Veelgestelde vragen</p>
						</div>
					</a>
				</li>
				<li>
					<a href="/info/huisstijl">
						<figure>
							<IconCorporateIdentity />
						</figure>
						<div>
							<h1>Huisstijl</h1>
							<p>Onze kleuren en vormen</p>
						</div>
					</a>
				</li>
				<li>
					<a href="/info/contact">
						<figure>
							<IconContact />
						</figure>
						<div>
							<h1>Contact</h1>
							<p>Contact- en bedrijfsgegevens</p>
						</div>
					</a>
				</li>
			</ul>
		</nav>
	</li>
{/if}

<style lang="scss">
	@use "sass:color";
	@use "$lib/style/variable";
	@use "$lib/style/breakpoint";

	li {
		position: relative;
		padding: 0.5rem;
		width: 4rem;
		text-align: center;

		a {
			font-size: 1rem;
			font-weight: variable.$font-weight-semibold;
			line-height: 1;
			color: variable.$color-dark;
			text-decoration: none;
			position: relative;
			z-index: 2;
		}

		nav {
			display: none;
			animation: scaleMenu 400ms ease-in-out forwards;
			transform-origin: center 1rem;
		}

		@keyframes scaleMenu {
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

		&:hover {
			$padding: 1rem;
			$offset: 0.5rem;

			@mixin nav-offset($index) {
				$offset: calc(1rem + #{$index} * 5rem);

				nav {
					left: calc(0.5rem - #{$padding} - #{$offset});

					> div {
						left: calc(#{$offset} + 0.5rem);
					}
				}
			}

			&#wie {
				@include nav-offset(0);
			}

			&#wat {
				@include nav-offset(1);
			}

			&#docs {
				@include nav-offset(2);
			}

			&#info {
				@include nav-offset(3);
			}

			nav {
				display: flex;
				flex-direction: column;
				gap: 0;
				position: absolute;
				z-index: 1;
				padding: $padding;
				top: calc(2rem - $padding);

				> div {
					width: 0;
					height: 0;
					border: 1rem solid transparent;
					border-top: 0;
					border-bottom: 1rem solid variable.$color-light-accent;
					display: inline-block;

					position: relative;
				}

				ul {
					list-style: none;

					display: flex;
					flex-direction: column;
					gap: 0.5rem;

					background: variable.$color-light-accent;
					padding: 2rem;
					border: 0.25rem solid variable.$color-light;
					box-shadow: 0.5rem 0.5rem 0 variable.$color-dark;

					li {
						padding: 0.5rem;
						width: fit-content;

						&:hover {
							a {
								figure {
									background: variable.$color-accent;
									// TODO: decide if we also change border
									// border-color: variable.$color-accent;
									box-shadow: 0.25rem 0.25rem 0
										variable.$color-dark-accent;
								}

								div {
									color: variable.$color-dark-accent;
								}
							}
						}

						a {
							display: flex;
							flex-direction: row;
							align-items: center;
							gap: 1rem;

							figure {
								background: variable.$color-light;
								transition:
									background-color 200ms ease-in-out,
									border-color 200ms ease-in-out,
									box-shadow 200ms ease-in-out;
								width: fit-content;
								height: fit-content;
								padding: 0.5rem;

								border: 0.125rem solid
									variable.$color-light-accent;
								box-shadow: 0.25rem 0.25rem 0
									variable.$color-dark;

								:global(svg) {
									width: 1.5rem;
									height: 1.5rem;
								}
							}

							div {
								color: variable.$color-dark;
								transition: color 200ms ease-in-out;
								display: flex;
								flex-direction: column;
								gap: 0.25rem;
								align-items: flex-start;

								h1 {
									font-weight: variable.$font-weight-semibold;
								}

								p {
									font-weight: variable.$font-weight-regular;
									white-space: nowrap;
								}
							}
						}
					}
				}
			}
		}
	}
</style>
