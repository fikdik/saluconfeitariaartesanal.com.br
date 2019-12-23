import CMS from "netlify-cms-app"

import HomePagePreview from "./templates/home"

export default function registerPreview() {
  CMS.registerPreviewTemplate("home", HomePagePreview)
}
