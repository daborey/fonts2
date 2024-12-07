# Path to the fonts folder (relative to the script location)
$fontsFolder = ".\fonts"

# Output JavaScript file (in the same location as the script)
$outputFile = ".\fonts.js"

# Check if the fonts folder exists
if (!(Test-Path -Path $fontsFolder)) {
    Write-Host "The fonts folder does not exist. Please create a folder named 'fonts' and place your .ttf files in it."
    exit
}

# Get all .ttf files in the fonts folder
$fontFiles = Get-ChildItem -Path $fontsFolder -Filter "*.ttf" | Select-Object -ExpandProperty Name

# Create the JavaScript array
$jsContent = "export const fonts = [`n"
foreach ($font in $fontFiles) {
    $jsContent += "  `"$font`",`n"
}
$jsContent += "];"

# Write the content to the fonts.js file
Set-Content -Path $outputFile -Value $jsContent

Write-Host "Font list has been written to fonts.js"
