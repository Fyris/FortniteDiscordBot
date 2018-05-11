const Discord = require('discord.js');
const client = new Discord.Client();
var config = require('./config');
var Stats = require('./stats');
var fortnite = require('./fortniteclient');
var leaderboards = require('./leaderboards');
var help = require('./help');

client.on('ready', () => {
    console.log("Bot ready");
    console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
    console.log(client.guilds.forEach(function(guild) {
        console.log(guild.name + " " + guild.memberCount);
    }));
    
config.getWelcomeMessage(); // Load welcome message
    client.user.setActivity(`${config.prefix}help`);
});

client.on('guildCreate', (guild) => {
console.log("joined " + guild.name);
    guild.defaultChannel.send({embed: config.on_join_server_msg});
});

client.on('message', msg => {
console.log(msg.content);
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
        case 'store':
            fortnite.store();
            break;
        case 'help':
            help.HelpDocs(args,msg.author);
            // TODO :: Proper help section
            break;
        case 'lang':
            config.changeLanguage(args[0],channel);
            break;
        default:
            break;

    }


});

client.login(config.discord_token);