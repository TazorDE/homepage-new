<script>
	import IBM from './IBM.svelte';
	import MaingauEnergie from './MaingauEnergie.svelte';
	import AcademicCarreer from './AcademicCarreer.svelte';
	import Work from '$lib/icons/Work.svelte';
</script>

<div class="container mx-auto w-full h-screen flex flex-col gap-8 justify-center items-center">
	<AcademicCarreer></AcademicCarreer>
	<div class="border-token border-surface-800-100-token mx-auto flex flex-col items-center p-8">
		<div class="flex gap-4">
			<Work classList="h-10 w-10"></Work>
			<h2 class="h2">Carreer</h2>
		</div>
		<div class="h-10"></div>
		<div class="flex flex-col gap-4">
			<MaingauEnergie></MaingauEnergie>
			<hr class="hr !border-t-2" />
			<IBM></IBM>
		</div>
	</div>
</div>
