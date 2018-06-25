let BaseCommand = require(__dirname + '/BaseCommand');
let config = require('../config/config');
let Discord = require('discord.js');
let User = require('../models/User');

class FlipCommand extends BaseCommand {
    async run() {

        let cost = parseInt(this.args[1]),
            choice = this.args[2],
            chance = this.rand(1,10),
            options = {
                heads: [
                    'heads',
                    '1',
                    'h',
                ],
                tails: [
                    'tails',
                    '2',
                    't',
                ],
            };

        if(options.heads.includes(choice))
        {
            choice = 'heads';
        }
        else if(options.tails.includes(choice))
        {
            choice = 'tails';
        }
        else
        {
            this.channel.send('Invalid choice, please choose heads or tails');
            this.channel.send('Example: "/flip 50 heads" would bet 50 coins on heads');
            this.channel.send('Example: "/flip 50 tails" would bet 50 coins on tails');
            return;
        }



        // Check if a valid cost
        if (!cost || cost === 0) {
            this.channel.send('invalid bet');
            return;
        }

        let profile = await User.findByUserId(this.author.id);

        // Check if they have enough coins
        if (profile.coins <= cost) {
            let embed = new Discord.RichEmbed();

            this.channel.send(
                'You don\'t have enough coins'
            );

            return;
        }

        if((chance >= 5 && choice === 'heads') || (chance <= 5 && choice === 'tails'))
        {
            await User.query().patch({
                coins: profile.coins + (cost * 2)
            });

            this.channel.send(`You won ${(cost * 2)}`);
        }
        else
        {
            this.channel.send('You lost')
        }
    }
}

module.exports = FlipCommand;