import { unlinkSync, readFileSync } from 'fs';
import { join } from 'path';
import { exec } from 'child_process';

const effects = {
  bass: '-af equalizer=f=94:width_type=o:width=2:g=30',
  blown: '-af acrusher=.1:1:64:0:log',
  deep: '-af atempo=4/4,asetrate=44500*2/3',
  earrape: '-af volume=12',
  fast: '-filter:a "atempo=1.63,asetrate=44100"',
  fat: '-filter:a "atempo=1.6,asetrate=22100"',
  nightcore: '-filter:a atempo=1.06,asetrate=44100*1.25',
  reverse: '-filter_complex "areverse"',
  robot: '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"',
  slow: '-filter:a "atempo=0.7,asetrate=44100"',
  smooth: '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"',
  tupai: '-filter:a "atempo=0.5,asetrate=65100"'
};

const handler = async (message, { conn, args, __dirname, usedPrefix, command }) => {
  try {
    let targetMessage = message.quoted ? message.quoted : message;
    let mimeType = targetMessage.mimetype || '';
    let effect = effects[command];

    if (!effect) throw 'Invalid effect selected.';

    if (/audio/.test(mimeType)) {
      let randomFileName = getRandom('.mp3');
      let outputPath = join(__dirname, '../tmp/' + randomFileName);
      let inputFile = await targetMessage.download(true);
      
      exec(`ffmpeg -i ${inputFile} ${effect} ${outputPath}`, async (error) => {
        await unlinkSync(inputFile);
        if (error) throw '*Error processing audio!*';
        let audioBuffer = await readFileSync(outputPath);
        conn.sendFile(message.chat, audioBuffer, randomFileName, null, message, true, { type: 'audioMessage', ptt: true });
      });
    } else {
      throw `*[INFO] Reply to an audio message or voice note to modify it using the command ${usedPrefix + command}*`;
    }
  } catch (error) {
    throw error;
  }
};

handler.tags = Object.keys(effects).map(effect => effect + ' [vn]');
handler.mimetype = ['audio'];
handler.command = new RegExp(`^(${Object.keys(effects).join('|')})$`, 'i');
handler.limit = true;

export default handler;

const getRandom = (ext) => {
  return `${Math.floor(Math.random() * 10000)}${ext}`;
};
