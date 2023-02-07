import type { RequestEvent } from "@sveltejs/kit"
import type { CodeFile } from "@/types/body"

import { Octokit } from "@octokit/core"

import { PERSONAL_GITHUB_ACCESS_TOKEN } from "$env/static/private"

export async function GET(event: RequestEvent) {
	const octokit = new Octokit({ "auth": PERSONAL_GITHUB_ACCESS_TOKEN })

	const info = await octokit.request("GET /repos/{owner}/{repo}/contents/{path}", {
		"owner": event.params.owner as string,
		"repo": event.params.repo as string,
		"path": event.params.path as string
	})

	const { html_url, sha, size, content } = info.data as any

	return new Response(JSON.stringify(<CodeFile>{
		"viewURL": html_url,
		sha,
		size,
		content
	}))
}
