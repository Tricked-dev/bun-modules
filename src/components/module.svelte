<script lang="ts">
	import type { Module } from '../getModule';

	export let data: Module;
</script>

<div class="prose prose-headings:my-0 prose-p:my-0 bg-base-300 pb-4 max-w-none">
	<div class="bg-primary px-4 flex">
		<h3>
			{data.package.name}
		</h3>
		<span class="ml-auto">
			[
			<a href={data.package.links.npm}>NPM</a>
			{#if data.package.links.repository}
				| <a href={data.package.links.repository}>REPO</a>
			{/if}
			{#if data.package.links.bugs}
				| <a href={data.package.links.bugs}>BUGS</a>
			{/if}
			{#if data.package.links.homepage}
				| <a href={data.package.links.homepage}>HOME</a>
			{/if}
			]
		</span>
	</div>
	<div class="px-4 pt-2">
		<p>
			{data.package.description || 'No description'}
		</p>
		<img
			class="mt-auto mb-0 ml-auto mr-0"
			alt={`${data.package.name} weekly downloads`}
			src={`https://img.shields.io/npm/dw/${data.package.name}?color=783aa8`}
		/>
		<div class="gap-1 overflow-x-hidden">
			{#each data?.package.keywords || [] as tag}
				<span class="mr-1 badge badge-primary rounded-sm">{tag}</span>
			{/each}
		</div>
	</div>
</div>
