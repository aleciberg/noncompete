<!-- src/routes/+layout.svelte -->
<script lang="ts">
	import '../app.css';
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	import { SvelteToast } from '@zerodevx/svelte-toast';

	export let data;

	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => data.subscription.unsubscribe();
	});

	const options = {};
</script>

<svelte:head>
	<title>Non Compete Agreement Lengths</title>
</svelte:head>

<div class="overscroll-none h-full w-full">
	<SvelteToast {options} />
	<div class="w-fullfixed text-md font-xs flex justify-end space-x-2">
		<a class="underline" href="/">Home</a>
		{#if session}
			<a class="underline" href="/admin">Dashboard</a>
		{:else}
			<a class="underline" href="/login">Admin</a>
		{/if}
	</div>
	<slot />
	<div class="w-full text-md flex justify-end">
		<p>Made with ♥ by Alec Iberg & Jordan Melvin</p>
	</div>
</div>
