const Discord = require("discord.js");
const db = require("quick.db");
exports.run = async (client, message, args) => {
  let mesaj = args.slice(0).join(" ");
   if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.reply(
      "**Bunu sadece YÖNETİCİ yetkisi olan kişiler yapabilir.**"
    );


  let duyurukanal = "813457135139815434";
  let duyuru = await message.guild.channels.cache.get(duyurukanal);
  message.channel.send("Başarıyla duyuru yapıldı !");
  duyuru.send("@everyone");

  message.delete();

  const sj = new Discord.MessageEmbed()
    .setTitle("StorikaNW Duyuru")
    .setDescription(`${mesaj}`)
    .setFooter("İyi Oyunlar !");
  duyuru.send(sj);
};

module.exports.conf = {
  aliases: [],
  permLevel: 3,
  enabled: true,
  guildOnly: true
};

module.exports.help = {
  name: "duyuru",
  description: "duyuru",
  usage: "duyuru"
};
