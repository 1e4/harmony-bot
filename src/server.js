require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
let EchoCommand = require('./commands/echo.js');
const config = {
    commandDir: __dirname + '\\commands\\'
}

client.login(process.env.DISCORD_TOKEN);

client.on('ready', function(event) {
    console.log('Harmony listening in.')
});

client.on('message', function(message) {

    let content = message.content;

    // If the message comes from the user
    if(content.startsWith('/') && message.author.bot === false)
    {
        // replace and split command
        let command = content.replace('/', '').split(' ')[0],
            commandPath = `${config.commandDir}${command}.js`;

        // If the command actually exists
        if(fs.existsSync(commandPath))
        {
            let c = new (require(commandPath));
            c.run(message);
        }
        else
        {
            console.log('No command found', __dirname + `\\commands\\${command}.js`);
        }
    }
});