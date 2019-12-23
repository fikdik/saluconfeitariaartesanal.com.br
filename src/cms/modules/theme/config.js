const colorFields = {
  file: "src/cms/database/themeColors.json",
  label: "Colors",
  name: "colors",
  fields: [
    {
      name: "color",
      widget: "list",
      label: "Color",
      fields: [
        { name: "name", widget: "string", label: "Name" },
        { name: "color", widget: "string", label: "color" },
      ],
    },
  ],
}

export default {
  label: "Theming",
  name: "theming",
  files: [colorFields],
}
