<script lang="ts">
	import TechList from './TechList.svelte';

	import Computer from './../../lib/icons/Computer.svelte';
	import Chip from '$lib/icons/Chip.svelte';
	import Code from '$lib/icons/Code.svelte';
	import { os, programmingLanguages, technologies, tools } from './lists';
</script>

<div
	class="container mx-auto my-10 w-full h-screen flex flex-col gap-8 justify-center items-center"
>
	<div class="border-token border-surface-800-100-token mx-auto flex flex-col items-center p-8">
		<div class="flex gap-4">
			<Chip classList="h-14 w-14"></Chip>
			<h1 class="h1 align-bottom">Technologies</h1>
		</div>
		<TechList list={programmingLanguages} title="Programming Languages">
			<Code slot="icon"></Code>
		</TechList>
		<TechList list={technologies} title="Technologies">
			<Chip slot="icon"></Chip>
		</TechList>
		<TechList list={tools} title="Tools and Software">
			<Chip slot="icon"></Chip>
		</TechList>
		<TechList list={os} title="Operating systems">
			<Computer slot="icon"></Computer>
		</TechList>
	</div>
</div>
