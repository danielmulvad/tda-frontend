<script lang="ts">
	import { onMount } from 'svelte';

	export let siteKey: string;
	export let theme: 'auto' | 'light' | 'dark' = 'auto';
	export let shouldRender: boolean = true;

	let loaded = false;
	let mounted = false;

	onMount(() => {
		mounted = true;
		return () => {
			mounted = false;
			loaded = false;
		};
	});

	function turnstile(node: HTMLDivElement) {
		const id = (window as any).turnstile.render(node, {
			sitekey: siteKey,
			theme
		});
		return {
			destroy: () => {
				(window as any).turnstile.remove(id);
			}
		};
	}

	function loadCallback() {
		loaded = true;
	}
</script>

<svelte:head>
	{#if mounted}
		<script src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit" on:load={loadCallback} async></script>
	{/if}
</svelte:head>

{#if loaded && mounted && shouldRender}
	<div use:turnstile />
{/if}
