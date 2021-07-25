'use strict';

const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'eject',
    description: 'amogus',
    execute: async function(client, message, args) {
        const ejectedguy = args.slice(0).join(" ") && args.shift().toLowerCase();

        let eightBall = [
            `${ejectedguy} was not the impostor...`,
            `${ejectedguy} was the impostor...`,
            `${ejectedguy} was ejected...`,
        ];

        let answer = Math.floor(Math.random() * eightBall.length);

        let embed = new MessageEmbed()
        .setColor('#FF0000')
        .setAuthor('Amogus ejector')
        .setDescription(`${eightBall[answer]}`)
        .setImage('https://media1.tenor.com/images/8fa44b55a89e4f8418810c41a175b512/tenor.gif?itemid=22178094')
        message.channel.send(embed)
    }
}