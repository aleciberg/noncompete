<!-- src/routes/+page.svelte -->
<script lang="ts">
	import { Auth } from '@supabase/auth-ui-svelte';

	export let data;
	$: ({ supabase } = data);
</script>

<svelte:head>
	<title>Non Compete Agreement Lengths</title>
</svelte:head>

<div class="row flex-center flex">
	<Auth
		supabaseClient={data.supabase}
		view="sign_in"
		redirectTo={`${data.url}/auth/callback`}
		showLinks={false}
	/>
</div>
