require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.DISCORD_TOKEN);

console.log(client);

client.on('ready', function(event) {
    console.log('Harmony listening in.')
});

client.on('message', function(message) {
    console.log(message);

    if(message.content.startsWith('/echo'))
    {
        message.channel.send(message.content.replace('/echo ', ''))
    }
});