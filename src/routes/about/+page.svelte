<script lang="ts">
	import { FIRST_PUBLICATION_DATE } from "@/constants/miscellaneous_meta"

	import Heading from "@/components/general/heading.svelte"
	import CommonHead from "@/components/general/common_head.svelte"
	import ContactLink from "@/components/about/contact_link.svelte"
	import MainArticle from "@/components/general/main_article.svelte"
	import ExternalLink from "@/components/general/links/external.svelte"
	import PageDetailCard from "@/components/general/independent_page_detail_card.svelte"

	const pageVersion = 0.1

	interface Technology {
		name: string,
		homepage: string
	}

	interface TechnologyArea {
		name: string,
		technologies: Technology[]
	}

	const technologies: TechnologyArea[] = [
		{
			"name": "Front-end",
			"technologies": [
				{
					"name": "Vue.js",
					"homepage": "https://vuejs.org/"
				}, {
					"name": "React",
					"homepage": "https://reactjs.org/"
				}, {
					"name": "React",
					"homepage": "https://reactjs.org/"
				}, {
					"name": "Windi CSS",
					"homepage": "https://windicss.org/"
				}, {
					"name": "Bootstrap",
					"homepage": "https://getbootstrap.com/"
				}, {
					"name": "Svelte",
					"homepage": "https://svelte.dev/"
				}, {
					"name": "SvelteKit",
					"homepage": "https://kit.svelte.dev/"
				}, {
					"name": "daisyUi",
					"homepage": "https://daisyui.com/"
				}, {
					"name": "Tailwind CSS",
					"homepage": "https://tailwindcss.com/"
				}
			]
		}, {
			"name": "Back-end",
			"technologies": [
				{
					"name": "Laravel",
					"homepage": "https://laravel.com/"
				}, {
					"name": "Express",
					"homepage": "https://expressjs.com/"
				}, {
					"name": "Apache HTTP Server",
					"homepage": "https://httpd.apache.org/"
				}, {
					"name": "Node.js",
					"homepage": "https://nodejs.org/en/"
				}, {
					"name": "MySQL",
					"homepage": "https://mysql.com/"
				}, {
					"name": "PostgreSQL",
					"homepage": "https://postgresql.org/"
				}, {
					"name": "MongoDB",
					"homepage": "https://www.mongodb.com/"
				}, {
					"name": "SQLite",
					"homepage": "https://www.sqlite.org/index.html"
				}, {
					"name": "Sequelize",
					"homepage": "https://sequelize.org/"
				}
			]
		}, {
			"name": "DevOps and QA",
			"technologies": [
				{
					"name": "GitHub Actions",
					"homepage": "https://github.com/features/actions"
				}, {
					"name": "Jest",
					"homepage": "https://jestjs.io/"
				}, {
					"name": "Docker",
					"homepage": "https://www.docker.com/"
				}, {
					"name": "DigitalOcean",
					"homepage": "https://www.digitalocean.com/"
				}, {
					"name": "TestCafe",
					"homepage": "https://testcafe.io/"
				}
			]
		}, {
			"name": "Tools and Collaboration",
			"technologies": [
				{
					"name": "Git",
					"homepage": "https://git-scm.com/"
				}, {
					"name": "GitHub",
					"homepage": "https://github.com/"
				}, {
					"name": "ESLint",
					"homepage": "https://eslint.org/"
				}, {
					"name": "npm",
					"homepage": "https://www.npmjs.com/"
				}, {
					"name": "rollup.js",
					"homepage": "https://rollupjs.org/guide/en/"
				}, {
					"name": "Vite",
					"homepage": "https://vitejs.dev/"
				}, {
					"name": "nodemon",
					"homepage": "https://nodemon.io/"
				}, {
					"name": "Composer",
					"homepage": "https://getcomposer.org/"
				}, {
					"name": "Gitea",
					"homepage": "https://gitea.io/en-us/"
				}, {
					"name": "GNU Privacy Guard",
					"homepage": "https://www.gnupg.org/"
				}, {
					"name": "OpenSSL",
					"homepage": "https://www.openssl.org/"
				}, {
					"name": "Technitium DNS Server",
					"homepage": "https://technitium.com/dns/"
				}
			]
		}, {
			"name": "Languages (Specialization)",
			"technologies": [
				{
					"name": "Markdown",
					"homepage": "https://www.markdownguide.org/"
				}, {
					"name": "HTML",
					"homepage": "https://html.spec.whatwg.org/"
				}, {
					"name": "JavaScript",
					"homepage": "https://developer.mozilla.org/en-US/docs/Web/javascript"
				}, {
					"name": "CSS",
					"homepage": "https://developer.mozilla.org/en-US/docs/Web/css"
				}, {
					"name": "PHP",
					"homepage": "https://www.php.net/"
				}, {
					"name": "TypeScript",
					"homepage": "https://www.typescriptlang.org/"
				}, {
					"name": "Sass",
					"homepage": "https://sass-lang.com/"
				}, {
					"name": "Rust",
					"homepage": "https://www.rust-lang.org/"
				}, {
					"name": "JSON",
					"homepage": "https://www.json.org/json-en.html"
				}
			]
		}, {
			"name": "Languages (General)",
			"technologies": [
				{
					"name": "C",
					"homepage": "https://en.cppreference.com/w/c"
				}, {
					"name": "C++",
					"homepage": "https://en.cppreference.com/w/cpp"
				}, {
					"name": "Java",
					"homepage": "https://www.java.com/en/"
				}, {
					"name": "Python",
					"homepage": "https://www.python.org/"
				}, {
					"name": "Perl",
					"homepage": "https://www.perl.org/"
				}
			]
		}
	]
