let BaseCommand = require(__dirname + '\\BaseCommand');
let config = require('../config/config');
let Discord = require('discord.js');

class HelpCommand extends BaseCommand {
    run() {


        let embed = new Discord.RichEmbed();

        embed
            .setAuthor(process.env.DISCORD_BOT_NAME)
            .setDescription("Below you will find a whole some useful information as well as an FAQ, if you are" +
                " looking for commands you should use /commands")
            .setColor(0x21a5b4);

        this.channel.send({
            embed: embed
        })
    }
}

module.exports = HelpCommand;