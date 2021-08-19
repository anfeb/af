let handler = async m => m.reply(`

├ *Donasi*
├ *Dana : 087772343860*
├ *Qris : Chat Owner*
├ *https://saweria.co/anfebn*
└────
`.trim())
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
