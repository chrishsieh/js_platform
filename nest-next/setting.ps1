Get-Childitem env: >$null 2>&1
$IPV4_IP = (
  Get-NetIPConfiguration | Where-Object { $_.IPv4DefaultGateway -ne $null -and $_.NetAdapter.Status -ne "Disconnected" }
).IPv4Address.IPAddress

$HostName = $env:COMPUTERNAME + "." + $env:USERDNSDOMAIN
Write-Host "Host:$HostName" -ForegroundColor yellow
Write-Host "IP:$IPV4_IP" -ForegroundColor yellow
Write-Host "Update secrets\ssl.conf"
$replace_file = ".\secrets\ssl.conf"
(Get-Content $replace_file) -replace ("CN = (.*)$", "CN = $HostName") | out-file -encoding ASCII $replace_file
(Get-Content $replace_file) -replace ("DNS.1 = (.*)$", "DNS.1 = *.$HostName") | out-file -encoding ASCII $replace_file
(Get-Content $replace_file) -replace ("DNS.2 = (.*)$", "DNS.2 = $HostName") | out-file -encoding ASCII $replace_file
(Get-Content $replace_file) -replace ("DNS.3 = (.*)$", "DNS.3 = $IPV4_IP") | out-file -encoding ASCII $replace_file

Write-Host "Update certs." -ForegroundColor yellow
openssl req -x509 -new -nodes -sha256 -utf8 -days 36500 -newkey rsa:2048 -keyout ./secrets/private-key.pem -out ./secrets/public-certificate.pem -config ./secrets/ssl.conf

Write-Host "Setup .env file." -ForegroundColor yellow
do {
  Write-Host "Enter Serive Port Number(Default:5000): " -ForegroundColor blue -NoNewline
  $port = Read-Host
  if (!$port) {
    Write-Host "Use Default Port 5000." -ForegroundColor yellow
    $port = "5000"
    break
  }
  else {
    if (([Int32]$port -ge 1) -and ([Int32]$port -le 65535)) {
      break
    }
  }
} while (1)

Write-Host "Enter DataBase Type(Default:mariadb): " -ForegroundColor blue -NoNewline
$dbType = Read-Host
if (!$dbType) {
  Write-Host "Use Default mariadb." -ForegroundColor yellow
  $dbType = "mariadb"
}

Write-Host "Enter DataBase Host(Default:localhost): " -ForegroundColor blue -NoNewline
$dbHost = Read-Host
if (!$dbHost) {
  Write-Host "Use Default localhost." -ForegroundColor yellow
  $dbHost = "localhost"
}

do {
  Write-Host "Enter DataBase Port(Default:3306): " -ForegroundColor blue -NoNewline
  $dbPort = Read-Host
  if (!$dbPort) {
    Write-Host "Use Default 3306." -ForegroundColor yellow
    $dbPort = "3306"
    break
  }
  else {
    if (([Int32]$port -ge 1) -and ([Int32]$port -le 65535)) {
      break
    }
  }
} while (1)

Write-Host "Enter DataBase Name(Default:churchcrm): " -ForegroundColor blue -NoNewline
$dbDatabase = Read-Host
if (!$dbDatabase) {
  Write-Host "Use Default churchcrm." -ForegroundColor yellow
  $dbDatabase = "churchcrm"
}

Write-Host "Enter DataBase User Name(Default:churchcrm): " -ForegroundColor blue -NoNewline
$dbUser = Read-Host
if (!$dbUser) {
  Write-Host "Use Default churchcrm." -ForegroundColor yellow
  $dbUser = "churchcrm"
}

do {
  Write-Host "Enter DataBase User Password: " -ForegroundColor blue -NoNewline
  $dbPassword = Read-Host
  if (!$dbPassword) {
    Write-Host "Please input password." -ForegroundColor red
  }
  else {
    break
  }
} while (1)

$replace_file = ".\.env"
(Get-Content $replace_file) -replace ("PORT=(.*)$", "PORT=$port") | out-file -encoding ASCII $replace_file
(Get-Content $replace_file) -replace ("DB_TYPE=(.*)$", "DB_TYPE=$dbType") | out-file -encoding ASCII $replace_file
(Get-Content $replace_file) -replace ("DB_HOST=(.*)$", "DB_HOST=$dbHost") | out-file -encoding ASCII $replace_file
(Get-Content $replace_file) -replace ("DB_PORT=(.*)$", "DB_PORT=$dbPort") | out-file -encoding ASCII $replace_file
(Get-Content $replace_file) -replace ("DB_DATABASE=(.*)$", "DB_DATABASE=$dbDatabase") | out-file -encoding ASCII $replace_file
(Get-Content $replace_file) -replace ("DB_USER=(.*)$", "DB_USER=$dbUser") | out-file -encoding ASCII $replace_file
(Get-Content $replace_file) -replace ("DB_PASSWORD=(.*)$", "DB_PASSWORD=$dbPassword") | out-file -encoding ASCII $replace_file
