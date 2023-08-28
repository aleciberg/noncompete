<!-- src/routes/+page.svelte -->
<script lang="ts">
	import { Auth } from '@supabase/auth-ui-svelte';
	import { ThemeSupa } from '@supabase/auth-ui-shared';

	export let data;
</script>

<svelte:head>
	<title>Non Compete Agreement Lengths</title>
</svelte:head>

<div class="row flex-center flex">
	<div class="col-6 form-widget">
		<!-- TODO: switch this to email/password login -->
		<Auth
			supabaseClient={data.supabase}
			view="magic_link"
			redirectTo={`${data.url}/auth/callback`}
			showLinks={false}
			appearance={{ theme: ThemeSupa, style: { input: 'color: black' } }}
			additionalData={{ Auth: true }}
		/>
	</div>
</div>
