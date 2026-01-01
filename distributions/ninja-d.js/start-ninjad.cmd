@echo off
set BASE=%~dp0
"%BASE%node\node.exe" "%BASE%node_modules\node-red\red.js" --userDir "%BASE%data"
pause