const colorFields = {
  label: "Colors",
  name: "colors",
  file: "content/theme/colors.json",
  fields: [
    {
      label: "Color",
      name: "color",
      widget: "list",
      fields: [
        { label: "Name", name: "name", widget: "string" },
        { label: "Color", name: "color", widget: "string" },
      ],
    },
  ],
}

export default {
  label: "Theming",
  name: "theming",
  files: [colorFields],
}
