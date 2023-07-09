import { PUBLIC_PRODUCTION_BASE_URL } from "$env/static/public"

export const principlesPath = "/website_info/publishing_principles"
const principlesURL = `${PUBLIC_PRODUCTION_BASE_URL}${principlesPath}`

export const pageStatusSetID = "page_status"
export const pageStatusSetURL = `${principlesURL}#${pageStatusSetID}`
export const draftStatusID = "draft_page_status"
export const draftStatusURL = `${principlesURL}#${draftStatusID}`
export const publishedStatusID = "published_page_status"
export const publishedStatusURL = `${principlesURL}#${publishedStatusID}`
