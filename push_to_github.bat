@echo off
echo Setting up Git identity...
git config user.email "itored117@gmail.com"
git config user.name "editor"
echo Initializing Git...
git init
git add .
git commit -m "Initial commit: Drone move up and cement color changes"
git branch -M main
git remote add origin https://github.com/busines-prakash/Chandru.git
echo Pushing to GitHub...
git push -u origin main
echo Done!
pause
