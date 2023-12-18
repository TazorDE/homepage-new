<script lang="ts">
	import Waves from '../Waves.svelte';
</script>

<div class="container mx-auto max-w-2xl h-screen flex flex-col gap-8 justify-center items-center">
	<div
		class="card mt-40 variant-filled-surface mx-auto flex flex-col gap-8 items-center md:p-8 py-4 px-1"
	>
		<h1 class="h1">Contact me</h1>
		<p class="text-sm md:text-xl text-center">
			You can contact me via email at
			<a
				class="anchor !text-white hover:!text-secondary-400"
				href="mailto:contact@malteteichert.de"
			>
				contact@malteteichert.de
			</a>
		</p>
	</div>
	<div class="grow"></div>
	<div class="overflow-clip">
		<div class="grid">
			<div class="col-start-1 row-start-1">
				<img
					src="duck.png"
					id="duck"
					class="mx-auto w-32 h-32 mt-28 md:w-64 md:h-64"
					alt="A pixel-art imagee of a rubber duck."
				/>
			</div>
			<div class="col-start-1 row-start-1 mt-32 md:mt-60">
				<Waves></Waves>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	@keyframes float {
		0% {
			transform: translatey(0px);
		}
		50% {
			transform: translatey(-20px);
		}
		100% {
			transform: translatey(0px);
		}
	}

	#duck {
		animation: float 6s ease-in-out infinite;
	}
</style>
