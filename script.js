const fontContainer = document.getElementById("font-container");

// List of your 5 font files
const fonts = [
    "akbalthomfreehand.ttf",
    "akbalthomhighschool.ttf",
    "akbalthomhighschoolframe.ttf",
    "akbalthomhighschoolfun.ttf",
    "akbalthomkbach.ttf",
    "akbalthomkhmerbasic.ttf",
    "akbalthomkmergothic.ttf",
    "akbalthomkmerler.ttf",
    "akbalthomkmerlight.ttf",
    "akbalthomkmennew.ttf",
    "akbalthomkorea.ttf",
    "akbalthomnagabold.ttf",
    "akbalthomnrb.ttf",
    "akbalthomseoul.ttf",
    "akbalthomsuperhero.ttf",
    "akbalthomsuperherokh.ttf",
    "angkor.ttf",
    "antassom.ttf",
    "angtasom.ttf",
    "antioch.ttf",
    "aphireak1.ttf",
    "baiduck.ttf",
    "battambangbold.ttf",
    "battambangregular.ttf",
    "bayon.ttf",
    "bokor.ttf",
    "chantresuilow.ttf",
    "chantresuinew.ttf",
    "chantreau.ttf",
    "chelan.ttf",
    "contentbold.ttf",
    "contentregular.ttf",
    "dangrek.ttf",
    "daunkeo.ttf",
    "daunpv.ttf",
    "daunsok.ttf",
    "daunteav.ttf",
    "dauntep.ttf",
    "dhrongdomgrey.ttf",
    "fasthandregular.ttf",
    "freehand.ttf",
    "hanuman.ttf",
    "hanumanb.ttf",
    "ikampuchea001c'hrov.ttf",
    "ikampuchea002khmerfeeling.ttf",
    "isethfirst.ttf"
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
