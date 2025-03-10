const linkInstagram = /instagram.com/i;

async function controllaMessaggio(messaggio, { isAdmin, groupMetadata, isBotAdmin }) {
    // Controlla se il messaggio è un aggiornamento del gruppo o è stato mandato in una chat privata
    if (messaggio.groupParticipantsUpdate || !messaggio.isGroup) return;

    // Prendi le impostazioni del gruppo
    const impostazioniGruppo = global.db.data.chats[messaggio.chat];

    // Se "anti-insta" non è attivo, non fare nulla
    if (!impostazioniGruppo.antiinsta) return;

    // Prendi le informazioni sull'utente
    const informazioniUtente = global.db.data.users[messaggio.sender];

    // Controlla se il messaggio contiene un link di Instagram
    if (linkInstagram.test(messaggio.text) && !isAdmin && isBotAdmin) {
        // Aumenta il numero di avvisi dell'utente
        informazioniUtente.warn++;

        // Invia un avviso all'utente
        messaggio.reply(`⚠ LINK INSTAGRAM NON SONO CONSENTITI\n*Avviso: ${informazioniUtente.warn}*`);

        // Se l'utente ha ricevuto 5 avvisi, rimuovilo dal gruppo
        if (informazioniUtente.warn >= 5) {
            messaggio.reply('⛔ UTENTE RIMOSSO DOPO 5 AVVERTIMENTI');
            await messaggio.remove(messaggio.chat, [messaggio.sender], messaggio.isBaileys);
            informazioniUtente.warn = 0; // Resetta gli avvisi
        }
    }
}

export { controllaMessaggio as before };
