module.exports = {
    name: 'ping',
    description: 'caca',
    async execute(message, args) {
        const ping = msg.createdTimestamp - message.createdTimestamp;
        message.channel.send(`Project X's ping is now ${ping} is that good lol?`)    
    }
}