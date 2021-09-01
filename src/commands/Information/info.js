const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageAttachment } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('Returns info based on input')
        .addSubcommand(subcommand =>
            subcommand
                .setName("user")
                .setDescription("Gets information about a user.")
                .addUserOption(option => option.setName("target")
                    .setDescription("The user you are targeting.")))
        .addSubcommand(subcommand =>
            subcommand
                .setName("server")
                .setDescription("Gets information about the server.")),

    async execute(interaction, client) {
        if (interaction.options.getSubcommand() === "user") {
            const user = interaction.options.getUser("target");
            if (user) {
                //const file = new MessageAttachment("./src/images/michael.gif");
                const userEmbed = new MessageEmbed()
                    //.setTitle(`${user.username}'s Information:`)
                    //.setDescription("This is a description...!")
                    //.setURL("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
                    //.setAuthor("Rick Astley", client.user.displayAvatarURL())
                    //.setThumbnail(`${user.displayAvatarURL}`)
                    .addFields(
                        { name: 'Username', value: `${user.username}`, inline: true },
                        //{ name: `\u200B`, value: `\u200B`, inline: true },
                        { name: `Discriminator`, value: `${user.discriminator}`, inline: true },
                        { name: `Tag`, value: `${user.tag}`, inline: true },
                        //{ name: `Created`, value: `${user.createdAt}`, inline: true },
                        //{ name: `Bot`, value: `${user.bot}`, inline: true },
                        //{ name: `\u200B`, value: `\u200B`, inline: true }
                    )
                    .setImage(user.displayAvatarURL({ dynamic: true, size: 512}))
                    .setTimestamp()
                    .setColor("#FF0000")
                    .setFooter(client.user.tag, client.user.displayAvatarURL());

                //await interaction.reply(`Username: ${user.username}\nID: ${user.id}`)
                await interaction.reply({ embeds: [userEmbed]});
            }
            else {
                await interaction.reply(`Your Username: ${interaction.user.username}\nYour ID: ${interaction.user.id}`);
            }
        }
        else if (interaction.options.getSubcommand() === "server") {
            await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
        }
    },
};