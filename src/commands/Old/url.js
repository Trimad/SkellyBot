const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('url')
        .setDescription('Returns the URL needed to add this bot to a new Discord server.'),
    async execute(interaction) {
        await interaction.reply('https://discord.com/api/oauth2/authorize?client_id=876641338135822387&permissions=8&scope=bot%20applications.commands');
    },
};


