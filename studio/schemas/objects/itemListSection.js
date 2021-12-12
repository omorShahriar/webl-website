export default {
  type: "object",
  name: "itemListSection",
  title: "Item List Section",
  fields: [
    {
      name: "heading",
      type: "string",
      title: "Heading",
    },
    {
      name: "items",
      type: "array",
      title: "Items",
      of: [
        {
          title: "Item",
          type: "item",
        },
      ],
    },
  ],
};
