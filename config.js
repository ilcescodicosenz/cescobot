config.js
import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import fs from 'fs'
import { fileURLToPath } from 'url'

global.botnumber = ""
global.confirmCode = ""

global.owner = [
  ['3755853799', 'cescobot', true],
  ['3792249767',],
  ['xxxxxxxxxx'],
  ['xxxxxxxxxx',],
  ['xxxxxxxxxx'],
  ['xxxxxxxxxx'],
] //Numero degli owner

//────────────────────────────

global.mods = ['xxxxxxxxxx']
global.prems = ['xxxxxxxxxx', 'xxxxxxxxxx']

//────────────────────────────

global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
// 'fiktod' 'BF39D349845E' '675e34de8a' '0b917b905e6f'
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4>
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['BrunoSobrino']

global.APIs = {
  xteam: 'https://api.xteam.xyz',
  nrtm: 'https://fg-nrtm-nhie.onrender.com',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net',
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  fgmods: 'https://api-fgmods.ddns.net'
},
global.APIKeys = {
  'https://api.xteam.xyz': `${keysxteam}`,
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': `${keysneoxr}`,
  'https://violetics.pw': 'beta',
}


//────────────────────────────
global.imagen1 = ['./media/menu1.jpg']
global.imagen4 = fs.readFileSync('./cescobot.png')
//────────────────────────────

// Sticker WM (Nome del pacchetto degli sticker)
global.packname = 'cescobot'
global.author = 'ediz by cesco'

//────────────────────────────

global.vs = '1.0'

global.nomebot = 'cescobot'

global.multiplier = 69
global.maxwarn = '5'
//────────────────────────────

global.wm = 'cescobot'
global.wait = 'ⓘ 𝐂𝐚𝐫𝐢𝐜𝐚𝐦𝐞𝐧𝐭𝐨 ...'

//────────────────────────────

global.flaaa = [
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&font>
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=t>
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidt>
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&sca>
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&sca>

//──────────────────────────────────

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
