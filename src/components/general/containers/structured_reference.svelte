<script lang="ts">
	import StructuredSection from "@/components/general/containers/structured_section.svelte"

	import defineHeadingInfo from "@/utilities/definers/define_heading_info"
	import SecondaryHeading from "@/components/general/headings/secondary.svelte"
	import StructuredList from "@/components/general/containers/structured_list.svelte"
	import StructuredListItem from "@/components/general/containers/structured_list_item.svelte"

	const references = defineHeadingInfo({
		"text": "References"
	})
</script>

<StructuredSection id={references.id}>
	<SecondaryHeading headingInfo={references}>
	<StructuredList order="ascending">
		<StructuredListItem>
		</StructuredListItem>
	</StructuredList>
</StructuredSection>
