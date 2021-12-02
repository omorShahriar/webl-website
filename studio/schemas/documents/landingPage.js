export default {
  name: "landingPage",
  type: "document",
  title: "Landing Page",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "content",
      type: "array",
      title: "Landing Page sections",
      of: [
        { type: "heroSection" },
        { type: "whyUsSection" },
        { type: "servicesSection" },
        { type: "reviewsSection" },
      ],
    },
  ],
};
