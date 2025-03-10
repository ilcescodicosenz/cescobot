const linkTikTok = /vm.tiktok.com/i;

async function controllaMessaggio(messaggio, { isAdmin, groupMetadata, isBotAdmin }) {
    // Controlla se il messaggio è un aggiornamento del gruppo o è stato mandato in una chat privata
    if (messaggio.isBaileys && messaggio.groupParticipantsUpdate || !messaggio.isGroup) return;

    // Prendi le impostazioni del gruppo
    const impostazioniGruppo = global.db.data.chats[messaggio.chat];

    // Se "anti-tiktok" non è attivo, non fare nulla
    if (!impostazioniGruppo.antitiktok) return;

    // Prendi le informazioni sull'utente
    const informazioniUtente = global.db.data.users[messaggio.sender];

    // Controlla se il messaggio contiene un link di TikTok
    if (linkTikTok.test(messaggio.text) && !isAdmin && isBotAdmin) {
        // Aumenta il numero di avvisi dell'utente
        informazioniUtente.warn++;

        // Invia un avviso all'utente
        messaggio.reply(`⚠ LINK TIKTOK NON SONO CONSENTITI\n*Avviso: ${informazioniUtente.warn}*`);

        // Se l'utente ha ricevuto 5 avvisi, rimuovilo dal gruppo
        if (informazioniUtente.warn >= 5) {
            messaggio.reply('⛔ UTENTE RIMOSSO DOPO 5 AVVERTIMENTI');
            await messaggio.remove(messaggio.chat, [messaggio.sender], messaggio.fromMe);
            informazioniUtente.warn = 0; // Resetta gli avvisi
        }
    }
}

export { controllaMessaggio as before };

