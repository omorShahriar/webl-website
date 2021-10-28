export default {
  type: "object",
  name: "heroSection",
  title: "Hero Section",
  fields: [
    {
      name: "heading",
      type: "string",
      title: "Heading",
    },
    {
      name: "tagline",
      type: "text",
      title: "Tagline",
    },
    {
      name: "heroImage",
      type: "image",
      title: "Hero image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "ctas",
      type: "array",
      title: "Call to actions",
      of: [
        {
          title: "Call to action",
          type: "cta",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "heading",
      media: "heroImage",
    },
    prepare({ title, media }) {
      return {
        title,
        subtitle: "Hero section",
        media,
      };
    },
  },
};
