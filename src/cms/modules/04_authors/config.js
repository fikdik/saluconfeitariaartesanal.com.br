const fields = [
  {
    label: "Type",
    name: "type",
    widget: "select",
    options: ["Person", "Organization"],
  },
  { label: "Name", name: "name", widget: "string" },
  {
    label: "Key/Value String",
    name: "kvstring",
    widget: "list",
    fields: [
      { label: "Key", name: "key", widget: "string" },
      { label: "Value", name: "value", widget: "string" },
    ],
  },
]

export default {
  label: "Authors",
  name: "authors",
  folder: "content/authors",
  create: true,
  identifier_field: "name",
  slug: "{{slug}}",
  fields,
}
