<script lang="ts">
	import CommonHead from "@/components/general/common_head.svelte"
	import ContactLink from "@/components/about/contact_link.svelte"
	import ExternalLink from "@/components/general/external_link.svelte"
</script>

<svelte:head>
	<CommonHead
		title="About | KennethTrecy"
		description="Information about Kenneth Trecy Tobias' journey and contact details"
		keywords={[ "Kenneth Trecy", "contact" , "journey" ]}
		pageVersion="0.1"/>
</svelte:head>

<div class="h-full w-full flex flex-col justify-center items-center">
	<article class="pb-8">
		<section class="container my-4 flex flex-col justify-center items-center text-justify">
			<div class="prose md:prose-lg">
				<h1>Who am I?</h1>
				<p>
					I am Kenneth Trecy Tobias. I am Filipino living in Philippines. Some people call me <em>"Tretchi"</em>. I have been into programming for a long time.
				</p>
				<p>
					Initially, I was introduced in web development around 2013. Back then, I study every summer and make some small-scale web projects in a low-end Android phone.
				</p>
				<p>
					As the time passed by, I quickly got interest in back-end programming due to <abbr title="PHP Hypertext Preprocessor">PHP</abbr>. It sparked my interest in cybersecurity, CRUD applications, servers, and others.
				</p>
				<p>
					By the time I got my hands on a computer, I spent some time making personal command-line programs using C++. I may have reinvent the wheel but only for purpose of studying.
				</p>
				<p>
					Using this approach, I faced the issues that other developers have already solved. It made me appreciate the existing solutions and strive to be better. I was like a toddler back then mimicking the adults.
				</p>
				<p>
					That did not stopped me from thinking innovative solutions. Some solutions are better suited for certain situations. As the saying goes, <em>"it depends!"</em>.
				</p>
			</div>
		</section>
		<section class="container my-4 flex flex-col justify-center items-center text-justify">
			<div class="prose md:prose-lg">
				<h2>Skills</h2>
				<p>
					I am specialized my web development skills, particularly back-end programming. The reason was that back-end programming could support most communication technologies in an increasingly interconnected world. Whether it is a e-commerce website, Internet of Things, or games, they need at a server to process and store their data.
				</p>
				<p>
					Some of my web development skills are the following:
				</p>
				<ul>
					<li>
						<section>
							<h3>Front-end</h3>
							<ul class="columns-2">
								<li>
									<ExternalLink address="https://vuejs.org/">
										Vue.js
									</ExternalLink>
								</li>
								<li>
									<ExternalLink address="https://reactjs.org/">
										React
									</ExternalLink>
								</li>
								<li>
									<ExternalLink address="https://windicss.org/">
										Windi CSS
									</ExternalLink>
								</li>
								<li>
									<ExternalLink address="https://getbootstrap.com/">
										Bootstrap
									</ExternalLink>
								</li>
								<li>
									<ExternalLink address="https://svelte.dev/">
										Svelte
									</ExternalLink>
								</li>
								<li>
									<ExternalLink address="https://kit.svelte.dev/">
										SvelteKit
									</ExternalLink>
								</li>
								<li>
									<ExternalLink address="https://daisyui.com/">
										daisyUi
									</ExternalLink>
								</li>
								<li>
									<ExternalLink address="https://tailwindcss.com/">
										Tailwind CSS
									</ExternalLink>
								</li>
							</ul>
						</section>
					</li>
					<li>
						<section>
							<h3>Foundation</h3>
							<ul>
								<li>HTML</li>
								<li>Javascript</li>
								<li>CSS</li>
								<li>PHP</li>
							</ul>
						</section>
					</li>
				</ul>
				<p>
					Beside programming, I am also good in mathematics and logic. Both fields helps me in validation, troubleshooting, and authorization.
				</p>
			</div>
		</section>
		<section class="container my-4 flex flex-col justify-center items-center">
			<div class="prose md:prose-lg">
				<h2 id="contact_details">Contact Details</h2>
				<p>Should you wish to get in touch with me, I can be communicated on different platforms.</p>
				<ul class="list-none not-prose">
					<li>
						<ContactLink
							address="https://www.linkedin.com/in/kenneth-trecy-tobias/"
							icon="linkedin"
							platformName="LinkedIn"
							username="kenneth-trecy-tobias"/>
					</li>
					<li>
						<ContactLink
							address="https://github.com/KennethTrecy/"
							icon="github"
							platformName="GitHub"
							username="KennethTrecy"/>
					</li>
					<li>
						<ContactLink
							address="mailto:web.kennethtobias@gmail.com"
							icon="gmail"
							platformName="Gmail"
							username="web.kennethtobias@gmail.com"/>
					</li>
				</ul>
			</div>
		</section>
	</article>
</div>
