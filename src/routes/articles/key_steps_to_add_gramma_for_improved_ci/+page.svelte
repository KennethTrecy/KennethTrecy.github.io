<script lang="ts">
	import type { ReferenceInfo } from "@/types/reference"
	import type { ExecutedCommandSetInfo, HeadingInfo } from "@/types/container_info"

	import { internalTypes } from "@/components/general/links/constants"
	import pageMeta from "@/routes/articles/key_steps_to_add_gramma_for_improved_ci/meta"
	import indexPageMeta from "@/routes/meta"

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
	import SimpleThing from "@/components/general/containers/simple_thing.svelte"
	import ExampleOutput from "@/components/general/containers/example_output.svelte"
	import StructuredList from "@/components/general/containers/structured_list.svelte"
	import StructuredSection from "@/components/general/containers/structured_section.svelte"
	import DescriptiveListItem from "@/components/general/containers/descriptive_list_item.svelte"

	const background = defineHeadingInfo({ "text": "Background" })
	const prerequisites = defineHeadingInfo({ "text": "Prerequisites" })
	const localSetup = defineHeadingInfo({ "text": "Local Setup" })
	const workflowConfiguration = defineHeadingInfo({ "text": "Workflow Configuration" })
	const execution = defineHeadingInfo({ "text": "Execution" })
	const summary = defineHeadingInfo({ "text": "Summary" })

	const installPackageCommandInfo: ExecutedCommandSetInfo = {
		"description": "First set of steps to setup the CI",
		"commands": [
			{
				"command": "npm install ",
				"output": []
			},
			{
				"command": "npm init",
				"output": []
			}
		]
	}

	const references: ReferenceInfo[] = [
		{
			"title": "About continuous integration - GitHub Docs",
			"link": "https://docs.github.com/en/actions/automating-builds-and-tests/about-continuous-integration",
			"itemtype": "https://schema.org/Article",
			"linkCategory": "outbound",
			"author": {
				"groupName": "GitHub Inc.",
				"link": "https://github.com"
			},
			"license": {
				"name": "CC BY 4.0",
				"link": "https://github.com/github/docs/blob/main/LICENSE"
			}
		}, {
			"title": indexPageMeta.title,
			"link": indexPageMeta.pageURL,
			"itemtype": "https://schema.org/SoftwareApplication",
			"linkCategory": "inbound",
			"author": indexPageMeta.authors[0],
			"license": indexPageMeta.license
		}, {
			"title": "SEO Starter Guide: The Basics | Google Search Central  |  Documentation  |  Google Developers",
			"link": "https://developers.google.com/search/docs/fundamentals/seo-starter-guide#knowyourreaders",
			"itemtype": "https://schema.org/Article",
			"linkCategory": "outbound",
			"author": {
				"groupName": "Google Developers",
				"link": "https://developers.google.com/terms/site-policies"
			},
			"license": {
				"name": "CC BY 4.0",
				"link": "https://creativecommons.org/licenses/by/4.0/"
			}
		}, {
			"title": "LanguageTool",
			"link": "https://github.com/languagetool-org/languagetool",
			"itemtype": "https://schema.org/SoftwareSourceCode",
			"linkCategory": "outbound",
			"author": {
				"groupName": "LanguageTool Contributors",
				"link": "https://github.com/languagetool-org/languagetool/graphs/contributors"
			},
			"license": {
				"name": "LGPL-2.1",
				"link": "https://github.com/languagetool-org/languagetool/blob/master/COPYING.txt"
			}
		}
	]
</script>

<ArticlePost {pageMeta}>
	<StructuredSection itemprop="about backstory" id={background.id}>
		<SecondaryHeading headingInfo={background}/>
		<SimpleText itemprop="description">
			To ensure the quality of software builds, <Keyword>continuous integration</Keyword> has been practiced to <Citation info={references[0]}>guarantee that a developer's commit does not introduce errors</Citation>. Bugs, errors, or other glitches would be likely to occur in software development, particularly on new untested code. Therefore, detecting these mistakes early are crucial to maintain usability and reliability.
		</SimpleText>
		<SimpleText>
			One particular example is <Citation info={references[1]} itemprop="exampleOfWork">this website itself</Citation> which employs continuous integration to run different tests such as unit tests. Some of these tests check for grammatical errors in the text content of different pages.
		</SimpleText>
		<SimpleText>
			The reason is that grammar is particularly important in formal contexts. Even in informal context, having a good grammar helps the writer to convey the ideas correctly. It is even recommended by a search engine to <Citation info={references[2]}>avoid mistakes in grammar or spellings</Citation>.
		</SimpleText>
	</StructuredSection>
	<section id={prerequisites.id}>
		<SecondaryHeading headingInfo={prerequisites}/>
		<SimpleText>
			Readers are expected to have <span itemprop="proficiencyLevel">intermediate</span> knowledge in JavaScript yet may be a beginner in employing continuous integration. The readers are also assumed to have knowledge in using Node.js <abbr title="Command Line Interface">CLI</abbr> to install packages or run scripts.
		</SimpleText>
		<SimpleText itemprop="dependencies">
			Additionally, it is encouraged (but not required) to have a sample website to follow the steps and have a hands-on experience. Should a reader opt to do a hands-on, the website may even have a single page only for simplicity.
		</SimpleText>
	</section>
	<section id={localSetup.id}>
		<SecondaryHeading headingInfo={localSetup}/>
		<SimpleText>
			The steps below assumes that there is a website, real or hypothetical, that would be check for its grammar.
		</SimpleText>
		<StructuredList order="ascending">
			<meta itemprop="numberOfItems" content="5">
			<DescriptiveListItem>
				Run the command: <code>npm install gramma</code>. This installs the required package locally which provides methods to request to a <Citation info={references[3]}>LanguageTool</Citation> server.
			</DescriptiveListItem>
			<DescriptiveListItem>
				Run the command: <code>npm install @playwright/test</code>. This installs the tool to do an end-to-end (<abbr>E2E</abbr>) tests. On those tests, the web page to check for grammar would be visited and scrape its textual contents. Readers may choose their preferred framework to scrape the contents of the website as long as they could request through the package installed in step 1.
			</DescriptiveListItem>
		</StructuredList>
	</section>
</ArticlePost>
