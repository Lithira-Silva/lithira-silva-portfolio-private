# PowerShell script to replace all green/blue colors with yellow/amber
$projectPath = "C:\Users\llith\OneDrive\Desktop\Lithira Silva Portfolio\src"

# Define color replacements
$replacements = @{
    "green-400" = "secondary"
    "green-500" = "secondary-hover"
    "blue-500" = "secondary-hover"
    "blue-600" = "secondary-active"
    "from-green-400 to-blue-500" = "from-secondary to-secondary-hover"
    "from-green-500 to-blue-600" = "from-secondary-hover to-secondary-active"
    "text-green-400" = "text-secondary"
    "text-green-300" = "text-secondary-light"
    "bg-green-400" = "bg-secondary"
    "border-green-400" = "border-secondary"
    "hover:text-green-400" = "hover:text-secondary"
    "hover:bg-green-400" = "hover:bg-secondary"
    "hover:border-green-400" = "hover:border-secondary"
    "shadow-green-400" = "shadow-amber"
    "ring-green-400" = "ring-secondary"
    "focus:ring-green-400" = "focus:ring-secondary"
    "focus:border-green-400" = "focus:border-secondary"
}

# Get all TypeScript and TSX files
$files = Get-ChildItem -Path $projectPath -Recurse -Include "*.ts", "*.tsx" | Where-Object { $_.Name -notmatch "node_modules" }

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $modified = $false
    
    foreach ($old in $replacements.Keys) {
        $new = $replacements[$old]
        if ($content -match [regex]::Escape($old)) {
            $content = $content -replace [regex]::Escape($old), $new
            $modified = $true
            Write-Host "Replaced '$old' with '$new' in $($file.Name)"
        }
    }
    
    if ($modified) {
        Set-Content -Path $file.FullName -Value $content -NoNewline
        Write-Host "Updated: $($file.Name)"
    }
}

Write-Host "Color replacement complete!"
