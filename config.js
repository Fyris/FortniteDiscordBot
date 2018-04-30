const replace = require('replace-in-file');
var fs = require('fs');

var config = module.exports = {
    fortnite_email_address: "",
    fortnite_password: "",
    discord_token: "", // Discord bot token

    prefix: '-', //Prefix that commands start with
    running_activity : `An activity`, // Running bot activity
    on_join_server_msg : null, // Auto message on joining a server

    embedcolor: 52122,
    language: 'en',

    // CONFIG METHODS
    changeLanguage: (lang,channel) => {
        lang = lang.toLowerCase();
        if (lang != 'en' && lang != 'de' && lang != 'es' && lang != 'it' && lang != 'fr' && lang != 'zh' && lang != 'ja')
            return;

        var options = {
            files: './config.js',
            from: `language: '${config.language}'`,
            to: `language: '${lang}'`
        };

        try {
            replace(options);
            config.language = lang;
            console.log("Modified config file");
            channel.send("Language changed!");
        }
        catch (error) {
            console.error('Error occurred:', error);
        }
    },
    getWelcomeMessage: () => {
        fs.readFile('./config/WelcomeMessage.txt', 'utf8', function (err,data) {
            if (err) {
                return console.log(err);
            }
            var msg = {
                color: config.embedcolor,
                description: data,
                thumbnail: {
                    "url": "https://github.com/Fyris/FortniteDiscordBot/blob/master/src/media/Fortnite.png?raw=true"
                }
            }
            config.on_join_server_msg = msg;
        });
    }

}