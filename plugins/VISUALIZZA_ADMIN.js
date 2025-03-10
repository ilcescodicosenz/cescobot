function decodeIndex(index, offset) {
    const constants = getConstants();
    return (index) => {
        index = index - 0x34;
        return constants[index];
    };
}

function getConstants() {
    return [
        '1jVvpIk', '300414Mxjuip', '47995RyvEDk', 'buffer', 'krqDh',
        '244uKOoAp', 'messageStubType', 'sender', '466326WEMCqm', 'vsvUV',
        '𝐌𝐞𝐬𝐬𝐚𝐠𝐠𝐢𝐨 𝐝𝐢 𝐩𝐫𝐨𝐦𝐨𝐳𝐢𝐨𝐧𝐞 👑', 'jcOTi', 'kiuPW',
        '𝐡𝐚 𝐝𝐚𝐭𝐨 𝐢 𝐩𝐨𝐭𝐞𝐫𝐢 𝐚 @', '84BZuFGP', 'chat', 'LfbLE',
        'profilePictureUrl', '286126BBHBnN', 'FxcSt', '402496mXcxaM',
        '19602QjNyDC', 'split', 'https://telegra.ph/file/17e7701f8b0a63806e312.png',
        '2528865VSzelI', 'image', '2190TaNZEk', 'all', 'UxWgu', 'messageStubParameters',
        'sendMessage'
    ];
}

const handler = async (message, { conn }) => {
    // Verifica se chi ha inviato il messaggio è un amministratore
    const groupMetadata = await conn.groupMetadata(message.chat);
    const isAdmin = groupMetadata.participants.some(participant => participant.admin && participant.id === message.sender);

    if (!isAdmin) {
        // Se non è un amministratore, non fare nulla
        return;
    }

    const constants = decodeIndex;
    const config = {
        UxWgu: constants(0x1d0),
        vsvUV: '120363341274693350@newsletter',
        jcOTi: constants(0x1e0),
        krqDh: (func, arg) => func(arg),
        kiuPW: constants(0x1ed),
        FxcSt: '𝐌𝐞𝐬𝐬𝐚𝐠𝐠𝐢𝐨 𝐝𝐢 𝐫𝐞𝐭𝐫𝐨𝐜𝐞𝐬𝐬𝐢𝐨𝐧𝐞 🙇🏻‍♂️',
        LfbLE: (func, arg) => func(arg)
    };

    if (message.messageStubType === -0x5b0 + 0x16a * 0xf + -0x6 * 0x3cd) {
        let imageUrl;
        try {
            imageUrl = await conn.getBuffer(message.messageStubParameters[0x1a0], config.jcOTi);
        } catch (error) {
            imageUrl = null;
        }
        conn.sendMessage(message.sender, {
            text: `@${message.sender.split('@')[0]} 𝐡𝐚 𝐝𝐚𝐭𝐨 𝐢 𝐩𝐨𝐭𝐞𝐫𝐢 𝐚 @${message.messageStubParameters[0].split('@')[1]}`,
            contextInfo: {
                mentionedJid: [message.sender, message.messageStubParameters[1]],
                forwardingScore: 0x63,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: config.vsvUV,
                    serverMessageId: '',
                    newsletterName: '' + nomebot
                },
                externalAdReply: {
                    title: config.FxcSt,
                    thumbnail: imageUrl ? await (await fetch(imageUrl)).buffer() : await (await fetch(config.kiuPW)).buffer()
                }
            }
        }, { quoted: null });
    }

    if (message.messageStubType === 0x1e * -0x49 + 0x7b + 0x3 * 0x2bb) {
        let profilePictureUrl;
        try {
            profilePictureUrl = await conn.profilePictureUrl(message.messageStubParameters[0], config.UxWgu);
        } catch (error) {
            profilePictureUrl = null;
        }
        conn.sendMessage(message.sender, {
            text: `@${message.sender.split('@')[0]} 𝐡𝐚 𝐥𝐞𝐯𝐚𝐭𝐨 𝐢 𝐩𝐨𝐭𝐞𝐫𝐢 𝐚 @${message.messageStubParameters[0].split('@')[1]}`,
            contextInfo: {
                mentionedJid: [message.sender, message.messageStubParameters[1]],
                forwardingScore: 0x63,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: config.vsvUV,
                    serverMessageId: '',
                    newsletterName: '' + nomebot
                },
                externalAdReply: {
                    title: config.FxcSt,
                    thumbnail: profilePictureUrl ? await (await fetch(profilePictureUrl)).buffer() : await (await fetch(config.kiuPW)).buffer()
                }
            }
        }, { quoted: null });
    }
};

export default handler;
