<script lang="ts">
	import { goto } from '$app/navigation';
	import { signupMutation } from '$lib/api/mutations';
	import Button from '$lib/components/Button/index.svelte';
	import LoginCard from '$lib/components/Card/LoginCard/index.svelte';
	import Typography from '$lib/components/Typography/index.svelte';
	import EmailPasswordForm from '$lib/components/forms/EmailPasswordForm.svelte';
	import { z } from 'zod';

	const submitFormSchema = z.object({
		email: z.string().email(),
		password: z.string().min(8)
	});

	const signup = signupMutation({
		onSuccess: () => {
			goto('/login');
		}
	});

	const handleSubmit = (event: Event) => {
		const form = event.target as HTMLFormElement;
		const data = new FormData(form);
		const value = Object.fromEntries(data.entries());
		const validatedValues = submitFormSchema.safeParse(value);
		if (!validatedValues.success) {
			return;
		}
		$signup.mutate(validatedValues.data);
	};

	const handleLogin = () => {
		goto('/login');
	};
</script>

<div class="root">
	<LoginCard>
		<Typography variant="lg">Sign Up</Typography>
		<EmailPasswordForm on:submit={handleSubmit}>Sign Up</EmailPasswordForm>
		<Button color="secondary" disabled={$signup.isLoading} fullWidth on:click={handleLogin}>Login</Button>
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