</script>

<svelte:head>
	<CommonHead
		title="Who am I?"
		description="Know more about Kenneth Trecy's journey and his skills on I.T. field. Contact details are also listed here if you wnt to connect with him."
		keywords={[ "Kenneth Trecy", "contact" , "journey" ]}
		{pageVersion}/>
</svelte:head>

<MainArticle itemtype="https://schema.org/Person">
	<Heading slot="title">Who am I?</Heading>
	<svelte:fragment slot="content">
		<section>
			<h2>🛩️ Journey</h2>
			<p>
				I am
				<span itemprop="name">
					<span itemprop="givenName">Kenneth Trecy</span>
					<span itemprop="familyName">Tobias</span></span>.
				I am
				<span itemprop="nationality" itemscope itemtype="https://schema.org/Country">
					<span itemprop="name">Filipino</span> living in
					<span itemprop="address">Philippines</span>.
				</span>
				Some people call me <em itemprop="alternateName">"Tretchi"</em>. I have been into programming for a long time.
			</p>
			<p>
				Initially, I was introduced in web development around 2013. Since then, I study every summer and make some small-scale web projects in a low-end Android phone.
			</p>
			<p>
				As the time passed by, I quickly got interest in back-end programming due to
				<abbr title="PHP Hypertext Preprocessor">PHP</abbr>.
				It sparked my interest in <span itemprop="knowsAbout">cybersecurity,
				<abbr title="Create, Read, Update, and Delete">CRUD</abbr> applications, servers, and others</span>.
			</p>
			<p>
				By the time I got my hands on a computer, I spent some time making personal command-line programs using C++. I may have reinvent the wheel but only for purpose of studying.
			</p>
			<p>
				Using this approach, I faced the issues that other developers have already solved. It made me appreciate the existing solutions and strive to be better. I was like a toddler back then mimicking the adults.
			</p>
			<p>
				That did not stopped me to try from thinking innovative solutions. Some solutions are better suited for certain situations. As the saying goes, <em>"it depends!"</em>.
			</p>
		</section>
		<section itemprop="knowsAbout">
			<h2>✨ Skills</h2>
			<p>
				I am specialized in web development, particularly back-end programming. The reason was that back-end programming could support most communication technologies in an increasingly interconnected world. Whether it is a e-commerce website, Internet of Things, or games, they need at a server to process and store their data.
			</p>
			<p>
				Some of my web development skills are the following:
			</p>
			<ul>
				{#each technologies as area}
					<li>
						<section>
							<h3>{area.name}</h3>
							<ul class="columns-2 lg:columns-3 leading-loose not-prose">
								{#each area.technologies as technology}
									<li title={technology.name} class="my-0">
										<ExternalLink address={technology.homepage}>
											{technology.name}
										</ExternalLink>
									</li>
								{/each}
							</ul>
						</section>
					</li>
				{/each}
			</ul>
			<p>
				Also, I have some experience in programming using GameMaker language or GDScript to make small games in the past. I have some basics too on programming Arduino microcontrollers. Beside those, I like reading about cryptography, testing, compilers, and latest technology.
			</p>
			<p>
				Beside programming, I am also good in mathematics and logic. Both fields help me in validation, developing, troubleshooting, and authorization. These skills complement my other interests.
			</p>
		</section>
		<section>
			<h2 id="contact_details">✉️ Contact Details</h2>
			<p>Should you wish to get in touch with me, I can be communicated on different platforms.</p>
			<ul class="list-none not-prose">
				<li itemprop="contactPoint" itemscope itemtype="https://schema.org/ContactPoint">
					<ContactLink
						address="https://www.linkedin.com/in/kenneth-trecy-tobias/"
						icon="linkedin"
						platformName="LinkedIn"
						username="kenneth-trecy-tobias"
						usernameProperty="name"/>
				</li>
				<li itemprop="contactPoint" itemscope itemtype="https://schema.org/ContactPoint">
					<ContactLink
						address="https://github.com/KennethTrecy/"
						icon="github"
						platformName="GitHub"
						username="KennethTrecy"
						usernameProperty="name"/>
				</li>
				<li itemprop="contactPoint" itemscope itemtype="https://schema.org/ContactPoint">
					<ContactLink
						address="mailto:web.kennethtobias@gmail.com"
						icon="gmail"
						platformName="Gmail"
						username="web.kennethtobias@gmail.com"
						usernameProperty="name email"/>
				</li>
			</ul>
		</section>
	</svelte:fragment>
	<PageDetailCard slot="metadata" datePublished={FIRST_PUBLICATION_DATE} {pageVersion}/>
</MainArticle>
