const manifestFields = {
  file: "src/cms/database/manifest.json",
  label: "Manifest",
  name: "manifest",
  fields: [
    { name: "name", widget: "string", label: "Name" },
    { name: "short_name", widget: "string", label: "Short Name" },
    { name: "start_url", widget: "string", label: "Start URL" },
    { name: "background_color", widget: "string", label: "Background Color" },
    { name: "theme_color", widget: "string", label: "Theme Color" },
    { name: "display", widget: "hidden", default: "standalone" }, // not Working
    { name: "icon", widget: "image", label: "Icon" },
  ],
}

const siteMetadataFields = {
  file: "src/cms/database/siteMetadata.json",
  label: "Site Metadata",
  name: "siteMetadata",
  fields: [
    { name: "title", widget: "string", label: "Title" },
    { name: "siteUrl", widget: "string", label: "Site Url" },
    { name: "slogan", widget: "string", label: "Short Slogan" },
    { name: "description", widget: "string", label: "Short Description" },
  ],
}

const featuresFields = {
  file: "src/cms/database/features.json",
  label: "Features",
  name: "features",
  fields: [
    { name: "nprogress_color", widget: "string", label: "Loader Color" },
  ],
}

export default {
  label: "Settings",
  name: "settings",
  files: [manifestFields, siteMetadataFields, featuresFields],
}
