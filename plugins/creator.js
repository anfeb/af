function handler(m) {
  this.sendContact(m.chat, '6287772343860', this.getName('6287772343860@s.whatsapp.net'), m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
