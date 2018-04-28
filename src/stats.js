var Client = require('./fortniteclient');
var Embed = require('./embed');
var self = module.exports = {

    getStats: (args,response,channel) => {


        args[1] = args[1].toLowerCase();

        if (!args[0]) { channel.send("Please specify a display name"); return;}
        if (args[1] != "pc" && args[1] != 'ps4' && args[1] != "xb1") { channel.send("Please specify a platform (pc,ps4,xb1)"); return; }

        Client.fortniteAPI.login().then(() => {
            Client.fortniteAPI
                .getStatsBR(args[0], args[1])
                .then(stats => {
                    channel.send({embed: Embed.formatStats(args,stats)});
                })
                .catch(err => {
                    if (err.toLowerCase() == "player not found")
                        channel.send(`Player ${args[0]} not found.`);
                    console.log(err);
                });
        });
    },


}