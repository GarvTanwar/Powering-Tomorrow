const resultSummary = document.querySelector("#certificate-result-summary");
const heroNameInput = document.querySelector("#hero-name");
const generateCertificateButton = document.querySelector("#generate-certificate");
const certificateStatus = document.querySelector("#certificate-status");
const certificateCard = document.querySelector("#certificate-card");
const certificateName = document.querySelector("#certificate-name");
const certificateDate = document.querySelector("#certificate-date");
const certificateTitle = document.querySelector("#certificate-title");
const certificateBadge = document.querySelector("#certificate-badge");
const certificateMessage = document.querySelector("#certificate-message");
const downloadCertificateButton = document.querySelector("#download-certificate");

const certificateLevels = [
  {
    min: 0,
    max: 3,
    title: "Energy Rookie",
    message: "Congratulations! You earned the title Energy Rookie. Keep learning Captain Wattson's energy-saving moves."
  },
  {
    min: 4,
    max: 6,
    title: "Power Saver",
    message: "Congratulations! You earned the title Power Saver. Your energy-saving habits are getting stronger."
  },
  {
    min: 7,
    max: 8,
    title: "Eco Hero",
    message: "Congratulations! You earned the title Eco Hero. You know how to help your family protect the planet."
  },
  {
    min: 9,
    max: 10,
    title: "Planet Protector",
    message: "Congratulations! You earned the title Planet Protector! Captain Wattson is impressed by your energy-saving power."
  }
];

let latestScore = 0;
let latestTotal = 10;
let currentAttemptId = "";

function getStoredQuizResult() {
  const params = new URLSearchParams(window.location.search);
  const scoreParam = Number(params.get("score"));
  const totalParam = Number(params.get("total"));

  if (Number.isFinite(scoreParam) && Number.isFinite(totalParam) && totalParam > 0) {
    return {
      score: scoreParam,
      total: totalParam,
      groupHeading: "Captain Wattson's Energy Quiz"
    };
  }

  try {
    return JSON.parse(window.localStorage.getItem("captainWattsonQuizResult")) || null;
  } catch (error) {
    return null;
  }
}

function formatCertificateDate(date) {
  return date.toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
}

function getCertificateLevel(score) {
  return certificateLevels.find((level) => score >= level.min && score <= level.max) || certificateLevels[0];
}

function setInitialResult() {
  const result = getStoredQuizResult();

  if (!result || !Number.isFinite(Number(result.score)) || !Number.isFinite(Number(result.total))) {
    resultSummary.textContent = "Complete the quiz first, then return here to generate your certificate.";
    certificateStatus.innerHTML = 'No completed quiz result was found. <a href="quiz.html">Take the quiz</a>.';
    generateCertificateButton.disabled = true;
    return;
  }

  latestScore = Number(result.score);
  latestTotal = Number(result.total);
  currentAttemptId = result.completedAt || `${latestScore}-${latestTotal}`;
  resultSummary.textContent = `Quiz complete: ${latestScore}/${latestTotal}. Generate your certificate below.`;

  if (hasGeneratedCertificateForCurrentAttempt()) {
    lockCertificateForm("Certificate already generated for this quiz attempt. Complete the quiz again to generate a new one.");
  }
}

function generateCertificate() {
  if (hasGeneratedCertificateForCurrentAttempt()) {
    lockCertificateForm("Certificate already generated for this quiz attempt. Complete the quiz again to generate a new one.");
    return;
  }

  const heroName = heroNameInput.value.trim();

  if (!heroName) {
    certificateStatus.textContent = "Please enter your name to generate your certificate.";
    heroNameInput.focus();
    return;
  }

  certificateStatus.textContent = "";
  const level = getCertificateLevel(latestScore);

  certificateTitle.textContent = `${level.title} Certificate`;
  certificateBadge.textContent = `${level.title} Badge`;
  certificateMessage.textContent = `${level.message} Score: ${latestScore}/${latestTotal}.`;
  certificateName.textContent = heroName;
  certificateDate.textContent = formatCertificateDate(new Date());

  certificateCard.removeAttribute("hidden");
  downloadCertificateButton.removeAttribute("hidden");
  markCertificateGenerated();
  lockCertificateForm("");
}

function hasGeneratedCertificateForCurrentAttempt() {
  try {
    return window.localStorage.getItem("captainWattsonGeneratedCertificateAttempt") === currentAttemptId;
  } catch (error) {
    return false;
  }
}

function markCertificateGenerated() {
  try {
    window.localStorage.setItem("captainWattsonGeneratedCertificateAttempt", currentAttemptId);
  } catch (error) {
    return;
  }
}

function lockCertificateForm(message) {
  heroNameInput.disabled = true;
  generateCertificateButton.disabled = true;
  certificateStatus.textContent = message;
}

