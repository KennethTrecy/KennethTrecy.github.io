interface LinkedInfo {
	link: string
}

export interface PersonInfo extends LinkedInfo {
	givenName: string
	familyName: string
}

interface GroupInfo extends LinkedInfo {
	groupName: string
}

export interface LicenseInfo extends LinkedInfo {
	name: string
}

type ReferenceLinkCategory =
	| "inbound"
	| "outbound"

export interface ReferenceInfo extends LinkedInfo {
	title: string
	linkCategory: ReferenceLinkCategory
	itemtype: string
	author: PersonInfo|GroupInfo
	license: LicenseInfo
}
