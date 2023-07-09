import { writable } from "svelte/store";
import { browser } from "$app/environment";
import { onMount } from "svelte";

export const title = writable("Jongerenraad Zutphen");
export const description = writable(
	"Zutphen beter, mooier en leuker, voor en door jongeren"
);
export const url = writable("https://nieuw.jrzutphen.nl");

onMount(() => {
	if (browser) {
		url.set(window.location.href);
	}
});
