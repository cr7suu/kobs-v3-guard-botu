const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '!'
let yardım = new Discord.RichEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL)
.setColor('RANDOM')
.addField('Kobs Bot | Sunucu Koruma Komutları',`
**!küfür-engel** : Küfür Engel Sistemi
**!reklam-engel** : Reklam Engel Sistemi
**!caps-engel** : Capslock Engel Sistemi
**!rol-koruma** : Rol Koruma Sistemi'`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
.setImage('https://cdn.discordapp.com/attachments/729334114989375508/731237846173876294/OgunSert_Kobs.png')
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["koruma"], 
  permLevel: 0
};
exports.help = {
  name: 'koruma'
};
