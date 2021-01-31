const Discord = require('discord.js');

exports.run = async (client, message, args) => {
   
  
    const voiceChannels = message.guild.channels.filter(c => c.type === 'voice');
    let ses = 0;
    for (const [id, voiceChannel] of voiceChannels) ses += voiceChannel.members.size;
 
    const embed = new Discord.RichEmbed()
        .setColor("Red")
        .addField("Sunucudaki üye sayısı", message.guild.memberCount)
        .addField("Çevrimiçi üye sayısı", message.guild.members.filter(m => !m.user.bot && m.user.presence.status !== "offline").size)
        .addField("Seslideki üye sayısı", ses)
    message.channel.send(embed);

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'say',
    description: 'Say',
    usage: 'say'
};