const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const chalk = require("chalk");
const fs = require("fs");
const moment = require("moment");
var rpc = require("discord-rpc");
const shorten = require('isgd');
const Jimp = require("jimp");
const fetch = require('node-fetch');
const db = require("quick.db");
const ms = require("ms");
var prefix = ayarlar.prefix;
const hook = new Discord.WebhookClient('817765659986493472', 'yHYqrXiIxJy0WrJa8B9y4_zVKVAfp-UxowcMm2hhaeODcs-P-9PgnGpWg1oVBJQDW6Iq')

client.on("ready", () => {
  console.log(`Bot suan bu isimle aktif: ${client.user.tag}!`);
});

const log = message => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
};

///////////// KOMUTLAR BAŞ

//////////////////////////////////////////////////////////////////////////////////////////  KELİME OYUNU
client.on('message', async(message) => {
if(message.author.bot) return;
  if(message.channel.id !== '819890561484849183') return;
if(message.content.startsWith('.')) return;
if(message.content.split(" ").length > 1) return message.channel.send('Dostum kelime kullanıcaksın!').then(msg => {
                msg.delete({ timeout: 5000})
                message.delete()
            })
let kelime = db.get(`son_${message.guild.id}`)
let kelimeler = db.get(`kelimeler_${message.guild.id}`)

let kişi = db.get(`klm_${message.guild.id}`)
if(kişi == message.author.id) return message.channel.send('en son zaten sen yazmışsın -_-').then(msg => {
                msg.delete({ timeout: 5000})
                message.delete()
            })

  
  
const alphabet = "abcdefghiklmnopqrstuvyz"

const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)]
  
  
  
if(kelime == null) {
let son = randomCharacter.charAt(randomCharacter.length-1)
db.set(`son_${message.guild.id}`, son)
message.channel.send('Oyun **' + son + '** harfi ile başladı')
} 
  
  
  
if(kelime.toLowerCase() == 'ğ') return message.channel.send('oyun **'+ kelime + '** harfi ile bittiği için farklı bir harf yönlendirilecek...').then(msg => {
                msg.delete({ timeout: 5000})
                message.delete()
db.subtract(`kelime_${message.guild.id}`, 1)
let son = randomCharacter.charAt(randomCharacter.length-1)
db.set(`son_${message.guild.id}`, son)
message.channel.send('Oyun **' + son + '** harfi ile devam ediyor.')
                msg.delete({ timeout: 5000})
                message.delete()
            })
  
if(kelime.toLowerCase() !== message.content.charAt(0)) return message.channel.send('en son yazılan kelime **'+ kelime + '** ile bitmiş üzgünüm :(').then(msg => {
                msg.delete({ timeout: 5000})
                message.delete()
            })
if(!kelimeler) return db.push(`kelimeler_${message.guild.id}`, message.content)
if(kelimeler.includes(message.content)) return message.channel.send('Bu kelime zaten yazılmış başka bir şey dene :/').then(msg => {
                msg.delete({ timeout: 5000})
                message.delete()
    })




const api = await fetch(`https://sozluk.gov.tr/gts?ara=${encodeURI(message.content)}` )
      .then(response => response.json());
if(api.error) return message.channel.send('Öyle bir kelime yok dostum !').then(msg => {
                msg.delete({ timeout: 5000})
                message.delete()
db.subtract(`puan_${message.guild.id}_${message.author.id}`, 1)
            })

db.push(`kelimeler_${message.guild.id}`, message.content)
db.set(`son_${message.guild.id}`, message.content.charAt(message.content.length-1))
db.set(`klm_${message.guild.id}`, message.author.id)
db.add(`puan_${message.guild.id}_${message.author.id}`, 2)
message.react('✅')
})



