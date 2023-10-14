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
	const stepSections: HeadingInfo<"defined">[] = [
		{ "text": "HTTP Server Installation" },
		{ "text": "Scripting Language Installation" },
		{ "text": "Database Installation" },
		{ "text": "Website Registration" }
	].map(defineHeadingInfo)
	const spaceForImprovements = defineHeadingInfo({ "text": "Space for Improvements" })

	const references: ReferenceInfo[] = [
		{
			"title": "XAMPP",
			"link": "https://www.apachefriends.org/download.html",
			"itemtype": "https://schema.org/SoftwareApplication",
			"linkCategory": "outbound",
			"author": {
				"groupName": "Apache Friends",
				"link": "https://www.apachefriends.org/about.html"
			},
			"license": {
				"name": "GPL 3.0",
				"link": "https://www.gnu.org/licenses/gpl-3.0.html"
			}
		},
		{
			"title": "Apache Haus Downloads",
			"link": "https://www.apachehaus.com/cgi-bin/download.plx",
			"itemtype": "https://schema.org/SoftwareApplication",
			"linkCategory": "outbound",
			"author": {
				"groupName": "The Apache Haus",
				"link": "https://www.apachehaus.com/"
			}
		},
		{
			"title": "mod_access_compat - Apache HTTP Server Version 2.4",
			"link": "https://httpd.apache.org/docs/2.4/mod/mod_access_compat.html",
			"itemtype": "https://schema.org/TechArticle",
			"linkCategory": "outbound",
			"author": {
				"groupName": "The Apache Software Foundation",
				"link": "https://www.apache.org/foundation/"
			},
			"license": {
				"name": "Apache License, Version 2.0",
				"link": "https://httpd.apache.org/docs/2.4/license.html"
			}
		},
		{
			"title": "mod_rewrite - Apache HTTP Server Version 2.4",
			"link": "https://httpd.apache.org/docs/2.4/mod/mod_rewrite.html",
			"itemtype": "https://schema.org/TechArticle",
			"linkCategory": "outbound",
			"author": {
				"groupName": "The Apache Software Foundation",
				"link": "https://www.apache.org/foundation/"
			},
			"license": {
				"name": "Apache License, Version 2.0",
				"link": "https://httpd.apache.org/docs/2.4/license.html"
			}
		},
		{
			"title": "mod_headers - Apache HTTP Server Version 2.4",
			"link": "https://httpd.apache.org/docs/2.4/mod/mod_headers.html",
			"itemtype": "https://schema.org/TechArticle",
			"linkCategory": "outbound",
			"author": {
				"groupName": "The Apache Software Foundation",
				"link": "https://www.apache.org/foundation/"
			},
			"license": {
				"name": "Apache License, Version 2.0",
				"link": "https://httpd.apache.org/docs/2.4/license.html"
			}
		},
		{
			"title": "PHP: What can PHP do? - Manual",
			"link": "https://www.php.net/manual/en/intro-whatcando.php",
			"itemtype": "https://schema.org/Article",
			"linkCategory": "outbound",
			"author": {
				"groupName": "PHP Documentation Group",
				"link": "https://www.php.net/manual/en/preface.php#contributors"
			},
			"license": {
				"name": "CC BY 3.0",
				"link": "https://www.php.net/manual/en/cc.license.php"
			}
		},
		{
			"title": "PHP For Windows: Binaries and sources Releases",
			"link": "https://windows.php.net/download/",
			"itemtype": "https://schema.org/SoftwareApplication",
			"linkCategory": "outbound",
			"author": {
				"groupName": "The PHP Group",
				"link": "https://www.php.net/credits.php"
			}
		},
		{
			"title": "MySQL :: Download MySQL Community Server",
			"link": "https://dev.mysql.com/downloads/mysql/",
			"itemtype": "https://schema.org/SoftwareApplication",
			"linkCategory": "outbound",
			"author": {
				"groupName": "Oracle and/or its affiliates",
				"link": "https://www.oracle.com/"
			}
		},
		{
			"title": "MySQL :: Download MySQL Workbench",
			"link": "https://dev.mysql.com/downloads/workbench/",
			"itemtype": "https://schema.org/SoftwareApplication",
			"linkCategory": "outbound",
			"author": {
				"groupName": "Oracle and/or its affiliates",
				"link": "https://www.oracle.com/"
			}
		},
		{
			"title": "PostgreSQL",
			"link": "https://www.postgresql.org/download/windows/",
			"itemtype": "https://schema.org/SoftwareApplication",
			"linkCategory": "outbound",
			"author": {
				"groupName": "The PostgreSQL Global Development Group",
				"link": "https://www.postgresql.org/about/"
			},
			"license": {
				"name": "PostgreSQL License",
				"link": "https://www.postgresql.org/about/licence/"
			}
		},
		{
			"title": "pgAdmin",
			"link": "https://www.pgadmin.org/download/",
			"itemtype": "https://schema.org/SoftwareApplication",
			"linkCategory": "outbound",
			"author": {
				"groupName": "The pgAdmin Development Team",
				"link": "https://www.pgadmin.org/development/"
			},
			"license": {
				"name": "PostgreSQL License",
				"link": "https://www.pgadmin.org/licence/"
			}
		}
	]
