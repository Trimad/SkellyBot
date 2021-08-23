// const fs = require("fs");

// const choochoo = require('./src/commands/choochoo.js');
// const help = require('./src/commands/help.js');
// const ping = require('./src/commands/ping.js');
// const zalgo = require('./src/commands/zalgo.js');
// const url = require('./src/commands/url.js');
// const commands = { choochoo, help, ping, zalgo, url };


// // fs.readdirSync("./src/Commands")
// // 	.filter(file => file.endsWith(".js"))
// // 	.forEach(file => {
// // 		/**
// // 		 * @type {Command}
// // 		 */
// // 		const command = require(`./commands/${file}`);
// // 		console.log(`Command ${command.name} loaded`);
// // 		client.commands.set(command.name, command);
// // 	});


// module.exports = async function (message) {
//   if (message.channel.id == '877334391481856071') {
//     let tokens = message.content.split(' ');
//     let command = tokens.shift();
//     if (command.charAt(0) === '!') {
//       command = command.substring(1);
//       commands[command](message, tokens);
//     }
//   }
// };