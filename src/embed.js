var config = require('./config');
var self = module.exports = {

    formatStats: (args,response) => {
        return {
            "title": `${response.info.username} Stats - ${response.info.platform.toUpperCase()} Platform\n\u200B    `,
            "color": config.embedcolor,
            "thumbnail": {
                "url": "https://github.com/Fyris/FortniteDiscordBot/blob/master/src/media/Fortnite.png?raw=true"
            },
            "author": {
                "name": "Fortnite Bot",
                "url": "https://github.com/Fyris/FortniteDiscordBot"
            },
            "fields": [
                {
                    "name": "Solo",
                    "value": "---------------------------------------------------------------------"
                },
                {
                    "name": "Wins",
                    "value": response.group.solo.wins,
                    "inline": true
                },
                {
                    "name": "Score",
                    "value": response.group.solo.score,
                    "inline": true
                },
                {
                    "name": "Kills",
                    "value": response.group.solo.kills,
                    "inline": true
                },
                {
                    "name": "K/D",
                    "value": response.group.solo.killsPerMatch + "\n\u200B",
                    "inline": true
                },
                {
                    "name": "Duo",
                    "value": "---------------------------------------------------------------------"
                },
                {
                    "name": "Wins",
                    "value": response.group.duo.wins,
                    "inline": true
                },
                {
                    "name": "Score",
                    "value": response.group.duo.score,
                    "inline": true
                },
                {
                    "name": "Kills",
                    "value": response.group.duo.kills,
                    "inline": true
                },
                {
                    "name": "K/D",
                    "value": response.group.duo.killsPerMatch + "\n\u200B",
                    "inline": true
                },
                {
                    "name": "Squads",
                    "value": "---------------------------------------------------------------------"
                },
                {
                    "name": "Wins",
                    "value": response.group.squad.wins,
                    "inline": true
                },
                {
                    "name": "Score",
                    "value": response.group.squad.score,
                    "inline": true
                },
                {
                    "name": "Kills",
                    "value": response.group.squad.kills,
                    "inline": true
                },
                {
                    "name": "K/D",
                    "value": response.group.squad.killsPerMatch + "\n\u200B",
                    "inline": true
                },
                {
                    "name": "Lifetime",
                    "value": "---------------------------------------------------------------------"
                },
                {
                    "name": "Wins",
                    "value": response.lifetimeStats.wins,
                    "inline": true
                },
                {
                    "name": "Score",
                    "value": response.lifetimeStats.score,
                    "inline": true
                },
                {
                    "name": "Kills",
                    "value": response.lifetimeStats.kills,
                    "inline": true
                },
                {
                    "name": "K/D",
                    "value": response.lifetimeStats.killsPerMatch,
                    "inline": true
                }
            ]
        }

    },
    formatLeaderBoards : (response,args) => {
        var embed = `**LeaderBoards - ${args[0].toUpperCase()} Platform - ${args[1].toUpperCase()} Mode **\n\n`;
        for (var i = 0, len = response.length; i < len; i++) {
            embed += i+1 + " . " + response[i].displayName +"\n";
        }
        return {
            color: config.embedcolor,
            description: embed
        }
    },
    formatNews : (response) => {
        var embed = `**Fortnite News**\n\n`;
        for (var i = 0, len = response.length; i < len; i++) {
            embed += "**" + response[i][0] + "**\n";
            embed += response[i][1] + "\n\n";
        }
        return {
            color: config.embedcolor,
            description: embed,
            thumbnail: {
                "url": "https://github.com/Fyris/FortniteDiscordBot/blob/master/src/media/Fortnite.png?raw=true"
            },
        }
    },
    formatHelp: (command, text) => {
        return {
            color: config.embedcolor,
            description: `** Help Documents - ${command}**\n\n${text}`,
            thumbnail: {
                "url": "https://github.com/Fyris/FortniteDiscordBot/blob/master/src/media/Fortnite.png?raw=true"
            },
        }
    }
}