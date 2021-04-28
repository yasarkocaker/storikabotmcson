const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
exports.run = async (client, message, args) => {
  const filter = (reaction, user) => {
    return (
      ["🏠", "💬", "🎉", "🛠️", "💎"].includes(reaction.emoji.name) &&
      user.id === message.author.id &&
      reaction.users.remove(message.author.id)
    );
  };

  const yardım = new Discord.MessageEmbed()
    .setColor("Gold")
    .setTitle("StorikaNW Yardım Menüsü")
    .setImage(
      "https://cdn.discordapp.com/avatars/815969104207937566/533da63ccf8bed4ab8f64bbcf7eefd78.webp"
    )
    .setDescription(
      `**Ana Menü: 🏠 \n Genel Komutlar: 💬 \n Eğlence Komutları: 🎉 \n Yetkili Komutları: 🛠️ \n VIP Bilgi Komutları 💎**`
    );
  var menü = await message.channel.send(yardım);
  const collector = menü.createReactionCollector(filter, { time: 900000 });
  let emojiler = ["🏠", "💬", "🎉", "🛠️", "💎"];
  await menü.react(emojiler[0]);
  await menü.react(emojiler[1]);
  await menü.react(emojiler[2]);
  await menü.react(emojiler[3]);
  await menü.react(emojiler[4]);

  // GENEL BAŞ
  collector.on("collect", (reaction, user) => {
    if (reaction.emoji.name == "💬") {
      const genels = new Discord.MessageEmbed()
        .setColor("Gold")
        .setTitle("Genel Komutlar")
        .addField("`destek`","Desteğin linkini verir.")
        .addField("`site`", "Sitenin linkini verirç")
        .addField("`ip`", "Sunucunun ip adresini verir")
        .addField("`rolliste`", "Suncuudaki Tüm rolleri listeler.")
        .addField("`event`", "Günlük event saatini gösterir.")
        .addField("`skin`","Girilen kullanıcı adınının skinini gösterir.")
        .addField("`öneri`", "Sunucuya eklenmesini istediğiniz özellikleri yazabilirsiniz.")
        .setImage(
          "https://cdn.discordapp.com/avatars/815969104207937566/533da63ccf8bed4ab8f64bbcf7eefd78.webp"
        )
      .setFooter("Ana Menüye geri dönmek için 🏠 emojisine tıklayınız. ")
      menü.edit(genels);
    }
    if (reaction.emoji.name == "🏠") {
      menü.edit(yardım);
    }
  });

  collector.on("end", collected => {
    console.log(`Aha ${collected.size} tane loot toplandı beyim`);
  });
  // GENEL SON

  //Vipbilgi baş
  collector.on("collect", (reaction, user) => {
    if (reaction.emoji.name == "💎") {
      const genels = new Discord.MessageEmbed()
        .setColor("Gold")
        .setTitle("VIP Komutları")
        .addField("`vip`","VIP hakkında bilgiler verir.")
        .addField("`svip`", "SVIP hakkında bilgiler verir.")
        .addField("`svip+`", "SVIP+ hakkında bilgiler verir.")
        .addField("`storikavip`", "StorikaVIP hakkında bilgiler verir.")
        .setImage(
          "https://cdn.discordapp.com/avatars/815969104207937566/533da63ccf8bed4ab8f64bbcf7eefd78.webp"
        )
          .setFooter("Ana Menüye geri dönmek için 🏠 emojisine tıklayınız. ")
      menü.edit(genels);
    }
    if (reaction.emoji.name == "🏠") {
      menü.edit(yardım);
    }
  });

  collector.on("end", collected => {
    console.log(`Aha ${collected.size} tane loot toplandı beyim`);
  });
  //Vipbilgi Son

  // EĞLENCE BAŞ
  collector.on("collect", (reaction, user) => {
    if (reaction.emoji.name == "🎉") {
      const denemes = new Discord.MessageEmbed()
        .setColor("Gold")
        .setTitle("Eğlence Komutları")
        .addField("Kelime Oyunu","\n `top10` = ,Kelime oyunundaki en yüksek puana sahip 10 kişiyi gösterir. \n `puanım` = Kelime oyunundaki puanınızı gösterir.")
        .addField("`adamasmaca`", "Adam asmaca oynarsınız.")
        .addField("`snake`","3310 daki yılan oyununu oynarsınız.")
        .setImage(
          "https://cdn.discordapp.com/avatars/815969104207937566/533da63ccf8bed4ab8f64bbcf7eefd78.webp"
        )
          .setFooter("Ana Menüye geri dönmek için 🏠 emojisine tıklayınız. ")
      menü.edit(denemes);
    }
    if (reaction.emoji.name == "🏠") {
      menü.edit(yardım);
    }
  });

  collector.on("end", collected => {
    console.log(`Aha ${collected.size} tane loot toplandı beyim`);
  });
  // EĞLENCE SON

  // MODERASYON BAŞ
  collector.on("collect", (reaction, user) => {
    if (reaction.emoji.name == "🛠️") {
      const moderasyonamk = new Discord.MessageEmbed()
        .setColor("Gold")
        .setTitle("**Yetkili Komutları**")
        .addField("`sil`", "Miktarını girdiğiniz kadar mesaj siler.")
        .addField("`capsengel`", "Suncuda capslock kullanımını engeller.")
        .addField("`oylama`", "Oylama başlatır.")
        .addField("`çokluoylama`", "Birden fazla cevaplı oylama başlatır.")
        .addField("`çekiliş`", "Hızlı bir çekiliş yapar.")
        .addField("`profil`", "Kullanıcı bilgilerini gösterir.")
        .addField("`stats`", "Bot İstatistiklerini gösterir.")
        .addField("`rolbilgi`", "Sunucudaki roller hakkında bilgi verir.")
        .addField("`server`", "İp si girilen sunucunun bilgilerini gösterir.")
        .addField("`yaz`", "Bot tarafından yazı gönderir.")
        .addField(
          "`yetkiler`",
          "Sunucudaki oyuncuların sahip olduğu yetkiyi gösterir."
        )
        .setImage(
          "https://cdn.discordapp.com/avatars/815969104207937566/533da63ccf8bed4ab8f64bbcf7eefd78.webp"
        )
          .setFooter("Ana Menüye geri dönmek için 🏠 emojisine tıklayınız. ")
      menü.edit(moderasyonamk);
    }
    if (reaction.emoji.name == "🏠") {
      menü.edit(yardım);
    }
  });

  collector.on("end", collected => {
    console.log(`Aha ${collected.size} tane loot toplandı beyim`);
  });
  // MODERASYON SON
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["help"],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: "",
  usage: ""
};
