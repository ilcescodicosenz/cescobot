const linkInstagram = /instagram\.com/i;

async function controllaMessaggio(messaggio, { isAdmin, groupMetadata, isBotAdmin, conn }) {
    if (messaggio.groupParticipantsUpdate || !messaggio.isGroup) return;

    const impostazioniGruppo = global.db.data.chats[messaggio.chat];
    if (!impostazioniGruppo.antiinsta) return;

    const informazioniUtente = global.db.data.users[messaggio.sender];
    if (!informazioniUtente.warnLog) informazioniUtente.warnLog = []; // Inizializza il registro

    if (linkInstagram.test(messaggio.text) && !isAdmin && isBotAdmin) {
        informazioniUtente.warn++;

        // Aggiungi avviso al registro
        informazioniUtente.warnLog.push({
            timestamp: new Date(),
            reason: 'Link Instagram non consentito',
        });

        // Messaggio di avviso personalizzato
        const messaggioAvviso = `⚠️ » @${messaggio.sender.split('@')[0]} Link Instagram non consentiti! \n⚠️ » *Avviso: ${informazioniUtente.warn} / 5*`;

        messaggio.reply(messaggioAvviso, null, { mentions: [messaggio.sender] });
        messaggio.react('⚠️'); // Aggiungi reazione

        if (informazioniUtente.warn >= 5) {
            messaggio.reply('⛔ UTENTE RIMOSSO DOPO 5 AVVERTIMENTI');
            await conn.groupParticipantsUpdate(messaggio.chat, [messaggio.sender], 'remove');
            informazioniUtente.warn = 0;
            informazioniUtente.warnLog = []; // Resetta il registro
        }
    }
}

async function gestisciComandi(messaggio, { conn, command, text, args }) {
    if (command === 'warnlog') {
        const utente = messaggio.mentionedJid[0] || messaggio.sender;
        const informazioniUtente = global.db.data.users[utente];

        if (!informazioniUtente || !informazioniUtente.warnLog || informazioniUtente.warnLog.length === 0) {
            messaggio.reply('Questo utente non ha avvisi nel registro.');
            return;
        }

        let messaggioRegistro = `Registro avvisi per @${utente.split('@')[0]}:\n\n`;
        informazioniUtente.warnLog.forEach((avviso, indice) => {
            messaggioRegistro += `${indice + 1}. Data: ${avviso.timestamp}\nMotivo: ${avviso.reason}\n\n`;
        });

        messaggio.reply(messaggioRegistro, null, { mentions: [utente] });
    }

    if (command === 'esenta') {
        const utente = messaggio.mentionedJid[0];
        if (!utente) {
            messaggio.reply('Menziona l\'utente da esentare.');
            return;
        }

        const informazioniUtente = global.db.data.users[utente];
        if (!informazioniUtente) {
            messaggio.reply('Utente non trovato.');
            return;
        }

        informazioniUtente.esente = !informazioniUtente.esente; // Toggle esenzione
        messaggio.reply(`@${utente.split('@')[0]} è ora ${informazioniUtente.esente ? 'esentato' : 'non esentato'}.`, null, { mentions: [utente] });
    }
}

export { controllaMessaggio as before, gestisciComandi as handler };
