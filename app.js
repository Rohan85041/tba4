const {Telegraf} =require('telegraf');
const dotenv=require('dotenv');
dotenv.config();
const bot=new Telegraf(process.env.token);
bot.start(function(ctx){
ctx.reply("hi");
})
bot.command('location',function(ctx){
    ctx.replyWithLocation(15.3692,75.1217)
})
bot.command('meme',async function(ctx){
   await ctx.replyWithAnimation('https://media1.tenor.com/m/Dc7Jf45wXjkAAAAd/upendra-gif.gif')
})
bot.launch();
console.log("nandu")
console.log("feature");
