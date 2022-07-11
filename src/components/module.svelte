<script lang="ts">
	import type { PKG } from '../getModule';

	export let data: PKG;
</script>

<div class="prose prose-headings:my-0 prose-p:my-0 bg-base-300 pb-4 max-w-none">
	<div class="bg-primary px-4 flex">
		<h3>
			{data.collected.metadata.name}
		</h3>
		<span class="ml-auto">
			[ <a href={data.collected.metadata.links.npm}>NPM</a> |
			<a href={data.collected.metadata.links.repository}>REPO</a>
			{#if data.collected.metadata.links.bugs}
				| <a href={data.collected.metadata.links.bugs}>BUGS</a>
			{/if}
			{#if data.collected.metadata.links.homepage}
				| <a href={data.collected.metadata.links.homepage}>HOME</a>
			{/if}
			{#if data.collected.metadata.links.documentation}
				| <a href={data.collected.metadata.links.documentation}>DOCS</a>
			{/if}
			]
		</span>
	</div>
	<div class="px-4 pt-2">
		<p>
			{data.collected.metadata.description}
		</p>
		<div>
			<a>License {data.collected.metadata.license}</a>
		</div>
		<div class="flex gap-1">
			{#each data.collected.metadata.keywords as tag}
				<span class="badge badge-primary rounded-sm">{tag}</span>
			{/each}
		</div>
	</div>
</div>
