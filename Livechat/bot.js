const slackBot = require("slackbots");

// Create the bot
var bot = new slackBot({
    token: 'xoxb-223984827124-Mm5cgXC10SKfLukpvagfJ4Bq', 
    name: "Livechat Bot"
});

// When bot starts
bot.on('start', function() {
	console.log();
	console.log("Bot is now running");

    var params = {
    };
    
    var channelsRaw = bot.getChannels();
    var channelsOut = bot.getChannel("general");
    console.log(channelsOut);


});

bot.on('message', function(data) {
    // all ingoing events https://api.slack.com/rtm 
    console.log();
    console.log("Data:");
    console.log(data);
});