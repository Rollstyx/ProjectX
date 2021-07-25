const Discord = require('discord.js');

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});

const bot = new Discord.Client({ disableEveryone: true});

client.once('ready', () => {
     console.log('chupapi munanyo');
 });

client.commands = new Discord.Collection();
client.events = new Discord.Collection();


['command_handler', 'event_handler'].forEach(handler => {
     require(`./handlers/${handler}`)(client, Discord);
})


client.login('ur token');