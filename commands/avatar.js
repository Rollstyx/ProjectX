module.exports = {
    name: 'avatar',
    description: 'bla bla bla',
    async execute(client, message, args) {

        if (!message.mentions.users.size) {
            message.channel.send(`Your avatar lol: ${message.author.displayAvatarURL({ dynamic: true})}`);
        }

        const avatar_list = message.mentions.users.map(user => {
            message.channel.send(`${user.username}'s Avatar: ${user.displayAvatarURL({ dynamic: true})}`)
        });

        message.channel.send(avatar_list)
    }
}