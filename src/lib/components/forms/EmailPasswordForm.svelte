<script lang="ts">
	import { PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY } from '$env/static/public';
	import Button from '$lib/components/Button/index.svelte';
	import Input from '$lib/components/Input/index.svelte';
	import Turnstile from '$lib/components/Turnstile/index.svelte';
	import { derived, writable } from 'svelte/store';

	const username = writable('');
	const password = writable('');
	const usernameTouched = writable(false);
	const passwordTouched = writable(false);
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
	const shouldRender = derived([usernameTouched, passwordTouched], ([u, p]) => u && p);
</script>

<form on:submit|preventDefault|trusted>
	<Input name="email" type="email" autocomplete="username" placeholder="Email" bind:value={$username} />
	<Input name="password" type="password" autocomplete="current-password" placeholder="Password" bind:value={$password} />
	<Turnstile shouldRender={$shouldRender} siteKey={PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY} theme="light" />
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
