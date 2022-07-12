<script context="module" lang="ts">
	export const load = async ({ fetch }: any) => {
		let res: PKG[] = await (await fetch('/modules')).json();
		if (res.length == 0) {
			res = await getAllModules();
		}
		return {
			props: {
				modules: res
			}
		};
	};
</script>

<script lang="ts">
	import { getAllModules, type PKG } from '../getModule';

	import Module from '../components/module.svelte';
	export let modules: PKG[];
</script>

<svelte:head>
	<title>Awesome bun modules</title>
	<meta name="og:description" content="A list of cherry picked bun compatible modules" />
	<meta name="description" content="A list of cherry picked bun compatible modules" />
	<meta name="og:title" content="Awesome bun modules" />
	<meta name="theme-color" content="#0EC5FF" />
</svelte:head>

<div class="min-h-screen">
	<div class="max-w-7xl mx-auto">
		<h1 class="text-xl py-4 text-center font-bold">Bun Compatible Modules!</h1>

		<div class="grid gap-5 px-4">
			{#each modules as module}
				<Module data={module} />
			{/each}
		</div>
	</div>

	<footer class="footer p-10 bg-neutral text-neutral-content mt-auto">
		<div>
			<p>Maintained by the community for the community</p>
		</div>
		<div>
			<a href="https://github.com/tricked-dev/bun-modules">Repository</a>
		</div>
	</footer>
</div>
