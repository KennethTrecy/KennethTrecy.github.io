<script lang="ts">
	import { referenceInfos } from "@/components/general/containers/reference_info_collection"

	import defineHeadingInfo from "@/utilities/definers/define_heading_info"

	import SimpleText from "@/components/general/containers/simple_text.svelte"
	import SecondaryHeading from "@/components/general/headings/secondary.svelte"
	import StructuredList from "@/components/general/containers/structured_list.svelte"
	import StructuredSection from "@/components/general/containers/structured_section.svelte"
	import StructuredListItem from "@/components/general/containers/structured_list_item.svelte"
	import ReferenceLink from "@/components/general/containers/structured_reference/link.svelte"

	const references = defineHeadingInfo({
		"text": "References"
	})
</script>

<StructuredSection itemprop="citation" id={references.id}>
	<SecondaryHeading headingInfo={references}/>
	<SimpleText itemprop="description">
		Some portions in this article were based on third-party work(s) for educational purposes. They are copyright of the respective groups, organizations, companies, or persons that have been attributed below. Note that these works may have been shared under different licenses and may have notices (e.g. disclaimer of warranties) in the linked licenses. Should a work has no existing license(s), a link to the work have been still provided.
	</SimpleText>
	<StructuredList order="ascending">
		{#each $referenceInfos as info}
			<StructuredListItem>
				<ReferenceLink {info}/>
			</StructuredListItem>
		{/each}
	</StructuredList>
</StructuredSection>
