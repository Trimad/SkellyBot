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

client.on('message', async message => {
  let output;


  if (message.author.bot) return;
  else if (message.content.toLowerCase().startsWith("!quiz")) {
    QuizMenu.start(message, QuizMenuData, state).then(() => {
      Quiz.start(message, quizes, state);
    });

  }
  else if (message.content.toLowerCase().startsWith("!help")) {
    output = "Here is a list of all available commands:\n";
    for (m in helpMenu) { output += (m + "\n") }
    message.reply(output);
  }
  else if (message.content.toLowerCase().startsWith("!nuke")) {
    async function nuke() {
      message.channel.bulkDelete(100).then(() => {
        message.channel.send("I just deleted 100 fucking messages, bitch.").then(m => m.delete({ timeout: 5000 }));
      });
    }
    nuke();
  }

  // switch (message.content.toLocaleLowerCase()) {


  //   case "!help":

  //   case "!quiz":

  //     //QuizMenu.quizSelector(msg, QuizMenuData, state);

  //     //QuizMenu.quizSelector(msg, QuizMenuData, state);
  //     //      promise.then(Quiz.start(msg, quizes, state));
  //     break;
  //   case "!ping":
  //     message.reply('Pong!');
  //     break;
  //   case "!state":
  //     message.reply(JSON.stringify(state));
  //     break;
  //   case "!nuke":

  //     break
  //   default:
  //   // code block
  // }
});