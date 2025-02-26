# codice creato da @cescobot     

#!/data/data/com.termux/files/usr/bin/bash 
# Interpretación determinada para la ejecución      

echo -e "\e[35m
▒█▀▀▀█ ▒█▀▀▀ ▀▀█▀▀ 　 ▀▀█▀▀ ▒█░▒█ ▒█▀▀▀ 　 ▒█▀▀▀█ ▒█▀▀█ ▒█▀▀█ ▒█▀▀▀ ▒█▀▀▀ ▒█▄░▒█ 
░▀▀▀▄▄ ▒█▀▀▀ ░▒█░░ 　 ░▒█░░ ▒█▀▀█ ▒█▀▀▀ 　 ░▀▀▀▄▄ ▒█░░░ ▒█▄▄▀ ▒█▀▀▀ ▒█▀▀▀ ▒█▒█▒█ 
▒█▄▄▄█ ▒█▄▄▄ ░▒█░░ 　 ░▒█░░ ▒█░▒█ ▒█▄▄▄ 　 ▒█▄▄▄█ ▒█▄▄█ ▒█░▒█ ▒█▄▄▄ ▒█▄▄▄ ▒█░░▀n\e[0m" 

: <<'COMMENT'
...
COMMENT

echo -e "\033[01;93mPreparando l'installazione...\nPreparing installation...\n\033[0m"
mp3_array=("https://qu.ax/PreU.mp3" "https://qu.ax/kKXA.mp3" "https://qu.ax/cFSp.mp3" "https://qu.ax/CQRm.mp3" "https://qu.ax/kDSY.mp3" "https://qu.ax/AQLB.mp3" "https://qu.ax/EspE.mp3" "https://qu.ax/ifKO.mp3" "https://qu.ax/EUDu.mp3" "https://qu.ax/SRNs.mp3" "https://qu.ax/WvfK.mp3" "https://qu.ax/lbff.mp3")
random_mp3=${mp3_array[$RANDOM % ${#mp3_array[@]}]}
echo -e "\033[01;32mDownload completato con successo. Riproduzione del suono di introduzione...\nDownload successful. Playing intro sound...\n\033[0m"
while true; do
mpv --no-terminal "$random_mp3" &
sleep 2
wait
done &
echo -e "\033[01;91mSuono di introduzione non disponibile.\nIntro sound not available.\n\033[0m"
 
echo -e "\033[01;32m\033[01mInstallazione delle dipendenze in corso!!\nInstalling dependencies!!\n\033[0m" 
echo -e "\e[36m"
██╗███╗░░██╗░██████╗████████╗░█████╗░██╗░░░░░██╗░░░░░
██║████╗░██║██╔════╝╚══██╔══╝██╔══██╗██║░░░░░██║░░░░░
██║██╔██╗██║╚█████╗░░░░██║░░░███████║██║░░░░░██║░░░░░
██║██║╚████║░╚═══██╗░░░██║░░░██╔══██║██║░░░░░██║░░░░░
██║██║░╚███║██████╔╝░░░██║░░░██║░░██║███████╗███████╗
╚═╝╚═╝░░╚══╝╚═════╝░░░░╚═╝░░░╚═╝░░╚═╝╚══════╝╚══════╝

░██████╗░██╗████████╗
██╔════╝░██║╚══██╔══╝
██║░░██╗░██║░░░██║░░░
██║░░╚██╗██║░░░██║░░░
╚██████╔╝██║░░░██║░░░
░╚═════╝░╚═╝░░░╚═╝░░░\n\e[0m"
if command -v git >/dev/null 2>&1; then
echo -e "\033[01;33mGit era già installato precedentemente.\nGit was already installed previously.\033[0m"
else
if pkg install git -y 2>&1 >/dev/null | grep -E -i -q '(command not found|unable to locate package|E: Could not get lock|debconf: delaying package configuration|Package not found|Failed to fetch|404 Not Found|Hash sum mismatch|503 Service Unavailable|504 Gateway Timeout|408 Request Timeout|Connection timed out|Temporary failure resolving)'; then
error=$(pkg install git -y 2>&1 >/dev/null)
echo -e "\033[0;31mErrore: $error\033[0m" 
echo -e "\033[0;34mImpossibile installare Git. Verifica la tua connessione a Internet e riprova. Se l'errore persiste, installa manualmente!!\nIf the error continues, install manually!!\033[0m" 
echo -e "\033[01;33mpkg install git -y\npkg install nodejs -y\npkg install ffmpeg -y\npkg install imagemagick -y\npkg install -y yarn\ngit clone https://github.com/ilcescodicosenz/cescobot\ncd cescobot\nyarn install\nnpm install\nnpm start\033[0m"
exit 1
else
echo -e "\033[01;32m\033[01mGit è stato installato correttamente.\nGit has been installed successfully.\n\033[0m" 
fi
fi
 
echo -e "\e[35m
██╗███╗░░██╗░██████╗████████╗░█████╗░██╗░░░░░██╗░░░░░
██║████╗░██║██╔════╝╚══██╔══╝██╔══██╗██║░░░░░██║░░░░░
██║██╔██╗██║╚█████╗░░░░██║░░░███████║██║░░░░░██║░░░░░
██║██║╚████║░╚═══██╗░░░██║░░░██╔══██║██║░░░░░██║░░░░░
██║██║░╚███║██████╔╝░░░██║░░░██║░░██║███████╗███████╗
╚═╝╚═╝░░╚══╝╚═════╝░░░░╚═╝░░░╚═╝░░╚═╝╚══════╝╚══════╝

███╗░░██╗░█████╗░██████╗░███████╗░░░░░░░░██╗░██████╗
████╗░██║██╔══██╗██╔══██╗██╔════╝░░░░░░░░██║██╔════╝
██╔██╗██║██║░░██║██║░░██║█████╗░░░░░░░░░░██║╚█████╗░
██║╚████║██║░░██║██║░░██║██╔══╝░░░░░██╗░░██║░╚═══██╗
██║░╚███║╚█████╔╝██████╔╝███████╗██╗╚█████╔╝██████╔╝
╚═╝░░╚══╝░╚════╝░╚═════╝░╚══════╝╚═╝░╚════╝░╚═════╝░\n\e[0m"

if command -v node >/dev/null 2>&1; then
echo -e "\033[01;33mNode.js era già installato precedentemente.\nNode.js was already installed previously.\033[0m"
else
if pkg install nodejs -y 2>&1 >/dev/null | grep -E -i -q '(command not found|unable to locate package|E: Could not get lock|debconf: delaying package configuration|Package not found|Failed to fetch|404 Not Found|Hash sum mismatch|503 Service Unavailable|504 Gateway Timeout|408 Request Timeout|Connection timed out|Temporary failure resolving)'; then
error=$(pkg install nodejs -y 2>&1 >/dev/null)
echo -e "\033[0;31mErrore: $error\033[0m" 
echo -e "\033[0;34mImpossibile installare Node.js. Verifica la tua connessione a Internet e riprova. Se l'errore persiste, installa manualmente!!\nIf the error continues, install manually!!\033[0m" 
echo -e "\033[01;33mpkg install git -y\npkg install nodejs -y\npkg install ffmpeg -y\npkg install imagemagick -y\npkg install -y yarn\ngit clone https://https://github.com/ilcescodicosenz/cescobot\ncd cescobot\nyarn install\nnpm install\nnpm start\033[0m"
exit 1
else
echo -e "\033[01;32m\033[01mNode.js è stato installato correttamente.\nNode.js has been installed successfully.\n\033[0m" 
fi
fi

echo -e "\e[36m
██╗███╗░░██╗░██████╗████████╗░█████╗░██╗░░░░░██╗░░░░░
██║████╗░██║██╔════╝╚══██╔══╝██╔══██╗██║░░░░░██║░░░░░
██║██╔██╗██║╚█████╗░░░░██║░░░███████║██║░░░░░██║░░░░░
██║██║╚████║░╚═══██╗░░░██║░░░██╔══██║██║░░░░░██║░░░░░
██║██║░╚███║██████╔╝░░░██║░░░██║░░██║███████╗███████╗
╚═╝╚═╝░░╚══╝╚═════╝░░░░╚═╝░░░╚═╝░░╚═╝╚══════╝╚══════╝

███████╗███████╗███╗░░░███╗██████╗░███████╗░██████╗░
██╔════╝██╔════╝████╗░████║██╔══██╗██╔════╝██╔════╝░
█████╗░░█████╗░░██╔████╔██║██████╔╝█████╗░░██║░░██╗░
██╔══╝░░██╔══╝░░██║╚██╔╝██║██╔═══╝░██╔══╝░░██║░░╚██╗
██║░░░░░██║░░░░░██║░╚═╝░██║██║░░░░░███████╗╚██████╔╝
╚═╝░░░░░╚═╝░░░░░╚═╝░░░░░╚═╝╚═╝░░░░░╚══════╝░╚═════╝░\n\e[0m"

if command -v ffmpeg >/dev/null 2>&1; then
echo -e "\033[01;33mFfmpeg era già installato precedentemente.\nFfmpeg was already installed previously.\033[0m"
else
if pkg install ffmpeg -y 2>&1 >/dev/null | grep -E -i -q '(command not found|unable to locate package|E: Could not get lock|debconf: delaying package configuration|Package not found|Failed to fetch|404 Not Found|Hash sum mismatch|503 Service Unavailable|504 Gateway Timeout|408 Request Timeout|Connection timed out|Temporary failure resolving)'; then
error=$(pkg install ffmpeg -y 2>&1 >/dev/null)
echo -e "\033[0;31mErrore: $error\033[0m" 
echo -e "\033[0;34mImpossibile installare FFmpeg. Verifica la tua connessione a Internet e riprova. Se l'errore persiste, installa manualmente!!\nIf the error continues, install manually!!\033[0m" 
echo -e "\033[01;33mpkg install git -y\npkg install nodejs -y\npkg install ffmpeg -y\npkg install imagemagick -y\npkg install -y yarn\ngit clone https://github.com/ilcescodicosenz/cescobot\ncd cescobot\nyarn install\nnpm install\nnpm start\033[0m"
exit 1
else
echo -e "\033[01;32m\033[01mFFmpeg è stato installato correttamente.\nFFmpeg has been installed successfully.\n\033[0m" 
fi
fi

echo -e "\e[35m
██╗███╗░░██╗░██████╗████████╗░█████╗░██╗░░░░░██╗░░░░░
██║████╗░██║██╔════╝╚══██╔══╝██╔══██╗██║░░░░░██║░░░░░
██║██╔██╗██║╚█████╗░░░░██║░░░███████║██║░░░░░██║░░░░░
██║██║╚████║░╚═══██╗░░░██║░░░██╔══██║██║░░░░░██║░░░░░
██║██║░╚███║██████╔╝░░░██║░░░██║░░██║███████╗███████╗
╚═╝╚═╝░░╚══╝╚═════╝░░░░╚═╝░░░╚═╝░░╚═╝╚══════╝╚══════╝

██╗███╗░░░███╗░█████╗░░██████╗░███████╗███╗░░░███╗░█████╗░░██████╗░██╗░█████╗░██╗░░██╗
██║████╗░████║██╔══██╗██╔════╝░██╔════╝████╗░████║██╔══██╗██╔════╝░██║██╔══██╗██║░██╔╝
██║██╔████╔██║███████║██║░░██╗░█████╗░░██╔████╔██║███████║██║░░██╗░██║██║░░╚═╝█████═╝░
██║██║╚██╔╝██║██╔══██║██║░░╚██╗██╔══╝░░██║╚██╔╝██║██╔══██║██║░░╚██╗██║██║░░██╗██╔═██╗░
██║██║░╚═╝░██║██║░░██║╚██████╔╝███████╗██║░╚═╝░██║██║░░██║╚██████╔╝██║╚█████╔╝██║░╚██╗
╚═╝╚═╝░░░░░╚═╝╚═╝░░╚═╝░╚═════╝░╚══════╝╚═╝░░░░░╚═╝╚═╝░░╚═╝░╚═════╝░╚═╝░╚════╝░╚═╝░░╚═╝\n\e[0m"

if command -v convert >/dev/null 2>&1; then
echo -e "\033[01;33mImagemagick era già installato precedentemente.\nImagemagick was already installed previously.\033[0m"
else
if pkg install imagemagick -y 2>&1 >/dev/null | grep -E -i -q '(command not found|unable to locate package|E: Could not get lock|debconf: delaying package configuration|Package not found|Failed to fetch|404 Not Found|Hash sum mismatch|503 Service Unavailable|504 Gateway Timeout|408 Request Timeout|Connection timed out|Temporary failure resolving)'; then
error=$(pkg install imagemagick -y 2>&1 >/dev/null)
echo -e "\033[0;31mErrore: $error\033[0m" 
echo -e "\033[0;34mImpossibile installare ImageMagick. Verifica la tua connessione a Internet e riprova. Se l'errore persiste, installa manualmente!!\nIf the error continues, install manually!!\033[0m" 
echo -e "\033[01;33mpkg install git -y\npkg install nodejs -y\npkg install ffmpeg -y\npkg install imagemagick -y\npkg install -y yarn\ngit clone https://github.com/ilcescodicosenz/cescobot\ncd cescobot\nyarn install\nnpm install\nnpm start\033[0m"
exit 1
else
echo -e "\033[01;32m\033[01mImageMagick è stato installato correttamente.\nImageMagick has been installed successfully.\n\033[0m" 
fi
fi

echo -e "\e[36m
██╗███╗░░██╗░██████╗████████╗░█████╗░██╗░░░░░██╗░░░░░
██║████╗░██║██╔════╝╚══██╔══╝██╔══██╗██║░░░░░██║░░░░░
██║██╔██╗██║╚█████╗░░░░██║░░░███████║██║░░░░░██║░░░░░
██║██║╚████║░╚═══██╗░░░██║░░░██╔══██║██║░░░░░██║░░░░░
██║██║░╚███║██████╔╝░░░██║░░░██║░░██║███████╗███████╗
╚═╝╚═╝░░╚══╝╚═════╝░░░░╚═╝░░░╚═╝░░╚═╝╚══════╝╚══════╝

██╗░░░██╗░█████╗░██████╗░███╗░░██╗
╚██╗░██╔╝██╔══██╗██╔══██╗████╗░██║
░╚████╔╝░███████║██████╔╝██╔██╗██║
░░╚██╔╝░░██╔══██║██╔══██╗██║╚████║
░░░██║░░░██║░░██║██║░░██║██║░╚███║
░░░╚═╝░░░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝\n\e[0m"

if command -v yarn >/dev/null 2>&1; then
echo -e "\033[01;33mYarn era già installato precedentemente.\nYarn was already installed previously.\033[0m"
else
if npm install -g yarn 2>&1 >/dev/null | grep -E -i -q '(command not found|unable to locate package|E: Could not get lock|debconf: delaying package configuration|Package not found|Failed to fetch|404 Not Found|Hash sum mismatch|503 Service Unavailable|504 Gateway Timeout|408 Request Timeout|Connection timed out|Temporary failure resolving)'; then
error=$(npm install -g yarn 2>&1 >/dev/null)
echo -e "\033[0;31mErrore: $error\033[0m" 
echo -e "\033[0;34mImpossibile installare Yarn. Verifica la tua connessione a Internet e riprova. Se l'errore persiste, installa manualmente!!\nIf the error continues, install manually!!\033[0m" 
echo -e "\033[01;33mpkg install git -y\npkg install nodejs -y\npkg install ffmpeg -y\npkg install imagemagick -y\npkg install -y yarn\ngit clone https://github.com/ilcescodicosenz/cescobot\ncd cescobot\nyarn install\nnpm install\nnpm start\033[0m"
exit 1
else
echo -e "\033[01;32m\033[01mYarn è stato installato correttamente.\nYarn has been installed successfully.\n\033[0m" 
fi
fi

echo -e "\e[36m
▀▀█▀▀ ▒█▀▀▀█ ▒█▀▀▄ ▒█▀▀▀█ 　 ▒█▀▀█ ▒█▀▀▀█ ▒█▀▀█ ▒█▀▀█ ▒█▀▀▀ ▒█▀▀█ ▀▀█▀▀ ▒█▀▀▀█ 
░▒█░░ ▒█░░▒█ ▒█░▒█ ▒█░░▒█ 　 ▒█░░░ ▒█░░▒█ ▒█▄▄▀ ▒█▄▄▀ ▒█▀▀▀ ▒█░░░ ░▒█░░ ▒█░░▒█ 
░▒█░░ ▒█▄▄▄█ ▒█▄▄▀ ▒█▄▄▄█ 　 ▒█▄▄█ ▒█▄▄▄█ ▒█░▒█ ▒█░▒█ ▒█▄▄▄ ▒█▄▄█ ░▒█░░ ▒█▄▄▄█

░█▀▀█ ▒█░░░ ▒█░░░ 　 ▒█▀▀█ ▀█▀ ▒█▀▀█ ▒█░▒█ ▀▀█▀▀ 
▒█▄▄█ ▒█░░░ ▒█░░░ 　 ▒█▄▄▀ ▒█░ ▒█░▄▄ ▒█▀▀█ ░▒█░░ 
▒█░▒█ ▒█▄▄█ ▒█▄▄█ 　 ▒█░▒█ ▄█▄ ▒█▄▄█ ▒█░▒█ ░▒█░░\n\e[0m"
echo -e "\033[01;32m\033[01m\nTodas las dependencias se han instalado correctamente.\nAll dependencies have been installed successfully.\n\033[0m" 

echo -e "\e[35m
INSTALL CESCOBOT\n\e[0m"

echo -e "\033[1;35m"
git clone https://github.com/ilcescodicosenz/cescobot
echo -e "\033[01;32m\033[01mLa clonazione è stata scaricata e installata correttamente.\nThe clone has been downloaded and installed successfully.\n\033[0m"

echo -e "\033[01;32m\033[01mCambio nella directory del repository!!\nChanging to the repository directory!!\n\033[0m" 
cd cescobot

echo -e "\e[36m
██╗░░░██╗██████╗░██████╗░░█████╗░████████╗███████╗  ██╗░░░██╗░█████╗░██████╗░███╗░░██╗
██║░░░██║██╔══██╗██╔══██╗██╔══██╗╚══██╔══╝██╔════╝  ╚██╗░██╔╝██╔══██╗██╔══██╗████╗░██║
██║░░░██║██████╔╝██║░░██║███████║░░░██║░░░█████╗░░  ░╚████╔╝░███████║██████╔╝██╔██╗██║
██║░░░██║██╔═══╝░██║░░██║██╔══██║░░░██║░░░██╔══╝░░  ░░╚██╔╝░░██╔══██║██╔══██╗██║╚████║
╚██████╔╝██║░░░░░██████╔╝██║░░██║░░░██║░░░███████╗  ░░░██║░░░██║░░██║██║░░██║██║░╚███║
░╚═════╝░╚═╝░░░░░╚═════╝░╚═╝░░╚═╝░░░╚═╝░░░╚══════╝  ░░░╚═╝░░░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝\n\e[0m"

echo -e "\033[0;34mYarn sarà aggiornato automaticamente. Attendere un momento per favore.\nYarn will be updated automatically. Wait a moment please.\n\033[0m"
if yarn install 2>&1 >/dev/null | grep -E -i -q '(command not found|unable to locate package|E: Could not get lock|debconf: delaying package configuration|Package not found|Failed to fetch|404 Not Found|Hash sum mismatch|503 Service Unavailable|504 Gateway Timeout|408 Request Timeout|Connection timed out|Temporary failure resolving)'; then
error=$(yarn install 2>&1 >/dev/null)
echo -e "\033[0;31mErrore: $error\033[0m" 
echo -e "\033[0;34mImpossibile installare Yarn. Verifica la tua connessione a Internet e riprova. Se l'errore persiste, installalo manualmente!!\nIf the error continues, install manually!!\033[0m" 
else
echo -e "\033[01;32m\033[01mYarn è stato aggiornato correttamente.\nYarn has been successfully updated.\n\033[0m" 
fi

echo -e "\e[35m
██╗███╗░░██╗░██████╗████████╗░█████╗░██╗░░░░░██╗░░░░░  ███╗░░██╗██████╗░███╗░░░███╗
██║████╗░██║██╔════╝╚══██╔══╝██╔══██╗██║░░░░░██║░░░░░  ████╗░██║██╔══██╗████╗░████║
██║██╔██╗██║╚█████╗░░░░██║░░░███████║██║░░░░░██║░░░░░  ██╔██╗██║██████╔╝██╔████╔██║
██║██║╚████║░╚═══██╗░░░██║░░░██╔══██║██║░░░░░██║░░░░░  ██║╚████║██╔═══╝░██║╚██╔╝██║
██║██║░╚███║██████╔╝░░░██║░░░██║░░██║███████╗███████╗  ██║░╚███║██║░░░░░██║░╚═╝░██║
╚═╝╚═╝░░╚══╝╚═════╝░░░░╚═╝░░░╚═╝░░╚═╝╚══════╝╚══════╝  ╚═╝░░╚══╝╚═╝░░░░░╚═╝░░░░░╚═╝\n\e[0m"

echo -e "\033[0;34mNPM verrà installato automaticamente. Attendere un momento per favore.\nNPM will be installed automatically. Wait a moment please.\n\033[0m"
if npm install 2>&1 >/dev/null | grep -E -i -q '(command not found|unable to locate package|E: Could not get lock|debconf: delaying package configuration|Package not found|Failed to fetch|404 Not Found|Hash sum mismatch|503 Service Unavailable|504 Gateway Timeout|408 Request Timeout|Connection timed out|Temporary failure resolving)'; then
error=$(npm install 2>&1 >/dev/null)
echo -e "\033[0;31mErrore: $error\033[0m" 
echo -e "\033[0;34mImpossibile installare NPM. Verifica la tua connessione a Internet e riprova. Se l'errore persiste, installa manualmente!!\nIf the error continues, install manually!!\033[0m" 
else
echo -e "\033[01;32m\033[01mNPM è stato installato correttamente..\n\033[0m" 
fi


: <<'COMMENT'
v="${b}\033[1;32m"
v1="${b}\033[32m"
b="\033[0m"

menu() {
	#cescobot
	echo -e "${v1} MENU DI CONFIGURAZIONE"
	printf "\n"
	printf "${v1}[${b}01${v1}]${v} Visita Gruppo di Aggiornamenti\n"
	printf "\n"
	printf "${v1}[${b}02${v1}]${v} Scegli lingua italiano\n"
	printf "\n"
	printf "${v1}[${b}03${v1}]${v} Scegli lingua inglese\n"
	printf "\n"
	printf "${v1}[${b}04${v1}]${v} Continua\n"
	printf "\n"
}

menu_ayuda() {
    #printf "${v1}[${b}++${v1}]${v} cescobot${b}: "
	read opcion
	case $opcion in
            01|1)
                am start -a android.intent.action.VIEW https://whatsapp.com/channel/0029Vb2xynG9MF8tPyNWoE35 &>> /dev/null
                echo -e "${b}[${v1}++${b}]${v} Accedendo al Gruppo Ufficiale\n"
                
                ;;
            02|2)
                echo -e "${b}[${v1}++${b}]${v} Lingua spagnola selezionata\n"
                
                ;;
            03|3)
                echo -e "${b}[${v1}++${b}]${v} Lingua inglese selezionata\n"
                
                ;;
	    04|4)
	        iniziare
                echo -e "${b}[${v1}++${b}]${v} Continuando...\n"
                
                ;;
            *)
                echo -e "${v1}Comando: '"${r1}${opcion}${v1}"' non valido."
		echo ""
		inizio
                ;;
        esac
}

menu
menu_ayuda
COMMENT

clear
echo -e "\e[36m 

░██████╗░██████╗░░█████╗░███████╗██╗███████╗  ██████╗░███████╗██████╗░
██╔════╝░██╔══██╗██╔══██╗╚════██║██║██╔════╝  ██╔══██╗██╔════╝██╔══██╗
██║░░██╗░██████╔╝███████║░░███╔═╝██║█████╗░░  ██████╔╝█████╗░░██████╔╝
██║░░╚██╗██╔══██╗██╔══██║██╔══╝░░██║██╔══╝░░  ██╔═══╝░██╔══╝░░██╔══██╗
╚██████╔╝██║░░██║██║░░██║███████╗██║███████╗  ██║░░░░░███████╗██║░░██║
░╚═════╝░╚═╝░░╚═╝╚═╝░░╚═╝╚══════╝╚═╝╚══════╝  ╚═╝░░░░░╚══════╝╚═╝░░╚═╝

██╗░░░░░██╗██╗███╗░░██╗░██████╗████████╗░█████╗░██╗░░░░░██╗░░░░░░█████╗░███████╗██╗░█████╗░███╗░░██╗███████╗
██║░░░░░╚█║██║████╗░██║██╔════╝╚══██╔══╝██╔══██╗██║░░░░░██║░░░░░██╔══██╗╚════██║██║██╔══██╗████╗░██║██╔════╝
██║░░░░░░╚╝██║██╔██╗██║╚█████╗░░░░██║░░░███████║██║░░░░░██║░░░░░███████║░░███╔═╝██║██║░░██║██╔██╗██║█████╗░░
██║░░░░░░░░██║██║╚████║░╚═══██╗░░░██║░░░██╔══██║██║░░░░░██║░░░░░██╔══██║██╔══╝░░██║██║░░██║██║╚████║██╔══╝░░
███████╗░░░██║██║░╚███║██████╔╝░░░██║░░░██║░░██║███████╗███████╗██║░░██║███████╗██║╚█████╔╝██║░╚███║███████╗
╚══════╝░░░╚═╝╚═╝░░╚══╝╚═════╝░░░░╚═╝░░░╚═╝░░╚═╝╚══════╝╚══════╝╚═╝░░╚═╝╚══════╝╚═╝░╚════╝░╚═╝░░╚══╝╚══════╝\n\e[0m"

echo -e "\e[31m
_░▒███████
░██▓▒░░▒▓██
██▓▒░__░▒▓██___██████
██▓▒░____░▓███▓__░▒▓██
██▓▒░___░▓██▓_____░▒▓██
██▓▒░_______________░▒▓██
_██▓▒░______________░▒▓██
__██▓▒░____________░▒▓██
___██▓▒░__________░▒▓██
____██▓▒░________░▒▓██
_____██▓▒░_____░▒▓██
______██▓▒░__░▒▓██
_______█▓▒░░▒▓██
_________░▒▓██
_______░▒▓██
_____░▒▓██\n\e[0m"
    
sleep 15 && pkill mpv > /dev/null 2>&1 && sleep 2 && rm -f /data/data/com.termux/files/home/"$random_mp3" &
echo -e "\033[01;32m\033[01Iniziando installazione cescobot!!\nIn avvio cescobot!!\n\033[0m"
npm start
