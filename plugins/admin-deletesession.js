import { readdirSync, unlinkSync, existsSync, promises as fsPromises } from 'fs';
import path from 'path';

async function handler(message, { conn, usedPrefix }) {
  // Verifica se chi ha inviato il comando è il proprietario del robot
  if (global.owner.user.jid !== conn.user.jid) {
    // Se non è il proprietario, invia un messaggio di errore
    await conn.sendMessage(message.chat, { text: "*Utilizza questo comando direttamente nel numero principale del Bot.*" }, { quoted: message });
    return;
  }

  // Invia un messaggio per dire che sta iniziando la cancellazione
  await conn.sendMessage(message.chat, { text: "ⓘ Ripristino delle sessioni in corso..." }, { quoted: message });

  const sessionsFolder = './Sessioni/'; // Percorso della cartella delle sessioni

  try {
    // Verifica se la cartella delle sessioni esiste
    if (!existsSync(sessionsFolder)) {
      // Se non esiste, invia un messaggio di errore
      await conn.sendMessage(message.chat, { text: "*La cartella Sessioni non esiste o e' vuota.*" }, { quoted: message });
      return;
    }

    // Legge il contenuto della cartella delle sessioni
    const files = await fsPromises.readdir(sessionsFolder);
    let deletedFilesCount = 0;

    // Cancella ogni file nella cartella (tranne uno chiamato "creds.json")
    for (const file of files) {
      if (file !== 'creds.json') {
        await fsPromises.unlink(path.join(sessionsFolder, file));
        deletedFilesCount++;
      }
    }

    // Invia un messaggio con il numero di file cancellati
    if (deletedFilesCount === 0) {
      await conn.sendMessage(message.chat, { text: "ⓘ Le sessioni sono vuote ‼️" }, { quoted: message });
    } else {
      await conn.sendMessage(message.chat, { text: "ⓘ Sono stati eliminati " + deletedFilesCount + " archivi nelle sessioni" }, { quoted: message });
    }

  } catch (error) {
    // Se si verifica un errore, lo mostra nella console e invia un messaggio di errore
    console.error('Errore', error);
    await conn.sendMessage(message.chat, { text: "Errore" }, { quoted: message });
  }

  // Invia un messaggio speciale per dire che le sessioni sono state ripristinate.
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

// Configurazione del comando
handler.help = ['del_reg_in_session_owner'];
handler.tags = ['admin'];
handler.command = /^(deletession|ds|clearallsession)$/i;
handler.owner = true;

export default handler;
