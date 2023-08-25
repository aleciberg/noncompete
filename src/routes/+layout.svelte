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
	<title>User Management</title>
</svelte:head>

<div class="main-container overscroll-auto h-full w-full mb-20">
	<SvelteToast {options} />
	<div class="w-fullfixed text-2xl font-medium">
		<a class="underline" href="/">Home</a>
		<a class="underline" href="/login">Admin</a>
	</div>
	<slot />
	<footer class="fixed inset-x-0 bottom-0 text-sm font-thin">
		<p>Made with ♥ by Alec Iberg, Jordan Melvin, and Brennen Yaquinto</p>
	</footer>
</div>
