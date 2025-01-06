<script module lang="ts">
interface Properties {
	text: string;
	href: string;
}
</script>

<script lang="ts">
const { text, href }: Properties = $props();
</script>

<a href={href}>{text}</a>
