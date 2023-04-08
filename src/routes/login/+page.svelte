<script lang="ts">
	import LoginButton from '$lib/components/Button/LoginButton/index.svelte';
</script>

<div class="root">
	<LoginButton />
</div>

<style lang="scss">
	@import '$lib/theme.scss';
	.root {
		display: flex;
		justify-content: center;
		align-items: center;
		height: calc(100vh - $navbar-height);
	}
</style>
