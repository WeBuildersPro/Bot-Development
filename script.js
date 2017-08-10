let script = new Script({
    start: {
        receive: (bot) => {
            return bot.say("Hello! I can help answer some basic questions until a representative is able to help.")
                .then(() => "askName");
        }
    },

    askName: {
        prompt: (bot) => bot.say("My name is BOT Lisa, what's yours?"),
        receive: (bot, message) => {
            const name = message.text;
            return bot.setProp("name", name)
                .then(() => bot.say("Great! I'll call you " + name))
                .then(() => "commands");
        }
    },

    commands: {
        prompt: (bot) => bot.say("Commands: Prices, Order, Finish"),
        receive: (bot, message) => {
            var commandMSG = message.text;

            if (commandMSG.toUpperCase() === "COMMANDS" ||commandMSG.toUpperCase() === "COMMAND" || commandMSG.toUpperCase() === "HELP") {
                return "commands";
                    then(() => "commands");
            } else

            if (commandMSG.toUpperCase() === "PRICES" || commandMSG.toUpperCase() === "COST" || commandMSG.toUpperCase() === "COSTS") {
                return "prices";
                    then(() => "prices");
            } else

            if (commandMSG.toUpperCase() === "ORDER" || commandMSG.toUpperCase() === "HOW TO ORDER" || commandMSG.toUpperCase() === "HOW TO ORDER WEBSITE") {
                return "order";
                    then(() => "order");
            } else

            if (commandMSG.toUpperCase() === "FINISH" || commandMSG.toUpperCase() === "STOP" || commandMSG.toUpperCase() === "DONE") {
                return "finish";
                    then(() => "finish");
            }

            else {
                return "commands";
                    then(() => bot.say("Invalid Command"));
                    then(() => "commands");
            }
        }
    },

    prices: {
        prompt: (bot) => bot.say("The price of a website is not fixed.  It varies depending on the amount of time we are given to complete it, the difficulty of the project, and the amount of time it will take us.  The hosting price is $10 / month and this includes the maintenance of the website as well. Enter \"Commands\" if you do not remember the commands."),
        receive: (bot, message) => {
            var priceMSG = message.text;

            if (priceMSG.toUpperCase() === "COMMANDS" ||priceMSG.toUpperCase() === "COMMAND" || priceMSG.toUpperCase() === "HELP") {
                return "commands";
                    then(() => "commands");
            } else

            if (priceMSG.toUpperCase() === "PRICES" || priceMSG.toUpperCase() === "COST" || priceMSG.toUpperCase() === "COSTS") {
                return "commands";
                    then(() => "commands");
            } else

            if (priceMSG.toUpperCase() === "ORDER" || priceMSG.toUpperCase() === "HOW TO ORDER" || priceMSG.toUpperCase() === "HOW TO ORDER WEBSITE") {
                return "order";
                    then(() => "order");
            } else

            if (priceMSG.toUpperCase() === "FINISH" || priceMSG.toUpperCase() === "STOP" || priceMSG.toUpperCase() === "DONE") {
                return "finish";
                    then(() => "finish");
            }

            else {
                return "commands";
                    then(() => bot.say("Invalid Command"));
                    then(() => "commands");
            }
        }
    },

    order: {
        prompt: (bot) => bot.say("To order you can contact us at webuilderspro@gmail.com. When you order you should specify the urgency of the project and the look you want to go for. You can also request anything else that you would like. Enter \"Commands\" if you do not remember the commands."),
        receive: (bot, message) => {
            var orderMSG = message.text;

            if (orderMSG.toUpperCase() === "COMMANDS" || orderMSG.toUpperCase() === "COMMAND" || orderMSG.toUpperCase() === "HELP") {
                return "commands";
                    then(() => "commands");
            } else

            if (orderMSG.toUpperCase() === "PRICES" || orderMSG.toUpperCase() === "COST" || orderMSG.toUpperCase() === "COSTS") {
                return "prices";
                    then(() => "prices");
            } else

            if (orderMSG.toUpperCase() === "ORDER" || orderMSG.toUpperCase() === "HOW TO ORDER" || orderMSG.toUpperCase() === "HOW TO ORDER WEBSITE") {
                return "commands";
                    then(() => "commands");
            } else

            if (orderMSG.toUpperCase() === "FINISH" || orderMSG.toUpperCase() === "STOP" || orderMSG.toUpperCase() === "DONE") {
                return "finish";
                    then(() => "finish");
            }

            else {
                return "commands";
                    then(() => bot.say("Invalid Command"));
                    then(() => "commands");
            }
        }
    },

    finish: {
        receive: (bot, message) => {
            return bot.getProp('name')
                .then((name) => bot.say("Hello again, commands will no longer work as I have been turned off. A representative will speak to you shortly."))
                .then(() => "done");
        }
    },

    done: {
        receive: (bot, message) => {
            return "done";
                then(() => "done");
        }
    }
});