function _0x1062() {
  const _0x6769b3 = [
    'chat',
    'creds.json',
    '*Utilizza questo comando direttamente nel numero principale del Bot.*',
    'conn',
    '4436MznWuB',
    'command',
    '705555xYYtgl',
    '510419ZBLXwn',
    'owner',
    '651963bbTxZA',
    'jid',
    'https://telegra.ph/file/91aed1c21c85e763f82c9.png',
    'users',
    '805YNVIEB',
    'cescobot�',
    'nomedelbot',
    'admin',
    '8VnDERq',
    'sendMessage',
    'ⓘ Ora sarai in grado di leggere i messaggi del bot',
    'data',
    'Errore',
    '97200oaQGGj',
    'sender',
    'tags',
    './Sessioni/',
    '10690nacJUs',
    'BEGIN:VCARD\nVERSION:1.0\nN:;Unlimited;;;\nFN:Unlimited\nORG:Unlimited\nTITLE:\nitem1.TEL;waid=393755853799:+39 375 585 3799\nitem1.X-ABLabel:Unlimited\nX-WA-BIZ-DESCRIPTION:ofc\nX-WA-BIZ-NAME:Unlimited\nEND:VCARD',
    '395836PPgEPX',
    '50XXWOJP',
    '0@s.whatsapp.net',
    'readdir',
    'ⓘ Sto ripristinando le sessioni in corso...',
    'ⓘ Ora dono stati eliminati ',
    '*La cartella Sessioni non esiste o e\' vuota.*'
  ];
  _0x1062 = function () {
    return _0x6769b3;
  };
  return _0x1062();
}
const _0x4f712e = _0x3296;
(function (_0x3f0502, _0x4730d6) {
  const _0x3f5d17 = _0x3296,
    _0x289d5c = _0x3f0502();
  while (!![]) {
    try {
      const _0xf7835e =
        parseInt(_0x3f5d17(0x196)) / 0x1 +
        -parseInt(_0x3f5d17(0x198)) / 0x2 +
        -parseInt(_0x3f5d17(0x185)) / 0x3 +
        -parseInt(_0x3f5d17(0x180)) / 0x4 * (-parseInt(_0x3f5d17(0x189)) / 0x5) +
        parseInt(_0x3f5d17(0x192)) / 0x6 +
        -parseInt(_0x3f5d17(0x183)) / 0x7 * (parseInt(_0x3f5d17(0x18d)) / 0x8) +
        -parseInt(_0x3f5d17(0x182)) / 0x9 * (-parseInt(_0x3f5d17(0x199)) / 0xa);
      if (_0xf7835e === _0x4730d6) break;
      else _0x289d5c.push(_0x289d5c.shift());
    } catch (_0x1cfdf2) {
      _0x289d5c.push(_0x289d5c.shift());
    }
  }
})(_0x1062, 0x1aaca);
import { readdirSync, unlinkSync, existsSync, promises as _0x4053a6, rmSync } from 'fs';
import _0x154140 from 'path';
function _0x3296(_0x3b72fd, _0x2133de) {
  const _0x10621b = _0x1062();
  return (
    _0x3296 = function (_0x329665, _0xa6f3b4) {
      _0x329665 = _0x329665 - 0x17d;
      let _0x53eee8 = _0x10621b[_0x329665];
      return _0x53eee8;
    }),
    _0x3296(_0x3b72fd, _0x2133de);
}
const handler = async (_0x242462, { conn: _0x3de9bb, usedPrefix: _0x5601c8 }) => {
  const _0x3477d3 = _0x3296;
  if (global[_0x3477d3(0x17f)]['user'][_0x3477d3(0x186)] !== _0x3de9bb['user'][_0x3477d3(0x186)])
    return _0x3de9bb['sendMessage'](_0x242462['chat'], { 'text': _0x3477d3(0x17e) }, { 'quoted': _0x242462 });
  await _0x3de9bb[_0x3477d3(0x18e)](_0x242462[_0x3477d3(0x19f)], { 'text': _0x3477d3(0x19c) }, { 'quoted': _0x242462 });
  const _0x4d615c = _0x3477d3(0x195);
  try {
    if (!existsSync(_0x4d615c))
      return await _0x3de9bb[_0x3477d3(0x18e)](_0x242462[_0x3477d3(0x19f)], { 'text': _0x3477d3(0x19e) }, { 'quoted': _0x242462 });
    const _0x3c4101 = await _0x4053a6[_0x3477d3(0x19b)](_0x4d615c);
    let _0x13f91a = 0x0;
    for (const _0x365736 of _0x3c4101) {
      _0x365736 !== _0x3477d3(0x17d) && (await _0x4053a6['unlink'](_0x154140['join'](_0x4d615c, _0x365736)), _0x13f91a++);
    }
    _0x13f91a === 0x0
      ? await _0x3de9bb[_0x3477d3(0x18e)](_0x242462[_0x3477d3(0x19f)], { 'text': 'ⓘ Le sessioni sono vuote ‼️' }, { 'quoted': _0x242462 })
      : await _0x3de9bb[_0x3477d3(0x18e)](_0x242462[_0x3477d3(0x19f)], { 'text': _0x3477d3(0x19d) + _0x13f91a + ' archivi nelle sessioni' }, { 'quoted': _0x242462 });
  } catch (_0x5f33bf) {
    console['error']('Err-ore', _0x5f33bf),
      await _0x3de9bb[_0x3477d3(0x18e)](_0x242462[_0x3477d3(0x19f)], { 'text': _0x3477d3(0x191) }, { 'quoted': _0x242462 });
  }
  const _0x4033bf = global['db'][_0x3477d3(0x190)][_0x3477d3(0x188)][_0x242462[_0x3477d3(0x193)]];
  let _0xb6609d = global['db'][_0x3477d3(0x190)][_0x3477d3(0x18b)] || _0x3477d3(0x18a),
    _0xc3323b = {
      'key': { 'participants': _0x3477d3(0x19a), 'fromMe': ![], 'id': 'Halo' },
      'message': {
        'locationMessage': {
          'name': '' + _0xb6609d,
          'jpegThumbnail': await (await fetch(_0x3477d3(0x187)))['buffer'](),
          'vcard': _0x3477d3(0x197)
        }
      },
      'participant': '0@s.whatsapp.net'
    };
  await _0x3de9bb['sendMessage'](_0x242462[_0x3477d3(0x19f)], { 'text': _0x3477d3(0x18f) }, { 'quoted': _0xc3323b });
};
handler
