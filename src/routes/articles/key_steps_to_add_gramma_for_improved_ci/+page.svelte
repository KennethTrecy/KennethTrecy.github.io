<script lang="ts">
	import { page } from "$app/stores"
	import { derived } from "svelte/store"

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
	import TertiaryHeading from "@/components/general/headings/tertiary.svelte"
	import ArticlePost from "@/components/general/containers/article_post.svelte"
	import SecondaryHeading from "@/components/general/headings/secondary.svelte"
	import ExampleCode from "@/components/general/containers/example_code.svelte"
	import SimpleThing from "@/components/general/containers/simple_thing.svelte"
	import ExampleOutput from "@/components/general/containers/example_output.svelte"
	import ExampleCommand from "@/components/general/containers/example_command.svelte"
	import StructuredList from "@/components/general/containers/structured_list.svelte"
	import StructuredSection from "@/components/general/containers/structured_section.svelte"
	import DescriptiveListItem from "@/components/general/containers/descriptive_list_item.svelte"
	import StructuredListItem from "@/components/general/containers/structured_list_item.svelte"

	const loadedFileInfos = derived(page, resolvedPage => resolvedPage.data.loadedFileInfos ?? [])

	const background = defineHeadingInfo({ "text": "Background" })
	const prerequisites = defineHeadingInfo({ "text": "Prerequisites" })
	const localSetup = defineHeadingInfo({ "text": "Local Setup" })
	const setupSteps: HeadingInfo<"defined">[] = [
		{ "text": "Installation of Required Package" },
		{ "text": "Setup of E2E Testing Framework" }
	].map(defineHeadingInfo)
	const workflowConfiguration = defineHeadingInfo({ "text": "Workflow Configuration" })
	const execution = defineHeadingInfo({ "text": "Execution" })
	const summary = defineHeadingInfo({ "text": "Summary" })

	const installRequiredPackageCommandInfos: ExecutedCommandSetInfo[] = [
		{
			"description": "If the reader is using version 16, the original package should be installed.",
			"commands": [
				{
					"command": "npm install gramma",
					"output": []
				}
			]
		},
		{
			"description": "However, a reader that is using version 18, the forked package should be installed.",
			"commands": [
				{
					"command": "npm install git+ssh://git@github.com:KennethTrecy/gramma.git#v1.7.0-rc1",
					"output": []
				}
			]
		}
	]
	const installOptionalPackageCommandInfo: ExecutedCommandSetInfo = {
		"description": "Run the installation command below to perform an end-to-end test.",
		"commands": [
			{
				"command": "npm install @playwright/test",
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
		}, {
			"title": "Playwright",
			"link": "https://github.com/microsoft/playwright",
			"itemtype": "https://schema.org/SoftwareSourceCode",
			"linkCategory": "outbound",
			"author": {
				"groupName": "Microsoft Corporation",
				"link": "https://www.microsoft.com"
			},
			"license": {
				"name": "Apache-2.0",
				"link": "https://github.com/microsoft/playwright/blob/main/LICENSE"
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
	<StructuredSection id={prerequisites.id}>
		<SecondaryHeading headingInfo={prerequisites}/>
		<SimpleText>
			Readers are expected to have <span itemprop="proficiencyLevel">intermediate</span> knowledge in JavaScript yet may be a beginner in employing continuous integration. The readers are also assumed to have knowledge in using Node.js <abbr title="Command Line Interface">CLI</abbr> to install packages or run scripts.
		</SimpleText>
		<SimpleText itemprop="dependencies">
			Additionally, it is encouraged (but not required) to have a sample website to follow the steps and have a hands-on experience. Should a reader opt to do a hands-on, the website may even have a single page only for simplicity.
		</SimpleText>
	</StructuredSection>
	<StructuredSection id={localSetup.id}>
		<SecondaryHeading headingInfo={localSetup}/>
		<SimpleText>
			The steps below assumes that there is a website, real or hypothetical, that would be check for its grammar.
		</SimpleText>
		<StructuredList order="ascending">
			<meta itemprop="numberOfItems" content={`${setupSteps.length}`}>
			{#each setupSteps as step}
				<StructuredListItem>
					<SimpleThing itemprop="name">
						<Bookmark
							itemprop="mainEntityOfPage"
							fragment={`#${step.id}`}>
							{step.text}
						</Bookmark>
					</SimpleThing>
				</StructuredListItem>
			{/each}
		</StructuredList>
	</StructuredSection>
	<StructuredSection id={setupSteps[0].id}>
		<TertiaryHeading headingInfo={setupSteps[0]}/>
		<SimpleText>
			The first step is dependent on reader's Node.js environment version. Regardless of the version, the package to be installed locally provides methods to request to a <Citation info={references[3]}>LanguageTool</Citation> server.
		</SimpleText>
		{#each installRequiredPackageCommandInfos as commandInfoSet}
			<ExampleCommand commandInfos={commandInfoSet}/>
		{/each}
	</StructuredSection>
	<StructuredSection id={setupSteps[1].id}>
		<TertiaryHeading headingInfo={setupSteps[1]}/>
		<SimpleText>
			The second step is to setup the E2E testing framework to be used. For this guide, <Citation info={references[4]}>Playwright</Citation> would be used. Readers may choose their preferred framework to scrape the contents of the website as long as they could request through the package from the <Bookmark
				itemprop="citation"
				fragment={`#${setupSteps[0].id}`}>
				first step
			</Bookmark>
		</SimpleText>
		<ExampleCommand commandInfos={installOptionalPackageCommandInfo}/>
	</StructuredSection>
	<StructuredSection id={workflowConfiguration.id}>
		<SecondaryHeading headingInfo={workflowConfiguration}/>
		<SimpleText>
			Copy the code below and paste it a file under <code>.github/workflows</code>.
		</SimpleText>
		<ExampleCode codeInfo={$loadedFileInfos[0]} endLineIndex={38}/>
	</StructuredSection>
</ArticlePost>
