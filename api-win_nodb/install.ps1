#Set-ExecutionPolicy RemoteSigned -scope CurrentUser
Write-Host "Tools install" -ForegroundColor yellow
iex (new-object net.webclient).downloadstring('https://get.scoop.sh')
scoop install nvm nodejs openssl

Write-Host "npm install" -ForegroundColor yellow
npm install
npm audit fix

Write-Host "Run Setting" -ForegroundColor yellow
& .\setting.ps1

Write-Host "Run app" -ForegroundColor yellow
& .\start.ps1
