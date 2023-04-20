<script lang="ts">
	export let href: string;
</script>

<a {href}><slot /></a>

<style lang="scss">
	a {
		color: var(--foreground);
		text-decoration: none;
	}
</style>
