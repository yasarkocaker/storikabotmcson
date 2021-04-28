const Discord = require('discord.js');

exports.run = (client, message, args) => {
  
  message.channel.send('https://storikanw.net/destek')
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'destek',
  description: 'api',
  usage: 'örnek'
};