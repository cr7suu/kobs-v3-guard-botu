const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '!'
let yardım = new Discord.RichEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL)
.setColor('Red')
.addField('Kobs Bot | Genel Komutlar',`
**!avatar** : Avatarınızı Gösterir
**!ping** : Pinginizi Ölçer
**!say** : Sunucu Üye Grafiğini Gösterir'`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
.setImage('https://cdn.discordapp.com/attachments/729334114989375508/731237846173876294/OgunSert_Kobs.png')
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["genel"], 
  permLevel: 0
};
exports.help = {
  name: 'genel'
};
