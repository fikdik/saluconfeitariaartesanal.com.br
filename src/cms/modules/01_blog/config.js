const fields = [
  {
    label: "Template Key",
    name: "templateKey",
    widget: "hidden",
    default: "blog-post",
  },
  { label: "Title", name: "title", widget: "string" },
  { label: "Publish Date", name: "date", widget: "datetime" },
  { label: "Description", name: "description", widget: "text" },
  { label: "Featured Post", name: "featuredpost", widget: "boolean" },
  {
    label: "Featured Image",
    name: "featuredimage",
    widget: "image",
    required: false,
  },
  { label: "Body", name: "body", widget: "markdown" },
  { label: "Tags", name: "tags", widget: "list" },
]

export default {
  label: "Blog",
  name: "blog",
  folder: "content/blog",
  create: true,
  slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
  fields,
}