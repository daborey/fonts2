const fontContainer = document.getElementById('fontContainer'); // The div where fonts will be displayed

fonts.forEach((font) => {
    // Extract the font name (without extension)
    const fontName = font.replace(/\.[^/.]+$/, '');

    // Create a style element to define the font-face
    const style = document.createElement('style');
    style.textContent = `
        @font-face {
            font-family: '${fontName}';
            src: url('./fonts/${font}');
        }
    `;
    document.head.appendChild(style);

    // Create a div to showcase the font
    const fontDiv = document.createElement('div');
    fontDiv.style.fontFamily = fontName;
    fontDiv.style.marginBottom = '20px';
    fontDiv.style.padding = '10px';
    fontDiv.style.border = '1px solid #ccc';
    fontDiv.style.borderRadius = '5px';
    fontDiv.style.textAlign = 'center';
    fontDiv.style.backgroundColor = '#f9f9f9';

    // Add font name and sample text
    fontDiv.innerHTML = `
        <p style="font-size: 20px; margin: 5px 0;">${fontName}</p>
        <p style="font-size: 24px; margin: 5px 0;">សួស្តីកម្ពុជា</p>
        <a href="./fonts/${font}" download style="text-decoration: none; color: white; background-color: #007bff; padding: 5px 10px; border-radius: 3px;">Download</a>
    `;

    fontContainer.appendChild(fontDiv);
});
