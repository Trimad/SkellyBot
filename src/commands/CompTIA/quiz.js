const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageAttachment } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('quiz')
        .setDescription('Quiz Module')
        .addSubcommand(subcommand =>
            subcommand
                .setName("220-1001")
                .setDescription("First test of the CompTIA A+ certification."))
        .addSubcommand(subcommand =>
            subcommand
                .setName("220-1002")
                .setDescription("Second test of the CompTIA A+ certification.")),

    async execute(interaction, client) {
        if (interaction.options.getSubcommand() === "220-1001") {
            //const file = new MessageAttachment("./src/images/michael.gif");
            const userEmbed = new MessageEmbed()
                .setTitle("Quiz Module")
                .setDescription("220-1001")
                //.setURL("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
                //.setAuthor("Rick Astley", client.user.displayAvatarURL())
                //.setThumbnail(`${user.displayAvatarURL}`)
                //.addFields(
                //{ name: 'Username', value: `${user.username}`, inline: true },
                //{ name: `\u200B`, value: `\u200B`, inline: true },
                //{ name: `Discriminator`, value: `${user.discriminator}`, inline: true },
                //{ name: `Tag`, value: `${user.tag}`, inline: true },
                //{ name: `Created`, value: `${user.createdAt}`, inline: true },
                //{ name: `Bot`, value: `${user.bot}`, inline: true },
                //{ name: `\u200B`, value: `\u200B`, inline: true }
                //)
                //.setImage(user.displayAvatarURL({ dynamic: true, size: 512 }))
                .setTimestamp()
                .setColor("#FF0000")
                .setFooter(client.user.tag, client.user.displayAvatarURL());
            await interaction.reply({ embeds: [userEmbed] });
        }
        else if (interaction.options.getSubcommand() === "server") {
            await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
        }
    }
};