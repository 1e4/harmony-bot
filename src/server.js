let Discord = require('discord.io');
require('dotenv').config();


let bot = new Discord.Client({
    token: process.env.DISCORD_TOKEN,
    autorun: true,
});


if(bot.connected === false)
{
    console.log('Bot offline, please make sure your configuration is complete');
}

bot.on('ready', () => {
    console.log('Bot reporting for duty');
});