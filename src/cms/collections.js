import pages from "./modules/pages/config.js"
import pagesRegisterPreview from "./modules/pages/preview"
import settings from "./modules/settings/config.js"
import share from "./modules/share/config.js"
import theme from "./modules/theme/config.js"

export const collections = [pages, share, theme, settings]

export function registerPreviews() {
  pagesRegisterPreview()
}
