import type { CodeFile } from "@/types/container_info"
import type { RequestEvent } from "@sveltejs/kit"

import { Octokit } from "@octokit/core"

import { PERSONAL_GITHUB_ACCESS_TOKEN } from "$env/static/private"

export async function GET(event: RequestEvent) {
	const octokit = new Octokit({ "auth": PERSONAL_GITHUB_ACCESS_TOKEN })

	const info = await octokit.request("GET /repos/{owner}/{repo}/contents/{path}", {
		"owner": event.params.owner as string,
		"repo": event.params.repo as string,
		"path": event.params.path as string
	})

	const { "html_url": pageURL, sha, size, content } = info.data as {
		"html_url": string
		"sha": string
		"size": number
		"content": string
	}

	return new Response(JSON.stringify(<CodeFile>{
		"viewURL": pageURL,
		sha,
		size,
		content
	}))
}
