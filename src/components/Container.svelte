<script lang="ts">
	import { cn } from '$lib/cn';

	let className: string = '';

	export { className as class };
</script>

<div {...$$restProps} class={cn('mx-auto w-11/12 max-w-screen-sm px-2', className)}>
	<slot />
</div>
