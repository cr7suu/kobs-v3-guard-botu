const Discord = require('discord.js');
exports.run = (client, message, args) => {

  let s = message.guild.roles.find(r => r.name === '@everyone')
message.channel.overwritePermissions(s, {
  'SEND_MESSAGES': true,
 
})
 

   message.channel.send('Sohbet kanalı **Yazılabilir** durumuna getirildi.');
}
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'sohbet-aç',
  description: 'Sohbetinizi açmaya yarar.',
  usage: 'aç'
};