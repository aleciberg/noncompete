<!-- src/routes/+page.svelte -->
<script lang="ts">
	import { goto } from '$app/navigation';
	import { redirect } from '@sveltejs/kit';

	export let data;
	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	let email: string;
	let password: string;

	// TODO get rid of the whole fucking auth route i dont need something that complicated
	const handleSignIn = async () => {
		try {
			let res = await supabase.auth.signInWithPassword({
				email,
				password
			});
			if (res.data.session != null) {
				goto('/admin');
			}
		} catch (error) {
			console.log('in catch somehow');
			console.log(error);
		}
	};
</script>

<svelte:head>
	<title>Non Compete Agreement Lengths</title>
</svelte:head>

<div class="row flex-center flex">
	<form on:submit={handleSignIn}>
		<input class="border border-black-100" name="email" placeholder="email" bind:value={email} />
		<input
			class="border border-black-100"
			type="password"
			name="password"
			placeholder="password"
			bind:value={password}
		/>
		<button>Sign In</button>
	</form>
</div>
