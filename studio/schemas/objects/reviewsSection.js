export default {
  type: "object",
  name: "reviewsSection",
  title: "Reviews Section",
  fields: [
    {
      name: "heading",
      type: "string",
      title: "Heading",
    },
    {
      name: "testimonials",
      type: "array",
      title: "Testimonials",
      of: [
        {
          title: "Testimonial",
          type: "testimonial",
        },
      ],
    },
  ],
};
