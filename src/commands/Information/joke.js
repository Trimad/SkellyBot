const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('joke')
        .setDescription('Skellybot will tell you a joke.'),
    async execute(interaction) {

        let joke = await fetch(
            "https://v2.jokeapi.dev/joke/Any"
        );
        joke = await joke.json();
        console.log(joke);

        let embed = new MessageEmbed();
        let row = new MessageActionRow();

        if (joke.type == 'single') {
            embed
                .setColor('#ff0000')
                .addField("Joke", `${joke.joke}`)
                .setThumbnail("https://i.kym-cdn.com/entries/icons/original/000/017/613/1426467217270.jpg")
                .setTimestamp();

            row.addComponents(
                new MessageButton()
                    .setCustomId("joke")
                    .setLabel("New Random Joke")
                    .setStyle("PRIMARY")
            );

        } else if (joke.type == 'twopart') {

            embed
                .setColor('#ff0000')
                .addField("Question", `${joke.setup}`)
                .addField("Answer", `${joke.delivery}`)
                .setThumbnail("https://i.kym-cdn.com/entries/icons/original/000/017/613/1426467217270.jpg")
                .setTimestamp();

            row.addComponents(
                new MessageButton()
                    .setCustomId("joke")
                    .setLabel("New Random Joke")
                    .setStyle("PRIMARY")
            );
        }


        //await interaction.reply({ embeds: [embed], components: [row], ephemeral: true });
        await interaction.reply({ embeds: [embed], ephemeral: true });
    },
};


