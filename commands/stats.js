const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'stats',
    description: 'epic stats of the bot',
    async execute(client, message, args) {

        let embed = new MessageEmbed()
        .setColor('#FFF000')
        .setAuthor('Stats of the bot')
        .setDescription(`Stats of the bot **${client.user.username}**`)
        .addField('SERVERS', client.guilds.cache.size, true)
        .addField('ID', client.user.id, true)
        .addField('STATSUS', client.user.presence.status, true)
        .addField('USERS', client.users.cache.size)
        message.channel.send(embed)
        
    }
}