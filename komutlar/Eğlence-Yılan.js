const Discord = require('discord.js')
const GameCord = require('gamecord-fork').djs
const db = require('quick.db')

 exports.run = async (client, message, args) => {
   if(message.author.bot) return;
  if(message.channel.id !== '819892838870941716') return;
    let kontrol = await db.fetch(`dil_${message.guild.id}`);
  if (kontrol == "tr") {
    new GameCord.SnakeGame(message)
        .setTitle('Yılan Oyunu')
        .setColor('#7298da')
        .setTime(60000) // Always better to set max time because the default one is just 5s
                .run()

} else {
    new GameCord.SnakeGame(message)
    .setTitle('Yılan Oyunu')
    .setColor('#7298da')
    .setTime(60000) // Always better to set max time because the default one is just 5s
    .run()  
}
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['snake', 'yılan', 'yılan-oyunu', 'play-snake', 'yılan-oyna'],
    permLevel: 0
  };
   
  exports.help = {
    name: "snake",
    description: "Bot i",
    usage: "istatistik"
  };