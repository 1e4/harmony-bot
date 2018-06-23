let BaseCommand = require(__dirname + '\\BaseCommand');
let config = require('../config/config');
let Discord = require('discord.js');
let User = require('../models/User');

class ProfileCommand extends BaseCommand {
    async run() {

        let user = null;

        // If they are tagging a user
        if (this.args[1])
            user = this.findGuildUserById(this.mentions.users.first().id);
        else
            user = this.member;

        let profile = await User.query()
            .where('user_id', '=', user.id)
            .first();

        if (!profile)
            return;

        let embed = new Discord.RichEmbed();

        console.log(user);

        embed
            .setAuthor(user.user.username)
            // .addField("Created", user.createdAt, true)
            // .addField("Joined", user.joinedAt, true)
            .addField("User ID", profile.user_id, true)
            .addField("Nickname", user.nickname || "None", true)
            .addBlankField(true)
            .addField("Level", profile.level, true)
            .addField("Experience", profile.experience + " / " + (profile.level * 250), true)
            .addBlankField(true)
            .addField("Rank", "#1", true)
            .addField("Gold", profile.coins, true)
            .addBlankField(true)
            .setColor(0xff2020)
            .setTimestamp()
            .setFooter(this.author.username + "#" + this.author.discriminator);

        this.channel.send({
            embed: embed
        })
    }
}

module.exports = ProfileCommand;