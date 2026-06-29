<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import BackToTop from '$lib/components/BackToTop.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
{@render children()}
<BackToTop />
