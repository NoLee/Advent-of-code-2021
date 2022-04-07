@ECHO OFF
ECHO Starting Chrome
START C:\"Program Files (x86)"\Google\Chrome\Application\chrome.exe
timeout /t 1
ECHO Starting Firefox
START C:\"Program Files"\"Mozilla Firefox"\firefox.exe
timeout /t 1
REM ECHO Starting nginx
REM START C:\Code\nginx-1.19.2\nginx.exe
REM timeout /t 1
ECHO Starting discord
START C:\Users\m.pentarakis\Desktop\Discord.lnk
timeout /t 1
ECHO Starting slack
START C:\Users\m.pentarakis\AppData\Local\slack\slack.exe
timeout /t 1
ECHO Starting notepad
START C:\"Program Files (x86)"\Notepad++\notepad++.exe
timeout /t 1

REM Visual studio projects
REM ECHO Starting VS configurator
REM START C:\Code\configurator\be\Configurator.sln
REM timeout /t 1

REM ECHO Starting Rider configurator
REM START "" "C:\Program Files\JetBrains\JetBrains Rider 2021.1.3\bin\rider64.exe" "C:\Code\configurator\be\Configurator.sln"
REM timeout /t 1

REM ECHO Starting VS casino
REM START C:\Code\Casino.Website\backend\Casino.Website.sln
REM timeout /t 1

REM ECHO Starting Rider casino
REM START "" "C:\Program Files\JetBrains\JetBrains Rider 2021.1.3\bin\rider64.exe" "C:\Code\Casino.Website\backend\Casino.Website.sln"
REM timeout /t 1


ECHO Starting VS v3
START C:\Code\Pocasport\Kaizen\SportsbookV3\SportsbookV3.sln
timeout /t 1

REM ECHO Starting VS pocasport
REM START C:\Code\Pocasport\Pocasport.sln
REM timeout /t 1

ECHO Starting Rider pocasport
START "" "C:\Program Files\JetBrains\JetBrains Rider 2021.1.3\bin\rider64.exe" "C:\Code\Pocasport\Pocasport.sln"
timeout /t 1

REM ECHO Starting Rider kepler
REM START "" "C:\Program Files\JetBrains\JetBrains Rider 2021.1.3\bin\rider64.exe" "C:\Code\Kepler.NET\Kepler.Net.Service.sln"
REM timeout /t 1

REM ECHO Starting VS ariadne be
REM START C:\Code\Ariadne\be\ariadne-shift-be.sln
REM timeout /t 1

REM ECHO Starting VS push service
REM START C:\Code\Pocasport\SportsFeed.PushSportsbookService.sln
REM timeout /t 1

REM ECHO Starting VScode admin-fe
REM cd C:\Code\Ariadne\fe
REM code .
REM timeout /t 1

REM keep kraken last without timeout
ECHO Starting gitkraken
START C:\Users\m.pentarakis\Desktop\gitkraken.lnk