<script lang="ts">
	import { title } from "$lib/script/meta";
	import { query } from "$lib/script/search";
	import { onMount } from "svelte";
	import { page } from "$app/stores";
	import { browser } from "$app/environment";

	onMount(() => {
		if (browser) {
			const parameters = browser && $page.url.searchParams;
			if (parameters?.has("naar")) {
				query.set(parameters.get("naar") as string);
				title.set(`Jongerenraad Zutphen | Zoek naar "${$query}"`);
			} else {
				title.set("Jongerenraad Zutphen | Zoek");
			}
		}
	});
</script>
