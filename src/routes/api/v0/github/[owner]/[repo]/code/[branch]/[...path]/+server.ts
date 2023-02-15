import type { RequestEvent } from "@sveltejs/kit"

import type { CodeFile, CompleteViewableFileInfo } from "@/types/container_info"

import { Octokit } from "@octokit/core"

import { PERSONAL_GITHUB_ACCESS_TOKEN } from "$env/static/private"
import permittedFileList from "@/constants/associated_file_list"

export async function GET(event: RequestEvent) {
	const octokit = new Octokit({ "auth": PERSONAL_GITHUB_ACCESS_TOKEN })

	const requestedFileInfo: CompleteViewableFileInfo = {
		"owner": event.params.owner as string,
		"repo": event.params.repo as string,
		"branch": event.params.branch as string,
		"path": event.params.path as string
	}

	if (permittedFileList.some(
		fileInfo => fileInfo.owner === requestedFileInfo.owner
			&& fileInfo.repo === requestedFileInfo.repo
			&& fileInfo.branch === requestedFileInfo.branch
			&& fileInfo.path === requestedFileInfo.path
	)) {
		const info = await octokit.request(
			"GET /repos/{owner}/{repo}/contents/{path}?ref={branch}",
			{ ...requestedFileInfo }
		)

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

	const status = 404
	return new Response(JSON.stringify({
		"id": "1",
		"code": "0x1",
		status,
		"title": "Not Found",
		"detail": "The file was not found in the repository.",
		"source": { "parameter": "path" }
	}), {
		"headers": { "Content-Type": "application/vnd.api+json" },
		status
	})
}
