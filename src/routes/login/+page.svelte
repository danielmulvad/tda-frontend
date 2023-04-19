<script lang="ts">
	import { goto } from '$app/navigation';
	import { loginMutation } from '$lib/api/mutations';
	import Button from '$lib/components/Button/index.svelte';
	import LoginCard from '$lib/components/Card/LoginCard/index.svelte';
	import Typography from '$lib/components/Typography/index.svelte';
	import EmailPasswordForm from '$lib/components/forms/EmailPasswordForm.svelte';
	import { derived, writable } from 'svelte/store';
	import { z } from 'zod';

	const submitFormSchema = z.object({
		email: z.string().email(),
		password: z.string()
	});

	const login = loginMutation({
		onSuccess: () => {
			goto('/');
		}
	});
	const username = writable('');
	const password = writable('');

	const handleSubmit = (event: Event) => {
		const form = event.target as HTMLFormElement;
		const data = new FormData(form);
		const value = Object.fromEntries(data.entries());
		const validatedValues = submitFormSchema.safeParse(value);
		if (!validatedValues.success) {
			return;
		}
		$login.mutate(validatedValues.data);
	};

	const handleSignUp = () => {
		goto('/signup');
	};

	const buttonDisabled = derived([login, username, password], ([{ isLoading }, username, password]) => isLoading || username.length === 0 || password.length === 0);
</script>

<div class="root">
	<LoginCard>
		<Typography variant="lg">Login</Typography>
		<EmailPasswordForm {buttonDisabled} {username} {password} showTurnstile={false} on:submit={handleSubmit}>Login</EmailPasswordForm>
		<Button color="secondary" fullWidth on:click={handleSignUp}>Sign Up</Button>
	</LoginCard>
</div>

<style lang="scss">
	.root {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}
</style>
