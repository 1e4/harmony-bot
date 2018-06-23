let BaseCommand = require(__dirname + '\\BaseCommand');
let config = require('../config/config');
let Discord = require('discord.js');

class CommandsCommand extends BaseCommand {
    run() {


        let embed = new Discord.RichEmbed();

        embed
            .setAuthor("Harmony Command Bot")
            .setDescription("Below you will find a whole host of different commands that you can use")
            .addField("/help", "This will display this help message")
            .addField("/ban", "This will ban the user, use us /ban @user reason, or /ban User reason")
            .addField("/unban", "This will unban the user, use as /unban User")
            .setColor(0xff2020);

        this.getChannel(this.channel.id).send({
            embed: embed
        })
    }
}

module.exports = CommandsCommand;