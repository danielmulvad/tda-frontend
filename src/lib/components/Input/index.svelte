<script lang="ts">
	type Adornment = {
		alt: string;
		height: string;
		src: string;
		width: string;
		onClick?: () => void;
	};

	export let autocomplete: HTMLInputElement['autocomplete'] | undefined = undefined;
	export let name: HTMLInputElement['name'] | undefined = undefined;
	export let placeholder: HTMLInputElement['placeholder'] | undefined = undefined;
	export let startAdornment: Adornment | undefined = undefined;
	export let endAdornment: Adornment | undefined = undefined;
	export let value: HTMLInputElement['value'] = '';
</script>

<div class="root" class:startAdornment class:endAdornment>
	{#if startAdornment}
		<img
			class="adornment"
			alt={startAdornment.alt}
			height={startAdornment.width}
			src={startAdornment.src}
			width={startAdornment.width}
			on:click={startAdornment.onClick}
			on:keydown={startAdornment.onClick}
			draggable={false}
		/>
	{/if}
	<input class="input" {autocomplete} {name} {placeholder} bind:value {...$$restProps} />
	{#if endAdornment}
		<img
			class="adornment"
			alt={endAdornment.alt}
			height={endAdornment.width}
			src={endAdornment.src}
			width={endAdornment.width}
			on:click={endAdornment.onClick}
			on:keydown={endAdornment.onClick}
			draggable={false}
		/>
	{/if}
</div>

<style lang="scss">
	.root {
		border: calc(var(--scale) / 16) solid var(--input);
		border-radius: calc(var(--scale) * 0.25);
		display: grid;
		align-items: center;
		grid-template-columns: 1fr;
		margin: calc(var(--scale) * 0.5) 0;
		padding: 0 calc(var(--scale) * 0.75);
	}
	.root:focus-within {
		box-shadow: 0 0 0 calc(var(--scale) / 8) var(--background), 0 0 0 calc(var(--scale) / 4) var(--input), 0 0 #0000;
	}
	.input {
		background: transparent;
		border: none;
		color: inherit;
		font-size: var(--font-size-sm);
		height: calc(var(--scale) * 2.5);
		padding: 0;
		margin: 0;
		outline: none;
		transition: border-color 0.3s;
	}
	.adornment {
		cursor: pointer;
	}
	.startAdornment {
		grid-template-columns: auto 1fr;
	}
	.endAdornment {
		grid-template-columns: 1fr auto;
	}
	.startAdornment.endAdornment {
		grid-template-columns: auto 1fr auto;
	}
</style>
