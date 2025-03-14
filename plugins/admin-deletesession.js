import { readdirSync, unlinkSync, existsSync, promises as fsPromises } from 'fs';
import path from 'path';

async function handler(message, { conn, usedPrefix, text }) {
  if (global.owner.user.jid !== conn.user.jid) {
    await conn.sendMessage(message.chat, { text: "*Utilizza questo comando direttamente nel numero principale del Bot.*" }, { quoted: message });
    return;
  }

  const sessionsFolder = './Sessioni/';

  if (text) {
    // Cancellazione selettiva
    const filesToDelete = text.split(' ');
    let deletedFilesCount = 0;
    for (const file of filesToDelete) {
      if (file.match(/^[a-zA-Z0-9_\-]+\.json$/)) {
        const filePath = path.join(sessionsFolder, file);
        if (existsSync(filePath)) {
          await fsPromises.unlink(filePath);
          deletedFilesCount++;
        }
      }
    }
    if (deletedFilesCount === 0) {
      await conn.sendMessage(message.chat, { text: "ⓘ Nessun file di sessione trovato o eliminato." }, { quoted: message });
    } else {
      await conn.sendMessage(message.chat, { text: `ⓘ Sono stati eliminati ${deletedFilesCount} file di sessione.` }, { quoted: message });
    }
  } else {
    // Richiedi conferma per la cancellazione completa
    const confirmationMessage = {
      text: "Sei sicuro di voler cancellare tutte le sessioni? (Questo escluderà tutti i sub bot)",
      footer: "Questa azione è irreversibile.",
      buttons: [
        { buttonId: `${usedPrefix}confirm_del_sessions`, buttonText: { displayText: 'Sì' }, type: 1 },
        { buttonId: `${usedPrefix}cancel_del_sessions`, buttonText: { displayText: 'No' }, type: 1 },
      ],
      headerType: 1
    };
    await conn.sendMessage(message.chat, confirmationMessage, { quoted: message });

    conn.handlers['confirm_del_sessions'] = async () => {
      delete conn.handlers['confirm_del_sessions'];
      delete conn.handlers['cancel_del_sessions'];
      await deleteSessions(message, conn, sessionsFolder);
    };

    conn.handlers['cancel_del_sessions'] = async () => {
      delete conn.handlers['confirm_del_sessions'];
      delete conn.handlers['cancel_del_sessions'];
      await conn.sendMessage(message.chat, { text: "Cancellazione annullata." }, { quoted: message });
    };
  }
}

async function deleteSessions(message, conn, sessionsFolder) {
  await conn.sendMessage(message.chat, { text: "ⓘ Ripristino delle sessioni in corso..." }, { quoted: message });

  try {
    if (!existsSync(sessionsFolder)) {
      await conn.sendMessage(message.chat, { text: "*La cartella Sessioni non esiste o e' vuota.*" }, { quoted: message });
      return;
    }

    const files = await fsPromises.readdir(sessionsFolder);
    let deletedFilesCount = 0;

    for (const file of files) {
      if (file !== 'creds.json') {
        await fsPromises.unlink(path.join(sessionsFolder, file));
        deletedFilesCount++;
      }
    }

    if (deletedFilesCount === 0) {
      await conn.sendMessage(message.chat, { text: "ⓘ Le sessioni sono vuote ‼️" }, { quoted: message });
    } else {
      await conn.sendMessage(message.chat, { text: "ⓘ Sono stati eliminati " + deletedFilesCount + " archivi nelle sessioni" }, { quoted: message });
    }

  } catch (error) {
    console.error('Errore', error);
    await conn.sendMessage(message.chat, { text: "Errore" }, { quoted: message });
  }

  let botName = global.db.data.settings.botName || ' cescobot ';
  let vcard = 'BEGIN:VCARD\n' +
        'VERSION:1.0\n' +
        'N:;Unlimited;;;\n' +
        'FN:Unlimited\n' +
        'ORG:Unlimited\n' +
        'TITLE:\n' +
        'item1.TEL;waid=19709001746:+1 (970) 900-1746\n' +
        'item1.X-ABLabel:Unlimited\n' +
        'X-WA-BIZ-DESCRIPTION:ofc\n' +
        'X-WA-BIZ-NAME:Unlimited\n' +
        'END:VCARD';

  let locationMessage = {
      key: { participants: '0@s.whatsapp.net', fromMe: false, id: 'Halo' },
      message: {
          locationMessage: {
              name: '' + botName,
              jpegThumbnail: await (await fetch('https://qu.ax/cSqEs.jpg')).buffer(),
              vcard: vcard
          }
      },
      participant: '0@s.whatsapp.net'
  };
  await conn.sendMessage(message.chat, { text: "ⓘ Ora sarai in grado di leggere i messaggi del bot" }, { quoted: locationMessage });
}

handler.help = ['del_reg_in_session_owner', 'deletession <nomefile1.json> <nomefile2.json>', 'ds <nomefile1.json> <nomefile2.json>', 'clearallsession'];
handler.tags = ['admin'];
handler.command = /^(deletession|ds|clearallsession)$/i;
handler.owner = true;

export default handler;
