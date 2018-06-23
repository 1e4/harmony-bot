let Discord = require('discord.js');

class BaseCommand {

    constructor(message) {

        // Set the raw message object
        this.rawMessage = message;

        // Set the message content object
        this.message = message.content;

        // Setup a shortcut to access the author of the message
        this.author = message.author;

        // Setup a shortcut to access the channel the message was sent in
        this.channel = message.channel;

        // Setup a shortcut to access the guild
        this.guild = message.guild;

        // Shortcut for all channels in the guild
        this.allChannels = message.guild.channels;

        // Get mentions for the message
        this.mentions = message.mentions;

        // Split the chat into arguments
        this.args = message.content.split(' ');
    }

    getChannel(channelId) {
        return this.allChannels.find('id', channelId)
    }

    findGuildUser(userId) {
        let user = this.guild.members.find(user => user.displayName === this.args[1]);

        if(user)
            return user.user;

        return null;
    }

    hasPermission(permissionFlag) {
        return this.rawMessage.member.hasPermission(permissionFlag);
    }

    hasRole(roleName) {
        return this.rawMessage.member.roles.find(role => role.name === roleName);
    }
}

module.exports = BaseCommand;