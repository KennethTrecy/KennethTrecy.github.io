<script lang="ts">
	import pageMeta from "@/routes/about/meta"

	import Heading from "@/components/general/heading.svelte"
	import CommonHead from "@/components/general/common_head.svelte"
	import ContactLink from "@/components/about/contact_link.svelte"
	import MainArticle from "@/components/general/main_article.svelte"
	import ExternalLink from "@/components/general/links/external.svelte"
	import PageDetailCard from "@/components/general/independent_page_detail_card.svelte"

	interface ThirdPartySoftware {
		name: string,
		homepage: string
	}

	interface ThirdPartyPackage extends ThirdPartySoftware {
		license: string,
		licenseLink: string
	}

	const thirdPartyPackages: ThirdPartyPackage[] = [

	]
</script>

<svelte:head>
	<CommonHead {pageMeta}/>
</svelte:head>

<MainArticle itemtype="https://schema.org/Website">
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
	<PageDetailCard slot="metadata" {pageMeta}/>
</MainArticle>
