const dotenv = require('dotenv').config();
const fs = require('fs');
const Discord = require('discord.js');

const client = new Discord.Client();
const privateKey = process.env.PRIVATE_KEY;
client.login(privateKey);

const QuizMenu = require(__dirname + "/quizMenu.js");
var QuizMenuData = JSON.parse(fs.readFileSync('quizMenu.json'));

const Quiz = require(__dirname + "/quiz.js");

var helpMenu = JSON.parse(fs.readFileSync('helpMenu.json'));


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

var state = {
  quiz: 2,
  chapter: 0,
  section: "1.1",
  card: 0,
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

client.on('message', msg => {
  let output;
  switch (msg.content.toLocaleLowerCase()) {

    case "!help":
      output = "Here is a list of all available commands:\n";
      for (m in helpMenu) { output += (m + "\n") }
      msg.reply(output);
      break;
    case "!quiz":
      //QuizMenu.quizSelector(msg, QuizMenuData, state);
      Quiz.start(msg, quizes, state);
      break;
    case "!ping":
      msg.reply('Pong!');
      break;
    case "!state":
      msg.reply(JSON.stringify(state));
      break;
    case "!nuke":
      async function nuke() {
        msg.channel.bulkDelete(100).then(() => {
          msg.channel.send("Deleted 100 messages.").then(m => m.delete(3000));
        });
      }
      nuke();
      break
    default:
    // code block
  }
});