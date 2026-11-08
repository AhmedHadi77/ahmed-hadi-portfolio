@echo off
title Ahmed Hadi portfolio - deploy
cd /d "%~dp0"
echo Pushing to GitHub...
echo === git push === > deploy.log
git push origin main >> deploy.log 2>&1
echo Deploying to Vercel (this takes a minute or two)...
echo === vercel deploy === >> deploy.log
call npx vercel@latest --prod --yes >> deploy.log 2>&1
echo === done === >> deploy.log
type deploy.log
pause
