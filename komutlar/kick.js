const Discord = require('discord.js')
const { randomRange, verify } = require('../util/Util.js');
exports.run = async (client, message, args) =>{
let as = message.author
let member = message.mentions.users.first()
if (!member) return message.reply('Kişi Belirt')
let sebep = args.slice(0).join(' ')
if (!sebep) return message.reply('Sebep Belirt')
 
  message.guild.member(member).kick();
message.channel.send('Kickledim')
}
exports.conf = {
aliases: [],
permLevel: 0
}
exports.help = {
name: "kick"
}