var embed = require('./embed');
var config = require('./config');
var self = module.exports = {


    HelpDocs: (msg,author) => {
        if (!msg[0]) msg[0] = "default";
        switch (msg[0].toLowerCase()){
            case "stats":
                var statsHelp = `${config.prefix}stats {platform} {display name}\n Example: ${config.prefix}stats pc ninja\n Supported Platforms: PC,PS4,XB1`;
                author.send({embed: embed.formatHelp(msg[0],statsHelp)});
                break;
            case "leaderboards":
                var leaderboardsHelp = `${config.prefix}leaderboards {Platform} {Mode}\n Example: ${config.prefix}Leaderboards pc solo\n\nSupported Platforms: PC,PS4,XB1\nSupported Modes: Solo,Duo,Squads`;
                author.send({embed: embed.formatHelp(msg[0],leaderboardsHelp)});
                break;
            case "status":
                var statusHelp = `${config.prefix}status\nChecks Fortnite server status.`;
                author.send({embed: embed.formatHelp(msg[0],statusHelp)});
                break;
            case "news":
                var newsHelp = `${config.prefix}news {language} \nRetrieves Fortnite news\n\nCurrently supported languages: EN,DE,FR,ES,IT,JA`;
                author.send({embed: embed.formatHelp(msg[0],newsHelp)});
                break;
            default:
                var defaultHelp = `Currently supported commands: stats,leaderboards,status,news\nYou can use ${config.prefix}help command to learn more about it.`;
                author.send({embed: embed.formatHelp("General Help",defaultHelp)});
                break;
        }
    }

}