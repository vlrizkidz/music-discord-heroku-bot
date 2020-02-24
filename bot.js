const Discord = require("discord.js"); // We Call The Packages.
// const PREFIX = "<"; // You can change this Prefix to whatever you want.
const PREFIX = process.env.PREFIX;
const bot = new Discord.Client();
const embed = new Discord.RichEmbed()
    .setColor("#3937a5")
    .addField("Username", `${user}`, true)
    .addField("Status", `${stat}`, true)
    .setTimestamp()
    .setFooter('Log by Ajiditya');

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
//  .catch(console.error);
//});

bot.on('voiceStateUpdate', (oldMember, newMember) => {
  let newUserChannel = newMember.voiceChannel 
  let oldUserChannel = oldMember.voiceChannel
  if (oldUserChannel === undefined && newUserChannel !== undefined) {
  let myGuild = bot.guilds.get('561245349814075412')
  var member = myGuild.members.get('324981063783022592')
  member.send(`${newMember} has join the voice channel.`)
  } if(newUserChannel === undefined) {
  let myGuild = bot.guilds.get('561245349814075412')
  var member = myGuild.members.get('324981063783022592')
  member.send(`${newMember} has left the voice channel.`)
  }
});


bot.on("presenceUpdate", (oldMember, newMember) => {
    if(newMember.user.bot) return;
    let user = newMember.user.username;
    let stat = newMember.user.presence.status;
    let userStatus = [];
    var date = new Date();
    userStatus.push(user, stat);
    console.log(`${user} is now ${stat}`);
    let myGuild = bot.guilds.get('561245349814075412')
    var member = myGuild.members.get('324981063783022592')
          member.send(embed)
    })



// Bot Login.
// bot.login('YourAwesomeBotToken');
bot.login(process.env.BOT_TOKEN);
