<script context="module" lang="ts">
	export const load = async ({ fetch }: any) => {
		let res: NPMMmodules[] = await (await fetch('/modules')).json();
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
	import { getAllModules, type Module as NPMMmodules } from '../getModule';

	import Module from '../components/module.svelte';
	export let modules: NPMMmodules[];
	let tag = 'bun';
	const availableTags = ['http', 'discord', 'actions', 'svelte', 'cli'];
</script>

<svelte:head>
	<title>Awesome bun modules</title>
	<meta name="og:description" content="Automatically generated list of modules from NPM api" />
	<meta name="description" content="Automatically generated list of modules from NPM api" />
	<meta name="og:title" content="Awesome bun modules" />
	<meta name="theme-color" content="#0EC5FF" />
</svelte:head>

<div class="min-h-screen">
	<div class="max-w-7xl mx-auto">
		<h1 class="text-xl py-4 text-center font-bold">Bun Compatible Modules!</h1>
		<div>
			<div>
				<ul class="flex w-full">
					{#each availableTags as option}
						<li class="m-auto">
							<button
								class={`btn p-2 rounded-sm ${tag == option ? 'bg-primary' : 'bg-accent'}`}
								on:click={() => (tag == option ? (tag = 'bun') : (tag = option))}>{option}</button
							>
						</li>
					{/each}
				</ul>
			</div>
			<div class="grid gap-5 px-4 pt-4">
				{#each modules.filter((x) => x.package.keywords.includes(tag)) as module}
					<Module data={module} />
				{/each}
			</div>
		</div>
	</div>

	<footer class="footer p-10 bg-neutral text-neutral-content mt-auto pt-4">
		<div>
			<p>This list is automatically fetched from npm api</p>
			<p>Made by <a href="https://github.com/tricked-dev">tricked-dev</a></p>
		</div>
		<div>
			<p>
				To get your modules added to you just have to tag your project with <kbd class="kbd"
					>bun</kbd
				>
			</p>
			<a href="https://github.com/tricked-dev/bun-modules">Repository</a>
		</div>
	</footer>
</div>
