<script lang="ts">
	export const padding: number = 1;
	export const radius: number = 0.5;

	const paddingStyle = `padding: calc(var(--scale) * ${padding});`;
	const radiusStyle = `border-radius: calc(var(--scale) * ${radius});`;
</script>

<div style="{paddingStyle} {radiusStyle}">
	<slot />
</div>

<style lang="scss">
	div {
		background: var(--card);
		border: calc(var(--scale) / 16) solid var(--border);
		box-shadow: var(--card-shadow);
		color: var(--card-foreground);
	}
</style>
