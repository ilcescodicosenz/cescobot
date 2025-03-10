let handler = m => m;

handler.all = async function (message) {
    // Controlla se il messaggio è stato mandato in un gruppo
    if (!message.isGroup) return;

    // Prendi le impostazioni del gruppo
    const impostazioniGruppo = global.db.data.chats[message.chat];

    // Se "bestemmiometro" non è attivo, non fare nulla
    if (!impostazioniGruppo.bestemmiometro) return;

    // Prendi le informazioni sull'utente
    const informazioniUtente = global.db.data.users[message.sender];

    // Controlla se il messaggio contiene una bestemmia
    if (/(?:porco dio|porcodio|dio bastardo|dio cane|dio maiake|porca madonna|oid ocrop|)/i.test(message.text)) {
        // Aumenta il numero di bestemmie dell'utente
        informazioniUtente.blasphemy = (informazioniUtente.blasphemy || 0) + 1;

        // Se è la prima bestemmia dell'utente, invia un messaggio speciale
        if (informazioniUtente.blasphemy === 1) {
            const messaggioPrimoBestemmia = `@${message.sender.split("@")[0]} ha tirato la sua prima bestemmia`;
            message.reply(messaggioPrimoBestemmia, null, { mentions: [message.sender] });
        }

        // Se l'utente ha già bestemmiato, invia un messaggio con il conteggio
        if (informazioniUtente.blasphemy > 1) {
            const messaggioConteggioBestemmie = `@${message.sender.split("@")[0]} ha tirato ${informazioniUtente.blasphemy} bestemmie`;
            message.reply(messaggioConteggioBestemmie, null, { mentions: [message.sender] });
        }
    }
};

export default handler;
