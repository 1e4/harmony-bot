let User = require('../models/User');
let Discord = require('discord.js')

class GiveXPFilter {
    constructor(message) {
        this.m = message;
        this.message = message.content;
        this.channel = message.channel;

    }

    async filter() {

        // Skip bots
        if (this.m.author.bot)
            return;

        let randXp = mt_rand(10,15);

        console.log(`Given ${randXp}xp to ${this.m.author.username}`);

        let profile = await User.query()
            .where('user_id', this.m.author.id)
            .first();

        if (profile === undefined) {
            profile = await User.query()
                .insert({
                    user_id: this.m.author.id,
                    level: 1,
                    experience: 0,
                    coins: 0,
                });
        }

        // What should we update
        let update = {};

        if ((profile.experience + randXp) >= (profile.level * 250)) {
            update.level = profile.level + 1;
            update.coins = parseInt(profile.coins) + rand(5,10)
        }

        update.experience = (profile.experience + randXp);

        profile = await User.give(profile.id, update)

        if(update.level)
        {
            this.channel.send({
                embed: new Discord.RichEmbed()
                    .setTitle("Level Up!")
                    .setDescription(`${this.m.author.username} leveled up to level ${update.level}`)
            })
        }

    }

}

function rand (min,max) {
    return Math.floor(Math.random() * (parseInt(max) - parseInt(min) + 1) + parseInt(min))
}

function mt_rand () {
    return Math.floor(Math.random() * (parseInt(process.env.ECONOMY_XP_MAX) - parseInt(process.env.ECONOMY_XP_MIN) + 1) + parseInt(process.env.ECONOMY_XP_MIN))
}
module.exports = GiveXPFilter;