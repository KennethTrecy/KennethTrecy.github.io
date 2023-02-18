import type { CompleteViewableFileInfo, ViewableOwnerInfoTree } from "@/types/container_info"

export default function(forest: ViewableOwnerInfoTree[]): CompleteViewableFileInfo[] {
	return forest.reduce((previousFileInfo, currentOwner) => [
		...previousFileInfo,
		...currentOwner.repos.reduce((previousRepos, currentRepo) => [
			...previousRepos,
			...currentRepo.branches.reduce((previousBranches, currentBranch) => [
				...previousBranches,
				...currentBranch.paths.reduce((previousPaths, currentPath) => [
					...previousPaths,
					{
						"owner": currentOwner.owner,
						"repo": currentRepo.repo,
						"branch": currentBranch.branch,
						"path": currentPath
					}
				], <CompleteViewableFileInfo[]>[])
			], <CompleteViewableFileInfo[]>[])
		], <CompleteViewableFileInfo[]>[])
	], <CompleteViewableFileInfo[]>[])
}
