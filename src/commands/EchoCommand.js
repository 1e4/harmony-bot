let BaseCommand = require(__dirname + '\\BaseCommand');

class EchoCommand extends BaseCommand {
    run() {
        this.channel.send(this.message.replace('/echo ', ''));
        console.log('Echoing command')
    }
}

module.exports = EchoCommand;