import { tmpdir } from 'os';
import path, { join } from 'path';
import { readdirSync, statSync, unlinkSync, existsSync, readFileSync, watch } from 'fs';

const handler = async (_event, { conn, usedPrefix, __dirname, args, text }) => {
    const pluginKeys = Object.keys(plugins);
    const pluginNames = pluginKeys.map(plugin => plugin.replace('.js', ''));

    if (!text) throw '📌 *_Esempio uso:_*\n*#deleteplugin Menu-official*';
    
    if (!pluginNames.includes(args[0])) {
        return _event.reply('*🗃️ non esiste questo plugin!*\n•••••••••••••••••••••••••••••••••••••••••••••••••••••••\n\n' + pluginNames.map(name => ' ' + name).join('\n'));
    }
    
    const pluginPath = join(__dirname, '../plugins/' + args[0] + '.js');
    unlinkSync(pluginPath);
    
    let warningMessage = {
        key: { participants: '0@s.whatsapp.net', fromMe: false, id: 'Halo' },
        message: {
            locationMessage: {
                name: 'Unlimited',
                jpegThumbnail: await (await fetch('https://telegra.ph/file/6d491d5823b5778921229.png')).buffer(),
                vcard: 'BEGIN:VCARD\nVERSION:1.0\nN:;Unlimited;;;\nFN:Unlimited\nORG:Unlimited\nTITLE:\nEND:VCARD'
            }
        },
        participant: '0@s.whatsapp.net'
    };
    
    conn.sendMessage(_event.chat, '𝐈𝐥 𝐩𝐥𝐮𝐠𝐢𝐧 è stato eliminato: ' + args[0] + '.js_', warningMessage);
};

handler.tags = ['owner'];
handler.help = ['deleteplugin <nome>'];
handler.command = /^(deleteplugin|dp|deleteplu)$/i;
handler.rowner = true;

export default handler;
