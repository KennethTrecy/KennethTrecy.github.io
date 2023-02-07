import type { ViewableOwnerInfoTree, CompleteViewableFileInfo } from "@/types/body"

export default function(forest: ViewableOwnerInfoTree[]): CompleteViewableFileInfo[] {
	return forest.reduce((previousFileInfo, currentOwner) => [
		...previousFileInfo,
		...currentOwner.repos.reduce((previousRepos, currentRepo) => [
			...previousRepos,
			...currentRepo.paths.reduce((previousPaths, currentPath) => [
				...previousPaths,
				{
					"owner": currentOwner.owner,
					"repo": currentRepo.repo,
					"path": currentPath
				}
			], <CompleteViewableFileInfo[]>[])
		], <CompleteViewableFileInfo[]>[])
	], <CompleteViewableFileInfo[]>[])
}
