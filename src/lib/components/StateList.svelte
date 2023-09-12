<script lang="ts">
	import { STATES } from '$lib/constants';
	import type { State } from '../../types';
	import { supabase } from '$lib/supabaseClient';

	export let activeState: State;

	const clickHandler = async (s: string) => {
		let data = await supabase.from('states2').select('*').eq('state_name', s);
		if (data.data == undefined) {
			console.error('Error in updating active state');
		} else {
			activeState = data.data[0];
		}
	};
</script>

<div class="h-[93vh] overflow-auto">
	<ul>
		{#each STATES as state}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
			<li
				class={activeState.state_name === state
					? 'text-md cursor-pointer italic text-center'
					: 'text-md cursor-pointer text-center'}
				on:click={() => clickHandler(state)}
			>
				{state}
			</li>
		{/each}
	</ul>
</div>
