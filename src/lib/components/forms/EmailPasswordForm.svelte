<script lang="ts">
	import { PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY } from '$env/static/public';
	import Button from '$lib/components/Button/index.svelte';
	import Input from '$lib/components/Input/index.svelte';
	import Turnstile from '$lib/components/Turnstile/index.svelte';
</script>

<form on:submit|preventDefault|trusted>
	<Input name="email" type="email" autocomplete="username" placeholder="Email" />
	<Input name="password" type="password" autocomplete="current-password" placeholder="Password" />
	<Turnstile siteKey={PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY} theme="light" />
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
