const Discord = require('discord.js');
const client = new Discord.Client();
var config = require('./config');
var Stats = require('./stats');
var Fortnite = require('./fortniteclient');


client.on('ready', () => {
    client.user.setActivity("WIP Fortnite Bot");
});

client.on('message', msg => {
    if (msg.author.bot) return;
    if (msg.content.indexOf(config.prefix) !== 0) return;

    const args = msg.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();


    if (command === 'stats') {
            Stats.getStats(args, command, msg.channel);
    }

    switch(command) {
        case 'stats':
            Stats.getStats(args, command, msg.channel);
            break;
        case 'status':
            Fortnite.status(msg.channel);
            break;
        default:
            break;

    }


});

client.login(config.discord_token);