const Discord = require("discord.js");

exports.run = (client, message, args) => {
  message.channel.send([
    "storikanw.batihost.net",
    "mc.storikanw.net",
    "play.storikanw.net",
    "oyna.storikanw.net"
  ]);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "ip",
  description: "api",
  usage: "örnek"
};
