const colorFields = {
  file: "src/cms/database/themeColors.json",
  label: "Colors",
  name: "colors",
  fields: [
    { name: "primary", widget: "color", label: "Primary" },
    { name: "secondary", widget: "color", label: "Secondary" },
  ],
}

export default {
  label: "Theming",
  name: "theming",
  files: [colorFields],
}
