<script lang="ts">
	import Box from '$lib/components/Box/index.svelte';

	export let element: string = 'div';
	export let padding: number = NaN;
	export let paddingY: number = isNaN(padding) ? 0 : padding;
	export let paddingTop: number = paddingY;
	export let paddingBottom: number = paddingY;
	export let paddingX: number = isNaN(padding) ? 0 : padding;
	export let paddingLeft: number = paddingX;
	export let paddingRight: number = paddingX;
	export let style = '';

	type Alignment = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'stretch';
	type Direction = 'column' | 'row';
	export let alignItems: Alignment = 'flex-start';
	export let alignContent: Alignment = 'flex-start';
	export let justifyContent: Alignment = 'flex-start';
	export let justifyItems: Alignment = 'flex-start';
	export let placeItems: `${Alignment} ${Alignment}` = `${alignItems} ${justifyItems}`;
	export let placeContent: `${Alignment} ${Alignment}` = `${alignContent} ${justifyContent}`;
	export let direction: Direction = 'row';
	export let gap: number = 1;
	export let rowGap: number = isNaN(gap) ? 0 : gap;
	export let columnGap: number = isNaN(gap) ? 0 : gap;
</script>

<Box
	{element}
	{padding}
	{paddingY}
	{paddingTop}
	{paddingBottom}
	{paddingX}
	{paddingLeft}
	{paddingRight}
	style="display: grid; grid-auto-flow: {direction}; row-gap: calc(var(--scale) * {rowGap}); column-gap: calc(var(--scale) * {columnGap}); place-items: {placeItems}; place-content: {placeContent}; {style}"
>
	<slot />
</Box>
