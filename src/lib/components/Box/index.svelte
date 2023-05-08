<script lang="ts">
	export let element: string = 'div';
	export let padding: number = NaN;
	export let paddingY: number = isNaN(padding) ? 0 : padding;
	export let paddingTop: number = paddingY;
	export let paddingBottom: number = paddingY;
	export let paddingX: number = isNaN(padding) ? 0 : padding;
	export let paddingLeft: number = paddingX;
	export let paddingRight: number = paddingX;

	export let margin: number = NaN;
	export let marginY: number = isNaN(margin) ? 0 : margin;
	export let marginTop: number = marginY;
	export let marginBottom: number = marginY;
	export let marginX: number = isNaN(margin) ? 0 : margin;
	export let marginLeft: number = marginX;
	export let marginRight: number = marginX;

	export let borderRadius: number = NaN;
	export let borderRadiusY: number = isNaN(borderRadius) ? 0 : borderRadius;
	export let borderRadiusTop: number = borderRadiusY;
	export let borderRadiusBottom: number = borderRadiusY;
	export let borderRadiusX: number = isNaN(borderRadius) ? 0 : borderRadius;
	export let borderRadiusLeft: number = borderRadiusX;
	export let borderRadiusRight: number = borderRadiusX;

	export let style = '';
</script>

<svelte:element
	this={element}
	style="border-radius: calc(var(--scale) *{borderRadiusTop}) calc(var(--scale) *{borderRadiusRight}) calc(var(--scale) *{borderRadiusBottom}) calc(var(--scale) *{borderRadiusLeft}); margin: calc(var(--scale) * {marginTop}) calc(var(--scale) * {marginRight}) calc(var(--scale) * {marginBottom}) calc(var(--scale) * {marginLeft}); padding: calc(var(--scale) * {paddingTop}) calc(var(--scale) * {paddingRight}) calc(var(--scale) * {paddingBottom}) calc(var(--scale) * {paddingLeft}); {style}"
>
	<slot />
</svelte:element>
