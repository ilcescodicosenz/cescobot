const time = async (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

let handler = async (m, { conn, text, args, groupMetadata, usedPrefix, command }) => {
  if (command == 'warn' || command == "ammonisci") {
    let maxWarnings = 4; // Max number of warnings allowed
    let who;

    // Determine the target user
    if (m.isGroup) {
      who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : true;
    } else {
      who = m.chat;
    }

    if (!who) return;

    // Initialize user data if not already present
    if (!(who in global.db.data.users)) {
      global.db.data.users[who] = { warn: 0 };
    }

    let warn = global.db.data.users[who].warn;
    let user = global.db.data.users[who];

    // Prepare the message format
    let prova = {
      "key": {
        "participants": "0@s.whatsapp.net",
        "fromMe": false,
        "id": "Halo"
      },
      "message": {
        "locationMessage": {
          name: 'Warning',
          "jpegThumbnail": await (await fetch('https://qu.ax/fmHdc.png')).buffer(),
          vcard: `BEGIN:VCARD\nVERSION:1.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
        }
      },
      "participant": "0@s.whatsapp.net"
    };

    const reason = text ? '❓ » ' + text.replace(m.sender, '') : '';

    // If user has not exceeded max warnings, increase their warning
    if (warn < maxWarnings) {
      global.db.data.users[who].warn += 1;
      conn.reply(m.chat, `⚠️ » @${who.split('@')[0]}\n⚠️ » *${user.warn} / 3*\n${reason.capitalize()}`, prova, { mentions: [who] });
    } 
    // If user reaches max warnings, reset their warnings and remove from group
    else if (warn == maxWarnings) {
      global.db.data.users[who].warn = 0;
      conn.reply(m.chat, `Warning limit reached. User removed from the group.`, prova);
      await time(1000); // Wait for 1 second
      await conn.groupParticipantsUpdate(m.chat, [who], 'remove');
    }
  }

  if (command == 'unwarn' || command == "delwarn") {
    let who;

    if (m.isGroup) {
      who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false;
    } else {
      who = m.chat;
    }

    if (!who) return;

    // Initialize user data if not already present
    if (!(who in global.db.data.users)) {
      global.db.data.users[who] = { warn: 0 };
    }

    let warn = global.db.data.users[who].warn;

    // If user has warnings, decrease them
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
            name: 'Warning',
            "jpegThumbnail": await (await fetch('https://qu.ax/fmHdc.png')).buffer(),
            vcard: `BEGIN:VCARD\nVERSION:1.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
          }
        },
        "participant": "0@s.whatsapp.net"
      };

      conn.reply(m.chat, `⚠️ » @${who.split('@')[0]}\n⚠️ » *${user.warn} / 5*`, prova, { mentions: [who] });
    } 
    // If user has no warnings, notify that no warnings can be removed
    else if (warn == 0) {
      m.reply("The user has no warnings to remove.");
    }
  }
}

handler.help = handler.command = ['warn', 'ammonisci', 'unwarn', 'delwarn'];
handler.group = true;
handler.admin = true;
handler.botAdmin = true;

export default handler;
