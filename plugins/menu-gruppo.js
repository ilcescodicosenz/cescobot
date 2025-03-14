import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix, text }) => {
    let fakeLocationMessage = {
        key: {
            participants: "0@s.whatsapp.net",
            fromMe: false,
            id: 'Halo'
        },
        message: {
            locationMessage: {
                name: "Menu Gruppo",
                jpegThumbnail: await (await fetch("https://qu.ax/cSqEs.jpg")).buffer(),
                vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;Unlimited;;;\nFN:Unlimited\nORG:Unlimited\nTITLE:\nitem1.TEL;waid=19709001746:+1 (970) 900-1746\nitem1.X-ABLabel:Unlimited\nX-WA-BIZ-DESCRIPTION:ofc\nX-WA-BIZ-NAME:Unlimited\nEND:VCARD"
            }
        },
        participant: "0@s.whatsapp.net"
    };

    const risposte8ball = [
        "Certo che sì.",
        "Probabilmente.",
        "Le probabilità sono buone.",
        "Forse.",
        "Non ne sono sicuro.",
        "Non ci contare.",
        "Assolutamente no.",
        "Le mie fonti dicono di no.",
    ];

    const facts = [
        "Il miele non scade mai.",
        "Le banane sono bacche.",
        "Il suono viaggia più velocemente nell'acqua che nell'aria.",
    ];

    function ship(user1, user2) {
        const score = Math.floor(Math.random() * 101);
        return `${user1} e ${user2} hanno una compatibilità del ${score}%.`;
    }

    function ottoBall() {
        return risposte8ball[Math.floor(Math.random() * risposte8ball.length)];
    }

    function coinflip() {
        return Math.random() < 0.5 ? "Testa" : "Croce";
    }

    function dice() {
        return Math.floor(Math.random() * 6) + 1;
    }

    function fact() {
        return facts[Math.floor(Math.random() * facts.length)];
    }

    let menuText = `
──────Menu Gruppo─────
- ${usedPrefix}abbraccia @
- ${usedPrefix}lecco/a @
- ${usedPrefix}mordi @
- ${usedPrefix}alcolizzato @
- ${usedPrefix}riscrivi (messaggio)
- ${usedPrefix}meteo (città)
- ${usedPrefix}hd (foto)
- ${usedPrefix}leggi (foto)
- ${usedPrefix}rimuovisfondo (foto)
- ${usedPrefix}sega (nome)
- ${usedPrefix}ditalino (nome)
- ${usedPrefix}insulta (nome)
- ${usedPrefix}qrcode (testo)
- ${usedPrefix}rivela (foto)
- ${usedPrefix}styletext
- ${usedPrefix}calc (1+1)
- ${usedPrefix}msg @
- ${usedPrefix}bello/a @
- ${usedPrefix}gay @
- ${usedPrefix}puttana @
- ${usedPrefix}lesbica @
- ${usedPrefix}insulta @
- ${usedPrefix}stupra @
- ${usedPrefix}frocio @
- ${usedPrefix}odio @
- ${usedPrefix}amore @
- ${usedPrefix}dox @
- ${usedPrefix}id (gruppo)
- ${usedPrefix}handicappato @
- ${usedPrefix}setig
- ${usedPrefix}eliminaig
- ${usedPrefix}tris
- ${usedPrefix}crush @
- ${usedPrefix}topgays
- ${usedPrefix}topnazi
- ${usedPrefix}ttp
- ${usedPrefix}dado
- ${usedPrefix}sticker/s
- ${usedPrefix}tovideo
- ${usedPrefix}togif
- ${usedPrefix}autoadmin
- ${usedPrefix}kebab @
- ${usedPrefix}sayan @
- ${usedPrefix}mordi @
- ${usedPrefix}mira @
- ${usedPrefix}creacoppia
- ${usedPrefix}ship @user1 @user2
- ${usedPrefix}8ball (domanda)
- ${usedPrefix}coinflip
- ${usedPrefix}dice
- ${usedPrefix}fact
  ──────────────
   cescobot
`.trim();

    if (text && text.startsWith(usedPrefix + "ship")) {
        const users = m.mentionedJid;
        if (users.length === 2) {
            menuText = ship(users[0], users[1]);
        } else {
            menuText = "Devi menzionare due utenti per il comando ship.";
        }
    } else if (text && text.startsWith(usedPrefix + "8ball")) {
        menuText = ottoBall();
    } else if (text && text.startsWith(usedPrefix + "coinflip")) {
        menuText = coinflip();
    } else if (text && text.startsWith(usedPrefix + "dice")) {
        menuText = dice().toString();
    } else if (text && text.startsWith(usedPrefix + "fact")) {
        menuText = fact();
    }

    conn.sendMessage(m.chat, {
        text: menuText,
        contextInfo: {
            mentionedJid: conn.parseMention(menuText),
            forwardingScore: 1,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: "120363341274693350@newsletter",
                serverMessageId: '',
                newsletterName: global.db.data.nomedelbot || "cescobot"
            }
        }
    }, {
        quoted: fakeLocationMessage
    });
};

handler.help = ["menu"];
handler.tags = ['menu'];
handler.command = /^(menugruppo|gruppo|ship|8ball|coinflip|dice|fact)$/i;

export default handler;
