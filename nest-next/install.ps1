#Set-ExecutionPolicy RemoteSigned -scope CurrentUser
Write-Host "Tools install" -ForegroundColor yellow
if (Get-Command scoop -errorAction SilentlyContinue) {
  scoop update
}
else {
  iex (new-object net.webclient).downloadstring('https://get.scoop.sh')
}

# check for nodejs
scoop which node | Out-Null
if ($lastexitcode -ne 0) {
  scoop install nodejs@12.13.0
}

# check for openssl
scoop which openssl | Out-Null
if ($lastexitcode -ne 0) {
  scoop install openssl
}

# check for yarn
scoop which yarn | Out-Null
if ($lastexitcode -ne 0) {
  scoop install yarn
}

Write-Host "yarn install" -ForegroundColor yellow
yarn

Write-Host "Run Setting" -ForegroundColor yellow
& .\setting.ps1
