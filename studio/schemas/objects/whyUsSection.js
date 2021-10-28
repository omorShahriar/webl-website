export default {
  type: "object",
  name: "whyUsSection",
  title: "Why Us Section",
  fields: [
    {
      name: "heading",
      type: "string",
      title: "Heading",
    },
    {
      name: "reasons",
      type: "array",
      title: "Reasons to choose us",
      of: [
        {
          title: "Reason",
          type: "reason",
        },
      ],
    },
  ],
};
