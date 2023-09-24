<script lang="ts">
	import type { WebsiteCarbonResponse } from "$lib/script/websitecarbon";
	import { getWebsiteCarbon } from "$lib/script/websitecarbon";
	import { onMount } from "svelte";

	let websiteCarbon: Promise<WebsiteCarbonResponse>;

	onMount(() => {
		websiteCarbon = getWebsiteCarbon("https://wttr.in");
	});
</script>

<h1>Welcome to SvelteKit</h1>
<p>
	Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<em>Italic text</em>
<div style="font-weight: 100">Increasingly bolder text</div>
<div style="font-weight: 150">Increasingly bolder text</div>
<div style="font-weight: 200">Increasingly bolder text</div>
<div style="font-weight: 250">Increasingly bolder text</div>
<div style="font-weight: 300">Increasingly bolder text</div>
<div style="font-weight: 350">Increasingly bolder text</div>
<div style="font-weight: 400">Increasingly bolder text</div>
<div style="font-weight: 450">Increasingly bolder text</div>
<div style="font-weight: 500">Increasingly bolder text</div>
<div style="font-weight: 550">Increasingly bolder text</div>
<div style="font-weight: 600">Increasingly bolder text</div>
<div style="font-weight: 650">Increasingly bolder text</div>
<div style="font-weight: 700">Increasingly bolder text</div>
<div style="font-weight: 750">Increasingly bolder text</div>
<div style="font-weight: 800">Increasingly bolder text</div>
<div style="font-weight: 850">Increasingly bolder text</div>
<div style="font-weight: 900">Increasingly bolder text</div>
<div style="font-weight: 950">Increasingly bolder text</div>
<div style="font-weight: 1000">Increasingly bolder text</div>

<p style="padding: 5rem;">
	Welkom op onze website. Hier vind je informatie over vrij weinig, maar het
	is wel gezellig. Wist je dat deze tekst in een paragraaf staat? Het is
	geschreven in <abbr title="Hypertext Markup Language">HTML</abbr>. Deze taal
	wordt gebruikt om webpagina's te maken. Het is bedacht in 1990.
</p>

{#await websiteCarbon}
	<p>...waiting</p>
{:then response}
	<p>The response is {JSON.stringify(response)}</p>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
