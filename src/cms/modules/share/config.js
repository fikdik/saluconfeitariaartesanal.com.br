const socialFields = {
  file: "src/cms/database/social.json",
  label: "Social Network",
  name: "socialNetwork",
  fields: [
    {
      name: "social",
      widget: "list",
      label: "Social Url",
      fields: [
        {
          name: "network",
          widget: "select",
          label: "Network",
          options: ["facebook", "instagram"],
        },
        { name: "url", widget: "string", label: "Link" },
      ],
    },
  ],
}

export default {
  label: "Share",
  name: "share",
  files: [socialFields],
}
