let BaseCommand = require(__dirname + '\\BaseCommand');
let config = require('../config/config');
let Discord = require('discord.js');

class BanCommand extends BaseCommand {
    run() {
        if (!this.args[1])
            return;

        this.guild.fetchBans()
            .then(bans => {
                console.log("Bans", bans);
                // First try by username
                let find = bans.find("username", this.args[1]);
                if (find === null) {
                    // Then by id
                    find = bans.find("id", this.args[1]);
                }

                if (find === null) {
                    console.log('failed to unban');
                }
                else {
                    // Unban them
                    this.guild.unban(find);

                    let embed = new Discord.RichEmbed();

                    embed
                        .setAuthor("Harmony Bot")
                        .addField("Action", "/unban")
                        .addField("Content", this.message)
                        .setColor(0xff2020)
                        .setTimestamp()
                        .setFooter(this.author.username + "#" + this.author.discriminator);

                    this.getChannel(config.staffBanLogChannel).send({
                        embed: embed
                    })
                }
            }).catch(reason => {
            console.log(reason);
        });
    }
}

module.exports = BanCommand;