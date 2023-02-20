<script lang="ts">
	import { referenceInfos } from "@/components/general/containers/reference_info_collection.ts"

	import defineHeadingInfo from "@/utilities/definers/define_heading_info"

	import SecondaryHeading from "@/components/general/headings/secondary.svelte"
	import StructuredList from "@/components/general/containers/structured_list.svelte"
	import StructuredSection from "@/components/general/containers/structured_section.svelte"
	import StructuredListItem from "@/components/general/containers/structured_list_item.svelte"
	import ReferenceLink from "@/components/general/containers/structured_reference/link.svelte"

	const references = defineHeadingInfo({
		"text": "References"
	})
</script>

<StructuredSection id={references.id}>
	<SecondaryHeading headingInfo={references}>
	<StructuredList order="ascending">
		{#each $referenceInfos as referenceInfo}
			<StructuredListItem>
				<ReferenceLink {info}/>
			</StructuredListItem>
		{/each}
	</StructuredList>
</StructuredSection>
