const dotenv = require('dotenv').config();
const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.TOKEN;

const Quiz = require(__dirname + "/quiz.js");
const QuizMenuData = JSON.parse(fs.readFileSync('menu_quiz.json'));

const helpMenu = JSON.parse(fs.readFileSync('menu_help.json'));
const Zalgo = require(__dirname + "/zalgo.js");
client.login(token);

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

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

//Network+
quizes[2][0] = JSON.parse(fs.readFileSync('Network+/1-networking-concepts.json'));
quizes[2][1] = JSON.parse(fs.readFileSync('Network+/2-infrastructure.json'));
quizes[2][2] = JSON.parse(fs.readFileSync('Network+/3-network-operations.json'));
quizes[2][3] = JSON.parse(fs.readFileSync('Network+/4-network-security.json'));
quizes[2][4] = JSON.parse(fs.readFileSync('Network+/5-network-troubleshooting-and-tools.json'));

const commandHandler = require('./commands');
client.on('message', commandHandler);


// client.on('message', async message => {

//   const content = message.content.toLocaleLowerCase().split(" ");

//   if (message.author.bot) return;


//   else if (message.content.toLowerCase().startsWith("!help")) {
//     const menuEmbed = {
//       color: 0x0099ff,
//       title: 'SkellyBot Commands',
//       //description: "Help Menu",
//       thumbnail: {
//         url: 'https://i.kym-cdn.com/entries/icons/original/000/017/613/1426467217270.jpg',
//       },
//       fields: [],
//     };
//     menuEmbed.fields = helpMenu.fields;
//     message.channel.send({ embed: menuEmbed });
//   }

//   else if (content[0] === "!nuke") {
//     async function nuke() {
//       const howMany = (content[1]) ? content[1] : 10;
//       message.channel.bulkDelete(howMany).then(() => {
//         message.channel.send(`I just deleted ${howMany} fucking messages.`).then(m => m.delete({ timeout: 5000 }));
//       }).catch(e => { console.log(e); });

//     }
//     nuke();
//   }

//   else if (message.content.toLowerCase().startsWith("!ping")) {
//     message.reply('Pong!');
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