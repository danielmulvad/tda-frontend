<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$lib/components/Button/index.svelte';
	import LoginCard from '$lib/components/Card/LoginCard/index.svelte';
	import Typography from '$lib/components/Typography/index.svelte';
	import EmailPasswordForm from '$lib/components/forms/EmailPasswordForm.svelte';

	const handleSubmit = (event: Event) => {
		const form = event.target as HTMLFormElement;
		const data = new FormData(form);
		const value = Object.fromEntries(data.entries());
		console.log(value);
	};

	const handleLogin = () => {
		goto('/login');
	};
</script>

<div class="root">
	<LoginCard>
		<Typography variant="title">Sign Up</Typography>
		<EmailPasswordForm on:submit={handleSubmit}>Sign Up</EmailPasswordForm>
		<Button color="secondary" fullWidth on:click={handleLogin}>Login</Button>
	</LoginCard>
</div>

<style lang="scss">
	@import '$lib/theme.scss';
	.root {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}
</style>
