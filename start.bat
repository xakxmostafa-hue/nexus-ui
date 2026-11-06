@echo off
chcp 65001 >nul
title GN Menu UI - Localhost
color 0C
cd /d "%~dp0"

echo ========================================================
echo                 GN MENU UI - LOCALHOST
echo ========================================================
echo.
echo [*] Sunucu baslatiliyor: http://localhost:8180
echo [*] Tarayici otomatik aciliyor...
echo.
echo [KONTROLLER]:
echo   - DEL / M        : Menuyu Ac / Kapat
echo   - YON TUSLARI    : Gezin / Slider degeri degistir
echo   - ENTER / SPACE  : Kategoriye gir / Ozelligi degistir
echo   - BACKSPACE      : Geri don / Menuyu kapat
echo.
echo [!] Bu pencereyi KAPATMAYIN (sunucu burada calisiyor).
echo ========================================================
echo.

start "" cmd /c "timeout /t 1 >nul & start "" http://localhost:8180"
python -m http.server 8180
