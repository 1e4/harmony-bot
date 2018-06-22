let BaseCommand = require(__dirname + '\\BaseCommand');

class BanCommand extends BaseCommand {
    run() {
        console.log("Banning user");
    }
}

module.exports = BanCommand;