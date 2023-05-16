<script lang="ts">
	import { PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY } from '$env/static/public';
	import EyeRegular from '$lib/assets/svg/eye-regular.svg';
	import EyeSlashRegular from '$lib/assets/svg/eye-slash-regular.svg';
	import Button from '$lib/components/Button/index.svelte';
	import Input from '$lib/components/Input/index.svelte';
	import Turnstile from '$lib/components/Turnstile/index.svelte';
	import { derived, writable } from 'svelte/store';

	export let username = writable('');
	export let password = writable('');
	export let buttonDisabled = derived([username, password], ([u, p]) => u.length === 0 || p.length === 0);
	export let showTurnstile: boolean = true;

	const usernameTouched = writable(false);
	const passwordTouched = writable(false);
	const shouldRender = derived([usernameTouched, passwordTouched], ([u, p]) => u && p && showTurnstile);
	const showPassword = writable(false);
	const endAdornment = derived(showPassword, (show) =>
		show
			? {
					alt: 'Hide password',
					src: EyeSlashRegular,
					width: '23.5px',
					height: '18.75px',
					onClick: () => {
						showPassword.set(false);
					}
			  }
			: {
					alt: 'Show password',
					src: EyeRegular,
					width: '23.5px',
					height: '18.75px',
					onClick: () => {
						showPassword.set(true);
					}
			  }
	);
	const inputType = derived(showPassword, (show) => (show ? 'text' : 'password'));

	username.subscribe((value) => {
		if (value.length > 0) {
			usernameTouched.set(true);
		}
	});
	password.subscribe((value) => {
		if (value.length > 0) {
			passwordTouched.set(true);
		}
	});
</script>

<form on:submit|preventDefault|trusted>
	<Input name="email" type="email" autocomplete="username" placeholder="Email" bind:value={$username} />
	<Input name="password" type={$inputType} autocomplete="current-password" placeholder="Password" bind:value={$password} endAdornment={$endAdornment} />
	<Turnstile shouldRender={$shouldRender} siteKey={PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY} theme="light" />
	<Button type="submit" disabled={$buttonDisabled}><slot /></Button>
</form>

<style lang="scss">
	form {
		display: flex;
		flex-direction: column;
		row-gap: var(--scale);
		width: 100%;
	}
</style>