////////////////////////////////////////////////////////////////////////////////////////////  SÜRELİ MESAJ
client.on("ready", async msg => {
  setInterval(() => {
    client.channels.cache
      .get("")
      .send("@everyone 20.30 Eventi Yaklaşıyorr En Önden Yerlerinizi Kapın! :smile:");
  }, 84000000);
});
//////////////////////////////////////////////////////////////////////////////////////////  OTO CEVAP
client.on("message", async msg => {
  if (msg.content.toLowerCase() === "!") {
    msg.reply("**Komutları görmek için st!help yazınız.**");
  }
});
//////////////////////////////////////////////////////////////////////////////////////////  OTO CEVAP
client.on("message", async msg => {
  if (msg.content.toLowerCase() === "sa") {
    msg.reply("Aleyküm Selam Hoşgeldin");
  }
});
////////////////////////////////////////////////////////////////////////////////////////// OTO CEVAP
client.on("message", async msg => {
  if (msg.content.toLowerCase() === "ip ne") {
    msg.channel.send([
      "mc.storikanw.net",
      "play.storikanw.net",
      "oyna.storikanw.net",
      "storikanw.batihost.net"
    ]);
  }
});
//////////////////////////////////////////////////////////////////////////////////////////  OTO CEVAP
client.on("message", async msg => {
  if (msg.content.toLowerCase() === "sürüm") {
    msg.channel.send(
      "**Sunucumuzun ana sürümü 1.16.5'tir ama 1.12.2 ve üstüyle de girebilirsiniz!**");
  }
});
////////////////////////////////////////////////////////////////////////////////////////////////
client.on("message", async msg => {
  if (msg.content.toLowerCase() === "sürüm ne") {
    msg.channel.send(
      "**Sunucumuzun ana sürümü 1.16.5'tir ama 1.12.2 ve üstüyle de girebilirsiniz!**");
  }
});

//////////////////////////////////////////////////////////////////////////////////////////
client.on("message", async msg => {
  if (msg.content.toLowerCase() === "sürüm kaç") {
    msg.channel.send(
      "**Sunucumuzun ana sürümü 1.16.5'tir ama 1.12.2 ve üstüyle de girebilirsiniz!**");
  }
});

//////////////////////////////////////////////////////////////////////////////////////////
client.on("message", async msg => {
  if (msg.content.toLowerCase() === "ip") {
    msg.channel.send([
      "mc.storikanw.net",
      "play.storikanw.net",
      "oyna.storikanw.net",
      "storikanw.batihost.net"
    ]);
  }
});

//////////////////////////////////////////////////////////////////////////////////////////  OTO CEVAP
client.on("message", async msg => {
  if (msg.content.toLowerCase() === "event ne zaman") {
    msg.reply("Her akşam saat 20.30 da");
  }
});
////////////////////////////////////////////////////////////////////////////////////////// OTOROL
client.on('guildMemberAdd', async (member) => {
  if(db.has(`${member.guild.id}_otorol`)) {
    var rolID = db.fetch(`${member.guild.id}_otorol`)
    member.roles.add(rolID)
  } else {
    return;
  }
  if(db.has(`${member.guild.id}_otokanal`)) {
    var kanal = client.channels.cache.get(db.fetch(`${member.guild.id}_otokanal`))
    const embed = new Discord.MessageEmbed()
    .setDescription(`Yeni katılan ${member} kullanıcısına <@&${rolID}> rolü verildi`)
    .setTimestamp()
    kanal.send(embed)
  } else {
    return;
  }
})
////////////////////////////////////////////////////////////////////////////////////////// OTO Cevap
client.on("message", async msg => {
  if (msg.content.toLowerCase() === "/help") {
    msg.reply("Lütfen yardım komutları için st!help yazınız");
  }
});

////////////////////////////////////////////////////////////////////////////////////////// ÖNERİ
client.on("message", async message => {
  let kanal = "813471750665928754"
  if(message.channel.id !== kanal) return; 
  if(message.author.bot) return
  message.delete()
  let öneri = new Discord.MessageEmbed()
  .setColor("RED")
  .addField("Kullanıcı:", `${message.author}`)
  .setTitle("Öneri")
   .setThumbnail("https://cdn.discordapp.com/avatars/814934914381381682/5f3b66c0c6d0f4c92d191a8f5afd632c.webp")
  .setDescription(`${message.content}`)
  .setTimestamp()
  client.channels.cache.get(kanal).send(öneri).then(gidenÖneri => {
    gidenÖneri.react("✅")
    gidenÖneri.react("❌")
  })
  })
////////////////////////////////////////////////////////////////////////////////////////// CAPS ENGEL SİSTEMİ

