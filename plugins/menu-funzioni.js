let handler = async (message, { conn, usedPrefix, isOwner, isAdmin, isGroup }) => {
  // Verifica se il comando è stato eseguito in un gruppo
  if (!isGroup) {
    message.reply('Questo comando può essere utilizzato solo nei gruppi.');
    return;
  }

  // Verifica se l'utente è un proprietario, un amministratore o un membro del gruppo
  if (!isOwner && !isAdmin && !message.fromMe) {
    // Se non è il proprietario, un amministratore o il bot stesso, l'utente può comunque vedere il menu
    // ma non può modificare le impostazioni.
  }

  const chatSettings = global.db.data.chats[message.chat];
  const {
    antiToxic,
    antilinkhard,
    antiPrivate,
    antitraba,
    antiArab,
    antiviewonce,
    isBanned,
    welcome,
    detect,
    sWelcome,
    sBye,
    sPromote,
    sDemote,
    antiLink,
    antilinkbase,
    antitiktok,
    sologruppo,
    soloprivato,
    antiCall,
    modohorny,
    gpt,
    antiinsta,
    antielimina,
    antitelegram,
    antiSpam,
    antiPorno,
    jadibot,
    autosticker,
    modoadmin,
    audios
  } = chatSettings;

  let menuMessage = `\n──────────────\n` +
    `${detect ? '🟢' : '🔴'} » ${usedPrefix}detect\n` +
    `${gpt ? '🟢' : '🔴'} » ${usedPrefix}gpt\n` +
    `${jadibot ? '🟢' : '🔴'} » ${usedPrefix}jadibot\n` +
    `${welcome ? '🟢' : '🔴'} » ${usedPrefix}benvenuto\n` +
    `${sologruppo ? '🟢' : '🔴'} » ${usedPrefix}sologruppo\n` +
    `${soloprivato ? '🟢' : '🔴'} » ${usedPrefix}soloprivato\n` +
    `${modoadmin ? '🟢' : '🔴'} » ${usedPrefix}modoadmin\n` +
    `${isBanned ? '🟢' : '🔴'} » ${usedPrefix}bangp\n` +
    `${antiPorno ? '🟢' : '🔴'} » ${usedPrefix}antiporno\n` +
    `${antiCall ? '🟢' : '🔴'} » ${usedPrefix}anticall\n` +
    `${antitraba ? '🟢' : '🔴'} » ${usedPrefix}antitrava\n` +
    `${antiArab ? '🟢' : '🔴'} » ${usedPrefix}antipaki\n` +
    `${antiLink ? '🟢' : '🔴'} » ${usedPrefix}antilink\n` +
    `${antiinsta ? '🟢' : '🔴'} » ${usedPrefix}antiinsta\n` +
    `${antitiktok ? '🟢' : '🔴'} » ${usedPrefix}antitiktok\n` +
    `${antielimina ? '🟢' : '🔴'} » ${usedPrefix}antielimina\n` +
    `────────────\n> ⓘ Info sulle funzioni\n> 🟢 » Funzione attivata \n> 🔴 » Funzione disabilitata \n────────────\n` +
    `> ⓘ Uso del comando\n> ${usedPrefix}attiva antilink\n> ${usedPrefix}disabilita antilink\n> ⓘ Info sullo stato\n> ${usedPrefix}infostato\n──────────────`;

  let botName = global.db.data.nomedelbot || " cescobot ";

  conn.sendMessage(message.chat, {
    text: menuMessage,
    contextInfo: {
      mentionedJid: conn.parseMention(menuMessage),
      forwardingScore: 1,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: "120363341274693350@newsletter",
        serverMessageId: '',
        newsletterName: botName
      }
    }
  }, {
    quoted: {
      key: {
        participants: "0@s.whatsapp.net",
        fromMe: false,
        id: "Halo"
      },
      message: {
        locationMessage: {
          name: "𝐌𝐞𝐧𝐮 𝐝𝐞𝐥𝐥𝐞 𝐟𝐮𝐧𝐳𝐢𝐨𝐧𝐚𝐥𝐢𝐭𝐚'",
          jpegThumbnail: await (await fetch("https://qu.ax/cSqEs.jpg")).buffer()
        }
      },
      participant: "0@s.whatsapp.net"
    }
  });
};

handler.help = ["menu"];
handler.tags = ["menu"];
handler.command = /^(funzioni)$/i;
handler.group = true; // Permette l'utilizzo solo nei gruppi

export default handler;
