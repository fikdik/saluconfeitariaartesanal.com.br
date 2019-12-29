const homeFields = {
  file: "src/pages/index.md",
  label: "Home",
  name: "home",
  fields: [
    {
      name: "templateKey",
      widget: "hidden",
      default: "home-page",
      label: "Template Key",
    },
    {
      name: "flipcards",
      widget: "list",
      label: "Flip Card",
      fields: [
        {
          name: "front",
          widget: "object",
          label: "Front",
          fields: [
            { name: "title", widget: "string", label: "Title" },
            {
              name: "icon",
              widget: "select",
              label: "Icon",
              options: [
                { label: "Smile", value: "smile" },
                { label: "Gift", value: "gift" },
                { label: "Coffee Mug", value: "coffee" },
              ],
            },
            { name: "imgPath", widget: "image", label: "Background Image" },
          ],
        },
        {
          name: "back",
          widget: "object",
          label: "Back",
          fields: [
            { name: "title", widget: "string", label: "Title" },
            { name: "description", widget: "string", label: "Text" },
            { name: "link", widget: "string", label: "Button Link" },
            {
              name: "linkText",
              widget: "string",
              label: "Buton Text",
              required: false,
            },
          ],
        },
      ],
    },
  ],
}

export default {
  label: "Pages",
  name: "pages",
  files: [homeFields],
}