function percentage(partialValue, totalValue) {
  return (100 * partialValue) / totalValue;
}

client.on("message", async message => {
  if (!message.guild) return;
  let acikmi = await db.fetch(`${message.guild.id}.capsengel`);
  if (!acikmi) return;
  if (message.author.bot) return;
  if (message.member.hasPermission("MANAGE_MESSAGES")) return;
  let matched = message.content.replace(/[^A-Z]/g, "").length;
  let yuzde = percentage(matched, message.content.length);
  if (Math.round(yuzde) > acikmi.yuzde) {
    message.delete();
    message.channel
      .send(
        new Discord.MessageEmbed()
          .setColor("RED")
          .setTimestamp()
          .setFooter(
            "StorikaNW Capslock Engel Sistemi",
            message.guild.iconURL({ dynamic: true })
          )
          .setAuthor(
            "CapsLock Engelleme Sistemi",
            message.author.displayAvatarURL({ dynamic: true })
          )
          .setDescription(
            message.author.username +
              " - " +
              (message.member.nickname
                ? `${message.member.nickname} - ${message.author.id}`
                : message.author.id) +
              "\n**Uyarı!  Bu sunucuda büyük harfle yazma engeli bulunmaktadır!**\nBu sebepten göndermiş olduğunuz mesaj silindi."
          )
      )
      .then(msg => msg.delete({ timeout: 3000 }));
  } else {
    return;
  }
});

////////////////////////////////////////////////////////////////////////////////////////// REKLAM ENGEL
const reklam = [".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", ".net", ".rf.gd", ".az", ".party", "discord.gg",];

client.on("messageUpdate", async (old, nev) => {

    if (old.content != nev.content) {
        let i = await db.fetch(`reklam.${nev.member.guild.id}.durum`);
        let y = await db.fetch(`reklam.${nev.member.guild.id}.kanal`);
        if (i) {

            if (reklam.some(word => nev.content.includes(word))) {
                if (nev.member.hasPermission("BAN_MEMBERS")) return;
                //if (ayarlar.gelistiriciler.includes(nev.author.id)) return ;
                const embed = new Discord.MessageEmbed().setColor("#ff7e00").setDescription(`${nev.author} , **Ben varken reklam yapmaya mı çalıştın ?**`)
                    .addField("reklam:", nev)

                nev.delete();
                const embeds = new Discord.MessageEmbed().setColor("#ff7e00").setDescription(`${nev.author} , **Mesajı editleyip reklam yapmak mı ?**`)
                client.channels.cache.get(y).send(embed)
                nev.channel.send(embeds).then(msg => msg.delete({
                    timeout: 5000
                }));

            }
        } else {}
        if (!i) return;
    }
});

client.on("message", async msg => {


    if (msg.author.bot) return;
    if (msg.channel.type === "dm") return;
    let y = await db.fetch(`reklam.${msg.member.guild.id}.kanal`);

    let i = await db.fetch(`reklam.${msg.member.guild.id}.durum`);
    if (i) {
        if (reklam.some(word => msg.content.toLowerCase().includes(word))) {
            try {
                if (!msg.member.hasPermission("MANAGE_GUILD")) {
                    //  if (!ayarlar.gelistiriciler.includes(msg.author.id)) return ;
                    msg.delete({
                        timeout: 750
                    });
                    const embeds = new Discord.MessageEmbed().setColor("#ff7e00").setDescription(`<@${msg.author.id}> , **Dostum Lütfen reklam yapma**`)
                    msg.channel.send(embeds).then(msg => msg.delete({
                        timeout: 5000
                    }));
                }
            } catch (err) {
                console.log(err);
            }
        }
    }
    if (!i) return;
});

////////////////////////////////////////////////////////////////////////////////////////// KÜFÜR ENGEL
const küfür = ["oç","amcık","amk","yarrak","ananı sikiyim","s1kim","siktir","siktirgit","döl","s1k","orsbu","tten","s2cem","s2k","sik","göt","pezevenk","s1krm","skrm","orsbu","fuck","orosbu çocuğu","oç","sikiyim","piç","yavşak","sikimi ye","aq","mq","götveren","şerefsiz","kahpe","yarram","gavat","pezevenk","kes mq"];

