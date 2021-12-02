export default {
  type: "object",
  name: "servicesSection",
  title: "Services Section",
  fields: [
    {
      name: "heading",
      type: "string",
      title: "Heading",
    },
    {
      name: "services",
      type: "array",
      title: "Services",
      of: [
        {
          title: "Service",
          type: "service",
        },
      ],
    },
  ],
};
