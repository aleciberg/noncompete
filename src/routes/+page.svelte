<script lang="ts">
	import StatePicker from '$lib/components/StatePicker.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	export let { activeState } = data;

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

<h1>Root Route - This will be main page</h1>
<a href="/login">Click Here for Login</a>

<p>Here is the activeState: {JSON.stringify(activeState)}</p>

<div>
	<StatePicker bind:activeState />
</div>
