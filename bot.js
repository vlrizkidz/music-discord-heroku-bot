const Discord = require("discord.js"); // We Call The Packages.
// const PREFIX = "<"; // You can change this Prefix to whatever you want.
const PREFIX = process.env.PREFIX;
const client = new Discord.Client();
var bot = new Discord.Client();

// Put the Music module in the new Client object.
// This allows for easy access to all the modules
// functions and data.
bot.music = require("discord.js-musicbot-addon");

// Now we start the music module.
bot.music.start(bot, {
    // Set the api key used for YouTube.
    // This is required to run the bot.
    youtubeKey: process.env.BOT_YOUTUBE_TOKEN,
    botPrefix: PREFIX
});

// Events.
//bot.on("ready", function() {
//    bot.user.setActivity(`in Dream`);
//    console.log(`${bot.user.username} is Ready!`);
//});

// Bot Login.
// bot.login('YourAwesomeBotToken');
bot.login(process.env.BOT_TOKEN);


//576876993166180362
//561280914861326367
//561285091440066564
//561285183039602696
//561285289507815424
//561802892030377994

bot.on('ready', () => {
	console.log('Ready Cuy!');
});


module.exports = async (oldMember, newMember, message) => {
    if(newState.user.bot) return;
    let newUserChannel = newMember.voiceChannel
    let oldUserChannel = newMember.voiceChannel
    console.log(oldMember,newMember);

    let newdate = new Date(newState.joinedTimestamp)

    var log =  message.guild.channels.find(ch => ch.name.includes('nothing')) || message.guild.channels.find(ch => ch.name.includes('bot')) || message.guild.channels.find(ch => ch.name.includes('empty'));

    if(oldUserChannel === undefined && newUserChannel !== undefined) {
        log.send(`:small_red_triangle_down: <@${newMember.user.id}> Left a voice channel at ${newdate}`); 
    } else if(newUserChannel === undefined){
        log.send(`:white_check_mark: <@${newMember.user.id}> Joined a voice channel at ${newdate}`);
    }else if(oldUserChannel !== newUserChannel){
        log.send(`:arrow_right: <@${newMember.user.id}> Joined a voice channel at ${newdate}`);
    }

    }

process.on("unhandledRejection", console.error);
