const handler = async (m, { conn, usedPrefix, command }) => {
  let message = "";
  for (const [ownerNumber] of global.owner) {
    message += `\nwa.me/${ownerNumber}`;
  }
  const mention = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.quoted;
  const who = mention ? mention : m.sender;
  const user = global.db.data.users[who] || {};
  const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats);
  const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'));
  let totalreg = Object.keys(global.db.data.users).length;
  let rtotalreg = Object.values(global.db.data.users).filter(user => user.instagram).length;
  const totalPlugins = Object.keys(global.plugins).length;
  let prova = {
    "key": { "participants": "0@s.whatsapp.net", "fromMe": false, "id": "Halo" },
    "message": {
      "locationMessage": {
        name: `Info ${global.nomebot}`,
        "jpegThumbnail": await (await fetch('https://qu.ax/cSqEs.jpg')).buffer(),
        "vcard": `BEGIN:VCARD\nVERSION:1.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
      }
    },
    "participant": "0@s.whatsapp.net"
  };
  conn.sendMessage(m.chat, {
    text: `══════•⊰✦⊱•══════
Per vedere i comandi usare ${usedPrefix}menu

➣ Gruppi: ${groupsIn.length}
➣ Chat private: ${chats.length - groupsIn.length}
➣ Chat totali: ${chats.length}
➣ Utenti registrati: ${totalreg}
➣ Ig registrati: ${rtotalreg}/${totalreg}
➣ Plugins: ${totalPlugins}
➣ Owner: ${message}
══════•⊰✦⊱•══════`,
  }, { quoted: prova });
};

handler.command = ['infobot', 'bot'];
handler.group = true; // Permetti l'uso del comando nei gruppi
export default handler;

