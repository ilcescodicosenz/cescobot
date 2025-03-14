import os from 'os';
import util from 'util';
import humanReadable from 'human-readable';
import baileys from '@whiskeysockets/baileys';
import fs from 'fs';
import { performance } from 'perf_hooks';
import fetch from 'node-fetch';

function clockString(ms) {
    let h = Math.floor(ms / 3600000);
    let m = Math.floor(ms / 60000) % 60;
    let s = Math.floor(ms / 1000) % 60;
    console.log({ ms, h, m, s });
    return [h, m, s].map(unit => unit.toString().padStart(2, '0')).join(':');
}

const handler = async (message, { conn, usedPrefix }) => {
    const isOwner = global.owner.map(o => o.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(message.sender);
    const isAdmin = message.key.participant ? message.key.participant.endsWith('@g.us') && (await conn.groupMetadata(message.chat)).participants.find(participant => participant.id === message.sender).admin : false;
    const isBotAdmin = message.key.participant ? message.key.participant.endsWith('@g.us') && (await conn.groupMetadata(message.chat)).participants.find(participant => participant.id === conn.user.jid).admin : false;

    if (!isOwner && !isAdmin && !isBotAdmin) {
        return message.reply('Questo comando è riservato agli amministratori, al bot e al proprietario.');
    }

    const uptimeMs = process.uptime() * 1000;
    const uptimeStr = clockString(uptimeMs);
    const totalUsers = Object.entries(global.db.data.users).length;
    const allChats = Object.entries(conn.chats).filter(([jid, chat]) => jid && chat.isChats);
    const groupChats = allChats.filter(([jid]) => jid.endsWith('@g.us'));
    const privateChats = allChats.filter(([jid]) => jid.includes('@s.whatsapp.net'));
    const memoryUsage = process.memoryUsage();
    const settings = global.db.data.settings[conn.user.jid] || {};
    const { restrict } = settings;
    const { autoread } = global;
    const startTime = performance.now();
    const endTime = performance.now();
    const latency = endTime - startTime;
    const senderName = await conn.getName(message.sender);

    const quotedMsg = {
        key: {
            participants: '0@s.whatsapp.net',
            fromMe: false,
            id: 'Halo'
        },
        message: {
            locationMessage: {
                name: '𝐌𝐞𝐧𝐮 Admin',
                jpegThumbnail: await (await fetch('https://i.ibb.co/HpkzmrMZ/cescobot.jpg')).buffer(),
                vcard: `BEGIN:VCARD\nVERSION:1.0\nN:;Unlimited;;;\nFN:Unlimited\nORG:Unlimited\nTITLE:\nitem1.TEL;waid=19709001746:+1 (970) 900-1746\nitem1.X-ABLabel:Unlimited\nX-WA-BIZ-DESCRIPTION:ofc\nX-WA-BIZ-NAME:Unlimited\nEND:VCARD`
            }
        },
        participant: '0@s.whatsapp.net'
    };

    let menuText = (
        '\n『⚙️』 ══ •⊰✰⊱• ══ 『⚙️』\n' +
        '- ' + usedPrefix + 'broadcast (testo) - Invia un messaggio a tutte le chat\n' +
        '- ' + usedPrefix + 'join (link) - Unisce il bot a un gruppo tramite link\n' +
        '- ' + usedPrefix + 'leave - Fa uscire il bot dal gruppo corrente\n' +
        '- ' + usedPrefix + 'block @utente - Blocca un utente\n' +
        '- ' + usedPrefix + 'unblock @utente - Sblocca un utente\n' +
        '- ' + usedPrefix + 'restart - Riavvia il bot\n' +
        '- ' + usedPrefix + 'clear - Pulisce tutte le chat\n' +
        '\nUptime: ' + uptimeStr +
        '\nUtenti totali: ' + totalUsers +
        '\nChat di gruppo: ' + groupChats.length +
        '\nChat private: ' + privateChats.length +
        '\nLatenza: ' + latency.toFixed(2) + ' ms'
    ).trim();

    const botName = global.db.data.settings[conn.user.jid]?.nomedelbot || 'ChatUnity-Bot';

    conn.sendMessage(message.chat, {
        text: menuText,
        contextInfo: {
            mentionedJid: conn.parseMention(menuText),
            forwardingScore: 1,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363259442839354@newsletter',
                serverMessageId: '',
                newsletterName: '' + botName
            }
        }
    }, { quoted: quotedMsg });
};

handler.help = ['menuadm'];
handler.tags = ['menuadm'];
handler.command = /^(menuadm|admin)$/i;

export default handler;
