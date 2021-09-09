const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageAttachment } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('donate')
        .setDescription('Donate to my crypto wallet!')
        .addSubcommand(subcommand =>
            subcommand
                .setName("bitcoin")
                .setDescription("Donate Bitcoin"))
        .addSubcommand(subcommand =>
            subcommand
                .setName("dogecoin")
                .setDescription("Donate Dogecoin"))
        .addSubcommand(subcommand =>
            subcommand
                .setName("ethereum")
                .setDescription("Donate Ethereum")),


    async execute(interaction, client) {
        if (interaction.options.getSubcommand() === "bitcoin") {
            const file = new MessageAttachment("./src/images/bitcoin.png");
            const userEmbed = new MessageEmbed()
                .setTitle("Don't have a crypto wallet? Join Coinbase!")
                .setURL("https://www.coinbase.com/join/madden_52")
                .addFields(
                    { name: 'BTC Address', value: '3DJkFM1fZBsrP5aJkrn7RM7b5qjzD4e2U2', inline: false },
                )
                .setImage('attachment://bitcoin.png')
                .setTimestamp()
                .setColor("#FF0000")
                .setFooter(client.user.tag, client.user.displayAvatarURL());

            await interaction.reply({ embeds: [userEmbed], files: [file] });
        }
        else if (interaction.options.getSubcommand() === "dogecoin") {
            const file = new MessageAttachment("./src/images/dogecoin.png");
            const userEmbed = new MessageEmbed()
                .setTitle("Don't have a crypto wallet? Join Coinbase!")
                .setURL("https://www.coinbase.com/join/madden_52")
                .addFields(
                    { name: 'DOGE Address', value: 'DEpUXLyVNqCTPRBpKp3vkJMNdK8iA1Y8pP', inline: false },
                )
                .setImage('attachment://dogecoin.png')
                .setTimestamp()
                .setColor("#FF0000")
                .setFooter(client.user.tag, client.user.displayAvatarURL());

            await interaction.reply({ embeds: [userEmbed], files: [file] });
        }
        else if (interaction.options.getSubcommand() === "ethereum") {
            const file = new MessageAttachment("./src/images/ethereum.png");
            const userEmbed = new MessageEmbed()
                .setTitle("Don't have a crypto wallet? Join Coinbase!")
                .setURL("https://www.coinbase.com/join/madden_52")
                .addFields(
                    { name: 'ETH Address', value: '0x156e52753577595A8b029f37ca3bC3dd698a27BE', inline: false },
                )
                .setImage('attachment://ethereum.png')

                .setTimestamp()
                .setColor("#FF0000")
                .setFooter(client.user.tag, client.user.displayAvatarURL());

            await interaction.reply({ embeds: [userEmbed], files: [file] });
        }
    },
};