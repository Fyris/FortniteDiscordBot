var Client = require('./fortniteclient');
var Embed = require('./embed');
var self = module.exports = {

    getStats: (args,response,channel) => {
        if (!args[0]) { channel.send("Please specify a display name"); return;}

        var name = "";
        var server = "pc";

        args[0] = args[0].toLowerCase();
        if (args[0] == "pc" || args[0] == 'ps4' || args[0] == "xb1") {
            name = args.slice(1).join(" ");
            server = args[0];
        }
        else
        {
            name = args.slice(0).join(" ");
        }

        Client.fortniteAPI.login().then(() => {
            Client.fortniteAPI
                .getStatsBR(name, server)
                .then(stats => {
                    channel.send({embed: Embed.formatStats(args,stats)});
                    channel.send({embed: Embed.formatLifetimeStats(args,stats)});
                })
                .catch(err => {
                    if (err.toLowerCase() == "player not found" || err == "Impossible to fetch User. User not found on this platform")
                        channel.send(`Player ${args[0]} not found.`);
                    console.log(err);
                });
        });
    },


}