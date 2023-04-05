<script lang="ts">
	export let disabled: boolean = false;
</script>

<button on:click {disabled}><slot /></button>

<style lang="scss">
	button:disabled {
		opacity: 0.5;
	}
</style>
