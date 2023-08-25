<script lang="ts">
	import { toast } from '@zerodevx/svelte-toast';

	import { enhance } from '$app/forms';
	import StateEditor from '$lib/components/StateEditor.svelte';
	import StatePicker from '$lib/components/StatePicker.svelte';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { State } from '../../types';
	import type { PageData } from '../$types';

	export let data: PageData;
	export let { activeState }: { activeState: State } = data;

	let { session, supabase } = data;
	$: ({ session, supabase } = data);

	let loading = false;
	let saveSuccess = false;

	const handleSignOut: SubmitFunction = () => {
		loading = true;
		return async ({ update }) => {
			loading = false;
			update();
		};
	};

	const updateHandler = async (e: any) => {
		const { stateData } = e.detail;

		const { data, error } = await supabase
			.from('states')
			.update({
				writeup: stateData.fblurb,
				noncompete_length: stateData.flength,
				date_passed: stateData.fdate,
				law_code: stateData.flawcode,
				sources: stateData.fsources
			})
			.eq('state_name', activeState)
			.select();

		if (error) {
			toast.push('ERROR UPDATING STATE!', {
				theme: {
					'--toastColor': 'yellow',
					'--toastBackground': 'rgba(245, 40, 145, 0.8)',
					'--toastBarBackground': 'rgba(72, 216, 252, 0.8)'
				}
			});
		}

		if (data) {
			toast.push('Success!', {
				theme: {
					'--toastColor': 'mintcream',
					'--toastBackground': 'rgba(72,187,120,0.9)',
					'--toastBarBackground': '#2F855A'
				}
			});
			setTimeout(() => {
				saveSuccess = false;
			}, 10000);
		}
	};
</script>

{#if session}
	<h1>Dashboard Page for {session.user.email}</h1>
	<form method="post" action="?/signout" use:enhance={handleSignOut}>
		<div>
			<button class="button block" disabled={loading}>Sign Out</button>
		</div>
	</form>
	<div class="h-full w-full justify-center">
		<div class="grid grid-cols-5 mt-3 items-center">
			<div class="col-span-2">
				<StatePicker bind:activeState />
			</div>
			<div class="col-span-3">
				<StateEditor bind:activeState />
			</div>
		</div>
	</div>
{:else}
	<h1>Something went wrong</h1>
{/if}