client.on("messageUpdate", async (old, nev) => {

    if (old.content != nev.content) {
        let i = await db.fetch(`küfür.${nev.member.guild.id}.durum`);
        let y = await db.fetch(`küfür.${nev.member.guild.id}.kanal`);
        if (i) {

            if (küfür.some(word => nev.content.includes(word))) {
                if (nev.member.hasPermission("BAN_MEMBERS")) return;
                //if (ayarlar.gelistiriciler.includes(nev.author.id)) return ;
                const embed = new Discord.MessageEmbed().setColor("#ff7e00").setDescription(`${nev.author} , **Ben varken küfürmü emteye çalıştın?**`)
                    .addField("Küfür:", nev)

                nev.delete();
                const embeds = new Discord.MessageEmbed().setColor("#ff7e00").setDescription(`${nev.author} , **Mesajı editleyip küfür etmekmi?**`)
                client.channels.cache.get(y).send(embed)
                nev.channel.send(embeds).then(msg => msg.delete({
                    timeout: 5000
                }));

            }
        } else {}
        if (!i) return;
    }
});

client.on("message", async msg => {


    if (msg.author.bot) return;
    if (msg.channel.type === "dm") return;
    let y = await db.fetch(`küfür.${msg.member.guild.id}.kanal`);

    let i = await db.fetch(`küfür.${msg.member.guild.id}.durum`);
    if (i) {
        if (küfür.some(word => msg.content.toLowerCase().includes(word))) {
            try {
                if (!msg.member.hasPermission("MANAGE_GUILD")) {
                    msg.delete({
                        timeout: 750
                    });
                    const embeds = new Discord.MessageEmbed().setColor("#ff7e00").setDescription(`<@${msg.author.id}> , **Dostum Lütfen küfür etme!**`)
                    msg.channel.send(embeds).then(msg => msg.delete({
                        timeout: 5000
                    }));
                }
            } catch (err) {
                console.log(err);
            }
        }
    }
    if (!i) return;
});
////////////////////////////////////////////////////////////////////////////////////////// GİRİŞ ÇIKIŞ MESAJI
client.on('guildMemberAdd', async member => {
let member2 = member.user 
let zaman = new Date().getTime() - member2.createdAt.getTime()
var user = member2 
var takizaman = [];
if(zaman < 604800000) {
takizaman = 'Tehlikeli bilader, a desen seni bıçaklar'
} else {
takizaman = `Güvenli, gizli sırrımızı öğrenebilir`}require("moment-duration-format");
  let zaman1 = new Date().getTime() - user.createdAt.getTime()
  const gecen = moment.duration(zaman1).format(` YY **[Yıl,]** DD **[Gün,]** HH **[Saat,]** mm **[Dakika,]** ss **[Saniye]**`) 
  let dbayarfalanfilan = await db.fetch(`takidbayar${member.guild.id}`)
  let message = member.guild.channels.cache.find(x => x.id === `810869674325704734`) //id yazan kısma kanal id'si [orn: register-chat]
   const taki = new Discord.MessageEmbed()
    .setTitle("StorikaNW Hoşgeldin")
    .setDescription(`:loudspeaker: Uzaklardan bir steve belirdi...Aramıza hoşgeldin ${member} 
     Seninle Beraber **${message.guild.memberCount}** Kişiyiz.`)
    .setThumbnail(client.user.avatarURL())
    .setColor('#76FF03')
    message.send(taki)
  
          });


