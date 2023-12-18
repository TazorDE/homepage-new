<script lang="ts">
	import Waves from './Waves.svelte';

	import Work from './../lib/icons/Work.svelte';
	import Person from './../lib/icons/Person.svelte';
	import Chip from './../lib/icons/Chip.svelte';
	import { page } from '$app/stores';

	import '../app.postcss';
	import { AppShell, AppRail, AppRailAnchor, AppRailTile } from '@skeletonlabs/skeleton';

	// Highlight JS
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';

	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="sidebarLeft">
		<!-- App Bar -->
		<AppRail>
			<svelte:fragment slot="lead">
				<AppRailAnchor href="/">
					<span class="Uppercase">Malte Teichert</span>
				</AppRailAnchor>
			</svelte:fragment>
			<!-- --- -->
			<AppRailAnchor href="/" title="About Me" selected={$page.url.pathname === '/'}>
				<svelte:fragment slot="lead">
					<Person classList="w-6 h-6 mx-auto" />
				</svelte:fragment>
				About Me
			</AppRailAnchor>
			<AppRailAnchor href="/tech" title="tech-stack" selected={$page.url.pathname === '/tech'}>
				<svelte:fragment slot="lead">
					<Chip classList="w-6 h-6 mx-auto" />
				</svelte:fragment>
				<span>Tech Stack</span>
			</AppRailAnchor>
			<AppRailAnchor href="/work" title="work" selected={$page.url.pathname === '/work'}>
				<svelte:fragment slot="lead">
					<Work classList="w-6 h-6 mx-auto" />
				</svelte:fragment>
				<span>Work</span>
			</AppRailAnchor>
			<!-- --- -->
			<svelte:fragment slot="trail">
				<AppRailAnchor href="/contact" title="Contact">
					<div class="anchor">Contact Me</div>
				</AppRailAnchor>
			</svelte:fragment>
		</AppRail>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
