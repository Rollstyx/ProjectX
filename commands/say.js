module.exports = {
    name: 'say',
    description: 'bla bla bla',
    async execute(client, message, args) {
        const sayMessage = args.join(" ");
        message.delete().catch(err => console.log(err));
        await message.channel.send({
            embed: {
                color: '#000',
                description: sayMessage,
                footer: {
                    text: `Requested by: <@${message.author.tag}>`
                }
            }
        })
    }
}