var config = require('./config');
const Fortnite = require("fortnite-api");

var self = module.exports = {

    fortniteAPI: new Fortnite(
        [
            config.fortnite_email_address,
            config.fortnite_password
        ],
        {
            debug: true
        }
    ),

    status: (channel) => {
        self.fortniteAPI.login().then(() => {
            self.fortniteAPI
                .checkFortniteStatus()
                .then(status => {
                    channel.send(status ? "Fortnite servers are fully operational." : "Fortnite servers are currently down." );
                })
                .catch(err => {
                    console.log(err);
                });
        });
    }

}