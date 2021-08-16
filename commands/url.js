module.exports = function (message) {
    const url = 'https://discord.com/api/oauth2/authorize?client_id=876641338135822387&permissions=8&scope=bot';
    message.channel.send(url);
};