////////////////////////////////////////////////////////////////////////////////////////// GİRİŞ ÇIKIŞ MESAJI
client.on('guildMemberRemove', async member => {
let member2 = member.user 
let zaman = new Date().getTime() - member2.createdAt.getTime()
var user = member2 
var takizaman = [];
if(zaman < 604800000) {
takizaman = 'Tehlikeli bilader, a desen seni bıçaklar'
} else {
takizaman = `Güvenli, gizli sırrımızı öğrenebilir`}require("moment-duration-format");
  let zaman1 = new Date().getTime() - user.createdAt.getTime()
  const gecen = moment.duration(zaman1).format(` YY **[Yıl,]** DD **[Gün,]** HH **[Saat,]** mm **[Dakika,]** ss **[Saniye]**`) 
  let dbayarfalanfilan = await db.fetch(`takidbayar${member.guild.id}`)
  let message = member.guild.channels.cache.find(x => x.id === `809756803520659507`) //id yazan kısma kanal id'si [orn: register-chat]
   const taki = new Discord.MessageEmbed()
    .setTitle("StorikaNW Güle Güle")
    .setDescription(`:loudspeaker: Aramızdan bir Steve Ayrıldı...Güle Güle ${member} 
     Sunucuda **${message.guild.memberCount}** kişi kaldı.`)
    .setThumbnail(client.user.avatarURL())
    .setColor	('#DD2C00')
    message.send(taki)
  
          });

////////////////////////////////////////////////////////////////////////////////////////// MODERASYON LOG
const botadi = "StorikaNW"

client.on('guildBanAdd', async (guild, user) => {
  let modlogs = db.get(`modlogkanaly_${guild.id}`)
  const modlogkanal = guild.channels.cache.find(kanal => kanal.id === modlogs);
  if(!modlogs) return;
  if(modlogs) {
    let embed = new Discord.MessageEmbed()
    .setColor("#fffa00")
    .setAuthor("Bir kişi sunucudan yasaklandı")
    .setThumbnail(client.user.avatarURL())
    .addField(`Yasaklanan kişi`, `\`\`\` ${user.tag} \`\`\` `)
    .setFooter(`${botadi} | Mod-Log Sistemi`)
    .setTimestamp()
    modlogkanal.send(embed)
  }
});


client.on('guildBanRemove', async (guild, user) => {
  let modlogs = db.get(`modlogkanaly_${guild.id}`)
   const modlogkanal = guild.channels.cache.find(kanal => kanal.id === modlogs);
   if(!modlogs) return;
   if(modlogs) {
     let embed = new Discord.MessageEmbed()
     .setColor("#fffa00")
     .setAuthor("Bir kişinin yasağı kaldırıldı")
     .setThumbnail(client.user.avatarURL())
     .addField(`Yasağı kaldırılan kişi`, `\`\`\` ${user.tag} \`\`\` `)
     .setFooter(`${botadi} | Mod-Log Sistemi`)
     .setTimestamp()
     modlogkanal.send(embed)
   }
 });


 client.on('channelCreate', async channel => {
  let modlogs = db.get(`modlogkanaly_${channel.guild.id}`)
  let entry = await channel.guild.fetchAuditLogs({type: 'CHANNEL_CREATE'}).then(audit => audit.entries.first())
  let user = client.users.cache.get(entry.executor.id)
   const modlogkanal = channel.guild.channels.cache.find(kanal => kanal.id === modlogs);
   if(!modlogs) return;
   if(modlogs) {
     if (channel.type === "text") {
       let embed = new Discord.MessageEmbed()
       .setColor("#fffa00")
       .setAuthor("Bir Kanal Oluşturuldu")
       .addField(`Oluşturulan Kanalın İsmi : `, `${channel.name}`)
       .setThumbnail(client.user.avatarURL())
       .addField(`Oluşturulan Kanalın Türü : `, `Yazı`)
       .addField(`Kanalı Oluşturan : `, `<@${user.id}>`)
       .setFooter(`${botadi} | Mod-Log Sistemi`)
       .setTimestamp()
       modlogkanal.send(embed)
     }
       if (channel.type === "voice") {
       
         let embed = new Discord.MessageEmbed()
         .setColor("#fffa00")
         .setAuthor("Bir Kanal Oluşturuldu")
         .addField(`Oluşturulan Kanalın İsmi : `, `${channel.name}`)
         .setThumbnail(client.user.avatarURL())
         .addField(`Oluşturulan Kanalın Türü : `, `Ses`)
         .addField(`Kanalı Oluşturan : `, `<@${user.id}>`)
         .setFooter(`${botadi} | Mod-Log Sistemi`)
         .setTimestamp()
         modlogkanal.send(embed)
 
 
     }
 }});

 client.on('channelDelete', async channel => {
  let entry = await channel.guild.fetchAuditLogs({type: 'CHANNEL_DELETE'}).then(audit => audit.entries.first())
let user = client.users.cache.get(entry.executor.id)
let modlogs = db.get(`modlogkanaly_${channel.guild.id}`)
const modlogkanal = channel.guild.channels.cache.find(kanal => kanal.id === modlogs);
if(!modlogs) return;
if(modlogs) {
if (channel.type === "text") {
let embed = new Discord.MessageEmbed()
.setColor("#fffa00")
.setAuthor("Bir Kanal Silindi")
.addField(`Silinen Kanalın İsmi : `, `${channel.name}`)
.setThumbnail(client.user.avatarURL())
.addField(`Silinen Kanalın Türü : `, `Yazı`)
.addField(`Kanalı Silen : `, `<@${user.id}>`)
.setFooter(`${botadi} | Mod-Log Sistemi`)
.setTimestamp()
modlogkanal.send(embed)
}
  if (channel.type === "voice") {

    let embed = new Discord.MessageEmbed()
    .setColor("#fffa00")
    .setAuthor("Bir Kanal Silindi")
    .addField(`Silinen Kanalın İsmi : `, `${channel.name}`)
    .addField(`Silinen Kanalın Türü : `, `Ses`)
    .setThumbnail(client.user.avatarURL())
    .addField(`Kanalı Silen : `, `<@${user.id}>`)
    .setFooter(`${botadi} | Mod-Log Sistemi`)
    .setTimestamp()
    modlogkanal.send(embed)
   }
  }
});

