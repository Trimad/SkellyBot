console.clear();
const { Client, Collection } = require('discord.js');
const fs = require('fs');
const client = new Client({
    intents: 32767,
});

client.commands = new Collection();//Global variable
client.buttons = new Collection();//Global variable

require('dotenv').config();

const functions = fs.readdirSync('./src/functions').filter(file => file.endsWith('.js'));
const eventFiles = fs.readdirSync('./src/events').filter(file => file.endsWith('.js'));
const commandFolders = fs.readdirSync('./src/commands');

(async () => {

    for (file of functions) {
        require(`./functions/${file}`)(client);
    }
    client.handleEvents(eventFiles, "./src/events");
    client.handleCommands(commandFolders, "./src/commands");
    client.handleButtons();
    client.login(process.env.TOKEN);
})();
