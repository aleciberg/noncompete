<script lang="ts">
	import { STATES } from '$lib/constants';
	import type { State } from '../../types';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let activeState: State;

	const clickHandler = async (state: string) => {
		dispatch('handleChange', state);
	};
</script>

<div class="h-[93vh] overflow-auto">
	<ul>
		{#each STATES as state}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
			<li
				class={activeState.state_name === state
					? 'text-md cursor-pointer italic text-center text-[#4e83a2]'
					: 'text-md cursor-pointer text-center'}
				on:click={() => clickHandler(state)}
			>
				{state}
			</li>
		{/each}
	</ul>
</div>
