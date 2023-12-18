<script lang="ts">
	export let time: string;
	export let company: string;
	export let position: string;
</script>

<p>
	<span class="text-xl">
		<span class="font-bold">{time}:</span>
		{position} at {company}.
	</span>
	<br />
	<slot />
</p>
