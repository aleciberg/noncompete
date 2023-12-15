<script lang="ts">
	import { STATES } from '$lib/constants';
	import { createEventDispatcher } from 'svelte';

	export let activeState;
	let selected = activeState.state_name;

	const dispatch = createEventDispatcher();

	const stateChanger = async (state: string) => {
		dispatch('handleChange', state);
	};
</script>

<div class="flex flex-col w-full justify-center items-center">
	<h1 class="text-[#4e83a2]">Select a State</h1>
	<span>
		<select bind:value={selected} on:change={() => stateChanger(selected)}>
			{#each STATES as state}
				<option value={state}>
					{state}
				</option>
			{/each}
		</select>
	</span>
</div>

<style>
	/* .select-container {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		margin: auto;
		height: 10vh;
		width: 20vw;
		background-color: rgb(243, 243, 243);
		border: 1px solid darkgrey;
		border-radius: 20px;
		box-shadow: 5px 5px 3px #cdcdcd;
	}

	select {
		width: 200px;
		height: 35px;
		font-size: 18px;
	} */
</style>
