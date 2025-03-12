let handler = async (message) => {
    if (!message.isGroup) return null;  // Controlla se è un gruppo, altrimenti esce
    
    let senderData = global.db.data.users[message.sender];  // Recupera i dati dell'utente

    // Lista delle bestemmie da rilevare
    const blasphemyRegex = /(?:porco dio|porcodio|dio bastardo|dio cane|porcamadonna|madonnaporca|porca madonna|madonna porca|dio cristo|diocristo|dio maiale|diomaiale|jesucristo|jesu cristo|cristo madonna|madonna impanata|dio cristo|cristo dio|dio frocio|dio gay|dio madonna|dio infuocato|dio crocifissato|madonna puttana|madonna vacca|madonna inculata|maremma maiala|padre pio|jesu impanato|jesu porco|porca madonna|diocane|madonna porca|dio capra|capra dio|padre pio ti spio)/i;

    // Se il messaggio contiene una bestemmia
    if (senderData.bestemmiometro && blasphemyRegex.test(message.text)) {
        senderData.blasphemy = (senderData.blasphemy || 0) + 1;  // Incrementa il conteggio

        let mention = "@" + message.sender.split("@")[0];  // Menzione dell'utente

        // Primo avviso
        if (senderData.blasphemy === 1) {
            let response = mention + " ha tirato la sua prima bestemmia";
            conn.sendMessage(message.chat, { text: response, mentions: [message.sender] });
        }
        
        // Avviso successivo con conteggio bestemmie
        if (senderData.blasphemy > 1) {
            let response = mention + ` ha tirato ${senderData.blasphemy} bestemmie`;
            conn.sendMessage(message.chat, { text: response, mentions: [message.sender] });
        }
    }
};

export default handler;
