const Discord = require('discord.js');

exports.run = (client, message, args) => {
  
  message.channel.send('https://storikanw.net')
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'site',
  description: 'api',
  usage: 'örnek'
};