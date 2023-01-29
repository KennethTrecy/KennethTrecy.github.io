<script lang="ts">
	import { derived } from "svelte/store"
	import { page } from "$app/stores"

	import CommonHead from "@/components/general/common_head.svelte"
	import PrimaryHeading from "@/components/general/headings/primary.svelte"
	import MainArticle from "@/components/general/containers/main_article.svelte"

	const pageVersion = "0.1"
	const title = derived(
		page,
		pageData => (
			400 <= pageData.status && pageData.status < 500
				? "Client Error"
				: 500 <= pageData.status && pageData.status < 600
					? "Server Error"
					: "Unknown Error"
		) as string
	)
	const message = derived(
		page,
		pageData => {
			interface ErrorMessage {
				status: number,
				message: string
			}

			const DEFAULT_MESSAGE = "Please contact the Kenneth Trecy if this happens."

			const errorInfos: ErrorMessage[] = [
				{
					"status": 404,
					"message": "The page for this URL does not exist or has been archived."
				}, {
					"status": 500,
					"message": "Server error happened. Please contact Kenneth Trecy if this happens."
				}
			]

			for (const errorInfo of errorInfos) {
				if (errorInfo.status === pageData.status) {
					return errorInfo.message
				}
			}

			return DEFAULT_MESSAGE
		}
	)
 </script>

<svelte:head>
	<CommonHead
		title={$title}
		description="Encountered an error while visiting a page."
		keywords={[ "error" ]}
		{pageVersion}/>
</svelte:head>

<MainArticle>
	<PrimaryHeading slot="title">{$page.status} | {$page.error?.message}</PrimaryHeading>
	<p slot="content">
		{$message}
	</p>
</MainArticle>
