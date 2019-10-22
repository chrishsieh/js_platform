Write-Host "Remove folder" -ForegroundColor yellow
Remove-Item -LiteralPath ".next" -Force -Recurse >$null 2>&1
Remove-Item -LiteralPath "node_modules" -Force -Recurse >$null 2>&1
Write-Host "Uninstall Tools" -ForegroundColor yellow
scoop uninstall nvm nodejs openssl 7zip innounp yarn
Write-Host "Uninstall Tools finished" -ForegroundColor yellow
Write-Host "If want to uninstall scoop, type 'scoop uninstall scoop'" -ForegroundColor yellow