client.on('roleDelete', async role => {
  let modlogs =  db.get(`modlogkanaly_${role.guild.id}`)
   let entry = await role.guild.fetchAuditLogs({type: 'ROLE_DELETE'}).then(audit => audit.entries.first())
   let user = client.users.cache.get(entry.executor.id)
  const modlogkanal = role.guild.channels.cache.find(kanal => kanal.id === modlogs);
   if(!modlogs) return;
   if(modlogs) {
     let embed = new Discord.MessageEmbed()
     .setColor("#fffa00")
     .setAuthor("Bir Rol Silindi")
     .setThumbnail(client.user.avatarURL())
     .addField(`Silinen Rolün İsmi : `, `${role.name}`)
     .addField(`Rolü Silen : `, `<@${user.id}>`)
     .setFooter(`${botadi} | Mod-Log Sistemi`)
     .setTimestamp()
     modlogkanal.send(embed)
   }
 });
 
 client.on('emojiDelete', async emoji => {
  let modlogs = db.get(`modlogkanaly_${emoji.guild.id}`)
  let entry = await emoji.guild.fetchAuditLogs({type: 'EMOJI_DELETE'}).then(audit => audit.entries.first())
  let user = client.users.cache.get(entry.executor.id)
   const modlogkanal = emoji.guild.channels.cache.find(kanal => kanal.id === modlogs);
   if(!modlogs) return;
   if(modlogs) {
     let embed = new Discord.MessageEmbed()
     .setColor("#fffa00")
     .setAuthor("Bir Emoji Silindi")
     .setThumbnail(client.user.avatarURL())
     .addField(`Silinen Emojinin İsmi : `, `${emoji.name}`)
     .addField(`Emojiyi Silen : `, `<@${user.id}>`)
     .setFooter(`${botadi} | Mod-Log Sistemi`)
     .setTimestamp()
     modlogkanal.send(embed)
   }
 });
  

 client.on('roleCreate', async role => {
  let modlogs =  db.get(`modlogkanaly_${role.guild.id}`)
  let entry = await role.guild.fetchAuditLogs({type: 'ROLE_CREATE'}).then(audit => audit.entries.first())
  let user = client.users.cache.get(entry.executor.id)
    const modlogkanal = role.guild.channels.cache.find(kanal => kanal.id === modlogs);
    if(!modlogs) return;
    if(modlogs) {
      let embed = new Discord.MessageEmbed()
      .setColor("#fffa00")
      .setAuthor("Bir Rol Oluşturuldu")
      .setThumbnail(client.user.avatarURL())
      .addField(`Oluşturulan Rolün İsmi : `, `${role.name}`)
      .addField(`Rolü Oluşturan : `, `<@${user.id}>`)
      .setFooter(`${botadi} | Mod-Log Sistemi`)
      .setTimestamp()
      modlogkanal.send(embed)
    }
  });
  
  
  client.on('emojiCreate', async emoji => {
   let modlogs = db.get(`modlogkanaly_${emoji.guild.id}`)
   let entry = await db.role.guild.fetchAuditLogs({type: 'EMOJI_CREATE'}).then(audit => audit.entries.first())
   let user = client.users.cache.get(entry.executor.id)
    const modlogkanal = emoji.guild.channels.cache.find(kanal => kanal.id === modlogs);
    if(!modlogs) return;
    if(modlogs) {
      let embed = new Discord.MessageEmbed()
      .setColor("#fffa00")
      .setAuthor("Bir Emoji Oluşturuldu")
      .setThumbnail(client.user.avatarURL())
      .addField(`Oluşturulan Emojinin İsmi : `, `${emoji.name}`)
      .addField(`Emoji Silen : `, `<@${user.id}>`)
      .setFooter(`${botadi} | Mod-Log Sistemi`)
      .setTimestamp()
      modlogkanal.send(embed)
    }
  });

