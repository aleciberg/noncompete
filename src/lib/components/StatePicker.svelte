<script lang="ts">
	import { STATES } from '$lib/constants';
	import { supabase } from '$lib/supabaseClient';

	export let activeState;
	let selected = activeState.state_name;

	const stateChanger = async () => {
		let data = await supabase.from('states').select('*').eq('state_name', selected);
		if (data.data == undefined) {
			console.error('Error in updating active state');
		} else {
			activeState = data.data[0];
		}
	};
</script>

<div class="select-container">
	<h1>Select a State</h1>
	<span>
		<select bind:value={selected} on:change={stateChanger}>
			{#each STATES as state}
				<option value={state}>
					{state}
				</option>
			{/each}
		</select>
	</span>
</div>

<style>
	.select-container {
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
	}
</style>
