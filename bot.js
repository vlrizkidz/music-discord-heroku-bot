const Discord = require("discord.js");
const PREFIX = process.env.PREFIX;
const bot = new Discord.Client();
const ytdl = require('ytdl-core');
const streamOptions = { seek: 0, volume: 1 };

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

//bot.on("ready", () => {
//  const channel = bot.channels.get("561245349818269696");
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
  let enter = newMember.voiceChannel
  let out = oldMember.voiceChannel
  if (out === undefined && enter !== undefined) {
  enter.join().then(connection => {
    console.log("joined channel");
    const stream = ytdl('https://www.youtube.com/watch?v=gWbfOuHGfDY', { filter : 'audioonly', quality: 'highestaudio' })
    const dispatcher = connection.playStream(stream, streamOptions)
    dispatcher.on('start', () => {
                console.log("Playing")
            })
dispatcher.on("end", end => {
          console.log("left channel");
    connection.disconnect();
})
})
}    
})    
   
      
//voice channel log      
bot.on('voiceStateUpdate', (oldMember, newMember) => {
  let newUserChannel = newMember.voiceChannel 
  let oldUserChannel = oldMember.voiceChannel
  if (oldUserChannel === undefined && newUserChannel !== undefined) {
  let myGuild = bot.guilds.get('561245349814075412')
  var member = myGuild.members.get('324981063783022592')
     var embed = new Discord.RichEmbed()
    .setTitle('Voice State')
    .setColor('#3937a5')
    .setDescription(`${newMember} has join voice channel`)
    .setTimestamp()
    .setFooter('Log by Ajiditya');
    member.send(embed)
  } if(newUserChannel === undefined) {
  let myGuild = bot.guilds.get('561245349814075412')
  var member = myGuild.members.get('324981063783022592')
     var embed = new Discord.RichEmbed()
    .setTitle('Voice State')
    .setColor('#3937a5')
    .setDescription(`${newMember} has leave voice channel`)
    .setTimestamp()
    .setFooter('Log by Ajiditya');
    member.send(embed)
  }
});

//online status log
bot.on("presenceUpdate", (oldMember, newMember) => {
    if(newMember.user.bot) return;
    let user = newMember.user.username;
    let stat = newMember.user.presence.status;
    let userStatus = [];
    userStatus.push(user, stat);
    console.log(`${user} is now ${stat}`);
    let myGuild = bot.guilds.get('561245349814075412')
    var member = myGuild.members.get('324981063783022592')
    var embed = new Discord.RichEmbed()
    .setTitle(`User State`)
    .setColor('#3937a5')
    .addField('Username', `${user}`, true)
    .addField('Status', `${stat}`, true)
    .setTimestamp()
    .setFooter('Log by Ajiditya');
    member.send(embed)
    })



// Bot Login.
// bot.login('YourAwesomeBotToken');
bot.login(process.env.BOT_TOKEN);
