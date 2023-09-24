<script>
	import "$lib/style/mdsvex.scss";
	import mermaid from "mermaid";
	import { onMount } from "svelte";

	export let title;
	export let author;
	export let date;

	let dateFormatted = new Date(date).toLocaleDateString("nl-NL", {
		weekday: "long",
		day: "numeric",
		month: "long",
		year: "numeric"
	});

	onMount(() => {
		mermaid.initialize({
			startOnLoad: false,
			securityLevel: "loose",
			theme: "forest",
			themeVariables: {
				fontFamily: "Lextrall Variable, Lexend Variable, sans-serif"
			}
		});

		if (document.readyState === "complete") {
			mermaid.run();
		} else {
			window.addEventListener("load", () => mermaid.run());
		}
	});
</script>

<h1>Fallback: {title}</h1>
<p class="date">on: {dateFormatted}</p>
<p class="date">by: {author}</p>
<slot />
