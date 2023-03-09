<script lang="ts">
	import { MAIN_CONTENT_ID } from "@/constants/miscellaneous_meta"

	import { internalTypes } from "@/components/general/links/constants"

	import Icon from "@/components/general/icon.svelte"
	import BaseLink from "@/components/general/links/base.svelte"

	export let mustShowHorizontally: boolean = false

	const linkClasses = [ "inline-flex", "flex-row", "flex-nowrap", "items-center", "no-underline" ]
</script>

<ul class="menu bg-primary-100" class:menu-horizontal={mustShowHorizontally}>
	<li>
		<BaseLink address="/" class={linkClasses} relationship={internalTypes}>
			<Icon name="home"/>
			<span class="flex-1">Home<span>
		</BaseLink>
		<BaseLink address="/projects" class={linkClasses} relationship={internalTypes}>
			<Icon name="code"/>
			<span class="flex-1">Projects<span>
		</BaseLink>
		<BaseLink address="/articles" class={linkClasses} relationship={internalTypes}>
			<Icon name="article"/>
			<span class="flex-1">Articles<span>
		</BaseLink>
		<BaseLink
			address={`/about_myself#${MAIN_CONTENT_ID}`}
			class={linkClasses}
			relationship={internalTypes}>
			<Icon name="badge"/>
			<span class="flex-1">About myself<span>
		</BaseLink>
		<BaseLink address="/website_info" class={linkClasses} relationship={internalTypes}>
			<Icon name="web"/>
			<span class="flex-1">Website info<span>
		</BaseLink>
		<BaseLink
			address="/about_myself#contact_details"
			class={linkClasses}
			relationship={internalTypes}>
			<Icon name="contacts"/>
			<span class="flex-1">Contacts<span>
		</BaseLink>
	</li>
</ul>
