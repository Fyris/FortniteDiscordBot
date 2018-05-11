var Client = require('./fortniteclient');
var Embed = require('./embed');
var self = module.exports = {

    getStats: (args,response,channel) => {
        if (!args[1]) { channel.send("Please specify a display name"); return;}
        if (!args[0]) args[1] = "pc";

        var name = args.slice(1).join(" ");

        console.log(name);
        args[0] = args[0].toLowerCase();
        if (args[0] != "pc" && args[0] != 'ps4' && args[0] != "xb1") { channel.send("Please specify a platform (pc,ps4,xb1)"); return; }

        Client.fortniteAPI.login().then(() => {
            Client.fortniteAPI
                .getStatsBR(name, args[0])
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