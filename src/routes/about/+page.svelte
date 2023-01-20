<script lang="ts">
	import CommonHead from "@/components/general/common_head.svelte"
	import ContactLink from "@/components/about/contact_link.svelte"
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