async function downloadCertificate() {
  if (certificateCard.hasAttribute("hidden")) return;

  const heroName = certificateName.textContent || "Energy Hero";
  const title = certificateTitle.textContent || "Energy Hero Certificate";
  const message = certificateMessage.textContent || `Score: ${latestScore}/${latestTotal}.`;
  const date = certificateDate.textContent || formatCertificateDate(new Date());
  const canvas = document.createElement("canvas");
  canvas.width = 1600;
  canvas.height = 1000;

  const context = canvas.getContext("2d");
  drawCertificateBackground(context, canvas.width, canvas.height);

  drawCenteredText(context, "POWERING TOMORROW", 800, 135, "900 26px Arial, sans-serif", "#1f8ed6");
  drawFittedCenteredText(context, title, 800, 250, 980, 82, "900", "Arial, sans-serif", "#244438");
  drawPill(context, certificateBadge.textContent || "Energy Hero Badge", 800, 325);
  drawCenteredText(context, "This certificate is proudly awarded to", 800, 405, "700 28px Arial, sans-serif", "#5f6d79");
  drawFittedCenteredText(context, heroName, 800, 525, 760, 92, "900", "Arial, sans-serif", "#162033");

  drawWrappedCenteredText(context, message, 800, 655, 840, 34, "700 29px Arial, sans-serif", "#5f6d79");
  drawFooterField(context, "DATE", date, 560, 805);
  drawFooterField(context, "CERTIFIED BY", "Captain Wattson", 1040, 805);

  const link = document.createElement("a");
  link.download = "energy-hero-certificate.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
}

function drawCertificateBackground(context, width, height) {
  const gradient = context.createLinearGradient(0, 0, width, 0);
  gradient.addColorStop(0, "#fff9df");
  gradient.addColorStop(0.12, "#eef9ff");
  gradient.addColorStop(0.88, "#e5f6ff");
  gradient.addColorStop(1, "#f7fbff");

  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, width, height);
  context.fillStyle = gradient;
  context.fillRect(36, 36, width - 72, height - 72);
  context.strokeStyle = "#244438";
  context.lineWidth = 6;
  context.strokeRect(36, 36, width - 72, height - 72);
  context.strokeStyle = "rgba(223, 243, 255, 0.9)";
  context.lineWidth = 22;
  context.strokeRect(70, 70, width - 140, height - 140);

  context.strokeStyle = "rgba(36, 68, 56, 0.14)";
  context.lineWidth = 2;
  context.beginPath();
  context.moveTo(420, 755);
  context.lineTo(1180, 755);
  context.stroke();
}

function drawPill(context, text, x, y) {
  context.font = "900 24px Arial, sans-serif";
  const width = Math.max(context.measureText(text).width + 52, 250);
  roundRect(context, x - width / 2, y - 24, width, 48, 24);
  context.fillStyle = "#fff8dc";
  context.fill();
  context.strokeStyle = "rgba(245, 207, 101, 0.85)";
  context.lineWidth = 2;
  context.stroke();
  drawCenteredText(context, text, x, y + 1, "900 24px Arial, sans-serif", "#244438");
}

function drawFooterField(context, label, value, x, y) {
  drawCenteredText(context, label, x, y, "900 20px Arial, sans-serif", "#6a7883");
  drawCenteredText(context, value, x, y + 48, "900 25px Arial, sans-serif", "#244438");
}

function roundRect(context, x, y, width, height, radius) {
  context.beginPath();
  context.moveTo(x + radius, y);
  context.lineTo(x + width - radius, y);
  context.quadraticCurveTo(x + width, y, x + width, y + radius);
  context.lineTo(x + width, y + height - radius);
  context.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  context.lineTo(x + radius, y + height);
  context.quadraticCurveTo(x, y + height, x, y + height - radius);
  context.lineTo(x, y + radius);
  context.quadraticCurveTo(x, y, x + radius, y);
  context.closePath();
}

function drawFittedCenteredText(context, text, x, y, maxWidth, maxSize, weight, family, color) {
  let size = maxSize;
  do {
    context.font = `${weight} ${size}px ${family}`;
    size -= 2;
  } while (context.measureText(text).width > maxWidth && size > 28);

  drawCenteredText(context, text, x, y, `${weight} ${size + 2}px ${family}`, color);
}

function drawCenteredText(context, text, x, y, font, color) {
  context.fillStyle = color;
  context.font = font;
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText(text, x, y);
}

function drawWrappedCenteredText(context, text, x, y, maxWidth, lineHeight, font, color) {
  context.fillStyle = color;
  context.font = font;
  context.textAlign = "center";
  context.textBaseline = "middle";

  const words = String(text).split(" ");
  const lines = [];
  let line = "";

  words.forEach((word) => {
    const testLine = line ? `${line} ${word}` : word;
    if (context.measureText(testLine).width > maxWidth && line) {
      lines.push(line);
      line = word;
    } else {
      line = testLine;
    }
  });
  lines.push(line);

  const startY = y - ((lines.length - 1) * lineHeight) / 2;
  lines.forEach((lineText, index) => {
    context.fillText(lineText, x, startY + index * lineHeight);
  });
}

generateCertificateButton?.addEventListener("click", generateCertificate);
downloadCertificateButton?.addEventListener("click", downloadCertificate);

setInitialResult();
