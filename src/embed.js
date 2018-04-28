var config = require('./config');
var self = module.exports = {

    formatStats: (args,response) => {
        return {
            "title": `${response.info.username} Stats - ${response.info.platform} Platform`,
            "color": config.embedcolor,
            "timestamp": new Date().toISOString(),
            "footer": {
                "text": "Fortnite Bot"
            },
            "thumbnail": {
                "url": "https://d1u5p3l4wpay3k.cloudfront.net/fortnite_gamepedia/6/6e/S1.png"
            },
            "author": {
                "name": "Fortnite Bot",
                "url": "https://discordapp.com",
                "icon_url": "https://d1u5p3l4wpay3k.cloudfront.net/fortnite_gamepedia/6/6e/S1.png"
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
                    "value": response.group.solo.killsPerMatch + "\n ",
                    "inline": true
                },
                {
                    "name": "Duo",
                    "value": "---------------------------------------------------------------------\n"
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
                    "value": response.group.duo.killsPerMatch + "\n ",
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
                    "value": response.group.squad.killsPerMatch,
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
    }
}