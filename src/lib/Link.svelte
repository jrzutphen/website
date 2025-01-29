<script module lang="ts">
interface Properties {
	text: string;
	href: string;
}
</script>

<script lang="ts">
const { text, href, ...additionalProperties }: Properties = $props();
</script>

<a href={href} {...additionalProperties}>{text}</a>
