#Set-ExecutionPolicy RemoteSigned -scope CurrentUser
#Write-Host "Tool install" -ForegroundColor yellow
#iex (new-object net.webclient).downloadstring('https://get.scoop.sh')
#scoop install nvm nodejs openssl

#Write-Host "npm install" -ForegroundColor yellow
#npm install

Get-Childitem env: >$null 2>&1
$IPV4_IP = (
	Get-NetIPConfiguration|Where-Object {$_.IPv4DefaultGateway -ne $null -and $_.NetAdapter.Status -ne "Disconnected"}
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
    if(!$port) {
        Write-Host "Use Default Port 5000." -ForegroundColor yellow
        $port = "5000"
        break
    } else {
        if (([Int32]$port -le 1) -or ([Int32]$port -ge 65535)) {
            break
        }
    }
} while (1)

do {
    Write-Host "Enter User Name: " -ForegroundColor blue -NoNewline
    $usr = Read-Host
    if ($usr) {
        break
    } else {
        Write-Host "Need Input Name." -ForegroundColor red
    }
} while(1)

do {
    Write-Host "Enter Password: " -ForegroundColor blue -NoNewline
    $pwd = Read-Host
    if ($pwd) {
        break
    } else {
        Write-Host "Need Input Password." -ForegroundColor red
    }
} while(1)

$replace_file = ".\.env"
(Get-Content $replace_file) -replace ("PORT=(.*)$", "PORT=$port") | out-file -encoding ASCII $replace_file
(Get-Content $replace_file) -replace ("USER=(.*)$", "USER=$usr") | out-file -encoding ASCII $replace_file
(Get-Content $replace_file) -replace ("PWD=(.*)$", "PWD=$pwd") | out-file -encoding ASCII $replace_file

Write-Host "Update Printer setting file." -ForegroundColor yellow
$replace_file = ".\printer\RUN.BAS"
(Get-Content $replace_file) -replace '(SECURE.*) USER .* PASSWORD .*$', ('$1 USER "'+$usr+'" PASSWORD "'+$pwd+'"') | out-file -encoding ASCII $replace_file
$replace_file = ".\printer\RUN_QR.BAS"
(Get-Content $replace_file) -replace 'HTTPC "(.*)" URI "(.*)//.*/(.*)"', ('HTTPC "$1" URI "$2//'+$HostName+':'+$port+'/$3"') | out-file -encoding ASCII $replace_file
