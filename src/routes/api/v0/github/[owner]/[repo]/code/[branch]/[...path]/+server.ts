import { type RequestEvent } from "@sveltejs/kit"

import { type CodeFile, type CompleteViewableFileInfo } from "@/types/container_info"

import { Octokit } from "@octokit/core"

import { PERSONAL_GITHUB_ACCESS_TOKEN } from "$env/static/private"
import { dev } from "$app/environment"
import permittedFileList from "@/constants/associated_file_list"

interface ExpectedReceivedData {
	html_url: string
	sha: string
	size: number
	content: string
}

export async function GET(event: RequestEvent) {
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
		const octokit = new Octokit({ "auth": PERSONAL_GITHUB_ACCESS_TOKEN })
		const info = await octokit.request(
			"GET /repos/{owner}/{repo}/contents/{path}?ref={branch}",
			{
				...requestedFileInfo,
				"headers": {
					"X-GitHub-Api-Version": "2022-11-28"
				}
			}
		)
		const { "html_url": pageURL, sha, size, content } = info.data as ExpectedReceivedData

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
		"detail": `The file was not found${dev ? " or not permitted" : ""} in the repository.`,
		"source": { "parameter": "path" }
	}), {
		"headers": {
			"Content-Type": "application/vnd.api+json",
			"X-Robots-Tag": "noindex"
		},
		status
	})
}
