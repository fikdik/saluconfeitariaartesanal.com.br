const socialFields = {
  label: "Social Network",
  name: "socialNetwork",
  file: "content/share/social.json",
  fields: [
    {
      label: "Social Url",
      name: "social",
      widget: "list",
      fields: [
        {
          label: "Network",
          name: "network",
          widget: "select",
          options: ["facebook", "instagram"],
        },
        { label: "Link", name: "url", widget: "string" },
      ],
    },
  ],
}

export default {
  label: "Share",
  name: "share",
  files: [socialFields],
}
