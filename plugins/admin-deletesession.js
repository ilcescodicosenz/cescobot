async function handler(message, { conn, usedPrefix, text }) {
  // ... (verifica proprietario)

  const sessionsFolder = './Sessioni/';
  const filesToDelete = text ? text.split(' ') : null;

  if (filesToDelete) {
    let deletedFilesCount = 0;
    for (const file of filesToDelete) {
      if (file.match(/^[a-zA-Z0-9_\-]+\.json$/)) { // Valida il nome del file
        const filePath = path.join(sessionsFolder, file);
        if (existsSync(filePath)) {
          await fsPromises.unlink(filePath);
          deletedFilesCount++;
        }
      }
    }
    // ... (messaggio con il numero di file cancellati)
  } else {
    // ... (codice di cancellazione di tutte le sessioni)
  }
}

// ... (configurazione del comando)
