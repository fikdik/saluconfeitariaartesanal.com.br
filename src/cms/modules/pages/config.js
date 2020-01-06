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
      fields: [
        { label: "Label", name: "label", widget: "string", required: false },
        { label: "Picture", name: "picture", widget: "image" },
      ],
    },
    { label: "Body", name: "body", widget: "markdown" },
  ],
}

const especiaisFields = {
  file: "content/pages/especiais.md",
  label: "Especiais",
  name: "especiais",
  fields: [
    { label: "Title", name: "title", widget: "string" },
    {
      label: "Galery",
      name: "galery",
      widget: "list",
      fields: [
        { label: "Label", name: "label", widget: "string", required: false },
        { label: "Picture", name: "picture", widget: "image" },
      ],
    },
    { label: "Body", name: "body", widget: "markdown" },
  ],
}

const coffeebreakFields = {
  file: "content/pages/coffee-break.md",
  label: "Coffee Break",
  name: "coffee-break",
  fields: [
    { label: "Title", name: "title", widget: "string" },
    {
      label: "Texts",
      name: "texts",
      widget: "list",
      fields: [{ label: "Paragraph", name: "paragraph", widget: "string" }],
    },
    {
      label: "Cards",
      name: "cards",
      widget: "list",
      fields: [
        { label: "Label", name: "label", widget: "string" },
        { label: "Description", name: "description", widget: "string" },
        { label: "Icon", name: "icon", widget: "image" },
        { label: "Link Text", name: "linkText", widget: "string" },
        { label: "Link Url", name: "linkUrl", widget: "string" },
      ],
    },
    { label: "Body", name: "body", widget: "markdown" },
  ],
}

export default {
  label: "Pages",
  name: "pages",
  files: [homeFields, bolosFields, especiaisFields, coffeebreakFields],
}
