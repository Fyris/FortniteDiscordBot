const Discord = require('discord.js');
const client = new Discord.Client();
var config = require('./config');
var Stats = require('./stats');
var fortnite = require('./fortniteclient');
var leaderboards = require('./leaderboards');


client.on('ready', () => {
    console.log("Bot ready");
    client.user.setActivity("WIP Fortnite Bot");
});

client.on('message', msg => {
    if (msg.author.bot) return;
    if (msg.content.indexOf(config.prefix) !== 0) return;

    const args = msg.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const channel = msg.channel;




    switch(command) {
        case 'stats':
            Stats.getStats(args, command, channel);
            break;
        case 'status':
            fortnite.status(channel);
            break;
        case 'leaderboards':
            leaderboards.getLeaderBoards(args,channel);
            break;
        case 'news':
            fortnite.news(channel,args);
            break;
        case 'help':
            // TODO :: Help section
            break;
        default:
            break;

    }


});

client.login(config.discord_token);