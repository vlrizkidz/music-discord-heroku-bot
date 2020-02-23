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
//   bot.user.setActivity('Rainbow Six Siege', { type: 'PLAYING' })
//  .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : 'none'}`))
 // .catch(console.error);
//});

bot.on('voiceStateUpdate', (oldMember, newMember) => {
  let newUserChannel = newMember.voiceChannel 
  let oldUserChannel = oldMember.voiceChannel
  let textChannel = oldMember.guild.channels.get('572351018189324299');
  if (!textChannel) throw new Error("That channel does not exist.");
  if (oldUserChannel === undefined && newUserChannel !== undefined) {
  var currentdate = new Date(); 
      currentdate
  textChannel.send(`${newMember} has joined the voice channel.`);
console.log(currentdate)
  } if(newUserChannel === undefined) {
  var currentdate = new Date(); 
      textChannel.send(`${newMember} has left the voice channel.`);
      currentdate
console.log(currentdate)
  }
});

//let userStatus = [];

//bot.on("presenceUpdate", (oldMember, newMember) => {
//    let user = newMember.user.username;
//    let stat = newMember.user.presence.status;
//    let guildChannels = newMember.guild.channels;
//    userStatus.push(user, stat);
//    console.log(`${newMember.user.username} is now ${newMember.user.presence.status}`);
//        let botembed = new Discord.RichEmbed()
//            .setDescription("Status Update")
//            .setColor("#FFF")
//            .addField('.............................................', `${user} is now ${stat}`);
//    guildChannels.find('name', 'nothing')
//     console.log(`${user} is now ${stat}`);
//        userStatus = [];
//});    

async function statuscheck() {
    const statusArray = {};
    await bot.guilds.array().forEach(async g => {
        const status = [];
        await g.members.array().forEach(m => {
            status.push(m.user.username);       
        });
        statusArray[g.id] = status;
    });
    console.log('set'); // /So I know the timer works
    return statusArray;
}


bot.on('ready', () => {
    console.log('Bot is running...');
});

bot.on('ready', async bot => {
    setInterval(await statuscheck(bot), 10000); // runs the check funtion evrey 10s to keep up to date
});










// Bot Login.
// bot.login('YourAwesomeBotToken');
bot.login(process.env.BOT_TOKEN);
