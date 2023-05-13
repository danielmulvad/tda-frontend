<script lang="ts">
	import { goto } from '$app/navigation';
	import { logout as logout_query, tda_get_authorization_url } from '$lib/api/queries';
	import GearsSolid from '$lib/assets/svg/gears-solid.svelte';
	import Link from '$lib/components/Link/index.svelte';
	import Popover from '$lib/components/Popover/index.svelte';
	import { onMount } from 'svelte';
	import { derived, writable } from 'svelte/store';

	const authorizationUrlData = tda_get_authorization_url({ enabled: false, refetchInterval: false });
	const authorizationUrl = derived(authorizationUrlData, ({ data }) => {
		if (data) {
			return data.authorization_url;
		}
		return null;
	});
	const tdaAuthCookie = writable<string | undefined>(undefined);
	const logoutQuery = logout_query({ enabled: false, refetchInterval: false });

	onMount(() => {
		const tda_auth_cookies = document?.cookie?.split(';')?.filter((cookie) => cookie?.includes('access_token_tda'));
		const cookie = tda_auth_cookies?.at(0)?.split('=').at(1)?.trim();
		if (!cookie) {
			$authorizationUrlData.refetch();
			return;
		}
		tdaAuthCookie.set(cookie);
	});

	$: goToAuthorizationUrl = () => {
		if ($authorizationUrl) goto($authorizationUrl);
	};

	$: logout = () => {
		$logoutQuery.refetch();
	};

	$: disabled = !$authorizationUrl;
	$: showSignIn = !$tdaAuthCookie;
</script>

<nav class="root">
	<Link href="/">TradeTracker</Link>
	<Popover arrow={false} placement="bottom-end">
		<GearsSolid slot="target" />
		<div slot="content">
			<div class="content">
				{#if showSignIn}
					<div class="row" class:disabled on:click={goToAuthorizationUrl} on:keydown={goToAuthorizationUrl}>Sign into TDA</div>
				{/if}
				<div class="row" on:click={logout} on:keydown={logout}>Sign Out</div>
			</div>
		</div>
	</Popover>
</nav>

<style lang="scss">
	.root {
		background: var(--background);
		border-bottom: calc(var(--scale) / 16) solid var(--border);
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: calc(var(--navbar-height) - calc(var(--scale) / 16));
		column-gap: var(--scale);
		padding: 0 calc(var(--scale));
	}

	.content {
		background: var(--secondary);
		position: relative;
		top: calc((var(--scale) * 0.75) - 1px);
	}

	.row {
		background: var(--primary);
		display: flex;
		align-items: center;
		height: calc(var(--scale) * 2);
		color: var(--secondary);
		padding: var(--scale);
		cursor: pointer;
		width: 100%;
		&:first-of-type {
			border-top-left-radius: calc(var(--scale) / 2);
			border-top-right-radius: calc(var(--scale) / 2);
		}
		&:last-of-type {
			border-bottom-left-radius: calc(var(--scale) / 2);
			border-bottom-right-radius: calc(var(--scale) / 2);
		}
		&:not(:first-of-type) {
			border-top: calc(var(--scale) / 16) solid var(--border);
		}
	}

	.disabled {
		cursor: unset;
		opacity: 0.5;
	}

	@include mediaBreakpointUp(sm) {
		.root {
			padding: 0 calc(var(--scale) * 1.25);
		}
	}

	@include mediaBreakpointUp(md) {
		.root {
			padding: 0 calc(var(--scale) * 1.5);
		}
	}
</style>
