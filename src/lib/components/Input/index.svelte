<script lang="ts">
	export let autocomplete: HTMLInputElement['autocomplete'] | undefined = undefined;
	export let name: HTMLInputElement['name'] | undefined = undefined;
	export let placeholder: HTMLInputElement['placeholder'] | undefined = undefined;
	export let value: HTMLInputElement['value'] = '';
</script>

<input {autocomplete} {name} {placeholder} bind:value {...$$restProps} />

<style lang="scss">
	input {
		padding: 0.5rem;
		border: 1px solid #ccc;
		border-radius: 4px;
		outline: none;
		transition: border-color 0.3s;
	}
</style>
