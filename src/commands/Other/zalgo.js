const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('zalgo')
        .setDescription('Zalgo text corruption exploit')
    // .addSubcommand(subcommand =>
    //     subcommand
    //         .setName("input")
    //         .setDescription("The text that you would like to corrupt")
    //         .addUserOption(option => option.setName("target")
    //             .setDescription("The user you are targeting.")))
    ,
    async execute(interaction) {
        //await interaction.reply('Pong!');
    },
};


