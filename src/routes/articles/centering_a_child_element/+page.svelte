<script lang="ts">
	import { onMount } from "svelte"
	import { page } from "$app/stores"
	import { derived } from "svelte/store"

	import type { HeadingInfo } from "@/types/container_info"
	import type { PageData } from "@/routes/articles/centering_a_child_element/$types"

	import pageMeta from "@/routes/articles/centering_a_child_element/meta"

	import defineHeadingInfo from "@/utilities/definers/define_heading_info"

	import Bookmark from "@/components/general/links/bookmark.svelte"
	import Keyword from "@/components/general/containers/keyword.svelte"
	import ExternalLink from "@/components/general/links/external.svelte"
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
				Divide the difference from step 2 because the unused space would distributed both horizontal sides of the child element.
			</StructuredListItem>
			<StructuredListItem>
				Depending on the CSS framework, the developer may <em>push</em> the element by a certain number of column based on quotient in step 3. Otherwise, the quotient would be divided by 12 then multiplied to 100 to get the percentage of left margin.
			</StructuredListItem>
		</StructuredList>
		<SimpleText>
			Below is an example positioning the child element in the center using the classical technique programmed in vanilla <abbr title="Cascading Style Sheets">CSS</abbr>.
		</SimpleText>
		<div itemprop="workExample" itemscope itemtype="https://schema.org/CreativeWork">
			<div class="classical mockup-window border border-secondary bg-base-200">
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
	<StructuredSection id={flexbox.id}>
		<SecondaryHeading headingInfo={flexbox}/>
		<SimpleText>
			Another method is through the use of flexible box layut which was introduced
			<ExternalLink address="https://cran.r-project.org/web/packages/imola/vignettes/imola-why-flex-and-grid.html">around 2012</ExternalLink>. It allows web developer to layout conveniently and responsively as the elements would automatically resize while adhering to the specified properties.
		</SimpleText>
		<SimpleText>
			A web developer would declare certain properties on the parent like <code>display: flex;</code> paired with <code>flex-direction</code> and/or <code>flex-wrap</code>. On the other hand, children of the flexible parent would have properties like <code>flex-grow</code> nd/or <code>flex-basis</code>.
		</SimpleText>
		<SimpleText>
			It is very easy to center an element in both axes using flexible box layout. A web developer would just do the following steps.
		</SimpleText>
		<StructuredList order="ascending">
			<StructuredListItem>
				Set <code>display: flex;</code> on the parent.
				<!-- TODO: Reference the documentation -->
			</StructuredListItem>
			<StructuredListItem>
				Set <code>justify-content: center;</code> on the parent. This indicates to center the children with respect to main axis.
				<!-- TODO: Reference the documentation -->
			</StructuredListItem>
			<StructuredListItem>
				Set <code>align-items: center;</code> on the parent. This indicates to center the children with respect to cross axis.
				<!-- TODO: Reference the documentation -->
			</StructuredListItem>
			<StructuredListItem>
				Optionally, set <code>flex-direction: row;</code> on the parent if there are multiple children to be layout horizontally and direction matters. If the children should be in vertical manner, use <code>flex-direction: column;</code> instead.
				<!-- TODO: Reference the documentation -->
			</StructuredListItem>
		</StructuredList>
		<SimpleText>
			Usually, the <code>flex-direction: row;</code> sets the x-axis as the main axis and y-axis as the cross axis. If <code>flex-direction: column;</code> has been used, the y-axis axis would be the main axis and x-axis would be the cross axis.
		</SimpleText>
		<SimpleText>
			Below is an example positioning the child elements in the center (in both horizontal and vertical manner) using the flexible box layout programmed in vanilla <abbr title="Cascading Style Sheets">CSS</abbr>. Note that there is a margin between the the two children to distinguish them.
		</SimpleText>
		<div itemprop="workExample" itemscope itemtype="https://schema.org/CreativeWork">
			<div class="flexible mockup-window border border-secondary bg-base-200">
				<div class="w-full border-t border-secondary bg-base-100 py-4">
					<div class="parent">
						<div class="child">

						</div>
						<div class="child">

						</div>
					</div>
				</div>
			</div>
			<p itemprop="text" class="text-center text-sm">
				Example of children positioned in the horizontal center and vertical center using flexible box layout.
			</p>
		</div>
		<SimpleText>
			Below is corresponding <abbr title="Cascading Style Sheets">CSS</abbr> code to center the children using flexible box layout.
		</SimpleText>
		<ExampleCode codeInfo={$loadedFileInfos[0]} beginLineIndex={4} endLineIndex={9}/>
	</StructuredSection>
	<StructuredSection id={grid.id}>
		<SecondaryHeading headingInfo={grid}/>
		<SimpleText>
			Next method is to use CSS Grid Layout. It is newest among other method layout mechanism. However, <ExternalLink address="https://caniuse.com/css-grid">more than 96%</ExternalLink> users have browsers that can support it as of this writing.
		</SimpleText>
		<SimpleText>
			Below is an example positioning the child element in the center (in both horizontal and vertical manner) using the grid layout programmed in vanilla <abbr title="Cascading Style Sheets">CSS</abbr>.
		</SimpleText>
		<div itemprop="workExample" itemscope itemtype="https://schema.org/CreativeWork">
			<div class="grid-based mockup-window border border-secondary bg-base-200">
				<div class="w-full border-t border-secondary bg-base-100 py-4">
					<div class="parent">
						<div class="child">

						</div>
					</div>
				</div>
			</div>
			<p itemprop="text" class="text-center text-sm">
				Example of child positioned in the horizontal center and vertical center using grid layout.
			</p>
		</div>
		<SimpleText>
			Below is corresponding <abbr title="Cascading Style Sheets">CSS</abbr> code to center the child using grid box layout.
		</SimpleText>
		<ExampleCode codeInfo={$loadedFileInfos[0]} beginLineIndex={4} endLineIndex={9}/>
	</StructuredSection>
</ArticlePost>

<style lang="postcss">
	.parent {
		@apply bg-green-900 h-48;
		width: calc(5 / 8 * 100%);
		margin: 0 calc(3 / 16 * 100%);
	}

	.child {
		@apply bg-green-400 h-24;
	}

	.classical .child {
		width: calc(4 / 12 * 100%);
		margin-left: calc(((12 - 4) / 2) / 12 * 100%)
	}

	.flexible .parent {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
	}

	.flexible .child {
		width: calc(1 / 3 * 100%);
		margin: 0.1em;
	}

	.grid-based .parent {
		display: grid;
		grid-template-rows: 1fr 1fr 1fr;
		grid-template-columns: 1fr 1fr 1fr;
	}

	.grid-based .child {
		grid-row-start: 2;
		grid-row-end: 3;
		grid-column-start: 2;
		grid-column-end: 3;
	}
</style>
