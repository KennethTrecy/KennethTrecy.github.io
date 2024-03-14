<script lang="ts">
	import { derived } from "svelte/store"
	import { page } from "$app/stores"

	import CommonHead from "@/components/general/common_head.svelte"
	import definePageMeta from "@/utilities/definers/define_page_meta"
	import PrimaryHeading from "@/components/general/headings/primary.svelte"
	import StructuredArticle from "@/components/general/containers/structured_article.svelte"

	const title = derived(
		page,
		pageData => {
			if (pageData.status >= 400 && pageData.status < 500) {
				return "Client Error"
			}

			if (pageData.status >= 500 && pageData.status < 600) {
				return "Server Error"
			}

			return "Unknown Error"
		}
	)

	const message = derived(
		page,
		pageData => {
			const DEFAULT_MESSAGE = "Please contact the Kenneth Trecy if this happens."

			const errorInfos = [
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

	const pageMeta = derived(
		[ page, title ],
		([ pageData, titleData ]) => definePageMeta(pageData.url.pathname, {
			"title": titleData,
			"description": "Encountered an error while visiting a page.",
			"keywords": [ "error" ],
			"version": "1.0",
			"datePublished": new Date()
		})
	)
 </script>

<svelte:head>
	<CommonHead pageMeta={$pageMeta}/>
	<meta name="robots" content="noindex"/>
</svelte:head>

<StructuredArticle>
	<PrimaryHeading slot="title">{$page.status} | {$page.error?.message}</PrimaryHeading>
	<p slot="content">
		{$message}
	</p>
</StructuredArticle>
