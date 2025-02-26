let handler = async (message, { conn }) => {
  // Send a reply with a message that includes a group invite link
  message.reply(`Group Invitation Link Revoke\n\n➣ New Group Link: ${'https://chat.whatsapp.com/' + await conn.groupRevokeInvite(message.chat)}`);
};

// Commands that trigger this handler
handler.command = ['reimposta', 'revoke'];

// Required permissions: bot and admin need to be in the group
handler.botAdmin = true;
handler.admin = true;
handler.group = true;

export default handler;
