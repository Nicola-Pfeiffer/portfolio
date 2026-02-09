// assets/main.js

document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", event => {
    const targetId = link.getAttribute("href").slice(1);
    const target = document.getElementById(targetId);
    if (!target) return;
    event.preventDefault();
    const rect = target.getBoundingClientRect();
    const absoluteY = rect.top + window.scrollY - 80;
    window.scrollTo({ top: absoluteY, behavior: "smooth" });
  });
});

const languageSwitcher = document.getElementById('languageSwitcher');

languageSwitcher.addEventListener('change', function() {
    const selectedLang = this.value;
    window.location.href = `../${selectedLang}/index.html`;
});

const canvas = document.createElement('canvas');
canvas.width = 32;
canvas.height = 32;
const ctx = canvas.getContext('2d');

const centerX = 16;
const centerY = 16;
const radius = 11;

const gradient = ctx.createRadialGradient(centerX - 6, centerY - 16, 0, centerX - 6, centerY - 16, radius);
gradient.addColorStop(0, '#38bdf8');
gradient.addColorStop(1, '#0f172a');

ctx.fillStyle = gradient;
ctx.beginPath();
ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
ctx.fill();

ctx.strokeStyle = 'rgba(15, 23, 42, 0.7)';
ctx.lineWidth = 1;
ctx.beginPath();
ctx.arc(centerX, centerY, radius - 5, 0, Math.PI * 2);
ctx.stroke();

ctx.shadowColor = 'rgba(56, 189, 248, 0.9)';
ctx.shadowBlur = 10;
ctx.beginPath();
ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
ctx.strokeStyle = 'rgba(148, 163, 184, 0.5)';
ctx.lineWidth = 1;
ctx.stroke();

const link = document.createElement('link');
link.rel = 'icon';
link.href = canvas.toDataURL('image/png');
document.head.appendChild(link);
