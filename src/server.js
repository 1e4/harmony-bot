require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
let EchoCommand = require('./commands/echo.js');

/**
 * Basic config
 * @todo move into it's own file
 *
 * @type {{commandDir: string, prefix: string}}
 */
const config = {
    commandDir: __dirname + '\\commands\\',
    prefix: '/'
};

// Login with the bot
client.login(process.env.DISCORD_TOKEN);

// Once ready give some feedback
client.on('ready', function (event) {
    console.log('Harmony listening in.')
});

// Filter for commands and pass them through
client.on('message', function (message) {

    // If it's not a command or the author is a bot don't do anything
    if (!message.content.startsWith(config.prefix) || message.author.bot === true)
        return;

    let content = message.content,
        command = content.replace('/', '').split(' '),
        commandPath = `${config.commandDir}${command[0]}.js`;

    // If the command actually exists
    if (fs.existsSync(commandPath)) {
        let c = new (require(commandPath));
        c.run(message);
    }
    else {
        console.log('No command found', __dirname + `\\commands\\${command}.js`);
    }
});