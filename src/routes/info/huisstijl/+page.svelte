<iframe
	title="Jongerenraad Zutphen brandbook"
	src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fz2Q8jzEWpchLw0lmHNxmWu%2FJongerenraad-Sketchbook%3Fpage-id%3D830%253A2%26type%3Ddesign%26node-id%3D832-30%26viewport%3D191%252C434%252C0.47%26t%3DjYMRIzlmf5pL6zGG-1%26scaling%3Dcontain%26starting-point-node-id%3D832%253A30%26mode%3Ddesign%26hide-ui%3D1"
	allowfullscreen
></iframe>

Gebruik je pijltoetsen om door het brandbook te navigeren. Druk op <kbd>R</kbd> om
opnieuw te beginnen.

<style lang="scss">
	@use "$lib/style/breakpoint";

	iframe {
		$page-width: calc(100dvw - 2rem * 2);
		width: $page-width;
		height: $page-width;

		border: none;

		@include breakpoint.from(md) {
			$page-width: min(50rem, 80dvw);
			width: $page-width;
			height: $page-width;
		}
	}
</style>
