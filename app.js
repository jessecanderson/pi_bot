const { Telegraf } = require('telegraf')

const bot = new Telegraf('1957006894:AAGp56NDJAERlT-B_9iza1shO5r0cddUTXQ');

bot.command('start', ctx => {
    console.log(ctx.from);
    bot.telegram.sendMessage(ctx.chat.id, 'Hello there! Welcome to my new bot', {})
});

bot.command('help', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, "This will be a list of commands", {})
});

bot.launch();