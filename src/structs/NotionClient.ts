import { Client } from "@notionhq/client";

export const notion = new Client ({
    auth: process.env.NOTION_TOKEN
})

async function queryDatabase(databaseId: string) {
    try {
      const response = await notion.databases.query({
        database_id: databaseId,
      });
      console.log(response.results);
    } catch (error) {
      console.error("Erro:", error);
    }
}

  queryDatabase('261a8c0ba821415fa7b42ccd2a5563ee')