import { Telegraf } from "telegraf";

require('dotenv').config();

if(!process.env.BOT_TOKEN) {
    throw "error: token not specified";
}

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.on('message', ctx => {
    const msg = (ctx.message as any).text;
    if(msg) {
        ctx.reply(msg);
    }
})

console.log('running');
bot.launch();