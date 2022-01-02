const { Client } = require("@notionhq/client");

const notion = new Client({
  auth: process.env.Notion_API_Key,
});
const databaseID = process.env.Notion_Database_ID;

const Handler = async (req, res) => {
  const formData = req.body.formData;
  const response = await notion.pages.create({
    parent: {
      database_id: databaseID,
    },
    properties: {
      Name: {
        title: [
          {
            text: {
              content: formData.name,
            },
          },
        ],
      },
      "Company Name": {
        rich_text: [
          {
            type: "text",
            text: {
              content: formData.company_name,
            },
          },
        ],
      },
      Email: {
        email: formData.email,
      },
      "Project Brief": {
        rich_text: [
          {
            type: "text",
            text: {
              content: formData.project_brief,
            },
          },
        ],
      },
    },
  });
  return res.status(200).json({ status: "OK" });
};
export default Handler;
