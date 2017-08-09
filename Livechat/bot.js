const slackBot = require("slackbots");

// Create the bot
var bot = new slackBot({
    token: 'xoxb-223984827124-y5kMDVAVSCATDACOG2BgLh4s', 
    name: "Livechat Bot"
});

// When bot starts
bot.on('start', function() {
	console.log("Bot is now running");
    var params = {
    };
    var channelRaw = bot.getChannels();
    for (i = 0; i < channelRaw.length; i++) {
    	var channels = bot.getChannel(channelRaw[i]);
    	console.log(channels);
    }
 
});