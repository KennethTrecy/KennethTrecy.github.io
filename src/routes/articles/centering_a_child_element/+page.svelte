<script lang="ts">
	import { onMount } from "svelte"
	import { page } from "$app/stores"
	import { derived } from "svelte/store"

	import type { ReferenceInfo, LicnseInfo } from "@/types/reference"
	import type { HeadingInfo } from "@/types/container_info"
	import type { PageData } from "@/routes/articles/centering_a_child_element/$types"

	import { internalTypes } from "@/components/general/links/constants"
	import pageMeta from "@/routes/articles/centering_a_child_element/meta"
	import indexPageMeta from "@/routes/meta"
	import {
		exactWidthDemo,
		largerWidthDemo
	} from "@/routes/articles/centering_a_child_element/shared_constants"

	import makeSet from "@/utilities/resource/make_set"
	import defineHeadingInfo from "@/utilities/definers/define_heading_info"

	import BaseLink from "@/components/general/links/base.svelte"
	import Bookmark from "@/components/general/links/bookmark.svelte"
	import Citation from "@/components/general/links/citation.svelte"
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
	const takeaways = defineHeadingInfo({ "text": "Takeaways" })

	const exactWidthDemoSourceSet = makeSet(exactWidthDemo.responsiveLinks)
	const largerWidthDemoSourceSet = makeSet(largerWidthDemo.responsiveLinks)

	const bootstrapCSSInfo: Partial<ReferenceInfo> = {
		"itemtype": "https://schema.org/APIReference",
		"linkCategory": "outbound",
		"author": {
			"groupName": "Twitter, Inc.",
			"link": "https://investor.twitterinc.com/home/default.aspx"
		},
		"license": {
			"name": "CC BY 3.0",
			"link": "https://creativecommons.org/licenses/by/3.0/"
		}
	}
	const MDNContributors = "Mozilla Contributors"
	const CC_BY_SA_LICENSE: LicnseInfo = {
		"name": "CC-BY-SA v2.5",
		"link": "https://creativecommons.org/licenses/by-sa/2.5/"
	}
	const references: ReferenceInfo[] = [
		{
			"title": "Grid system",
			"link": "https://getbootstrap.com/docs/3.4/css/#grid",
			...bootstrapCSSInfo
		}, {
			"title": "Offsetting columns",
			"link": "https://getbootstrap.com/docs/3.4/css/#grid-offsetting",
			...bootstrapCSSInfo
		}, {
			"title": "Web layout history: How we got to grid and flex",
			"link": "https://cran.r-project.org/web/packages/imola/vignettes/imola-why-flex-and-grid.html",
			"itemtype": "https://schema.org/SoftwareApplication",
			"linkCategory": "outbound",
			"author": {
				"givenName": "Pedro",
				"familyName": "Silva",
				"link": "https://github.com/pedrocoutinhosilva"
			},
			"license": [
				{
					"name": "MIT",
					"link": "https://cran.r-project.org/web/licenses/MIT"
				}, {
					"name": "LICENSE",
					"link": "https://cran.r-project.org/web/packages/imola/LICENSE"
				}
			]
		}, {
			"title": "display",
			"link": "https://developer.mozilla.org/en-US/docs/Web/CSS/display",
			"itemtype": "https://schema.org/APIReference",
			"linkCategory": "outbound",
			"author": {
				"groupName": MDNContributors,
				"link": "https://developer.mozilla.org/en-US/docs/Web/CSS/display/contributors.txt"
			},
			"license": CC_BY_SA_LICENSE
		}, {
			"title": "justify-content",
			"link": "https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content",
			"itemtype": "https://schema.org/APIReference",
			"linkCategory": "outbound",
			"author": {
				"groupName": MDNContributors,
				"link": "https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content/contributors.txt"
			},
			"license": CC_BY_SA_LICENSE
		}, {
			"title": "align-items",
			"link": "https://developer.mozilla.org/en-US/docs/Web/CSS/align-items",
			"itemtype": "https://schema.org/APIReference",
			"linkCategory": "outbound",
			"author": {
				"groupName": MDNContributors,
				"link": "https://developer.mozilla.org/en-US/docs/Web/CSS/align-items/contributors.txt"
			},
			"license": CC_BY_SA_LICENSE
		}, {
			"title": "flex-direction",
			"link": "https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction",
			"itemtype": "https://schema.org/APIReference",
			"linkCategory": "outbound",
			"author": {
				"groupName": MDNContributors,
				"link": "https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction/contributors.txt"
			},
			"license": CC_BY_SA_LICENSE
		}, {
			"title": "CSS Grid Layout (level 1) | Can I use... Support tables for HTML5, CSS3, etc",
			"link": "https://caniuse.com/css-grid",
			"itemtype": "https://schema.org/SoftwareApplication",
			"linkCategory": "outbound",
			"author": {
				"givenName": "Alexis",
				"familyName": "Deveria",
				"link": "https://github.com/Fyrd"
			},
			"license": {
				"name": "CC BY 4.0",
				"link": "https://github.com/Fyrd/caniuse/blob/main/LICENSE"
			}
		}, {
			"title": indexPageMeta.title,
			"link": indexPageMeta.pageURL,
			"itemtype": "https://schema.org/SoftwareApplication",
			"linkCategory": "inbound",
			"author": indexPageMeta.authors[0],
			"license": indexPageMeta.license
		}, {
			"title": "3 Ways To Center Elements In CSS",
			"link": "https://dev.to/sanchithasr/3-ways-to-center-elements-in-css-1m43",
			"itemtype": "https://schema.org/TechArticle",
			"linkCategory": "outbound",
			"author": {
				"givenName": "Sanchitha",
				"familyName": "Sharma",
				"link": "https://dev.to/sanchithasr"
			}
		}
	]

	const styleTagLine = 419;
	const classicalBeginLineIndex = styleTagLine + 10;
	const classicalEndLineIndex = classicalBeginLineIndex + 4;
	const flexibleBeginLineIndex = styleTagLine + 15;
	const flexibleEndLineIndex = flexibleBeginLineIndex + 12;
	const gridBeginLineIndex = styleTagLine + 28;
	const gridEndLineIndex = gridBeginLineIndex + 12;
	const unrthodoxBeginLineIndex = styleTagLine + 41;
	const unrthodoxEndLineIndex = unrthodoxBeginLineIndex + 4;
