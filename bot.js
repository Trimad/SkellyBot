const Discord = require('discord.js');
const client = new Discord.Client();

client.login("Nzc2NTAwODM0MzAxMjQ3NTI5.X61ywQ.Z0IpM6bffszfsK6sOTTglvW6xT8");

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});


client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('Pong!');
    }
});