<script lang="ts">
	import { Img } from 'flowbite-svelte';
	import type { State } from '../../types';

	export let activeState: State;
</script>

<div
	class="h-[88vh] mr-5 bg-white border border-slate-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-scroll"
>
	<div class="flex justify-center">
		<Img
			src="state_flags/{activeState.state_name}.png"
			class="mt-4 w-[600px] h-[350px] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
			imgClass="h-30 max-h-30 min-h-30 w-30 max-w-30 min-w-30"
		/>
	</div>
	<div class="flex flex-col ml-3">
		<a href="#">
			<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
				{activeState.state_name}
			</h5>
		</a>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
			<span class="font-bold">Enforceable Non-Compete?</span>
			{activeState.enforce_nc}
		</p>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
			<span class="font-bold">Law Code:</span>
			{activeState.law_code}
		</p>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
			<span class="font-bold">Blue Pencil Provision: </span>
			{activeState.blue_pencil_provision ? activeState.blue_pencil_provision : 'No'}
		</p>

		<p class="mb-3 w-[85%] font-normal text-gray-700 dark:text-gray-400 overflow-scroll">
			{activeState.writeup}
		</p>
	</div>
</div>

<style>
</style>
