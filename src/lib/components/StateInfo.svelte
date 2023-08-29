<script lang="ts">
	import { Img } from 'flowbite-svelte';
	import type { State } from '../../types';

	export let activeState: State;
</script>

<div
	class="w-[700px] h-[700px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
>
	<a href="#">
		<!-- <img class="rounded-t-lg" src="state_flags/{activeState.state_name}.png" alt="" /> -->
		<Img
			src="state_flags/{activeState.state_name}.png"
			class="w-[700px] h-[400px]"
			imgClass="h-30 max-h-30 min-h-30 w-30 max-w-30 min-w-30"
		/>
	</a>
	<div class="p-5">
		<a href="#">
			<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
				{activeState.state_name}
			</h5>
		</a>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
			{activeState.writeup}
		</p>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
			NonCompete Agreement Length: {activeState.noncompete_length} years
		</p>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
			Law Code: {activeState.law_code}
		</p>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
			Date Passed: {activeState.date_passed}
		</p>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
			Sources: {activeState.sources}
		</p>
		<a
			href="#"
			class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
		>
			Read more
			<svg
				class="w-3.5 h-3.5 ml-2"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 14 10"
			>
				<path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M1 5h12m0 0L9 1m4 4L9 9"
				/>
			</svg>
		</a>
	</div>
</div>

<style>
</style>
