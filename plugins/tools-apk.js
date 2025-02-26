import { search, download } from 'aptoide-scraper';

var handler = async (_0x366ca8, { conn, usedPrefix, command, text }) => {
    if (!text) return conn.reply(_0x366ca8.chat, 'ⓘ Inserisci il nome dell'app', _0x366ca8);
    
    try {
        let botName = global.db.data.nomedelbot || 'cescobot';
        let placeholderMessage = {
            'key': {
                'participants': '0@s.whatsapp.net',
                'fromMe': false,
                'id': 'Halo'
            },
            'message': {
                'locationMessage': {
                    'name': '' + botName,
                    'jpegThumbnail': await (await fetch('https://telegra.ph/file/2f38b3fd9cfba5935b496.jpg')).buffer(),
                    'vcard': 'BEGIN:VCARD\nVERSION:1.0\nN:;Unlimited;;;\nFN:Unlimited\nORG:Unlimited\nTITLE:\nitem1.TEL;waid=393755853799:+39 375 585 3799\nitem1.X-ABLabel:Unlimited\nX-WA-BIZ-DESCRIPTION:ofc\nX-WA-BIZ-NAME:Unlimited\nEND:VCARD'
                }
            },
            'participant': '0@s.whatsapp.net'
        };
        
        let results = await search(text);
        let appData = await download(results[0].id);
        let message = `────────────────\n- Apk: ${appData.name}\n- Aggiornato: ${appData.lastup}\n- Dimensione: ${appData.size}\n────────────────`;
        
        await conn.sendMessage(_0x366ca8.chat, {
            'text': message,
            'contextInfo': {
                'externalAdReply': {
                    'title': appData.name,
                    'thumbnailUrl': appData.icon,
                    'mediaType': 1
                }
            }
        }, {'quoted': placeholderMessage});
        
        if (appData.size.includes('GB') || parseFloat(appData.size.replace(' MB', '')) > 1000) {
            return await conn.reply(_0x366ca8.chat, 'ⓘ Il file è troppo grande', _0x366ca8);
        }
        
        await conn.sendMessage(_0x366ca8.chat, {
            'document': {
                'url': appData.dllink
            },
            'mimetype': 'application/vnd.android.package-archive',
            'fileName': appData.name + '.apk',
            'caption': null
        }, {'quoted': _0x366ca8});
        
    } catch {
        return conn.reply(_0x366ca8.chat, 'ⓘ Si è verificato un errore durante il caricamento', _0x366ca8);
    }
};

handler.help = ['apkmod'];
handler.tags = ['apkmod'];
handler.command = /^(apkmod|modapk|app|aptoide|apk)$/i;

export default handler;
