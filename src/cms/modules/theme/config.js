const colorFields = {
  file: "src/cms/database/themeColors.json",
  label: "Colors",
  name: "colors",
  fields: [
    { name: "primary", widget: "string", label: "Primary" },
    { name: "secondary", widget: "string", label: "Secondary" },
    { name: "nprogress_color", widget: "string", label: "Loader Color" },
  ],
}

export default {
  label: "Theming",
  name: "theming",
  files: [colorFields],
}
