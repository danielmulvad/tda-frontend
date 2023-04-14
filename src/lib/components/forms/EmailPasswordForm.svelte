<script>
	import Button from '$lib/components/Button/index.svelte';
	import Input from '$lib/components/Input/index.svelte';
</script>

<form on:submit|preventDefault|trusted>
	<Input name="email" type="email" autocomplete="username" placeholder="Email" />
	<Input name="password" type="password" autocomplete="current-password" placeholder="Password" />
	<Button type="submit"><slot /></Button>
</form>

<style lang="scss">
	@import '$lib/theme.scss';
	form {
		display: flex;
		flex-direction: column;
		row-gap: 1rem;
		width: 100%;
	}
</style>
