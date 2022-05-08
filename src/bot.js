const { Client, Intents , Collection} = require ('discord.js');
const fs = require('fs');
const client = new Client({ intents : [Intents.FLAGS.GUILDS] });
require('dotenv').config();

client.commands = new Collection();

const functions = fs.readdirSync("./src/functions").filter(file=>file.endsWith(".js"));
const eventsFiles = fs.readdirSync("./src/events").filter(file=>file.endsWith(".js"));
const commandsFolders = fs.readdirSync("./src/commands");

(async () => {
    for(file of functions){
        require(`./functions/${file}`)(client);
    }

    client.handleEvents(eventsFiles,"./src/events");
    client.handleCommands(commandsFolders,"./src/commands");
    

    client.login(process.env.token);
})();
