

const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageActionRow, MessageButton, MessageAttachment } = require('discord.js');

const fs = require('fs');

var state = {
    quiz: 0,
    chapter: 0,
    section: "1.1",
    data: [],
    color: ""
};

var quizes = new Array();
quizes[0] = [];
quizes[1] = [];
quizes[2] = [];

//Network +
quizes[2][0] = JSON.parse(fs.readFileSync('Network+/1-networking-concepts.json'));
//quizes[2][1] = JSON.parse(fs.readFileSync('../../../Network+/2-infrastructure.json'));
//quizes[2][2] = JSON.parse(fs.readFileSync('../../../Network+/3-network-operations.json'));
//quizes[2][3] = JSON.parse(fs.readFileSync('../../../Network+/4-network-security.json'));
//quizes[2][4] = JSON.parse(fs.readFileSync('../../../Network+/5-network-troubleshooting-and-tools.json'));
//console.log(quizes[2][0]);
// module.exports = {
//     data: new SlashCommandBuilder()
//         .setName('quiz')
//         .setDescription('Quiz Module')
//         .addSubcommand(subcommand =>
//             subcommand
//                 .setName("220-1001")
//                 .setDescription("Launch the first quiz module for CompTIA A+."))
//         .addSubcommand(subcommand =>
//             subcommand
//                 .setName("220-1002")
//                 .setDescription("Launch the second quiz module for CompTIA A+."))
//         .addSubcommand(subcommand =>
//             subcommand
//                 .setName("n10-007")
//                 .setDescription("Launch the quiz module for CompTIA N+.")),

//     async execute(interaction, client) {
//         if (interaction.options.getSubcommand() === "220-1001") {
//             const userEmbed = new MessageEmbed()
//                 .setTitle("CompTIA A+ Certification")
//                 .setDescription("Core 1 Objectives")
//                 .setTimestamp()
//                 .setColor("#FF0000")
//                 .setFooter(client.user.tag, client.user.displayAvatarURL());
//             await interaction.reply({ embeds: [userEmbed], ephemeral: true });
//         }
//         else if (interaction.options.getSubcommand() === "220-1002") {
//             const userEmbed = new MessageEmbed()
//                 .setTitle("CompTIA A+ Certification")
//                 .setDescription("Core 2 Objectives")
//                 .setTimestamp()
//                 .setColor("#FF0000")
//                 .setFooter(client.user.tag, client.user.displayAvatarURL());
//             await interaction.reply({ embeds: [userEmbed], ephemeral: true });
//         }
//         else if (interaction.options.getSubcommand() === "n10-007") {

//             const userEmbed = new MessageEmbed()
//                 .setTitle("Network+ Certification")
//                 .setDescription("Core Objectives")
//                 .setTimestamp()
//                 .setColor("#FF0000")
//                 .setFooter(client.user.tag, client.user.displayAvatarURL());

//             const row = new MessageActionRow()
//                 .addComponents(
//                     new MessageButton()
//                         .setCustomId('button-a')
//                         .setLabel('Networking Concepts')
//                         .setStyle('PRIMARY'),
//                     new MessageButton()
//                         .setCustomId('button-b')
//                         .setLabel('Infrastructure')
//                         .setStyle('PRIMARY'),
//                     new MessageButton()
//                         .setCustomId('button-c')
//                         .setLabel('Network Operations')
//                         .setStyle('PRIMARY'),
//                     new MessageButton()
//                         .setCustomId('button-d')
//                         .setLabel('Network Security')
//                         .setStyle('PRIMARY'),
//                     new MessageButton()
//                         .setCustomId('button-e')
//                         .setLabel('Network Troubleshooting and Tools')
//                         .setStyle('PRIMARY'),
//                 );

//             await interaction.reply({ content: 'Select the quiz module that you want to study.', ephemeral: true, embeds: [userEmbed], components: [row] });


//             //const filter = i => i.customId === 'primary' && i.user.id === interaction.user.id;
//             //const filter = i => i.customId === 'primary';

//             const collector = interaction.channel.createMessageComponentCollector({ time: 15000 });

//             collector.on('collect', async i => {
//                 if (i.customId === 'button-a') {
//                     await i.update({ content: 'Launching Networking Concepts module.', components: [] });
//                 }
//                 else if (i.customId === 'button-b') {
//                     await i.update({ content: 'Launching Infrastructure module.', components: [] });
//                 }
//                 else if (i.customId === 'button-c') {
//                     await i.update({ content: 'Launching Network Operations module.', components: [] });
//                 }
//                 else if (i.customId === 'button-d') {
//                     await i.update({ content: 'Launching Network Security module.', components: [] });
//                 }
//                 else if (i.customId === 'button-e') {
//                     await i.update({ content: 'Launching Network Troubleshooting and Tools module.', components: [] });
//                 }
//             });

//             collector.on('end', collected => console.log(`Collected ${collected.size} items`));
//         }
//     }
// };


module.exports = {
    data: new SlashCommandBuilder()
        .setName('quiz')
        .setDescription('Quiz Module'),

    async execute(interaction, client) {

        const collector = interaction.createMessageComponentCollector({ componentType: 'BUTTON', time: 15000 });

        collector.on('collect', i => {
            if (i.user.id === interaction.user.id) {
                i.reply(`${i.user.id} clicked on the ${i.customId} button.`);
            } else {
                i.reply({ content: `These buttons aren't for you!`, ephemeral: true });
            }
        });

        collector.on('end', collected => {
            console.log(`Collected ${collected.size} interactions.`);
        });

    }
};
