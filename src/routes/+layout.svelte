<script lang="ts">
	import { title, description, url } from "$lib/script/meta";
	import "../app.scss";
	import "prism-themes/themes/prism-darcula.css";
	import "katex/dist/katex.css";
	import "@fortawesome/fontawesome-free/css/all.css";
	import { assets } from "$app/paths";
	import Header from "./Header.svelte";
	import { onMount } from "svelte";
	import { browser } from "$app/environment";
	import DarkMode from "$lib/script/DarkMode";
	import BottomNavigation from "./BottomNavigation.svelte";
	import Footer from "./Footer.svelte";

	const metaAlt = `
    	Een zonnige, drukke dag aan de IJsselkade in Zutphen.
		Bovenaan staat de tekst 'Jongerenraad Zutphen',
		met daaronder 'Zutphen beter, mooier en leuker, voor en door jongeren'.
		Foto © Pieter Kers.
    	`.replace(/\s+/g, " ");

	onMount(() => {
		DarkMode.initialise();

		if (browser) {
			url.set(window.location.href);
		}
	});
</script>

<svelte:head>
	<!-- Common meta tags -->
	<title>{$title}</title>
	<meta name="title" content={$title} />
	<meta name="description" content={$description} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="nl_NL" />
	<meta property="og:url" content={$url} />
	<meta property="og:site_name" content="Jongerenraad Zutphen" />
	<meta property="og:title" content={$title} />
	<meta property="og:description" content={$description} />
	<meta property="og:image" content="{assets}/asset/picture/meta.jpg" />
	<meta property="og:image:type" content="image/jpeg" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="628" />
	<meta property="og:image:alt" content={metaAlt} />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={$url} />
	<meta property="twitter:title" content={$title} />
	<meta property="twitter:description" content={$description} />
	<meta property="twitter:image" content="{assets}/asset/picture/meta.jpg" />
	<meta property="twitter:image:alt" content={metaAlt} />

	<!-- Favicon -->
	<link
		rel="apple-touch-icon"
		sizes="180x180"
		href="{assets}/asset/favicon/apple-touch-icon.png"
	/>
	<link
		rel="icon"
		type="image/png"
		sizes="32x32"
		href="{assets}/asset/favicon/favicon-32x32.png"
	/>
	<link
		rel="icon"
		type="image/png"
		sizes="16x16"
		href="{assets}/asset/favicon/favicon-16x16.png"
	/>
	<link
		rel="mask-icon"
		href="{assets}/asset/favicon/safari-pinned-tab.svg"
		color="#f69865"
	/>
	<link rel="shortcut icon" href="{assets}/asset/favicon/favicon.ico" />
	<meta name="apple-mobile-web-app-title" content="Jongerenraad Zutphen" />
	<meta name="application-name" content="Jongerenraad Zutphen" />
	<meta name="msapplication-TileColor" content="#fcf5ec" />
	<meta name="theme-color" content="#fcf5ec" />

	<link rel="manifest" href="{assets}/asset/manifest/site.webmanifest" />
	<meta
		name="msapplication-config"
		content="{assets}/asset/msapplication/browserconfig.xml"
	/>
</svelte:head>

<Header />

<main>
	<slot />
</main>

<Footer />
<BottomNavigation />
