let BaseCommand = require(__dirname + '\\BaseCommand');
let Discord = require('discord.js');
let config = require('../config/config');

class EchoCommand extends BaseCommand {
    run() {
        this.channel.send(this.message.replace('/echo ', ''));
        console.log('Echoing command');

        let embed = new Discord.RichEmbed();

        embed
            .setAuthor("Harmony Bot")
            .addField("Action", "/echo")
            .addField("Content", this.message)
            .setColor(0xff2020)
            .setTimestamp()
            .setFooter(this.author.username + "#" + this.author.discriminator);

        this.getChannel(config.staffGeneralLogChannel).send({
            embed: embed
        })
    }
}

module.exports = EchoCommand;