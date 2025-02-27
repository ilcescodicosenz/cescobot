export async function before(event, { conn, isAdmin, isBotAdmin, isOwner, isROwner }) {
    if (event.message && event.isBaileys) return true;
    if (event.fromMe) return false;
    if (!event.isGroup) return true;

    let chatSettings = global.db.data.chats[event.chat];
    let globalSettings = global.db.data.settings[this.user.jid] || {};

    if (globalSettings.antiPrivate && !isOwner && !isROwner) {
        await this.updateBlockStatus(event.user, "block");
    }
    return false;
}
