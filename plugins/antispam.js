const userSpamData = {};
let handler = m => m;

handler.before = async function (m, { conn, isAdmin, isBotAdmin, isOwner, isROwner, isPrems }) {
    const chat = global.db.data.chats[m.chat];
    const bot = global.db.data.settings[conn.user.jid] || {};
    if (!bot.antiSpam) return;
    if (m.isGroup && chat.modoadmin) return;

    if (m.isGroup) {
        if (isOwner || isROwner || isAdmin || !isBotAdmin || isPrems) return;
    }

    let user = global.db.data.users[m.sender];
    const sender = m.sender;
    const currentTime = new Date().getTime();
    const timeWindow = 5000; // tempo limite
    let messageLimit = 10;
    if (isAdmin) {
        messageLimit = 20;
    }

    let time, time2, time3, time4, time5, time6, messaggio, motivo;
    time = 30000; // 30 secondi
    time2 = 60000; // 1 minuto
    time3 = 120000; // 2 minuti
    time4 = 180000; // 3 minuti
    time5 = 240000; // 4 minuti
    time6 = 300000; // 5 minuti

    if (!(sender in userSpamData)) {
        userSpamData[sender] = {
            lastMessageTime: currentTime,
            messageCount: 1,
            antiBan: 0,
            message: 0,
            message2: 0,
            message3: 0,
            message4: 0,
            message5: 0,
            message6: 0,
        };
    } else {
        const userData = userSpamData[sender];
        const timeDifference = currentTime - userData.lastMessageTime;

        if (userData.antiBan === 1) {
            if (userData.message < 5) {
                userData.message++;
                motivo = `⚠️ Attenzione! Hai inviato troppi messaggi. Se continui, sarai rimosso dal gruppo. Ti rimane ${time / 1000} secondi prima del reset.`;
                await conn.reply(m.chat, motivo, m, { mentions: [m.sender] });
                user.messageSpam = motivo;
            }
        } else if (userData.antiBan === 2) {
            if (userData.message2 < 5) {
                userData.message2++;
                motivo = `⚠️ Attenzione! Ancora spam. Ti rimane ${time2 / 1000} secondi prima del reset.`;
                await conn.reply(m.chat, motivo, m, { mentions: [m.sender] });
                user.messageSpam = motivo;
            }
        } else if (userData.antiBan === 3) {
            if (userData.message3 < 5) {
                userData.message3++;
                motivo = `⚠️ Ancora spam. Ti rimane ${time3 / 1000} secondi prima del reset.`;
                await conn.reply(m.chat, motivo, m, { mentions: [m.sender] });
                user.messageSpam = motivo;
            }
        } else if (userData.antiBan === 4) {
            if (userData.message4 < 5) {
                userData.message4++;
                motivo = `⚠️ Ancora spam. Ti rimane ${time4 / 1000} secondi prima del reset.`;
                await conn.reply(m.chat, motivo, m, { mentions: [m.sender] });
                user.messageSpam = motivo;
            }
        } else if (userData.antiBan === 5) {
            if (userData.message5 < 5) {
                userData.message5++;
                motivo = `⚠️ Ancora spam. Ti rimane ${time5 / 1000} secondi prima del reset.`;
                await conn.reply(m.chat, motivo, m, { mentions: [m.sender] });
                user.messageSpam = motivo;
            }
        } else if (userData.antiBan === 6) {
            if (userData.message6 < 5) {
                userData.message6++;
                motivo = `❌ Rimosso/a per spam.`;
                await conn.reply(m.chat, motivo, m, { mentions: [m.sender] });
                user.messageSpam = motivo;
                await conn.groupParticipantsUpdate(m.chat, [sender], 'remove');
                return;
            }
        }

        if (timeDifference <= timeWindow) {
            userData.messageCount += 1;

            if (userData.messageCount >= messageLimit) {
                const mention = `@${sender.split("@")[0]}`;
                const warningMessage = ` _*Troppo spam*_\n\nUtente: ${mention}`;
                if (userData.antiBan > 5) return await conn.reply(m.chat, warningMessage, m, { mentions: [m.sender] });

                user.banned = true;
                userData.antiBan++;
                userData.messageCount = 1;

                if (userData.antiBan === 1) {
                    setTimeout(() => {
                        if (userData.antiBan === 1) {
                            userData.antiBan = 0;
                            userData.message = 0;
                            userData.message2 = 0;
                            userData.message3 = 0;
                            userData.message4 = 0;
                            userData.message5 = 0;
                            userData.message6 = 0;
                            user.antispam = 0;
                            motivo = 0;
                            user.messageSpam = 0;
                            user.banned = false;
                        }
                    }, time);
                } else if (userData.antiBan === 2) {
                    setTimeout(() => {
                        if (userData.antiBan === 2) {
                            userData.antiBan = 0;
                            userData.message = 0;
                            userData.message2 = 0;
                            userData.message3 = 0;
                            userData.message4 = 0;
                            userData.message5 = 0;
                            userData.message6 = 0;
                            user.antispam = 0;
                            motivo = 0;
                            user.messageSpam = 0;
                            user.banned = false;
                        }
                    }, time2);
                } else if (userData.antiBan === 3) {
                    setTimeout(() => {
                        if (userData.antiBan === 3) {
                            userData.antiBan = 0;
                            userData.message = 0;
                            userData.message2 = 0;
                            userData.message3 = 0;
                            userData.message4 = 0;
                            userData.message5 = 0;
                            userData.message6 = 0;
                            user.antispam = 0;
                            motivo = 0;
                            user.messageSpam = 0;
                            user.banned = false;
                        }
                    }, time3);
                } else if (userData.antiBan === 4) {
                    setTimeout(() => {
                        if (userData.antiBan === 4) {
                            userData.antiBan = 0;
                            userData.message = 0;
                            userData.message2 = 0;
                            userData.message3 = 0;
                            userData.message4 = 0;
                            userData.message5 = 0;
                            userData.message6 = 0;
                            user.antispam = 0;
                            motivo = 0;
                            user.messageSpam = 0;
                            user.banned = false;
                        }
                    }, time4);
                } else if (userData.antiBan === 5) {
                    setTimeout(() => {
                        if (userData.antiBan === 5) {
                            userData.antiBan = 0;
                            userData.message = 0;
                            userData.message2 = 0;
                            userData.message3 = 0;
                            userData.message4 = 0;
                            userData.message5 = 0;
                            userData.message6 = 0;
                            user.antispam = 0;
                            motivo = 0;
                            user.messageSpam = 0;
                            user.banned = false;
                        }
                    }, time5);
                } else if (userData.antiBan === 6) {
                    setTimeout(() => {

    if (m.text === '.spamstatus' && isAdmin) {
        const target = m.mentionedJid[0] || m.sender;
        if (userSpamData[target]) {
            const userData = userSpamData[target];
            const statusMessage = `Stato anti-spam di ${target.split("@")[0]}:\n` +
                `Avvisi: ${userData.antiBan}\n` +
                `Messaggi nel tempo limite: ${userData.messageCount}\n` +
                `Ultimo motivo: ${userData.messageSpam}`;
            m.reply(statusMessage);
        } else {
            m.reply('Utente non trovato.');
        }
        return;
    }

    if (m.text === '.antispam on' && isAdmin) {
        bot.antiSpam = true;
        m.reply('Anti-spam attivato!');
        return;
    } else if (m.text === '.antispam off' && isAdmin) {
        bot.antiSpam = false;
        m.reply('Anti-spam disattivato!');
        return;
    }

    if (m.isBaileys || m.text.startsWith('.')) return; // Ignora messaggi di sistema e comandi

};

export default handler;
