<script lang="ts">
	import type { ReferenceInfo } from "@/types/reference"
	import type { HeadingInfo } from "@/types/container_info"

	import pageMeta from "@/routes/articles/installation_guide_for_fragmented_web_servers/meta"

	import defineHeadingInfo from "@/utilities/definers/define_heading_info"

	import Bookmark from "@/components/general/links/bookmark.svelte"
	import Citation from "@/components/general/links/citation.svelte"
	import Keyword from "@/components/general/containers/keyword.svelte"
	import ExternalLink from "@/components/general/links/external.svelte"
	import BodyGroup from "@/components/general/containers/body_group.svelte"
	import SimpleText from "@/components/general/containers/simple_text.svelte"
	import ArticlePost from "@/components/general/containers/article_post.svelte"
	import SecondaryHeading from "@/components/general/headings/secondary.svelte"
	import SimpleThing from "@/components/general/containers/simple_thing.svelte"
	import StructuredList from "@/components/general/containers/structured_list.svelte"
	import StructuredSection from "@/components/general/containers/structured_section.svelte"
	import StructuredListItem from "@/components/general/containers/structured_list_item.svelte"
	import DescriptiveListItem from "@/components/general/containers/descriptive_list_item.svelte"

	const problem = defineHeadingInfo({ "text": "Problem" })
	const prerequisites = defineHeadingInfo({ "text": "Prerequisites" })
	const steps: HeadingInfo<"defined">[] = [
		{ "text": "HTTP Server Installation" },
		{ "text": "Server Language Installation" },
		{ "text": "Database Installation" }
	].map(defineHeadingInfo)
	const experienceAndPartingWords = defineHeadingInfo({ "text": "Experiences and Parting Word" })

	const references: ReferenceInfo[] = [

	]
</script>

<ArticlePost {pageMeta}>
	<StructuredSection itemprop="about" id={problem.id}>
		<SecondaryHeading headingInfo={problem}/>
		<SimpleText itemprop="description">
			Some web developers may have used an <Keyword>all-in-one server</Keyword> during their first years in web development. The all-in-one server may have a database server and HTTP server with an integrated interpreter (usually to read server-side PHP scripts). However, bundled servers are not always good for scalability or customizability purposes. <strong itemprop="mainEntity">This guides ther developers to set up their "<Keyword>fragmented web servers</Keyword>".</strong>
		</SimpleText>
		<SimpleText>
			If a server component of that bundled server has newer version, developers would need to wait for a new installer containing all of the updates. The developer would also need to download large amount of bytes to get installer which may only update one or more components.
		</SimpleText>
		<SimpleText>
			There are no problems on using a bundled server especially if the developers are looking for a quick and easy solution when they are still at beginner level. Yet, the I.T. industry at this era is fast-paced. When the beginner developers are already done with their basic lessons, this article would prove to be a useful guide to them.
		</SimpleText>
		<StructuredList order="ascending">
			<meta itemprop="numberOfItems" content={`${steps.length}`}>
			{#each steps as step}
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
	<StructuredSection itemtype="https://schema.org/TechArticle" id={prerequisites.id}>
		<link itemprop="mainEntityOfPage" href={`#${pageMeta.pageURL}`}/>
		<SecondaryHeading headingInfo={prerequisites}/>
		<SimpleText>
			The readers of this article are expected to be <span itemprop="proficiencyLevel">semi-intermediate or intermediate</span> web developers. The earlier they know about the topic of this article, the better.
		</SimpleText>
		<SimpleText itemprop="dependencies">
			In addition, readers are encouraged (but not required) to have a sample website to follow the guide and get used to the set up. The website can be simple as having a single page only.
		</SimpleText>
		<SimpleText>
			Website that are made for more than 500 users may be hard to integrate depending on its scalability and required dependencies. It is up to the reader to read complementary information to support their use case.
		</SimpleText>
	</StructuredSection>
	<BodyGroup>
		<StructuredSection id={steps[0].id}>
			<SecondaryHeading headingInfo={steps[0]}/>
			<SimpleText itemprop="description">
				For this step, the reader would use Apache HTTP server. There are other options available such as Nginx. The steps are outlined below.
			</SimpleText>
			<StructuredList order="ascending">
				<DescriptiveListItem>
					Download the <ExternalLink address="https://www.apachehaus.com/cgi-bin/download.plx">portable package (in zipped format) of Apache HTTP server</ExternalLink> from Apache Haus.
				</DescriptiveListItem>
				<DescriptiveListItem>
					Unzip Apache HTTP server to your chosen directory. Label the chosen directory as <var>APACHE_ROOT</var>.
				</DescriptiveListItem>
				<DescriptiveListItem>
					Find the Apache configuration file on <em><var>APACHE_ROOT</var>/conf/httpd.conf</em>.
				</DescriptiveListItem>
				<DescriptiveListItem>
					Uncomment the following modules to enable them: <em>access_compat</em>, <em>rewrite</em>, and <em>headers</em>.
				</DescriptiveListItem>
				<DescriptiveListItem>
					Optionally, reader may want to change listening port of the HTTP server. Listening on <code>0.0.0.0:80</code> allows to machine to listen to all bounded IP address on the computer such as loopback address and local address.
				</DescriptiveListItem>
			</StructuredList>
		</StructuredSection>
		<StructuredSection id={steps[1].id}>
			<SecondaryHeading headingInfo={steps[1]}/>
			<SimpleText itemprop="description">
				For this step, the reader would integrate a server-side script interpreter on Apache HTTP server. PHP interpreter would be used as it is a popular choice based from author's experience.
			</SimpleText>
			<StructuredList order="ascending">
				<DescriptiveListItem>
					Download the <ExternalLink address="https://windows.php.net/download/">portable package (in zipped format) of PHP interpreter</ExternalLink> from Apache Haus.
				</DescriptiveListItem>
				<DescriptiveListItem>
					Unzip PHP interpreter to your chosen directory. Label the chosen directory as <var>PHP_ROOT</var>.
				</DescriptiveListItem>
			</StructuredList>
		</StructuredSection>
		<StructuredSection id={steps[2].id}>
			<SecondaryHeading headingInfo={steps[2]}/>
			<SimpleText itemprop="description">

			</SimpleText>
		</StructuredSection>
		<StructuredSection id={experienceAndPartingWords.id}>
			<SecondaryHeading headingInfo={experienceAndPartingWords}/>
			<SimpleText itemprop="description">

			</SimpleText>
		</StructuredSection>
	</BodyGroup>
</ArticlePost>
