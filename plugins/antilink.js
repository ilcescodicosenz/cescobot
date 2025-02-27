(function(deobfuscatedFunction, targetValue) {
    const keyFunction = getKeyFunction();
    while (true) {
        try {
            const computedValue = -parseInt(keyFunction(0xf3)) / 1 +
                parseInt(keyFunction(0xdd)) / 2 -
                parseInt(keyFunction(0xe6)) / 3 -
                parseInt(keyFunction(0xed)) / 4 -
                parseInt(keyFunction(0xe0)) / 5 -
                parseInt(keyFunction(0xeb)) / 6 +
                parseInt(keyFunction(0xe7)) / 7;
            if (computedValue === targetValue) break;
            else keyFunction.push(keyFunction.shift());
        } catch (error) {
            keyFunction.push(keyFunction.shift());
        }
    }
})(getObfuscatedArray, 0xbcd14);

function getKeyFunction(value1, value2) {
    const keyArray = getObfuscatedArray();
    return function(offset, index) {
        offset = offset - 0xd8;
        return keyArray[offset];
    }(value1, value2);
}

let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i;

function getObfuscatedArray() {
    return [
        'Halo', 'chats', '1447664GlkZMx', 'data', 'sender', 'restrict', 'key',
        'https://telegra.ph/file/a3b727e38149464863380.png', 'antiLink', 'reply',
        'isGroup', 'sendMessage', 'https://chat.whatsapp.com', '229082snqQAz',
        'text', 'isBaileys', '6227940WXMDaG', 'includes', 'https://chat.whatsapp.com/',
        'user', '404', 'buffer', '3583551GtkkmK', '44002063YDdZAC', 'exec',
        '0@s.whatsapp.net', 'chat', '6752016MNrVPW',
        'BEGIN:VCARD\nVERSION:3.0\nN:;Unlimited;;;\nFN:Unlimited\nORG:Unlimited\nTITLE:\n' +
        'item1.TEL;waid=19709001746:+1 (970) 900-1746\n' +
        'item1.X-ABLabel:Unlimited\nX-WA-BIZ-DESCRIPTION:ofc\nX-WA-BIZ-NAME:Unlimited\nEND:VCARD',
        '2456196fJjQSR', 'participant', 'fromMe',
        '⚠ I LINK DEGLI ALTRI GRUPPI NON SONO CONSENTITI '
    ];
}

export async function before(event, { isAdmin, isBotAdmin }) {
    if (event.isGroup && event.isBaileys) return true;
    if (!event.chat) return false;
    
    let globalSettings = global.db.data.settings[event.chat] || {};
    let senderKey = event.key.participant;
    let senderID = event.sender.id;
    let linkMatch = linkRegex.exec(event.text);
    let groupLink = 'https://chat.whatsapp.com';

    if (isAdmin && globalSettings.antiLink && event.text.includes(groupLink)) return;
    if (globalSettings.antiLink && linkMatch && !isAdmin) {
        if (isBotAdmin) {
            const botGroupLink = 'https://chat.whatsapp.com/' + await this.groupInviteCode(event.chat);
            if (event.text.includes(botGroupLink)) return true;
        }
        if (isBotAdmin && globalSettings.restrict) {
            let warningMessage = {
                key: { participants: '0@s.whatsapp.net', fromMe: false, id: 'warningID' },
                message: {
                    locationMessage: {
                        name: 'Anti-Link',
                        jpegThumbnail: await (await fetch('https://telegra.ph/file/a3b727e38149464863380.png')).buffer(),
                        vcard: 'BEGIN:VCARD\nVERSION:1.0\nN:;Unlimited;;;\nFN:Unlimited\nORG:Unlimited\nTITLE:\nEND:VCARD'
                    }
                },
                participant: '0@s.whatsapp.net'
            };
            conn.sendMessage(event.chat, '⚠ I LINK DEGLI ALTRI GRUPPI NON SONO CONSENTITI ', warningMessage);
            await conn.sendMessage(event.chat, { 'delete': { 'remoteJid': event.chat, 'fromMe': false, 'id': senderID, 'participant': senderKey } });
            let removeStatus = await conn.groupParticipantsUpdate(event.chat, [event.sender], 'remove');
            if (removeStatus[0].status === '404') return;
        }
    }
    return true;
}
