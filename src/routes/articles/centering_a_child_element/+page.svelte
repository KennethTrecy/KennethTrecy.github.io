<script lang="ts">
	import { onMount } from "svelte"
	import { page } from "$app/stores"
	import { derived } from "svelte/store"

	import type { HeadingInfo } from "@/types/container_info"
	import type { PageData } from "@/routes/articles/centering_a_child_element/$types"

	import pageMeta from "@/routes/articles/centering_a_child_element/meta"

	import Bookmark from "@/components/general/links/bookmark.svelte"
	import Keyword from "@/components/general/containers/keyword.svelte"
	import ExternalLink from "@/components/general/links/external.svelte"
	import defineHeadingInfo from "@/components/general/define_heading_info"
	import SimpleText from "@/components/general/containers/simple_text.svelte"
	import ArticlePost from "@/components/general/containers/article_post.svelte"
	import SecondaryHeading from "@/components/general/headings/secondary.svelte"
	import ExampleCode from "@/components/general/containers/example_code.svelte"
	import ExampleOutput from "@/components/general/containers/example_output.svelte"
	import StructuredList from "@/components/general/containers/structured_list.svelte"
	import StructuredSection from "@/components/general/containers/structured_section.svelte"
	import StructuredListItem from "@/components/general/containers/structured_list_item.svelte"

	const loadedFileInfos = derived(page, resolvedPage => resolvedPage.data.loadedFileInfos ?? [])

	const introduction = defineHeadingInfo({ "text": "Introduction" })
	const classical = defineHeadingInfo({ "text": "The Classical Way" })
	const flexbox = defineHeadingInfo({ "text": "Using Flexible Box Layout" })
	const grid = defineHeadingInfo({ "text": "Using Grid Layout" })
	const unorthodox = defineHeadingInfo({ "text": "The Unorthodox Way" })
</script>

<ArticlePost {pageMeta}>
	<StructuredSection itemprop="about" id={introduction.id}>
		<SecondaryHeading headingInfo={introduction}/>
		<SimpleText itemprop="about">
			<Keyword>Centering</Keyword> an element is a usual task for a web developer. Images, modals, navigation anchor, and container of block of texts are the common components desired to be in the center. Semantically, Cascading Style Sheets (<abbr>CSS</abbr>) uses the word <em>center</em> to indicate that an element has equal spaces with respect to intended axis.
		</SimpleText>
		<SimpleText>
			A programmer may center a content according to its <Keyword>x-axis</Keyword> (e.g. <code>text-align: center;</code>), <Keyword>y-axis</Keyword> (e.g. <code>vertical-align: middle;</code>), or both. This article explores common ways to put an element in the center and presents a unorthodox way for a special use case.
		</SimpleText>
	</StructuredSection>
	<StructuredSection id={classical.id}>
		<SecondaryHeading headingInfo={classical}/>
		<SimpleText>
			The classical way to center an element is through the use of margins of the child element. There are many variations for this technique. A developer in the past can conveniently use this technique in conjunction with the previous versions of CSS frameworks. Utilizing the 12-column layout, a developer would the following steps below to determine the margin the child element would take.
			<!-- TODO: Find a URL for previous version of CSS framework and 12 column layout -->
		</SimpleText>
		<StructuredList order="ascending">
			<StructuredListItem>
				Resize the child element by an arbitrary number of columns. The number of columns should be an even number.
			</StructuredListItem>
			<StructuredListItem>
				Subtract the chosen number of columns from 12. The result is the number of unused columns that can be used as a margin.
			</StructuredListItem>
			<StructuredListItem>
				Divide the difference from step 2 because the unused space will distributed both horizontal sides of the child element.
			</StructuredListItem>
			<StructuredListItem>
				Depending on the CSS framework, the developer may <em>push</em> the element by a certain number of column based on quotient in step 3. Otherwise, the quotient would be divided by 12 then multiplied to 100 to get the percentage of left margin.
			</StructuredListItem>
		</StructuredList>
		<SimpleText>
			Below is an example positioning the child element in the center using the classical technique programmed in vanilla <abbr title="Cascading Style Sheets">CSS</abbr>.
		</SimpleText>
		<div itemprop="workExample" itemscope itemtype="https://schema.org/CreativeWork">
			<div class="mockup-window border border-secondary bg-base-200">
				<div class="w-full border-t border-secondary bg-base-100 py-4">
					<div class="parent">
						<div class="child">

						</div>
					</div>
				</div>
			</div>
			<p itemprop="text" class="text-center text-sm">
				Example of child positioned in the horizontal center using margins.
			</p>
		</div>
		<SimpleText>
			The <abbr title="Cascading Style Sheets">CSS</abbr> code for the example above can be seen below. It uses <code>calc()</code> to derive the margin.
		</SimpleText>
		<ExampleCode codeInfo={$loadedFileInfos[0]} beginLineIndex={4} endLineIndex={9}/>
	</StructuredSection>
</ArticlePost>

<style lang="postcss">
	.parent {
		@apply bg-green-900 w-3/4 h-48 mx-[12.5%];
	}

	.child {
		@apply bg-green-400 h-24;
	}

	.child {
		width: calc(4 / 12 * 100%);
		margin-left: calc(((12 - 4) / 2) / 12 * 100%)
	}
</style>
