var Client = require('./fortniteclient');
var Embed = require('./embed');
var self = module.exports = {

    getStats: (args,response,channel) => {


        args[1] = args[1].toLowerCase();

        if (!args[0]) { channel.send("Please specify a display name"); return;}
        if (args[1] != "pc" && args[1] != 'ps4' && args[1] != "xb1") { channel.send("Please specify a platform"); return; }

        Client.fortniteAPI.login().then(() => {
            Client.fortniteAPI
                .getStatsBR(args[0], args[1])
                .then(stats => {
                    channel.send({embed: Embed.formatStats(args,stats)});
                })
                .catch(err => {
                    console.log(err);
                });
        });
    },


}