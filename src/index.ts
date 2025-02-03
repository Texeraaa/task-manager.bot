import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { ExtendClient } from './structs/ExtendedClient';
import { notion } from './structs/NotionClient';
export * from "colors"

const client = new ExtendClient()

client.start()

export { client }

client.on("ready", () => {
    console.log("Bot online".green);
    
})

client.on("messageCreate", (message) => {
    if(message.author.id === client.user?.id) return

    message.reply({
        content: `${message.author.username} Epoca da bonança`
    })
})

async function listKanbanTasks(databaseId: string) {
    try {
      const response = await notion.databases.query({
        database_id: databaseId,
      });
  
      const tasks = response.results
        .filter((page): page is PageObjectResponse => page.object === "page") // Filtra apenas páginas completas
        .map((page) => {
          // Verifica se a propriedade "Nome" existe e é do tipo "title"
          const statusProperty = page.properties["Status"];
            console.log('statusProperty',statusProperty);
            return
        });
  
    //   console.log("Tarefas:", tasks);
      return tasks;
    } catch (error) {
      console.error("Erro:", error);
      return [];
    }
  }

  listKanbanTasks('261a8c0ba821415fa7b42ccd2a5563ee')