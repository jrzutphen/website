<script lang="ts">
	import { query } from "$lib/script/search";
	import { onMount } from "svelte";
	import { page } from "$app/stores";

	onMount(() => {
		query.set($page.data.query);
	});
</script>
