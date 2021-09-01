const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('Returns info based on input')
        .addSubcommand(subcommand =>
            subcommand
                .setName("user")
                .setDescription("Gets information about a user.")
                .addUserOption(option => option.setName("target")
                    .setDescription("The user mentioned")))
        .addSubcommand(subcommand =>
            subcommand
                .setName("server")
                .setDescription("Gets information about the server.")),

    async execute(interaction) {
        if (interaction.options.getSubcommand() === "user") {
            const user = interaction.options.getUser("target");
            if (user) { await interaction.reply(`Username: ${user.username}\nID: ${user.id}`) }
            else {
                await interaction.reply(`Your Username: ${interaction.user.username}\nYour ID: ${interaction.user.id}`);
            }
        }
        else if (interaction.options.getSubcommand() === "server") {
            await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
        }
    },
};