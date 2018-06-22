class EchoCommand {
    run(message) {

        message.channel.send(message.content.replace('/echo ', ''))
        console.log('Echoing command')
    }
}

module.exports = EchoCommand;