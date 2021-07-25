module.exports = {
    name: 'bsembed',
    description: 'bla bla bla',
    async execute(client, message, args) {


        message.channel.send({
            embed: {
                color: '#000',
                description: 'FUN COMMANDS'
               
                
            }
        });
    }
}