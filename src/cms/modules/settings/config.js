const manifestFields = {
  label: "Manifest",
  file: "content/settings/manifest.json",
  name: "manifest",
  fields: [
    { label: "Name", name: "name", widget: "string" },
    { label: "Short Name", name: "short_name", widget: "string" },
    { label: "Start URL", name: "start_url", widget: "string" },
    { label: "Background Color", name: "background_color", widget: "string" },
    { label: "Theme Color", name: "theme_color", widget: "string" },
    {
      label: "Display",
      name: "display",
      widget: "hidden",
      default: "standalone",
    }, // not Working
    { label: "Icon", name: "icon", widget: "image" },
  ],
}

const siteMetadataFields = {
  file: "content/settings/siteMetadata.json",
  label: "Site Metadata",
  name: "siteMetadata",
  fields: [
    { label: "Title", name: "title", widget: "string" },
    { label: "Site Url", name: "siteUrl", widget: "string" },
    { label: "Short Slogan", name: "slogan", widget: "string" },
    { label: "Short Description", name: "description", widget: "string" },
  ],
}

const menuFields = {
  file: "content/settings/menu.json",
  label: "Menu",
  name: "menu",
  fields: [
    {
      label: "Links", name: "links", widget: "list", fields: [
        { label: "Label", name: "label", widget: "string" },
        { label: "to", name: "to", widget: "string", required: false },
        { label: "href", name: "href", widget: "string", required: false },
      ]
    },
  ],
}

export default {
  label: "Settings",
  name: "settings",
  files: [manifestFields, siteMetadataFields, menuFields],
}
