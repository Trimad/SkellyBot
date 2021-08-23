const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed} = require('discord.js');
const fs = require('fs');
const fields = JSON.parse(fs.readFileSync('src/commands/Information/help.json'));

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription("Displays a list of all available commands."),
    async execute(interaction) {
        const embed = new MessageEmbed()
        .setColor('#ff0000')
        .setTitle("Skellybot Commands")
        .setThumbnail("https://i.kym-cdn.com/entries/icons/original/000/017/613/1426467217270.jpg")
        .setFields(fields);
        await interaction.reply({ embeds: [embed] });
    },
};