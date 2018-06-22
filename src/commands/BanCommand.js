let BaseCommand = require(__dirname + '\\BaseCommand');

class EchoCommand extends BaseCommand {
    run() {
        let user = this.message.split(' ');

        this.channel.send();
        console.log("Banning user");
    }
}

module.exports = EchoCommand;