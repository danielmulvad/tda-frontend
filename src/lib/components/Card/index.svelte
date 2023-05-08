<script lang="ts">
	import Box from '$lib/components/Box/index.svelte';
	export let padding: number = 1;
	export let margin: number = 0;
	export let borderRadius: number = 0.5;
	export let style = '';
</script>

<Box {padding} {margin} {borderRadius} style="background: var(--card); border: calc(var(--scale) / 16) solid var(--border); box-shadow: var(--card-shadow); color: var(--card-foreground); {style}">
	<slot />
</Box>
