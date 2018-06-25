let Discord = require('discord.js');

class BaseCommand {

    constructor(message) {

        // Set the raw message object
        this.rawMessage = message;

        // Set the message content object
        this.message = message.content;

        // Setup a shortcut to access the author of the message
        this.author = message.author;

        this.member = message.member;

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

    findGuildUserById(userId) {
        let user = this.guild.members.find(user => user.user.id === userId);

        if(user)
            return user;

        return null;
    }

    findGuildUserByUsername(username) {
        let user = this.guild.members.find(user => user.user.username === username);

        if(user)
            return user;

        return null;
    }

    hasPermission(permissionFlag) {
        return this.rawMessage.member.hasPermission(permissionFlag);
    }

    hasRole(roleName) {
        return this.rawMessage.member.roles.find(role => role.name === roleName);
    }

    rand(min, max) {
        return Math.floor(Math.random() * (parseInt(max) - parseInt(min) + 1) + parseInt(min))
    }
}

module.exports = BaseCommand;