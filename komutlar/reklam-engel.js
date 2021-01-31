const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bu komutu kullanmak için `Yönetici` iznine sahip olmanız gerekir.')
  if (!args[0]) return message.channel.send("**Aç** yada **Kapat** Yazmalısınız! Örnek: \`+reklam-engel <aç/kapat>\` **")
  
  if (args[0] == 'aç') {
    db.set(`reklamengel_${message.guild.id}`, 'acik')
      message.channel.send(new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription('Reklam Engel Başarıyla Açıldı.'))
  };
  
  if (args[0] == 'kapat') {
    db.set(`reklamengel_${message.guild.id}`, 'kapali')
    message.channel.send(new Discord.RichEmbed()
    .setColor('RANDOM')
   .setDescription('Reklam Engel Başarıyla Kapatıldı'))
  };

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['reklam-engel', 'reklamengel'],
    kategori:'ayarlar',
  permLevel: 0
};

exports.help = {
  name: 'reklam-engel',
  description: 'Reklam Engelleme Sistemini Açarsınız/kapatırsınız.',
  usage: 'reklam-engelleme'
};