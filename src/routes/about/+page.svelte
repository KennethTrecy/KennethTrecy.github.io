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
				<h2>Contact Details</h2>
				<p>Should you wish to get in touch with me, I can be communicated on different platforms.</p>
				<ul>
					<li>
						<ContactLink
							address="https://www.linkedin.com/in/kenneth-trecy-tobias/"
							icon="linkedin"
							platformName="LinkedIn"
							username="kenneth-trecy-tobias"/>
					</li>
				</ul>
			</div>
		</section>
	</article>
</div>
