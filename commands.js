const gif = require('./commands/gif.js');
const choochoo = require('./commands/choochoo.js');
const zalgo = require('./commands/zalgo.js');
const url = require('./commands/url.js');
const commands = { choochoo, gif, zalgo, url };

module.exports = async function (message) {
  if (message.channel.id == '876639511428349965') {
    let tokens = message.content.split(' ');
    let command = tokens.shift();
    if (command.charAt(0) === '!') {
      command = command.substring(1);
      commands[command](message, tokens);
    }
  }
};