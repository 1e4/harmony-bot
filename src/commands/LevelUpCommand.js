let BaseCommand = require(__dirname + '/BaseCommand');
let Discord = require('discord.js');
let config = require('../config/config');

class LevelUpCommand extends BaseCommand {
    run() {

        if(!this.hasPermission(Discord.Permissions.FLAGS.ADMINISTRATOR))
        {
            console.log('Invalid permissions');
            return;
        }



        // Log the action
        let embed = new Discord.RichEmbed();

        embed
            .setAuthor(process.env.DISCORD_BOT_NAME)
            .addField("Action", "/levelup")
            .addField("Content", this.message)
            .setColor(0xff2020)
            .setTimestamp()
            .setFooter(this.author.username + "#" + this.author.discriminator);

        this.getChannel(config.staffGeneralLogChannel).send({
            embed: embed
        })
    }
}

module.exports = LevelUpCommand;