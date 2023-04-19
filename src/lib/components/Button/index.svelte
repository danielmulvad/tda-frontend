<script lang="ts">
	type Colors = 'primary' | 'secondary';
	type Types = 'button' | 'reset' | 'submit';

	export let disabled: boolean = false;
	export let fullWidth: boolean = false;
	export let color: Colors = 'primary';
	export let type: Types = 'button';

	const primary = color === 'primary';
	const secondary = color === 'secondary';
</script>

<button class:fullWidth class:primary class:secondary on:click {disabled} {type}><slot /></button>

<style lang="scss">
	button {
		padding: calc(var(--scale) * 0.5);
		border: none;
		border-radius: calc(var(--scale) * 0.5);
		cursor: pointer;
		font-size: var(--font-size-md);
		transition: background 0.3s;
		outline: none;
	}
	.primary {
		background: var(--primary);
		color: var(--primary-foreground);
	}

	.primary:focus {
		background: var(--primary-focus);
	}
	.primary:hover {
		background: var(--primary-hover);
	}
	.primary:disabled {
		&:focus,
		&:hover {
			background: var(--primary);
		}
		opacity: 0.5;
	}
	.secondary {
		background: var(--secondary);
		color: var(--secondary-foreground);
	}
	.secondary:focus {
		background: var(--secondary-focus);
	}
	.secondary:hover {
		background: var(--secondary-hover);
	}
	.secondary:disabled {
		&:focus,
		&:hover {
			background: var(--secondary);
		}
		opacity: 0.5;
	}
	.fullWidth {
		width: 100%;
	}
</style>
