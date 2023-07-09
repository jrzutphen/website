<script lang="ts">
	import "../app.scss";
	import { assets } from "$app/paths";
	import { page } from "$app/stores";

	const metaAlt = `
    Een zonnige, drukke dag aan de IJsselkade in Zutphen. Bovenaan staat de tekst 'Jongerenraad Zutphen', met daaronder 'Zutphen beter, mooier en leuker, voor en door jongeren'. Foto © Pieter Kers.
    `.trim();

	$: page.subscribe((page) => {
		console.log(page.data);
	});
</script>

<svelte:head>
	<!-- Common meta tags -->
	<title>Jongerenraad Zutphen</title>
	<meta name="title" content={$page.data.meta?.title} />
	<meta name="description" content={$page.data.meta?.description} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="nl_NL" />
	<meta property="og:url" content={$page.data.meta?.url} />
	<meta property="og:site_name" content="Jongerenraad Zutphen" />
	<meta property="og:title" content={$page.data.meta?.title} />
	<meta property="og:description" content={$page.data.meta?.description} />
	<meta property="og:image" content="{assets}/asset/picture/meta.jpg" />
	<meta property="og:image:type" content="image/jpeg" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="628" />
	<meta property="og:image:alt" content={metaAlt} />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={$page.data.meta?.url} />
	<meta property="twitter:title" content={$page.data.meta?.title} />
	<meta property="twitter:description" content={$page.data.meta?.description} />
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
	<link rel="manifest" href="{assets}/asset/favicon/site.webmanifest" />
	<link rel="mask-icon" href="{assets}/asset/favicon/safari-pinned-tab.svg" color="#f69865" />
	<link rel="shortcut icon" href="{assets}/asset/favicon/favicon.ico" />
	<meta name="apple-mobile-web-app-title" content="Jongerenraad Zutphen" />
	<meta name="application-name" content="Jongerenraad Zutphen" />
	<meta name="msapplication-TileColor" content="#fcf5ec" />
	<meta name="msapplication-config" content="{assets}/asset/favicon/browserconfig.xml" />
	<meta name="theme-color" content="#fcf5ec" />
</svelte:head>

<slot />
