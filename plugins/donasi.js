let handler =  m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat Ooredoo [085784715971]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Saweria [https://saweria.co/Yahya17YT]
│ • Gopay [085784715971]
| • Dana [085784715971]
| • Shopeepay [085784715971]
| • Ovo [085784715971]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
