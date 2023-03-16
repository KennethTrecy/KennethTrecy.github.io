import { PUBLIC_PRODUCTION_BASE_URL } from "$env/static/public"

export const statusPath = "/website_info/publishing_principles"

export const pageStatusSetID = "page_status"
export const pageStatusSetURL = `${PUBLIC_PRODUCTION_BASE_URL}${statusPath}#${pageStatusSetID}`
export const draftStatusID = "draft_page_status"
export const draftStatusURL = `${PUBLIC_PRODUCTION_BASE_URL}${statusPath}#${draftStatusID}`
export const publishedStatusID = "published_page_status"
export const publishedStatusURL = `${PUBLIC_PRODUCTION_BASE_URL}${statusPath}#${publishedStatusID}`
