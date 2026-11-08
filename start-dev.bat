@echo off
title Ahmed Hadi portfolio - dev server
cd /d "%~dp0"
if not exist node_modules (
  echo Installing packages...
  call npm install
)
echo Starting the dev server at http://localhost:3000
call npm run dev
pause
