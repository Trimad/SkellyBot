console.clear();
const dotenv = require('dotenv').config();
const fs = require('fs');
const { Client, Collection } = require('discord.js');

const token = process.env.TOKEN;
const guildID = process.env.GUILD_ID;

const client = new Client({
  intents: 32767,
});

client.commands = new Collection();

client.login(token);

const commandHandler = require('../commands');
client.on('messageCreate', commandHandler);

client.on("ready", () =>
    console.log(`${client.user.tag} is up and ready to go!`)
);











// var state = {
//   quiz: 0,
//   chapter: 0,
//   section: "1.1",
//   data: [],
//   color: ""
// };

// var quizes = new Array();
// quizes[0] = [];
// quizes[1] = [];
// quizes[2] = [];

//Network+
// quizes[2][0] = JSON.parse(fs.readFileSync('Network+/1-networking-concepts.json'));
// quizes[2][1] = JSON.parse(fs.readFileSync('Network+/2-infrastructure.json'));
// quizes[2][2] = JSON.parse(fs.readFileSync('Network+/3-network-operations.json'));
// quizes[2][3] = JSON.parse(fs.readFileSync('Network+/4-network-security.json'));
// quizes[2][4] = JSON.parse(fs.readFileSync('Network+/5-network-troubleshooting-and-tools.json'));

// client.commands = new Collection();
// client.slashCommands = new Collection();




// client.on('message', async message => {

//   const content = message.content.toLocaleLowerCase().split(" ");

//   if (message.author.bot) return;




//   else if (content[0] === "!nuke") {
//     async function nuke() {
//       const howMany = (content[1]) ? content[1] : 10;
//       message.channel.bulkDelete(howMany).then(() => {
//         message.channel.send(`I just deleted ${howMany} fucking messages.`).then(m => m.delete({ timeout: 5000 }));
//       }).catch(e => { console.log(e); });

//     }
//     nuke();
//   }



//   else if (content[0] === "!quiz") {
//     const q = (content[1]) ? content[1] : false;
//     const c = (content[2]) ? content[2] : false;
//     const s = (content[3]) ? content[3] : false;
//     if (q && c && s) {
//       console.log(q, c, s);
//       message.channel.send(state);
//       //Quiz.start(message, QuizMenuData, state, quizes);

//     } else {
//       Quiz.quizSelector(message, QuizMenuData, state, quizes);
//     }
//   }



// });