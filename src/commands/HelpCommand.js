let BaseCommand = require(__dirname + '\\BaseCommand');
let config = require('../config/config');
let Discord = require('discord.js');

class HelpCommand extends BaseCommand {
    run() {


        let embed = new Discord.RichEmbed();

        embed
            .setAuthor("Harmony Help Bot")
            .setDescription("Below you will find a whole some useful information as well as an FAQ, if you are" +
                " looking for commands you should use /commands")
            .setColor(0xff2020);

        this.getChannel(this.channel.id).send({
            embed: embed
        })
    }
}

module.exports = HelpCommand;