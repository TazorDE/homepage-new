<script>
</script>

<div>
	<span class="badge bg-primary-500">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="w-6 h-6"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
			/>
		</svg>
	</span>
	<span class="flex-auto">
		<dt><b><slot name="title" /></b></dt>
		<dd>
			<slot />
		</dd>
	</span>
</div>
