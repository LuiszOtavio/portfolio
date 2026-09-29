# Regenerates the link-preview images (Open Graph) public/og-pt.png and public/og-en.png
# from scripts/og-template.html, using the photo src/img/foto-hero.jpg.
# Run it whenever the photo or the headline changes:
#   powershell -ExecutionPolicy Bypass -File scripts/gerar-og.ps1
# Requires Microsoft Edge (already installed on Windows). The headline text lives
# inside og-template.html — keep it in sync with hero.headline in src/i18n.

$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot

$edge = @(
  "${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe",
  "$env:ProgramFiles\Microsoft\Edge\Application\msedge.exe"
) | Where-Object { Test-Path $_ } | Select-Object -First 1
if (-not $edge) { throw 'Microsoft Edge not found.' }

$template = ([Uri](Join-Path $root 'scripts\og-template.html')).AbsoluteUri
$photo = [Uri]::EscapeDataString(([Uri](Join-Path $root 'src\img\foto-hero.jpg')).AbsoluteUri)
$profileDir = Join-Path $env:TEMP 'og-edge-profile'

foreach ($lang in 'pt', 'en') {
  $out = Join-Path $root "public\og-$lang.png"
  $edgeArgs = @(
    '--headless=new', '--disable-gpu', '--hide-scrollbars', '--force-device-scale-factor=1',
    '--window-size=1200,630', '--allow-file-access-from-files', '--virtual-time-budget=8000',
    "`"--user-data-dir=$profileDir`"", "`"--screenshot=$out`"", "`"$template`?lang=$lang&photo=$photo`""
  )
  # Edge prints harmless warnings on stderr; send them to a temp file instead of failing.
  Start-Process -FilePath $edge -ArgumentList $edgeArgs -Wait -NoNewWindow `
    -RedirectStandardError (Join-Path $env:TEMP 'og-edge-stderr.txt')
  if (-not (Test-Path $out)) { throw "Failed to generate $out" }
  Write-Host "ok: public\og-$lang.png"
}
