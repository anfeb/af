const { MessageType } = require("@adiwajshing/baileys")
let fs = require('fs')
let moment = require('moment-timezone')
let fetch = require('node-fetch')
let path = require('path')
let levelling = require('../lib/levelling')
const defaultMenu = {
  before: `
┏━━  *〔 %me 〕*
┃➸ Hai , %name!
┃
┃➸ Tersisa *%limit*
┃➸ Role *%role*
┃➸ level *%level*
┃➸ %totalexp XP secara Total
┃
┃➸ Tanggal: *%week*,%date*
┃➸ Tanggal Islam: *%dateIslamic*
┃➸ Waktu: *%time*
┃➸ Uptime: *%uptime* 
┃➸ Database: %rtotalreg} dari %totalreg
┃➸ *Follow My Instagram*
┃➸ *https://instagram.com/anfebn*
┗━━━━━━━━
%readmore`.trimStart(),
  header: '┏━━ *〔 %category 〕* ━━━━━━',
  body: '┃➸ *%cmd* %islimit %isPremium',
  footer: '┗━━━━━━━━\n',
  after: `
*%npmname@^%version*
${'```%npmdesc```'}
`,
}
let handler = async (m, { conn, usedPrefix: _p, args, command }) => {
  let name = conn.getName(m.sender)
  let xixi = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m ? { remoteJid: "status@broadcast" } : {}) }, message: { "locationMessage": { "name": "Bekasi", "address": "norestime", "mimetype": "image/jpeg", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('src/logo.jpg')} } }
  let tags
  let teks = `${args[0]}`.toLowerCase()
  if (teks == 'all') tags = {
    'main': 'Utama',
    'game': 'Game',
    'xp': 'Exp & Limit',
    'sticker': 'Stiker',
    'kerang': 'Kerang Ajaib',
    'quotes': 'Quotes',
    'admin': 'Admin',
    'group': 'Grup',
    'premium': 'Premium',
    'internet': 'Internet',
    'anonymous': 'Anonymous Chat',
    'nulis': 'MagerNulis & Logo',
    'downloader': 'Downloader',
    'tools': 'Tools',
    'fun': 'Fun',
    'database': 'Database',
    'vote': 'Voting',
    'absen': 'Absen',
    'quran': 'Al Qur\'an',
    'audio': 'Pengubah Suara',
    'jadibot': 'Jadi Bot',
    'info': 'Info',
    'owner': 'owner',
    '': 'Tanpa Kategori',
  }
  if (teks == 'game') tags = {
    'game': 'Game'
  }
  if (teks == 'xp') tags = {
    'xp': 'Exp & Limit'
  }
  if (teks == 'stiker') tags = {
    'sticker': 'Stiker'
  }
  if (teks == 'kerang') tags = {
    'kerang': 'Kerang Ajaib'
  }
  if (teks == 'quotes') tags = {
    'quotes': 'Quotes'
  }
  if (teks == 'admin') tags = {
    'admin': 'Admin'
  }
  if (teks == 'grup') tags = {
    'group': 'Grup'
  }
  if (teks == 'premium') tags = {
    'premium': 'Premium'
  }
  if (teks == 'internet') tags = {
    'internet': 'Internet'
  }
  if (teks == 'anonymous') tags = {
    'anonymous': 'Anonymous Chat'
  }
  if (teks == 'nulis') tags = {
    'nulis': 'MagerNulis & Logo'
  }
  if (teks == 'downloader') tags = {
    'downloader': 'Downloader'
  }
  if (teks == 'tools') tags = {
    'tools': 'Tools'
  }
  if (teks == 'fun') tags = {
    'fun': 'Fun'
  }
  if (teks == 'database') tags = {
    'database': 'Database'
  }
  if (teks == 'vote') tags = {
    'vote': 'Voting',
    'absen': 'Absen'
  }
  if (teks == 'quran') tags = {
    'quran': 'Al Qur\'an'
  }
  if (teks == 'audio') tags = {
    'audio': 'Pengubah Suara'
  }
  if (teks == 'jadibot') tags = {
    'jadibot': 'Jadi Bot'
  }
  if (teks == 'info') tags = {
    'info': 'Info'
  }
  if (teks == 'tanpakategori') tags = {
    '': 'Tanpa Kategori'
  }
  if (teks == 'owner') tags = {
    'owner': 'Owner',
    'host': 'Host',
    'advanced': 'Advanced'
  }

  if (!args[0]) {
      conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
      "listMessage": {
        "title": `${ucapan()}\nKak, ${name}\n\nDont Forget Follow\nhttps://instagram.com/anfebn\n\nBerikut adalah Daftar Menu`,
        "description": "Made With @anfebn",
        "buttonText": "Klik Disini",
        "listType": "SINGLE_SELECT",
        "sections": [
          {
            "rows": [
              {
                "title": `Semua Perintah`,
                "description": "",
                "rowId": ".? all"
              }, {
                "title": "Game",
                "description": "",
                "rowId": ".? game"

              }, {
                "title": "XP",
                "description": "",
                "rowId": ".? xp"

              }, {
                "title": "Stiker",
                "description": "",
                "rowId": ".? stiker"
              }, {
                "title": "Kerang Ajaib",
                "description": "",
                "rowId": ".? kerang"
              }, {
                "title": "Quotes",
                "description": "",
                "rowId": ".? quotes"
              }, {
                "title": "Admin",
                "description": "",
                "rowId": ".? admin"
              }, {
                "title": "Grup",
                "description": "",
                "rowId": ".? grup"
              }, {
                "title": "Premium",
                "description": "",
                "rowId": ".? premium"
              }, {
                "title": "Internet",
                "description": "",
                "rowId": ".? internet"
              }, {
                "title": "Anonymous",
                "description": "",
                "rowId": ".? anonymous"
              }, {
                "title": "Nulis & Logo",
                "description": "",
                "rowId": ".? nulis"
              }, {
                "title": "Downloader",
                "description": "",
                "rowId": ".? downloader"
              }, {
                "title": "Tools",
                "description": "",
                "rowId": ".? tools"
              }, {
                "title": "Fun",
                "description": "",
                "rowId": ".? fun"
              }, {
                "title": "Database",
                "description": "",
                "rowId": ".? database"
              }, {
                "title": "Vote & Absen",
                "description": "",
                "rowId": ".? vote"
              }, {
                "title": "Al-Qur\'an",
                "description": "",
                "rowId": ".? quran"
              }, {
                "title": "Pengubah Suara",
                "description": "",
                "rowId": ".? audio"
              }, {
                "title": "Jadi Bot",
                "description": "",
                "rowId": ".? jadibot"
              }, {
                "title": "Info",
                "description": "",
                "rowId": ".? info"
              }, {
                "title": "Tanpa Kategori",
                "description": "",
                "rowId": ".? tanpakategori"
              }, {
                "title": "Owner",
                "description": "",
                "rowId": ".? owner"
              }
            ]
          }
        ], "contextInfo": {
          "stanzaId": m.key.id,
          "participant": m.sender,
          "quotedMessage": m.message
        }
      }
    }, {}), { waitForAck: true })
    throw 0
  }
  //   throw `
  // ┌〔 DAFTAR MENU 〕
  // ├ ${_p + command} all
  // ├ ${_p + command} game
  // ├ ${_p + command} xp
  // ├ ${_p + command} stiker
  // ├ ${_p + command} kerang
  // ├ ${_p + command} quotes
  // ├ ${_p + command} admin
  // ├ ${_p + command} group
  // ├ ${_p + command} premium
  // ├ ${_p + command} internet
  // ├ ${_p + command} anonymous
  // ├ ${_p + command} nulis
  // ├ ${_p + command} downloader
  // ├ ${_p + command} tools
  // ├ ${_p + command} fun
  // ├ ${_p + command} database
  // ├ ${_p + command} vote
  // ├ ${_p + command} quran
  // ├ ${_p + command} audio
  // ├ ${_p + command} jadibot
  // ├ ${_p + command} info
  // ├ ${_p + command} tanpa kategori
  // ├ ${_p + command} owner
  // └────  
  //     `.trim()

  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let { exp, limit, level, role, registered } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let name = registered ? global.db.data.users[m.sender].name : conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.help) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
      // for (let tag of plugin.tags)
      //   if (!(tag in tags)) tags[tag] = tag
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Dipersembahkan oleh https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '(Limit)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Premium)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.user.name,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp <= 0 ? `Siap untuk *${_p}levelup*` : `${max - exp} XP lagi untuk levelup`,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    await conn.send2Button(m.chat, text.trim(), 'Made With @anfebn', 'Owner BOT', '.owner', 'DONASI', '.donasi', { quoted: m })
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(1)
const readMore = more.repeat(1)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')

}

function ucapan() { 
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = "Selamat dinihari"
  if (time >= 4) { 
      res = "Selamat Pagi"
  }
  if (time > 10) { 
      res = "Selamat Siang"
  }
  if (time >= 15) { 
      res = "Selamat Sore"
  } 
  if (time >= 18) { 
      res = "Selamat Malam"
  } 
  return res 
}
