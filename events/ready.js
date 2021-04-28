const ayarlar = require('../ayarlar.json')//Jûstîcêêê#1337
const discord = require('discord.js')//Jûstîcêêê#1337
const request = require('request')//Jûstîcêêê#1337
//Jûstîcêêê#1337
module.exports = client => {
    client.user.setStatus("online");

    request(`https://mcapi.xdefcon.com/server/mc.storikanw.net/full/json`, function (error, response, body) {
      if (error) return console.log('Error:', error);
          var info = JSON.parse(body);
  client.user.setActivity(`${info.players} kişi StorikaNW`);
})
//Jûstîcêêê#1337
    setInterval(() => { 
        request(`https://mcapi.xdefcon.com/server/mc.storikanw.net/full/json`, function (error, response, body) {
            if (error) return console.log('Error:', error);
                var info = JSON.parse(body);
        client.user.setActivity(`${info.players} kişi StorikaNW`);
        console.log("Online Sayısı Yenilendi")
      })
    }, 50000);
 }