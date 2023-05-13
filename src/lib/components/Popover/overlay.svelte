<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let zIndex: number;
	export let action: string;
	export let overlayColor = 'rgba(0,0,0,0.5)';
	export let preventDefault: boolean;
	export let stopPropagation: boolean;

	const dispatch = createEventDispatcher();
	const eventClick = (e: MouseEvent | KeyboardEvent | TouchEvent) => {
		if (preventDefault) e.preventDefault();
		if (stopPropagation) e.stopPropagation();
		dispatch('setOpen', {});
	};
	const onClick = action === 'click' ? eventClick : null;
	const onTouchEnd = action === 'click' ? eventClick : null;
	const onMouseEnter = action === 'hover' ? eventClick : null;
</script>

<div id="overlay" class="overlay" on:mouseenter={onMouseEnter} on:click={onClick} on:keydown={onClick} on:touchend={onTouchEnd} style="z-index: {zIndex}; background-color: {overlayColor}" />

<style>
	.overlay {
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		cursor: pointer;
	}
</style>
