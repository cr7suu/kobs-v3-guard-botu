const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('602024501710159882') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor('0x36393E')
        .setTitle(`${client.user.username} - Yardım Menüsü`)
        .setDescription(`⚙️ | **${ayarlar.prefix}genel** Genel Komutlar\n⚙️ | **${ayarlar.prefix}yetkili** Yetkili Komutları\n⚙️ | **${ayarlar.prefix}koruma** Koruma Komutları`)  
        .setThumbnail(client.user.avatarURL)
        .addField(`Youtube.Com/OgünSertKobs`, `[Tıkla](https://www.youtube.com/ogünsertkobs)`)
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)
        .setImage('https://cdn.discordapp.com/attachments/729334114989375508/731221281311162429/kobs.png')  
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['help'],
  permLevel: 0,
};

exports.help = {
  name: 'yardım',
  description: '',
  usage: ''
};