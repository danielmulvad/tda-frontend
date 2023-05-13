<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Content, { type Placement } from './content.svelte';

	const DEFAULT_ZINDEX = 1000;

	export let action = 'click';
	export let zIndex = DEFAULT_ZINDEX;
	export let arrow = true;
	export let placement: Placement = 'auto';
	export let arrowColor = '';
	export let preventDefault = false;
	export let stopPropagation = false;
	export let open = false;
	let targetRef: HTMLElement;
	let containerRef: HTMLElement;
	$: targetRef?.ownerDocument?.addEventListener('click', (event) => {
		if (open) {
			if (targetRef.contains(event.target as Node)) {
				return;
			}
			setOpen();
		}
	});

	const dispatch = createEventDispatcher();
	const onOpen = () => {
		dispatch('open');
	};
	const setOpen = () => {
		open = !open;
		if (!open) {
			dispatch('close');
		}
	};
	const eventClick = (e: MouseEvent | KeyboardEvent | TouchEvent) => {
		if (preventDefault) e.preventDefault();
		if (stopPropagation) e.stopPropagation();
		setOpen();
	};
	const eventMouseOut = ({ relatedTarget }: MouseEvent | FocusEvent) => {
		if ((relatedTarget as unknown as MouseEvent & { id: string })?.id === 'overlay' && !open) {
			setOpen();
		}
	};
	const onTouchEnd = action === 'click' ? eventClick : null;
	const onClick = action === 'click' ? eventClick : null;
	const setOpenTrue = () => (open = true);
	const onMouseOver = action === 'hover' ? setOpenTrue : null;
	const onMouseOut = action === 'hover' ? eventMouseOut : null;
</script>

<div class="popover" bind:this={containerRef}>
	<div
		bind:this={targetRef}
		class="target"
		style={open ? `z-index: ${zIndex + 10}` : ''}
		on:click={onClick}
		on:keydown={onClick}
		on:touchend={onTouchEnd}
		on:mouseover={onMouseOver}
		on:focus={onMouseOver}
		on:mouseout={onMouseOut}
		on:blur={onMouseOut}
	>
		<slot name="target" {open} />
	</div>
	{#if open}
		<Content on:open={onOpen} on:setOpen={setOpen} {placement} {targetRef} {zIndex} {arrow} {arrowColor}>
			<slot name="content" {open} />
		</Content>
	{/if}
</div>

<style>
	.target {
		display: inline-block;
		position: relative;
	}
	.popover {
		position: relative;
	}
</style>
