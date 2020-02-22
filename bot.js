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
  // Here I'm storing the IDs of their voice channels, if available
  let oldChannel = oldMember.voiceChannel ? oldMember.voiceChannel.id : null;
  let newChannel = newMember.voiceChannel ? newMember.voiceChannel.id : null;
  if (oldChannel == newChannel) return; // If there has been no change, exit

  // Here I'm getting the bot's channel (bot.voiceChannel does not exist)
  let botMember = oldMember.guild.member(bot.user),
    botChannel = botMember ? botMember.voiceChannel.id : null;

  // Here I'm getting the channel, just replace VVV this VVV with the channel's ID
  let textChannel = oldMember.guild.channels.get('57235101819324299');
  if (!textChannel) throw new Error("That channel does not exist.");

  // Here I don't need to check if they're the same, since it would've exit before
  if (newChannel == botChannel) {
    // console.log("A user joined.");
    textChannel.send(`${newMember} has joined the voice channel.`);
  } else if (oldChannel == botChannel) {
    // console.log("A user left.");
    textChannel.send(`${newMember} has left the voice channel.`);
  }
});
