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
                    .setRequired(true)
                    .setDescription("The user you are targeting.")))
        .addSubcommand(subcommand =>
            subcommand
                .setName("server")
                .setDescription("Gets information about the server."))
        .addSubcommand(subcommand =>
            subcommand
                .setName("skellybot")
                .setDescription("Gets information about this bot.")),
    async execute(interaction, client) {
        if (interaction.options.getSubcommand() === "user") {
            const user = interaction.options.getUser("target");
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
                .setImage(user.displayAvatarURL({ dynamic: true, size: 512 }))
                .setTimestamp()
                .setColor("#FF0000")
                .setFooter(client.user.tag, client.user.displayAvatarURL());
            //await interaction.reply(`Username: ${user.username}\nID: ${user.id}`)
            await interaction.reply({ embeds: [userEmbed], ephemeral: true });
        }
        else if (interaction.options.getSubcommand() === "server") {
            const serverEmbed = new MessageEmbed()
                .addFields(
                    { name: 'Server Name', value: `${interaction.guild.name}`, inline: true },
                    { name: `Total Members`, value: `${interaction.guild.memberCount}`, inline: true },
                )
                .setImage(interaction.guild.iconURL({ dynamic: true, size: 512 }))
                .setTimestamp()
                .setColor("#FF0000")
                .setFooter(client.user.tag, client.user.displayAvatarURL());
            await interaction.reply({ embeds: [serverEmbed], ephemeral: true });
        }
        else if (interaction.options.getSubcommand() === "skellybot") {
            const serverEmbed = new MessageEmbed()
                .setTitle("Click here to add this bot to a new server!")
                .setURL("https://discord.com/api/oauth2/authorize?client_id=876641338135822387&permissions=8&scope=bot%20applications.commands")
                .addFields(
                    { name: `.avatar`, value: `${client.user.avatar}`, inline: true },
                    { name: `.bot`, value: `${client.user.bot}`, inline: true },
                    { name: `.client`, value: `${client.user.client}`, inline: true },
                    { name: `.createdAt`, value: `${client.user.createdAt}`, inline: true },
                    { name: `.createdTimestamp`, value: `${client.user.client}`, inline: true },
                    { name: `.defaultAvatarURL`, value: `${client.user.defaultAvatarURL}`, inline: true },
                    { name: `.discriminator`, value: `${client.user.discriminator}`, inline: true },
                    { name: `.dmChannel`, value: `${client.user.dmChannel}`, inline: true },
                    { name: `.flags`, value: `${client.user.flags}`, inline: true },
                    { name: `.id`, value: `${client.user.id}`, inline: true },
                    { name: `.partial`, value: `${client.user.partial}`, inline: true },
                    { name: `.system`, value: `${client.user.system}`, inline: true },
                    { name: `.tag`, value: `${client.user.tag}`, inline: true },
                    { name: `.username`, value: `${client.user.username}`, inline: true },
                    { name: `\u200B`, value: `\u200B`, inline: true }
                )
                .setImage(client.user.displayAvatarURL({ dynamic: true, size: 512 }))
                .setTimestamp()
                .setColor("#FF0000")
                .setFooter(client.user.tag, client.user.displayAvatarURL());
            await interaction.reply({ embeds: [serverEmbed], ephemeral: true });
        }
    },
};