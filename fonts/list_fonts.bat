@echo off
setlocal enabledelayedexpansion
echo const fonts = [ > fonts.js
for %%f in (fonts\*.ttf) do (
    echo   "%%~nxf", >> fonts.js
)
echo ]; >> fonts.js
echo Font list saved to fonts.js!
