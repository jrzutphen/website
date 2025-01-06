<script module lang="ts">
import type { Snippet } from "svelte";
interface Props {
	children: Snippet;
}
</script>

<script lang="ts">
/* TODO 3 (see deno.jsonc)
import { i18n } from "$lib/i18n";
import { ParaglideJS } from "@inlang/paraglide-sveltekit";
*/

const { children }: Props = $props();
</script>

<!-- TODO 3 (see deno.jsonc)
<ParaglideJS {i18n}>
	{@render children()}
</ParaglideJS>
-->
{@render children()}
