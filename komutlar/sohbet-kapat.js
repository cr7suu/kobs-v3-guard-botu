const Discord = require("discord.js");
exports.run = (client, message, args) => {
  let a = message.guild.roles.find(r => r.name === "@everyone");
  message.channel.overwritePermissions(a, {
    SEND_MESSAGES: false
  });

  message.channel.send("Sohbet kanalı **Yazılamaz**  Durumuna getirildi.");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: "sohbet-kapat",
  description: "Sohbetinizi kapatmaya yarar.",
  usage: "kapat"
};