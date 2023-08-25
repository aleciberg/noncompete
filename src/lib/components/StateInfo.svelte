<!-- <script lang="ts">
	export let activeState: any;
</script> -->
<!-- 
<div>
	<div
		class="h-15 max-h-15 min-h-15 w-15 min-w-15 max-w-15 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mr-5"
	>
		<a href="#">
			<img class="" src={`state_flags/${activeState.state_name}.png`} alt="" />
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
			<ul>
				<li>Length of Non Competes: {activeState.length}</li>
				<li>Law Reference Code: {activeState.lawCode}</li>
				<li>Date Passed: {activeState.datePassed}</li>
				<br />
			</ul>
			<a
				href="#"
				class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
			>
				Sources
				<svg
					aria-hidden="true"
					class="w-4 h-4 ml-2 -mr-1"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
						clip-rule="evenodd"
					/>
				</svg>
			</a>
		</div>
	</div>
</div> -->

<script lang="ts">
	import { Img } from 'flowbite-svelte';
	let vCard = false;

	export let activeState: any;
</script>

<div
	class="w-[700px] h-[600px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
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
				Noteworthy technology acquisitions 2021
			</h5>
		</a>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
			Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
			chronological order.
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
