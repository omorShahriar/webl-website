export default {
  type: "object",
  name: "service",
  title: "Service",
  fields: [
    {
      title: "Icon",
      name: "icon",
      type: "text",
      validation: (Rule) => Rule.required().min(2),
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
