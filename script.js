const fontContainer = document.getElementById("font-container");

// List of your 5 font files
const fonts = [
  "akbalthomfreehand.ttf",
  "akbalthomhighschool.ttf",
  "akbalthomhighschoolframe.ttf",
  "akbalthomhighschoolfun.ttf",
  "akbalthomkbach.ttf"
];

// Khmer text for preview
const previewText = "សួស្តីកម្ពុជា";

// Dynamically load and display fonts
fonts.forEach((fontFile, index) => {
  // Generate a unique font-family name
  const fontName = `Font${index + 1}`;

  // Create a @font-face rule
  const styleSheet = document.styleSheets[0];
  const fontFaceRule = `
    @font-face {
      font-family: '${fontName}';
      src: url('fonts/${fontFile}') format('truetype');
    }
  `;
  styleSheet.insertRule(fontFaceRule, styleSheet.cssRules.length);

  // Create a font card
  const fontCard = document.createElement("div");
  fontCard.className = "font-card";

  // Font title
  const fontTitle = document.createElement("h2");
  fontTitle.textContent = fontFile;

  // Font preview
  const fontPreview = document.createElement("span");
  fontPreview.textContent = previewText;
  fontPreview.style.fontFamily = fontName;

  // Download link
  const downloadLink = document.createElement("a");
  downloadLink.href = `fonts/${fontFile}`;
  downloadLink.textContent = "Download";
  downloadLink.download = fontFile;

  // Append elements to the card
  fontCard.appendChild(fontTitle);
  fontCard.appendChild(fontPreview);
  fontCard.appendChild(downloadLink);

  // Append the card to the container
  fontContainer.appendChild(fontCard);
});
