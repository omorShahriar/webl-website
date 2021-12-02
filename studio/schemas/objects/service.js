export default {
  type: "object",
  name: "service",
  title: "Service",
  fields: [
    {
      title: "Icon",
      name: "icon",
      type: "iconPicker",
      options: {
        outputFormat: "react",
      },
    },
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "description",
    },
  },
};
