<script lang="ts">
	export let title: string;
	export let list: string[] = [];
</script>

<div class="h-10"></div>
<h2 class="h3">{title}</h2>
<div class="h-5"></div>
<div class="logo-cloud grid-cols-1 lg:!grid-cols-3 gap-1">
	{#each list as el}
		<div class="logo-item !bg-primary-500 p-4">
			<span>
				<slot name="icon" />
			</span>
			<span>{el}</span>
		</div>
	{/each}
</div>