</script>

<ArticlePost {pageMeta}>
	<StructuredSection itemprop="about" id={problem.id}>
		<SecondaryHeading headingInfo={problem}/>
		<SimpleText itemprop="description">
			Some web developers may have used an <Keyword>all-in-one server</Keyword> during their first years in web development. One notable example of a all-in-one server is <Citation info={references[0]}>XAMPP</Citation>. The all-in-one servers may have a database server and HTTP server with an integrated interpreter (usually to execute server-side PHP scripts).
		</SimpleText>
		<SimpleText itemprop="description">
			However, bundled servers are not always good for scalability or customizability purposes. Thus, the author created this <strong itemprop="mainEntity">guide for other developers to set up their "<Keyword>fragmented web servers</Keyword>".</strong>
		</SimpleText>
		<SimpleText>
			If a server component of that bundled server has newer version, developers would need to wait for a new installer containing all of the updates. The developer would also need to download large amount of bytes to get installer which may only update one or more components.
		</SimpleText>
		<SimpleText>
			There are no problems on using a bundled server especially if the developers are looking for a quick and easy solution or if they are still at beginner level. Yet, the I.T. industry at this era is fast-paced. When the beginner developers are already done with their basic lessons, this guide would prove to be a useful for them to grow further.
		</SimpleText>
		<StructuredList order="ascending">
			<meta itemprop="numberOfItems" content={`${stepSections.length}`}>
			{#each stepSections as stepSection}
				<StructuredListItem>
					<SimpleThing itemprop="name">
						<Bookmark
							itemprop="mainEntityOfPage"
							fragment={`#${stepSection.id}`}>
							{stepSection.text}
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
			In addition, readers are encouraged (but not required) to have a sample website to follow the guide. The website can be simple as having a single page only regardless whether it is a dynamic or static one.
		</SimpleText>
		<SimpleText>
			Websites that are made for more than 500 users may be hard to integrate depending on its scalability and required dependencies. It is up to the reader to read complementary information to support their use case.
		</SimpleText>
	</StructuredSection>
	<BodyGroup>
		<StructuredSection id={stepSections[0].id}>
			<SecondaryHeading headingInfo={stepSections[0]}/>
			<SimpleText itemprop="description">
				HTTP servers are the most essential web server that a website administrator must have. In this section, the reader would install <ExternalLink address="https://httpd.apache.org/">Apache HTTP server</ExternalLink>. It is on the reader's choice if they would install other available options such as <ExternalLink address="https://nginx.org/en/">nginx</ExternalLink>. The installation steps are outlined below.
			</SimpleText>
			<StructuredList order="ascending">
				<DescriptiveListItem>
					Download the <Citation info={references[1]}>portable package (in zipped format) of Apache HTTP server</Citation> from <ExternalLink address="https://www.apachehaus.com/cgi-bin/download.plx">Apache Haus</ExternalLink>.
				</DescriptiveListItem>
				<DescriptiveListItem>
					Unzip Apache HTTP server to your chosen directory. Label the chosen directory as <var>APACHE_ROOT</var>.
				</DescriptiveListItem>
				<DescriptiveListItem>
					Find the HTTP server configuration file on <em><var>APACHE_ROOT</var>/conf/httpd.conf</em> and open it.
				</DescriptiveListItem>
				<DescriptiveListItem>
					Uncomment the following modules to enable them: <Citation info={references[2]}>access_compat</Citation>, <Citation info={references[3]}>rewrite</Citation>, and <Citation info={references[4]}>headers</Citation>. Reader can find the modules in the format like this one:<code>LoadModule access_compat_module modules/mod_access_compat.so</code>. Note that filenames may differ depending on the operating system being used.
				</DescriptiveListItem>
				<DescriptiveListItem>
					Optionally, reader may want to change listening port of the HTTP server. Listening on <code>0.0.0.0:80</code> allows the machine to listen to all bounded IP address on the computer such as loopback address and local address.
				</DescriptiveListItem>
			</StructuredList>
		</StructuredSection>
		<StructuredSection id={stepSections[1].id}>
			<SecondaryHeading headingInfo={stepSections[1]}/>
			<SimpleText>
				A scripting language, such as <Citation info={references[5]}>PHP language</Citation>, are usually used in web development to make dynamic web pages. In addition, scripts made in this language allow manipulation of data in the database.
			</SimpleText>
			<SimpleText itemprop="description">
				In this section, the reader would integrate a server-side script interpreter on Apache HTTP server. PHP interpreter would be used as it is a popular choice based from author's experience.
			</SimpleText>
			<StructuredList order="ascending">
				<DescriptiveListItem>
					Download the <Citation info={references[6]}>portable package (in zipped format) of PHP interpreter</Citation> from different binaries. It is recommended to install the latest version of a <em>thread-safe</em> binary.
				</DescriptiveListItem>
				<DescriptiveListItem>
					Unzip PHP interpreter to your chosen directory. Label the chosen directory as <var>PHP_ROOT</var>.
				</DescriptiveListItem>
				<DescriptiveListItem>
					Find the HTTP server configuration file on <em><var>APACHE_ROOT</var>/conf/httpd.conf</em> and open it.
				</DescriptiveListItem>
				<DescriptiveListItem>
					Add <code>LoadModule php_module "PHP_ROOT/php8apache2_4.dll"</code> below the list of modules inside the HTTP server configuration file. This step may vary depending on the major version of the chosen PHP interpreter. Change the <em>PHP_ROOT</em> according to the real path of directory done in step 2.
				</DescriptiveListItem>
				<DescriptiveListItem>
					Below the new line of HTTP server configuration file, add <code>PHPIniDir "PHP_ROOT/php.ini"</code> to configure the PHP interpreter. Change the <em>PHP_ROOT</em> according to the real path of directory done in step 2.
				</DescriptiveListItem>
				<DescriptiveListItem>
					Last line to add is <code>AddHandler application/x-httpd-php .php</code> to instruct the HTTP server to treat files ending on <em>.php</em> as files that can be interpreted by the PHP interpreter.
				</DescriptiveListItem>
				<DescriptiveListItem>
					Find the PHP configuration file on <em><var>PHP_ROOT</var>/php.ini</em> and open it.
				</DescriptiveListItem>
				<DescriptiveListItem>
					Enable the extensions in <em><var>PHP_ROOT</var>/php.ini</em> that can found around line 900 by removing the <code>#</code> symbol before the target line. If the developer would like to communicate to MySQL database server, enable <code>extension=pdo_mysql</code> and <code>extension=mysqli</code>. If the developer would like to communicate to PostgreSQL database server, enable <code>extension=pdo_pgsql</code> and <code>extension=pgsql</code>.
				</DescriptiveListItem>
			</StructuredList>
		</StructuredSection>
		<StructuredSection id={stepSections[2].id}>
			<SecondaryHeading headingInfo={stepSections[2]}/>
			<SimpleText>
				After the installation of HTTP server and scripting language, database servers must be installed to store user data and other secured data such as passwords and access tokens. Depending on the chosen database server, the database may store either structured data, unstructured data, or both.
			</SimpleText>
			<SimpleText itemprop="description">
				In this section, the reader would install database server to be used for saving the data of systems or applications. A GUI-based database client would also be installed to view the data in the database on native desktop environment. It depends on developer's preference.
			</SimpleText>
			<StructuredList order="unordered">
				<DescriptiveListItem>
					If MySQL database server has been preferred, install the <Citation info={references[7]}>MySQL community server</Citation> as a service. After that, install the <Citation info={references[8]}>MySQL Workbench</Citation> separately to view the data.
				</DescriptiveListItem>
				<DescriptiveListItem>
					If PostgreSQL database server has been preferred, install the <Citation info={references[9]}>PostgreSQL database server</Citation>. <Citation info={references[10]}>pgAdmin</Citation>, which is the client application, is already included in the installer.
				</DescriptiveListItem>
			</StructuredList>
		</StructuredSection>
		<StructuredSection id={stepSections[3].id}>
			<SecondaryHeading headingInfo={stepSections[3]}/>
			<SimpleText>
				After the installation of different servers, it is time to make the website accessible to every one.
			</SimpleText>
			<SimpleText itemprop="description">
				In this section, the reader would register the website in the Apache HTTP server configuration.
			</SimpleText>
			<StructuredList order="ascending">
				<DescriptiveListItem>
					After the step 6 in configuring the server language installation, add these tags: <code>&lt;VirtualHost *:80&gt;&lt;/VirtualHost&gt;</code>. These tags define a website to be hosted "virtually". The author thinks of virtual hosts as "renters" and the HTTP server as the "shared building" they live at. They allow multiple websites to be hosted in a single instance of Apache HTTP server.
				</DescriptiveListItem>
				<DescriptiveListItem>
					Inside the <code>&lt;VirtualHost&gt;</code> tags, define a local variable. The syntax is as follows: <code>Define WEBSITE_ROOT "<path to website root>"</code>. Note that <code>WEBSITE_ROOT</code> can be renamed as much as the reader want.
				</DescriptiveListItem>
				<DescriptiveListItem>
					Following the declaration of variable, document root must be declared on a next line and inserting this directive: <code>DocumentRoot "$&lbrace;WEBSITE_ROOT&rbrace;"</code>. This indicates which files to be accessed by the clients.
				</DescriptiveListItem>
				<DescriptiveListItem>
					After the specifying the document root, path of the error log must be specified by inserting this directive: <code>ErrorLog "$&lbrace;WEBSITE_ROOT&rbrace;/error.log"</code>. This indicates where to write the errors from Apache HTTP server. The reader may customize the location of the error log.
				</DescriptiveListItem>
				<DescriptiveListItem>
					Lastly, use this directive: <code>&lt;Directory "$&lbrace;WEBSITE_ROOT&rbrace;"&gt;Require all granted&lt;/Directory&gt;</code>
				</DescriptiveListItem>
			</StructuredList>
		</StructuredSection>
		<StructuredSection id={spaceForImprovements.id}>
			<SecondaryHeading headingInfo={spaceForImprovements}/>
			<SimpleText itemprop="description">
				There are more advanced configurations left as an exercise for the reader. The author recommends the readers to read the documentation for each tool the they use to further their expertise. This is the best bridge available between the source code that explains the exact process and video tutorials that usually provide an overview for beginners.
			</SimpleText>
			<SimpleText>
				Note that the instructions available in this article is a result of several years of experience that the author gained in setting up the servers. It is a difficult path especially for someone is learning these concepts without any supervision or mentorship.
			</SimpleText>
		</StructuredSection>
	</BodyGroup>
</ArticlePost>
