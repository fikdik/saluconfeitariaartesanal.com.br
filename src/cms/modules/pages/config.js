const homeFields = {
  file: "src/pages/index.md",
  label: "Home",
  name: "home",
  fields: [
    {
      name: "flipcard",
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
            { name: "bgColor", widget: "string", label: "Background Color" },
            { name: "bgImage", widget: "image", label: "Background Image" },
          ],
        },
        {
          name: "back",
          widget: "object",
          label: "Back",
          fields: [
            { name: "title", widget: "string", label: "Title" },
            { name: "text", widget: "string", label: "Text" },
            { name: "btnText", widget: "string", label: "Buton Text" },
            { name: "btnLink", widget: "string", label: "Button Link" },
            { name: "bgColor", widget: "string", label: "Background Color" },
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
