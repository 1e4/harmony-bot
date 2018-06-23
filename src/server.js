require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const filters = require(__dirname + '\\config\\filters');
const config = require(__dirname + '\\config\\config');

// Login with the bot
client.login(process.env.DISCORD_TOKEN);

// Once ready give some feedback
client.on('ready', function (event) {
    console.log('Harmony listening in.');

    client.user.setStatus('Keeping the peace');
});

// Filter for commands and pass them through
client.on('message', function (message) {

    // Filter any messages
    for (let i = 0; i < filters.length; i++) {
        let filterPath = __dirname + `\\filters\\${filters[i]}.js`;

        console.log('Filter', filterPath);

        // If the command actually exists
        if (fs.existsSync(filterPath)) {
            let f = require(filterPath),
                c = new f(message);

            c.filter();
        }
        else {
            console.log('No filter found', filterPath);
        }
    }

    // If it's not a command or the author is a bot don't do anything
    if (!message.content.startsWith(config.prefix) || message.author.bot === true)
        return;

    let content = message.content,
        command = content.replace('/', '').split(' '),
        commandPath = `${__dirname + "\\commands\\"}${capitalizeFirstLetter(command[0])}Command.js`;

    // If the command actually exists
    if (fs.existsSync(commandPath)) {
        let m = require(commandPath),
            c = new m(message);

        c.run();


    }
    else {
        console.log('No command found', commandPath);
    }
});

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}