<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { State } from '../../types';

	const dispatch = createEventDispatcher();

	export let activeState: State;

	const submitHandler = (e: any) => {
		// Grabbing Form Data
		const formData = new FormData(e.target);

		const data: any = {};
		for (let field of formData) {
			const [key, value] = field;
			data[key] = value;
		}

		dispatch('update', { stateData: data });
	};
</script>

<main>
	<form on:submit|preventDefault={submitHandler}>
		<div>
			<label for="fname">State Name</label>
			<input
				type="text"
				id="fname"
				name="fname"
				value={activeState.state_name}
				disabled={true}
				placeholder={activeState.state_name}
			/>
		</div>
		<div>
			<label for="flawcode">Enforceable Non Compete?</label>
			<input
				type="text"
				id="flawcode"
				name="flawcode"
				value={activeState.enforce_nc}
				placeholder={activeState.enforce_nc}
			/>
		</div>
		<div>
			<label for="flawcode">Law Code</label>
			<input
				type="text"
				id="flawcode"
				name="flawcode"
				value={activeState.law_code}
				placeholder={activeState.law_code}
			/>
		</div>
		<div>
			<label for="flawcode">Blue Pencil Provision</label>
			<input
				type="text"
				id="flawcode"
				name="flawcode"
				value={activeState.blue_pencil_provision}
				placeholder={activeState.blue_pencil_provision}
			/>
		</div>
		<div>
			<label for="fblurb">Blurb</label>
			<!-- <input
				type="text "
				id="fblurb"
				name="fblurb"
				value={activeState.blurb}
				placeholder={activeState.blurb}
			/> -->
			<textarea
				rows="5"
				cols="40"
				name="fblurb"
				placeholder={activeState.writeup}
				value={activeState.writeup}
			/>
		</div>
		<br />
		<br />
		<br />
		<button type="submit">Submit</button>
	</form>
</main>

<style>
	* {
		box-sizing: border-box;
	}

	input {
		border: 1px solid grey;
	}

	form {
		display: flex;
		flex-direction: column;
		width: 500px;
	}

	form > div {
		display: flex;
		justify-content: space-between;
	}

	form > div + * {
		margin-top: 10px;
	}

	button {
		background-color: #4caf50; /* Green */
		border: none;
		color: white;
		padding: 15px 32px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 16px;
	}

	textarea {
		border: 1px solid darkgrey;
	}
</style>
