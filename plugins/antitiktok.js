let linkRegex = /vm.tiktok.com/i;

export async function before(_0x762ea2, { isAdmin, groupMetadata, isBotAdmin }) {
    if (_0x762ea2.isBaileys && _0x762ea2.jid) return true;

    if (!_0x762ea2.text) return false;

    let chatSettings = global.db['antitiktok']['chats'][_0x762ea2.chat];
    let warningThreshold = '3';
    let participant = _0x762ea2.groupParticipantsUpdate.participant;
    let messageId = _0x762ea2.groupParticipantsUpdate.id;
    let userSettings = global.db['data']['users'][this['jid']] || {};

    const isTikTokLink = linkRegex.test(_0x762ea2.text);
    const warningMessage = '⚠ LINK TIKTOK NON CONSENTITO';

    if (isAdmin && chatSettings['warn'] && _0x762ea2.text.includes(warningMessage)) return;

    if (chatSettings['warn'] && isTikTokLink && !isAdmin && isBotAdmin) {
        if (isBotAdmin) {
            global.db['antitiktok']['warn'][_0x762ea2.sender]['warnings'] += 1;
            await conn.sendMessage(_0x762ea2.chat, { delete: { remoteJid: _0x762ea2.chat, fromMe: false, id: messageId, participant } });

            let currentWarnings = global.db['antitiktok']['warn'][_0x762ea2.sender]['warnings'];
            let userWarnings = global.db['antitiktok']['warn'][_0x762ea2.sender];

            if (currentWarnings < warningThreshold) {
                let contactInfo = {
                    key: { participants: '0@s.whatsapp.net', fromMe: false, id: 'Halo' },
                    message: {
                        locationMessage: {
                            name: 'Unlimited',
                            jpegThumbnail: await (await fetch('https://telegra.ph/file/5dd0169efd3a5c1b99017.png')).buffer(),
                            vcard: 'BEGIN:VCARD\nVERSION:3.0\nN:;Unlimited;;;\nFN:Unlimited\nORG:Unlimited\nTEL;waid=19709001746:+1 (970) 900-1746\nEND:VCARD'
                        }
                    },
                    participant: '0@s.whatsapp.net'
                };
                conn.sendMessage(_0x762ea2.chat, 'Avvertimento numero ' + userWarnings['warnings'] + ' / ' + warningThreshold, contactInfo);
            } else {
                global.db['antitiktok']['warn'][_0x762ea2.sender]['warnings'] = 0;
                _0x762ea2.reply('Hai superato il limite di avvertimenti per TikTok');
                await conn.groupRemove(_0x762ea2.chat, [_0x762ea2.groupParticipantsUpdate.participant]);
            }
        }
    }

    return true;
}
