<script lang="ts">
	export let autocomplete: HTMLInputElement['autocomplete'] | undefined = undefined;
	export let name: HTMLInputElement['name'] | undefined = undefined;
	export let placeholder: HTMLInputElement['placeholder'] | undefined = undefined;
	export let value: HTMLInputElement['value'] = '';
</script>

<input {autocomplete} {name} {placeholder} bind:value {...$$restProps} />

<style lang="scss">
	input {
		background: transparent;
		color: inherit;
		font-size: var(--font-size-sm);
		height: calc(var(--scale) * 2.5);
		padding: calc(var(--scale) * 0.5) calc(var(--scale) * 0.75);
		border: calc(var(--scale) / 16) solid var(--input);
		border-radius: calc(var(--scale) * 0.25);
		outline: none;
		transition: border-color 0.3s;
	}
	input:focus-visible {
		box-shadow: 0 0 0 calc(var(--scale) / 8) var(--background), 0 0 0 calc(var(--scale) / 4) var(--input), 0 0 #0000;
	}
</style>