//MESAJ LOG
client.on("messageUpdate", async (oldMessage, newMessage) => {
  if (newMessage.author.bot || newMessage.channel.type === "dm") return;
  if (newMessage.content.startsWith(prefix)) return;
  let sc = await db.fetch(`modlogkanaly_${newMessage.guild.id}`);
  let scbul = newMessage.guild.channels.cache.get(sc)
  if(!scbul) {
    
  }
  if (oldMessage.content == newMessage.content) return;
  let embed = new Discord.MessageEmbed()
    .setColor("#fffa00")
    .setAuthor(`Mesaj Düzenlendi`, newMessage.author.avatarURL())
    .addField("Kullanıcı", newMessage.author)
    .addField("Eski Mesaj", "```" + oldMessage.content + "```")
  .setThumbnail(client.user.avatarURL())
    .addField("Yeni Mesaj", "```" + newMessage.content + "```")
    .addField("Kanal Adı", newMessage.channel.name)
    .addField("Mesaj ID", newMessage.id)
    .addField("Kullanıcı ID", newMessage.author.id)
    .setFooter(`Bilgilendirme  • bügün saat ${newMessage.createdAt.getHours() +
        3}:${newMessage.createdAt.getMinutes()}`
    );
  scbul.send(embed);
});

client.on("messageDelete", async deletedMessage => {
  if (deletedMessage.author.bot || deletedMessage.channel.type === "dm") return;
  if (deletedMessage.content.startsWith(prefix)) return;
  let sc = await db.fetch(`modlogkanaly_${deletedMessage.guild.id}`);
  let scbul = deletedMessage.guild.channels.cache.get(sc)
  if(!scbul) {
    
  }
  let embed = new Discord.MessageEmbed()
    .setColor("#fffa00")
    .setAuthor(`Mesaj Silindi`, deletedMessage.author.avatarURL())
  .setThumbnail(client.user.avatarURL())
    .addField("Kullanıcı", deletedMessage.author)
    .addField("Silinen Mesaj", "```" + deletedMessage.content + "```")
    .addField("Kanal Adı", deletedMessage.channel.name)
    .addField("Mesaj ID", deletedMessage.id)
    .addField("Kullanıcı ID", deletedMessage.author.id)
    .setFooter(`Bilgilendirme  • bügün saat ${deletedMessage.createdAt.getHours() +
        3}:${deletedMessage.createdAt.getMinutes()}`
    );
  scbul.send(embed);
});


//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////
////////////// KOMUTLAR SON

////////////// TEKNİK KOMUTLAR
require("./util/eventLoader")(client);

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
//////////////////////////////////////////////////////////////////////////////////////////

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
//////////////////////////////////////////////////////////////////////////////////////////

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
//////////////////////////////////////////////////////////////////////////////////////////

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
//////////////////////////////////////////////////////////////////////////////////////////

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("MANAGE_MESSAGES")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (ayarlar.sahip.includes(message.author.id)) permlvl = 4;
  return permlvl;
};
//////////////////////////////////////////////////////////////////////////////////////////

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});

client.login(ayarlar.token);