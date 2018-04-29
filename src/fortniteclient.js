var config = require('./config');
const Fortnite = require("fortnite-api");
var Embed = require('./embed');

var self = module.exports = {

    fortniteAPI: new Fortnite(
        [
            config.fortnite_email_address,
            config.fortnite_password,
            "MzRhMDJjZjhmNDQxNGUyOWIxNTkyMTg3NmRhMzZmOWE6ZGFhZmJjY2M3Mzc3NDUwMzlkZmZlNTNkOTRmYzc2Y2Y=",
            "ZWM2ODRiOGM2ODdmNDc5ZmFkZWEzY2IyYWQ4M2Y1YzY6ZTFmMzFjMjExZjI4NDEzMTg2MjYyZDM3YTEzZmM4NGQ"
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
    },
    news: (channel,lang) => {
        if (lang.length == 0) {
            lang = "en";
        }
        lang = lang[0];

        self.fortniteAPI.login().then(() => {
            self.fortniteAPI
                .getFortniteNews(lang)
                .then(news => {
                    var newsArr = [];
                    for (var i = 0, len = news.br.length; i < len; i++) {
                        newsArr.push([news.br[i].title, news.br[i].body]);
                    }
                    channel.send({embed: Embed.formatNews(newsArr)});
                })
                .catch(err => {
                    console.log(err);
                });
        });
    }

}