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
	@import '$lib/theme.scss';

	button {
		padding: 0.5rem;
		border: none;
		border-radius: 4px;
		color: #fff;
		cursor: pointer;
		transition: background-color 0.3s;
		outline: none;
	}
	button:disabled {
		opacity: 0.5;
	}
	.fullWidth {
		width: 100%;
	}
	.primary {
		background-color: color(primary);
		&:focus {
			box-shadow: 0 0 0 2px color(primary, light);
		}
		&:hover {
			background-color: color(primary, dark);
		}
		&:disabled {
			background-color: color(primary);
		}
	}
	.secondary {
		background-color: color(secondary);
		&:focus {
			box-shadow: 0 0 0 2px color(secondary, light);
		}
		&:hover {
			background-color: color(secondary, dark);
		}
		&:disabled {
			background-color: color(secondary);
		}
	}
</style>
