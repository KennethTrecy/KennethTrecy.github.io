import { join, resolve } from "path"

export const ROOT = resolve(__dirname, "..", "..")
export const TYPESCRIPT_CONFIGURATION = "tsconfig.json"
export const TAILWINDCSS_CONFIGURATION = "tailwindcss.config.js"
export const PRERENDER = join("hidden", "renderers")
