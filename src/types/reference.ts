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

export interface ReferenceInfo extends LinkedInfo {
	title: string
	author: PersonInfo|GroupInfo
	license: LicenseInfo
}
