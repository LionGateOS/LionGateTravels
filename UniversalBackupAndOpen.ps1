# UniversalBackupAndOpen.ps1
# Usage: .\UniversalBackupAndOpen.ps1 "<file-to-backup-and-open>"

param(
    [Parameter(Mandatory=$true)]
    [string]$FilePath
)

# Ensure the file exists
if (-not (Test-Path $FilePath)) {
    Write-Host "Error: File '$FilePath' does not exist." -ForegroundColor Red
    exit 1
}

# Get file info
$fullPath = Resolve-Path $FilePath
$dir = Split-Path $fullPath
$filename = [System.IO.Path]::GetFileNameWithoutExtension($fullPath)
$ext = [System.IO.Path]::GetExtension($fullPath)

# Create Backup folder if it doesn't exist
$backupFolder = Join-Path -Path $dir -ChildPath "Backup"
if (-not (Test-Path $backupFolder)) {
    New-Item -Path $backupFolder -ItemType Directory | Out-Null
}

# Build timestamped backup file path
$timestamp = Get-Date -Format "yyyyMMdd_HHmmss"
$backupFile = Join-Path $backupFolder "$filename`_$timestamp$ext"

# Copy the file to backup
Copy-Item -Path $fullPath -Destination $backupFile -Force
Write-Host "Backup created: $backupFile" -ForegroundColor Green

# Open the original file in Notepad
Start-Process notepad.exe $fullPath
