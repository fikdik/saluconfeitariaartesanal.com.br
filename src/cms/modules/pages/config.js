const homeFields = {
  file: "content/pages/index.md",
  label: "Home",
  name: "home",
  fields: [
    {
      label: "Flip Card",
      name: "flipcards",
      widget: "list",
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
            { name: "img", widget: "image", label: "Background Image" },
          ],
        },
        {
          name: "back",
          widget: "object",
          label: "Back",
          fields: [
            { label: "Title", name: "title", widget: "string" },
            { label: "Text", name: "description", widget: "string" },
            { label: "Button Link", name: "link", widget: "string" },
            {
              label: "Buton Text",
              name: "linkText",
              widget: "string",
              required: false,
            },
          ],
        },
      ],
    },
  ],
}

const bolosFields = {
  file: "content/pages/bolos.md",
  label: "Bolos",
  name: "bolos",
  fields: [
    { label: "Title", name: "title", widget: "string" },
    {
      label: "Galery",
      name: "galery",
      widget: "list",
      fields: [{ label: "Picture", name: "picture", widget: "image" }],
    },
    { label: "Body", name: "body", widget: "markdown" },
  ],
}

export default {
  label: "Pages",
  name: "pages",
  files: [homeFields, bolosFields],
}
