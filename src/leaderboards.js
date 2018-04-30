var Client = require('./fortniteclient');
const Fortnite = require("fortnite-api");
var Embed = require('./embed');
var self = module.exports = {

    getLeaderBoards:(args, channel) => {
        if (!args[0] || (args[0] !== "pc" && args[0] !== "ps4" && args[0] !== "xb1") ) { channel.send("Please specify platform for Leaderboards."); return;}
        if (!args[1] || (args[1] !== 'solo' && args[1] !== 'duo' && args[1] !== 'squads') ) { channel.send("Please specify a mode for Leaderboards (Solo,Duo,Squads)"); return;}
        args[0] = args[0].toLowerCase();
        args[1] = args[1].toLowerCase();



        var mode = new Object();

        switch (args[1])
        {
            case "solo":
                mode = Fortnite.SOLO;
                break;
            case 'duo':
                mode = Fortnite.DUO;
                break;
            case 'squad':
                mode = Fortnite.SQUAD;
                break;
            case 'squads':
                mode = Fortnite.SQUAD;
                break;
            default:
                break;
        }

            Client.fortniteAPI.login().then(() => {
                Client.fortniteAPI
                    .getScoreLeaderBoard(args[0], mode)
                    .then(leaderboards => {
                        channel.send({ embed: Embed.formatLeaderBoards(leaderboards, args)});
                    })
                    .catch(err => {
                        console.log(err);
                    });
            });


    }
}