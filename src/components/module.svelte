<script lang="ts">
	import type { PKG } from '../getModule';

	export let data: PKG;
</script>

<div class="prose prose-headings:my-0 prose-p:my-0 bg-base-300 pb-4 max-w-none">
	<div class="bg-primary px-4 flex">
		<h3>
			{data.name}
		</h3>
		<span class="ml-auto">
			[
			<a href={`https://www.npmjs.com/package/${data.name}`}>NPM</a>
			{#if data.repository?.url}
				| <a href={data.repository.url}>REPO</a>
			{/if}
			{#if data.bugs}
				| <a href={data.bugs.url}>BUGS</a>
			{/if}
			{#if data.homepage}
				| <a href={data.homepage}>HOME</a>
			{/if}
			]
		</span>
	</div>
	<div class="px-4 pt-2">
		<p>
			{data.description || 'No description'}
		</p>
		{#if data.license}
			<div>
				License {data.license}
			</div>
		{/if}
		<div class="gap-1 overflow-x-hidden">
			{#each data?.keywords || [] as tag}
				<span class="mr-1 badge badge-primary rounded-sm">{tag}</span>
			{/each}
		</div>
	</div>
</div>
