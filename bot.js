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
bot.on('voiceStateUpdate', (oldMember, newMember) => {
  let newUserChannel = newMember.voiceChannel
  let oldUserChannel = oldMember.voiceChannel
  var channel = client.channels.get('572351018189324299');

  if(oldUserChannel === undefined && newUserChannel !== undefined) {

    message.channel.send('has joined a voice channel');

  } else if(newUserChannel === undefined){

    message.channel.send('has leave a voice channel');

  }
})
