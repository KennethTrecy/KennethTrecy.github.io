<script lang="ts">
	// @deprecated since v2.1.0. New changes will be in `@/components/general/card/project`
	import { externalTypes } from "@/components/general/links/constants"

	import Icon from "@/components/general/icon.svelte"

	export let title: string
	export let description: string
	export let link: string
</script>

<div
	itemprop="item"
	itemscope
	itemtype="https://schema.org/SoftwareApplication"
	class="card not-prose text-left flex-1 bg-base-200 mr-4 mb-4">
	<div class="card-body">
		<a
			class="card-title flex flex-row items-center"
			itemprop={externalTypes.join(" ")}
			href={link}>
			<h3 itemprop="name">{title}</h3>
			<Icon name="chevron_right"/>
		</a>
		<p itemprop="about text" class="prose">
			{description}
		</p>
	</div>
</div>
