require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const config = require('./config/config');
const {Model} = require('objection');
const knex = require('knex')(config.database);

const commands = {
    ban: require("./commands/BanCommand"),
    unban: require("./commands/UnbanCommand"),
    commands: require("./commands/CommandsCommand"),
    echo: require("./commands/EchoCommand"),
    flip: require("./commands/FlipCommand"),
    help: require("./commands/HelpCommand"),
    profile: require("./commands/ProfileCommand"),
};

const filters = [
    require('./filters/LinkFilter'),
    require('./filters/GiveXPFilter')
];


// Load knex
Model.knex(knex);

// Login with the bot
client.login(process.env.DISCORD_TOKEN)
    .then(res => {
        console.log("Bot logged in");
    })
    .catch(err => {
        console.error('Invalid token ')
        console.log(process.env);
    });

// Once ready give some feedback
client.on('ready', function (event) {
    console.log('Harmony listening in.');

    client.user.setActivity('Keeping the peace')
        .then(() => {
            console.log('Status Updated')
        })
        .catch(error => {
            console.error("Error setting status", error);
        });
});

// Filter for commands and pass them through
client.on('message', function (message) {

    let content = message.content,
        command = content.replace('/', '').split(' ');

    // Filter the message
    for (let i = 0; i < filters.length; i++) {
        // If the filter actually exists
        let c = new filters[i](message);
        c.filter();
    }

// If it's not a command or the author is a bot don't do anything
    if (!message.content.startsWith(config.prefix) || message.author.bot === true)
        return;

    // If the command actually exists
    if (command[0] in commands) {
        let c = new commands[command[0]](message);

        c.run();
    }
    else {
        console.log('No command found', command[0]);
    }
});

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}