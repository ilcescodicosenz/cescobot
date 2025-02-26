let linkRegex = /vm.tiktok.com/i;

export async function before(_0x762ea2, { isAdmin, groupMetadata, isBotAdmin }) {
    const _0x32bc1c = _0x8b52;

    if (_0x762ea2['isBaileys'] && _0x762ea2[_0x32bc1c(0x1d2)]) return true;
    if (!_0x762ea2[_0x32bc1c(0x1d6)]) return false;

    let _0x43d50c = global['db'][_0x32bc1c(0x1ee)]['chats'][_0x762ea2['chat']];
    let _0x500a0e = '5';
    let _0x46ff1a = _0x762ea2[_0x32bc1c(0x1e8)]['participant'];
    let _0x384e03 = _0x762ea2[_0x32bc1c(0x1e8)]['id'];
    let _0x5788cc = global['db']['data'][_0x32bc1c(0x1e0)][this[_0x32bc1c(0x1ea)][_0x32bc1c(0x1d9)]] || {};
    
    const _0x40b4eb = linkRegex[_0x32bc1c(0x1d0)](_0x762ea2['text']);
    const _0x1d41f6 = _0x32bc1c(0x1e2);

    if (isAdmin && _0x43d50c[_0x32bc1c(0x1cc)] && _0x762ea2[_0x32bc1c(0x1d7)].includes(_0x1d41f6)) return;

    if (_0x43d50c[_0x32bc1c(0x1cc)] && _0x40b4eb && !isAdmin && isBotAdmin) {
        if (isBotAdmin) {
            global['db'][_0x32bc1c(0x1ee)][_0x32bc1c(0x1de)][_0x762ea2[_0x32bc1c(0x1dc)]][_0x32bc1c(0x1e6)] += 1;
            await conn['sendMessage'](_0x762ea2[_0x32bc1c(0x1cf)], { 'delete': { 'remoteJid': _0x762ea2[_0x32bc1c(0x1cf)], 'fromMe': false, 'id': _0x384e03, 'participant': _0x46ff1a } });

            let _0x13a58e = global['db'][_0x32bc1c(0x1ee)][_0x32bc1c(0x1de)][_0x762ea2['sender']][_0x32bc1c(0x1e6)];
            let _0x410870 = global['db'][_0x32bc1c(0x1ee)][_0x32bc1c(0x1de)][_0x762ea2[_0x32bc1c(0x1dc)]];

            if (_0x13a58e < _0x500a0e) {
                let _0x420fa3 = {
                    'key': {
                        'participants': '0@s.whatsapp.net',
                        'fromMe': false,
                        'id': 'Halo'
                    },
                    'message': {
                        'locationMessage': {
                            'name': _0x32bc1c(0x1d4),
                            'jpegThumbnail': await (await fetch(_0x32bc1c(0x1e9)))['buffer'](),
                            'vcard': _0x32bc1c(0x1df)
                        }
                    },
                    'participant': _0x32bc1c(0x1da)
                };
                conn[_0x32bc1c(0x1ec)](_0x762ea2[_0x32bc1c(0x1cf)], _0x32bc1c(0x1e3) + _0x410870[_0x32bc1c(0x1e6)] + _0x32bc1c(0x1e5), _0x420fa3);
            } else {
                global['db'][_0x32bc1c(0x1ee)]['users'][_0x762ea2['sender']][_0x32bc1c(0x1e6)] = 0;
                _0x762ea2['reply'](_0x32bc1c(0x1d8));
                await conn[_0x32bc1c(0x1db)](_0x762ea2[_0x32bc1c(0x1cf)], [_0x762ea2[_0x32bc1c(0x1dc)]], _0x32bc1c(0x1d5));
            }
        }
    }

    return true;
}
