const time = async (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}
let handler = async (m, { conn, text, args, groupMetadata, usedPrefix, command }) => {
if (command == 'warn' || command == "ammonisci") {
    let war = '4'
    let who;
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : true;
else who = m.chat;
if (!who) return;
if (!(who in global.db.data.users)) {
global.db.data.users[who] = { warn: 0 };
}
let warn = global.db.data.users[who].warn;
    let user = global.db.data.users[who];
 let prova = {
      "key": {
        "participants": "0@s.whatsapp.net",
        "fromMe": false,
        "id": "Halo"
      },
      "message": {
        "locationMessage": {
          name: '𝐀𝐭𝐭𝐞𝐧𝐳𝐢𝐨𝐧𝐞',
          "jpegThumbnail": await(await fetch('https://qu.ax/fmHdc.png')).buffer(),
          vcard: `BEGIN:VCARD\nVERSION:1.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
        }
      },
      "participant": "0@s.whatsapp.net"
    };
    const reason = text ? '❓ » ' + text.replace(m.sender, '') : ''
if (warn < war) {
      global.db.data.users[who].warn += 1;
      conn.reply(m.chat, `👤 » @${who.split('@')[0]}\n⚠️ » *${user.warn} / 5*\n${reason.capitalize()}`, prova, { mentions: [who]});
    } else if (warn == war) {
      global.db.data.users[who].warn = 0;
     conn.reply(m.chat,`𝐔𝐭𝐞𝐧𝐭𝐞 𝐫𝐢𝐦𝐨𝐬𝐬𝐨 𝐝𝐨𝐩𝐨 5 𝐚𝐯𝐯𝐞𝐫𝐭𝐢𝐦𝐞𝐧𝐭𝐢`, prova);
      await time(1000);
      await conn.groupParticipantsUpdate(m.chat, [who], 'remove');
    }
  }
if (command == 'unwarn' || command == "delwarn") {
    let who;
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false;
    else who = m.chat;
if (!who) return;
if (!(who in global.db.data.users)) {
global.db.data.users[who] = { warn: 0 };
    }
let warn = global.db.data.users[who].warn;
if (warn > 0) {
      global.db.data.users[who].warn -= 1;
      let user = global.db.data.users[who];
      let prova = {
        "key": {
          "participants": "0@s.whatsapp.net",
          "fromMe": false,
          "id": "Halo"
        },
        "message": {
          "locationMessage": {
            name: '𝐀𝐭𝐭𝐞𝐧𝐳𝐢𝐨𝐧𝐞',
            "jpegThumbnail": await(await fetch('https://qu.ax/fmHdc.png')).buffer(),
            vcard: `BEGIN:VCARD\nVERSION:1.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
          }
        },
        "participant": "0@s.whatsapp.net"
      };
      conn.reply(m.chat, `👤 » @${who.split('@')[0]}\n⚠️ » *${user.warn} / 3*`, prova, { mentions: [who] });
    } else if (warn == 0) {
      m.reply("𝐋’𝐮𝐭𝐞𝐧𝐭𝐞 𝐦𝐞𝐧𝐳𝐢𝐨𝐧𝐚𝐭𝐨 𝐧𝐨𝐧 𝐡𝐚 𝐚𝐯𝐯𝐞𝐫𝐭𝐢𝐦𝐞𝐧𝐭𝐢.");
    }
  }
}
handler.help = handler.command = ['warn', 'ammonisci', 'unwarn', 'delwarn'];
handler.group = true;
handler.admin = true;
handler.botAdmin = true;
export default handler;
