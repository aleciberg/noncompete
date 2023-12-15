<script lang="ts">
	import { SvelteToast } from '@zerodevx/svelte-toast';
	import StateInfo from '$lib/components/StateInfo.svelte';
	import StateList from '$lib/components/StateList.svelte';
	import type { State } from '../types';
	import type { PageData } from './$types';
	import StatePicker from '$lib/components/StatePicker.svelte';

	export let data: PageData;
	export let { activeState }: { activeState: State } = data;

	let screenSize: number;
	const options = {};
</script>

<svelte:window bind:innerWidth={screenSize} />

{#if screenSize > 650}
	<div class="flex overscroll-none">
		<SvelteToast {options} />
		<div class="h-full w-1/5 text-2xl font-medium">
			<div class="h-full mr-2">
				<StateList bind:activeState />
			</div>
		</div>
		<div class="h-full w-4/5 flex items-center justify-center">
			<div class="h-full">
				<StateInfo bind:activeState />
			</div>
		</div>
	</div>
{:else}
	<div class="flex flex-col">
		<div>
			<StatePicker bind:activeState />
		</div>
		<div>
			<StateInfo bind:activeState />
		</div>
	</div>
{/if}
