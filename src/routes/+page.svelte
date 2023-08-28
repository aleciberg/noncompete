<script lang="ts">
	import StateInfo from '$lib/components/StateInfo.svelte';
	import StatePicker from '$lib/components/StatePicker.svelte';
	import type { State } from '../types';
	import type { PageData } from './$types';

	export let data: PageData;
	export let { activeState }: { activeState: State } = data;

	// time to start planning because i didn't plan out the last one and its very messy and unorganized

	// routes
	// noncompete.com main page - home route
	// noncompete.com/login - login screen for admin
	// noncompte.com/admin - dashboard panel

	// components - we will use the $lib alias to import our utilities and components
	// I will keep this the same - state picker, state info, and state editor
	// state picker - whole purpose is dropdown and export of active state
	// state info - for main screen, to display all state info
	// state editor - for dashboard editing, fields to edit
	// I want to use the Mozilla Standard for formData and Request/Response standards
	// $lib/sever - do we need server only code?

	// storing state
	// need to maintain an active state for displaying of info
	// change in state picker -> main state change in app -> change flows down to state editor

	// static
	// we shouldnt need any static files as we will call everything from SupaBase
</script>

<!--  <div class="h-full w-full justify-center">
	<div class="grid grid-cols-5 mt-3 items-center">
		<div class="col-span-2">
			<StatePicker bind:activeState />
		</div>
		<div class="col-span-3">
			<StateInfo bind:activeState />
		</div>
	</div>
</div> -->

<div class="border border-red-500 flex flex-wrap flex-gap overscroll-none">
	<div class="basis-1/3 border border-blue-500 self-center">
		<StatePicker bind:activeState />
	</div>
	<div class="basis-2/3 grow border border-green-500">
		<StateInfo bind:activeState />
	</div>
</div>
