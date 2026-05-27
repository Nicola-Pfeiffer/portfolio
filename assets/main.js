// ── Year ──
document.getElementById("year").textContent = new Date().getFullYear();

// ── Smooth scroll ──
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", e => {
    const el = document.getElementById(a.getAttribute("href").slice(1));
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// ── Language switcher ──
const langSel = document.getElementById("langSel");
if (langSel) {
  langSel.addEventListener("change", () => {
    window.location.href = `../${langSel.value}/`;
  });
}

// ── Theme ──
const KEY = "np-theme";
const root = document.documentElement;

function getTheme() {
  return localStorage.getItem(KEY) || "system";
}

function applyTheme(t) {
  if (t === "system") root.removeAttribute("data-theme");
  else root.setAttribute("data-theme", t);
  document.querySelectorAll(".t-btn").forEach(b =>
    b.classList.toggle("active", b.dataset.t === t)
  );
}

applyTheme(getTheme());

document.querySelectorAll(".t-btn").forEach(b => {
  b.addEventListener("click", () => {
    localStorage.setItem(KEY, b.dataset.t);
    applyTheme(b.dataset.t);
  });
});

// ── Favicon ──
const c = document.createElement("canvas");
c.width = c.height = 32;
const ctx = c.getContext("2d");
const dark = window.matchMedia("(prefers-color-scheme:dark)").matches;
const col = dark ? "#0a84ff" : "#007aff";
const g = ctx.createRadialGradient(10, 8, 1, 16, 16, 13);
g.addColorStop(0, "#fff");
g.addColorStop(1, col);
ctx.fillStyle = g;
ctx.beginPath();
ctx.arc(16, 16, 13, 0, Math.PI * 2);
ctx.fill();
const fl = document.createElement("link");
fl.rel = "icon"; fl.href = c.toDataURL();
document.head.appendChild(fl);