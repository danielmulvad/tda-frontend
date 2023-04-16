<script lang="ts">
	import { PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY } from '$env/static/public';
	import Button from '$lib/components/Button/index.svelte';
	import Input from '$lib/components/Input/index.svelte';
	import Turnstile from '$lib/components/Turnstile/index.svelte';
	import { derived, writable } from 'svelte/store';

	const username = writable('');
	const password = writable('');
	const shouldRender = derived([username, password], ([u, p]) => u.length > 0 && p.length > 0);
</script>

<form on:submit|preventDefault|trusted>
	<Input name="email" autocomplete="username" placeholder="Email" bind:value={$username} />
	<Input name="password" autocomplete="current-password" placeholder="Password" bind:value={$password} />
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
