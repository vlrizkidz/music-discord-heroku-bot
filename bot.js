const Discord = require("discord.js"); // We Call The Packages.
// const PREFIX = "<"; // You can change this Prefix to whatever you want.
const PREFIX = process.env.PREFIX;

const bot = new Discord.Client();

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
//    bot.user.setActivity(`hell yeah`);
//    console.log(`${bot.user.username} is Ready!`);
//});

//bot.on("ready", () => {
//  const channel = bot.channels.get("665123932881551360");
//  if (!channel) return console.error("The channel does not exist!");
//  channel.join().then(connection => {
//    console.log("Successfully connected Voice Channel");
//  }).catch(e => {
//   console.error(e);
//  });
//});

//bot.on('ready', () => {
//   bot.user.setPresence({ main de { name: 'with discord.js' }, status: 'idle' })
//   console.log(`${client.user.username} is up and running!`);
//})

module.exports = async (oldMember,newMember,message) => {

    if(newMember.user.bot) return;
    let newUserChannel = newMember.voiceChannel
    let oldUserChannel = oldMember.voiceChannel

    let newdate = new Date(newMember.joinedTimestamp)

    var log =  message.guild.channels.find(ch => ch.name.includes('nothing'));

    if(oldUserChannel === undefined && newUserChannel !== undefined) {
        log.send(`:small_red_triangle_down: <@${newMember.user.id}> Left a voice channel at ${newdate}`); 
    } else if(newUserChannel === undefined){
        log.send(`:white_check_mark: <@${newMember.user.id}> Joined a voice channel at ${newdate}`);
    }else if(oldUserChannel !== newUserChannel){
        log.send(`:arrow_right: <@${newMember.user.id}> Joined a voice channel at ${newdate}`);
    }

    }



















// Bot Login.
// bot.login('YourAwesomeBotToken');
bot.login(process.env.BOT_TOKEN);
