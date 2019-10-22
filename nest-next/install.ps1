#Set-ExecutionPolicy RemoteSigned -scope CurrentUser
Write-Host "Tools install" -ForegroundColor yellow
if (Get-Command scoop -errorAction SilentlyContinue) {
	scoop update
}
else {
	iex (new-object net.webclient).downloadstring('https://get.scoop.sh')
}
scoop install nvm nodejs@12.13.0 openssl yarn

Write-Host "yarn install" -ForegroundColor yellow
yarn

Write-Host "Run Setting" -ForegroundColor yellow
& .\setting.ps1
