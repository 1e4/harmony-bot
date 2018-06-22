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

        // Split the chat into arguments
        this.args = message.content.split(' ').map((value, index, array) => {
            return value.toLowerCase()
        });
    }
}

module.exports = BaseCommand;