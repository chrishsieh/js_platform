# API Server Demo

## Getting Started

Install use PowerShell, need set
```ps
Set-ExecutionPolicy RemoteSigned -scope CurrentUser
```
Then in PowerShell, run
```ps
./install.ps1
```
Printer RS232 port will output information.
After system up, copy printer/ files to USB Disk /EXEC folder and insert USB DISK to printer USB host then power on printer.
Wait printer Copy finished, remove USB DISK and power down printer.
Power on printer and insert USB Scanner.

## Change setting
```CTRL+C``` to stop app.
Run update setting
```ps
./setting.ps1
```
Start app
```ps
./start.ps1
```
Also need copy printer folder data to update printer setting.

## Uninstall
```CTRL+C``` to stop app.
Run uninstall
```ps
./uninstall.ps1
```
scoop uninstall by command
```ps
scoop uninstall scoop
```

## Coding
Printer will access https://xxxx:5000/api/job, in src/shared/services/demo.service.ts job() will get the data.
printer/0.TPL <<%SN_Str%>> is mapping to SN_Str.