</script>

<ArticlePost {pageMeta}>
	<StructuredSection itemprop="about" id={introduction.id}>
		<SecondaryHeading headingInfo={introduction}/>
		<SimpleText itemprop="about">
			<Keyword>Centering</Keyword> an element is a usual task for a web developer. Images, modals, navigation anchor, and container of block of texts are the common components desired to be in the center. Semantically, Cascading Style Sheets (<abbr>CSS</abbr>) uses the word <em>center</em> to indicate that an element has equal spaces with respect to intended axis.
		</SimpleText>
		<SimpleText>
			A programmer may center a content according to its <Keyword>x-axis</Keyword> (e.g. <code class="terminated">text-align: center</code>), <Keyword>y-axis</Keyword> (e.g. <code class="terminated">vertical-align: middle</code>), or both. This article explores common ways to put an element in the center and presents an unorthodox way for a special use case.
		</SimpleText>
	</StructuredSection>
	<StructuredSection id={classical.id}>
		<SecondaryHeading headingInfo={classical}/>
		<SimpleText>
			The classical way to center an element is through the <Keyword>use of margins</Keyword> of the child element. There are many variations for this technique. A developer in the past can conveniently use this technique in conjunction with the previous versions of CSS frameworks. Utilizing the <Citation info={references[0]}>12-column grid system</Citation>, a developer would the following steps below to determine the margin the child element would take.
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
				Depending on the CSS framework, the developer may <Citation info={references[1]}>offset</Citation> the element by a certain number of column based on quotient in step 3. Otherwise, the quotient would be divided by 12 then multiplied to 100 to get the percentage of left margin.
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
		<ExampleCode
			codeInfo={$loadedFileInfos[0]}
			beginLineIndex={classicalBeginLineIndex}
			endLineIndex={classicalEndLineIndex}/>
	</StructuredSection>
	<StructuredSection id={flexbox.id}>
		<SecondaryHeading headingInfo={flexbox}/>
		<SimpleText>
			Another method is through the use of flexible box layout which was introduced
			<Citation info={references[2]}>around 2012</Citation>. It allows web developer to layout conveniently and responsively as the elements would automatically resize while adhering to the specified properties.
		</SimpleText>
		<SimpleText>
			A web developer would declare certain properties on the parent like <code class="terminated">display: flex</code> paired with <code>flex-direction</code> and/or <code>flex-wrap</code>. On the other hand, children of the flexible parent would have properties like <code>flex-grow</code> and/or <code>flex-basis</code>.
		</SimpleText>
		<SimpleText>
			It is very easy to center an element in both axes using flexible box layout. A web developer would just do the following steps.
		</SimpleText>
		<StructuredList order="ascending">
			<StructuredListItem>
				Set <Citation info={references[3]}> <code class="terminated">display: flex</code></Citation> on the parent.
			</StructuredListItem>
			<StructuredListItem>
				Set <code class="terminated">justify-content: center</code> on the parent. This <Citation info={references[4]}>indicates to center the children with respect to main axis</Citation>.
			</StructuredListItem>
			<StructuredListItem>
				Set <code class="terminated">align-items: center</code> on the parent. This <Citation info={references[5]}>indicates to center the children with respect to cross axis</Citation>.
			</StructuredListItem>
			<StructuredListItem>
				Optionally, set <Citation info={references[6]}><code class="terminated">flex-direction: row</code></Citation> on the parent if there are multiple children to be layout horizontally and direction matters. If the children should be in vertical manner, use <Citation info={references[6]}><code class="terminated">flex-direction: column</code></Citation> instead.
			</StructuredListItem>
		</StructuredList>
		<SimpleText>
			Usually, the <code class="terminated">flex-direction: row</code> sets the x-axis as the main axis and y-axis as the cross axis. If <code class="terminated">flex-direction: column</code> has been used, the y-axis axis would be the main axis and x-axis would be the cross axis.
		</SimpleText>
		<SimpleText>
			Below is an example positioning the child elements in the center (in both horizontal and vertical manner) using the flexible box layout programmed in vanilla <abbr title="Cascading Style Sheets">CSS</abbr>. Note that there is a margin between the two children to distinguish them.
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
		<ExampleCode
			codeInfo={$loadedFileInfos[0]}
			beginLineIndex={flexibleBeginLineIndex}
			endLineIndex={flexibleEndLineIndex}/>
	</StructuredSection>
	<StructuredSection id={grid.id}>
		<SecondaryHeading headingInfo={grid}/>
		<SimpleText>
			Next method is to use CSS Grid Layout. It is newest among other method layout mechanism. However, <Citation info={references[7]}>more than 96%</Citation> users have browsers that can support it as of this writing, based from <ExternalLink address="https://caniuse.com">caniuse.com</ExternalLink>.
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
		<ExampleCode
			codeInfo={$loadedFileInfos[0]}
			beginLineIndex={gridBeginLineIndex}
			endLineIndex={gridEndLineIndex}/>
	</StructuredSection>
	<StructuredSection id={unorthodox.id}>
		<SecondaryHeading headingInfo={unorthodox}/>
		<SimpleText>
			The scenarios above are only applicable if the child element is smaller than its parent. However, there is a special case where in a child is bigger than its parent. As a demonstration, the special case can be seen in <Citation info={references[8]} itemprop="exampleOfWork">this website's home page</Citation>. The home page requires the text container to 65 characters at most. However, there is a box that requires to be greater than its parent.
		</SimpleText>
		<SimpleText>
			If the target box is limited to the full width of the parent in large screens, the text takes vertical space instead. See the image below.
		</SimpleText>
		<img
			itemprop="image"
			src={exactWidthDemo.defaultLink}
			srcset={exactWidthDemoSourceSet}
			width={exactWidthDemo.defaultWidth}
			height={exactWidthDemo.defaultHeight}
			alt={exactWidthDemo.description}
			class="w-full h-auto bg-primary"/>
		<SimpleText>
			To increase the width of the target box, target box should use negative margins to balance.
			This gives an illusion that the target box is in the center of the parent despite that the child's width is bigger than parent's width. The following steps have been generalized to do the <Keyword>unorthodox way</Keyword>. Note that the instructions were based from comment in the source code of the home page.
		</SimpleText>
		<StructuredList order="ascending">
			<StructuredListItem>
				Let <em>self</em> be the target box.
			</StructuredListItem>
			<StructuredListItem>
				Let <var>w<sub>o</sub></var> be the original width of self expressed in percentage. Therefore, it is 100%.
			</StructuredListItem>
			<StructuredListItem>
				Let <var>w<sub>a</sub></var> be the width to be added to self expressed in percentage.
			</StructuredListItem>
			<StructuredListItem>
				Let <var>w<sub>r</sub></var> be the resized width of self. The formula is <var>w<sub>o</sub></var> + <var>w<sub>a</sub></var>.
			</StructuredListItem>
			<StructuredListItem>
				Let <var>m<sub>l</sub></var> be the left margin of resized self expressed in percentage. The left margin should be equal to -<var>w<sub>a</sub></var> ÷ 2.
			</StructuredListItem>
		</StructuredList>
		<SimpleText>
			Below is a snapshot of home page using the unorthodox way. The <var>w<sub>r</sub></var> is 125% and the <var>m<sub>l</sub></var> is 12.5%.
		</SimpleText>
		<img
			itemprop="image"
			src={largerWidthDemo.defaultLink}
			srcset={largerWidthDemoSourceSet}
			width={largerWidthDemo.defaultWidth}
			height={largerWidthDemo.defaultHeight}
			alt={largerWidthDemo.description}
			class="w-full h-auto bg-primary"/>
		<SimpleText>
			To give another example, consider that a developer want to add another 60% of the current width. The solution can be seen below. The current width of self is 150 pixels.
		</SimpleText>
		<div itemprop="workExample" itemscope itemtype="https://schema.org/CreativeWork">
			<StructuredList order="ascending">
				<StructuredListItem>
					Let <var>w<sub>o</sub></var> = 100%.
				</StructuredListItem>
				<StructuredListItem>
					Let <var>w<sub>a</sub></var> = 60%.
				</StructuredListItem>
				<StructuredListItem>
					Let <var>w<sub>r</sub></var> = <var>w<sub>o</sub></var> + <var>w<sub>a</sub></var> = 100% + 60% = 160%.
				</StructuredListItem>
				<StructuredListItem>
					Let <var>m<sub>l</sub></var> = -<var>w<sub>a</sub></var> ÷ 2 = -60% ÷ 2 = -30%.
				</StructuredListItem>
				<StructuredListItem>
					Expected width would be <var>w<sub>r</sub></var> × 150 pixels = 240 pixels. On the other hand, the expected left margin would be <var>m<sub>l</sub></var> × 150 pixels = -45 pixels.
				</StructuredListItem>
			</StructuredList>
		</div>
		<SimpleText>
			Below is a live demonstration of the unorthodox way along with its <abbr title="Cascading Style Sheets">CSS</abbr> code.
		</SimpleText>
		<div itemprop="workExample" itemscope itemtype="https://schema.org/CreativeWork">
			<div class="unorthodox mockup-window border border-secondary bg-base-200">
				<div class="w-full border-t border-secondary bg-base-100 py-4">
					<div class="parent">
						<div class="child">

						</div>
					</div>
				</div>
			</div>
			<p itemprop="text" class="text-center text-sm">
				Example of child positioned in the horizontal center only using negative left margin.
			</p>
		</div>
		<ExampleCode
			codeInfo={$loadedFileInfos[0]}
			beginLineIndex={unrthodoxBeginLineIndex}
			endLineIndex={unrthodoxEndLineIndex}/>
	</StructuredSection>
	<StructuredSection id={takeaways.id}>
		<SecondaryHeading headingInfo={takeaways}/>
		<SimpleText itemprop="about">
			Despite that there are different methods to center an element, each has benefits and limitations. Centering based on 12-column layout may be rigid at the price of convenience. Using  <code class="terminated">display: flex</code> or  <code class="terminated">display: grid</code>, can center a child element as long as it is smaller than the parent yet not for bigger child. Meanwhile, using negative margins is only applicable bigger child element and not for smaller child element.
		</SimpleText>
		<SimpleText>
			Usage of these techniques may depend on the programmer's style, requirements of the system being built, or supported browsers. There is no best solution at every scenario when it comes to centering child elements. There are also techniques not mentioned in this article such as using <Citation info={references[9]}><code>position</code> property</Citation> and others. It is left for the readers to study the other techniques.
		</SimpleText>
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

	.unorthodox .child {
		width: 140%;
		margin-left: -20%;
	}

	code.terminated::after {
		content: ";";
	}
</style>
