/* =============================================
   BERSERK 1997 — main.js
   ============================================= */
 
// =============================================
// ЭПИЗОДЫ
// =============================================
const BASE = 'https://archive.org/download/1-16_20260322/';
 
const EPISODES = [
  { num: 1,  title: 'Чёрный Мечник',                  file: BASE + 'Берсерк_1_сезон_-_1_серия.mp4' },
  { num: 2,  title: 'Отряд Ястреба',                   file: BASE + 'Берсерк_1_сезон_-_2_серия.mp4' },
  { num: 3,  title: 'Рождение',                        file: BASE + 'Берсерк_1_сезон_-_3_серия.mp4' },
  { num: 4,  title: 'Изгой',                           file: BASE + 'Берсерк_1_сезон_-_4_серия.mp4' },
  { num: 5,  title: 'Битва за Доркус',                 file: BASE + 'Берсерк_1_сезон_-_5_серия.mp4' },
  { num: 6,  title: 'Дорога к герою',                  file: BASE + 'Берсерк_1_сезон_-_6_серия.mp4' },
  { num: 7,  title: 'Золотой Век',                     file: BASE + 'Берсерк_1_сезон_-_7_серия.mp4' },
  { num: 8,  title: 'Рыцарь Феникса',                  file: BASE + 'Берсерк_1_сезон_-_8_серия.mp4' },
  { num: 9,  title: 'Воин',                            file: BASE + 'Берсерк_1_сезон_-_9_серия.mp4' },
  { num: 10, title: 'Сон и реальность',                file: BASE + 'Берсерк_1_сезон_-_10_серия.mp4' },
  { num: 11, title: 'Рыцарь Смерти',                   file: BASE + 'Берсерк_1_сезон_-_11_серия.mp4' },
  { num: 12, title: 'Дорогой друг',                    file: BASE + 'Берсерк_1_сезон_-_12_серия.mp4' },
  { num: 13, title: 'Рождение Ястреба Тысячелетия',    file: BASE + 'Берсерк_1_сезон_-_13_серия.mp4' },
  { num: 14, title: 'Кубок вина с ядом',               file: BASE + 'Берсерк_1_сезон_-_14_серия.mp4' },
  { num: 15, title: 'Зов судьбы',                      file: BASE + 'Берсерк_1_сезон_-_15_серия.mp4' },
  { num: 16, title: 'Воля и амбиции',                  file: BASE + 'Берсерк_1_сезон_-_16_серия.mp4' },
  { num: 17, title: 'Пропасть',                        file: BASE + 'Берсерк_1_сезон_-_17_серия.mp4' },
  { num: 18, title: 'Кузнец мечей',                    file: BASE + 'Берсерк_1_сезон_-_18_серия.mp4' },
  { num: 19, title: 'Цена мечты',                      file: BASE + 'Берсерк_1_сезон_-_19_серия.mp4' },
  { num: 20, title: 'Прощание',                        file: BASE + 'Берсерк_1_сезон_-_20_серия.mp4' },
  { num: 21, title: 'Под вой волков',                  file: BASE + 'Берсерк_1_сезон_-_21_серия.mp4' },
  { num: 22, title: 'Падение',                         file: BASE + 'Берсерк_1_сезон_-_22_серия.mp4' },
  { num: 23, title: 'Знак Жертвы',                     file: BASE + 'Берсерк_1_сезон_-_23_серия.mp4' },
  { num: 24, title: 'Затмение',                        file: BASE + 'Берсерк_1_сезон_-_24_серия.mp4' },
  { num: 25, title: 'Молитва в тёмную ночь',           file: BASE + 'Берсерк_1_сезон_-_25_серия.mp4' },
];
 
// =============================================
// DOM ЭЛЕМЕНТЫ
// =============================================
const cursor        = document.querySelector('.cursor');
const cursorTrail   = document.querySelector('.cursor-trail');
const nav           = document.querySelector('.nav');
const rune          = document.querySelector('.rune-circle');
const titleLine     = document.querySelector('.title-line');
const epList        = document.getElementById('epList');
const video         = document.getElementById('mainPlayer');
const videoIdle     = document.getElementById('videoIdle');
const videoShell    = document.getElementById('videoShell');
const btnPlay       = document.getElementById('btnPlay');
const btnPrev       = document.getElementById('btnPrev');
const btnNext       = document.getElementById('btnNext');
const btnMute       = document.getElementById('btnMute');
const btnFullscreen = document.getElementById('btnFullscreen');
const volumeSlider  = document.getElementById('volumeSlider');
const progressWrap  = document.getElementById('progressWrap');
const progressFill  = document.getElementById('progressFill');
const bufferBar     = document.getElementById('bufferBar');
const progressThumb = document.getElementById('progressThumb');
const vTime         = document.getElementById('vTime');
const vEpLabel      = document.getElementById('vEpLabel');
const apToggle      = document.getElementById('autoplayToggle');
const apDot         = document.getElementById('apDot');
const apLabel       = document.getElementById('apLabel');
 
let currentIdx = -1;
let autoplay   = true;
let seeking    = false;
 
// =============================================
// ИКОНКИ
// =============================================
const iconPlay  = `<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>`;
const iconPause = `<svg viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>`;
const iconVolOn = `<svg viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg>`;
const iconVolOff= `<svg viewBox="0 0 24 24"><path d="M16.5 12A4.5 4.5 0 0 0 14 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0 0 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06A8.99 8.99 0 0 0 18 17.73l2 2L21.73 18 4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>`;
const iconFs    = `<svg viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>`;
const iconExit  = `<svg viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"/></svg>`;
 
// =============================================
// КУРСОР
// =============================================
// =============================================
// КУРСОР — скрываем на тач-устройствах
// =============================================
const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
if (isTouchDevice) {
  cursor.style.display = 'none';
  cursorTrail.style.display = 'none';
  document.body.style.cursor = 'auto';
}
 
let mx = 0, my = 0, tx = 0, ty = 0;
 
document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top  = my + 'px';
});
 
(function trail() {
  tx += (mx - tx) * 0.13;
  ty += (my - ty) * 0.13;
  cursorTrail.style.left = tx + 'px';
  cursorTrail.style.top  = ty + 'px';
  requestAnimationFrame(trail);
})();
 
document.querySelectorAll('a, button, .ep-row, .stat-card, .meta-autoplay').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.style.transform = 'translate(-50%,-50%) scale(2.3)');
  el.addEventListener('mouseleave', () => cursor.style.transform = 'translate(-50%,-50%) scale(1)');
});
 
// Капля крови при клике
document.addEventListener('click', e => {
  const d = document.createElement('div');
  d.style.cssText = `position:fixed;left:${e.clientX}px;top:${e.clientY}px;width:5px;height:5px;
    background:#8b0000;border-radius:50%;pointer-events:none;z-index:99999;
    transform:translate(-50%,-50%);box-shadow:0 0 8px rgba(139,0,0,.8);transition:all .55s ease;`;
  document.body.appendChild(d);
  requestAnimationFrame(() => {
    d.style.top = (e.clientY + 55) + 'px';
    d.style.opacity = '0';
    d.style.transform = 'translate(-50%,-50%) scale(.1)';
  });
  setTimeout(() => d.remove(), 600);
});
 
// =============================================
// NAV + PARALLAX
// =============================================
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
  if (rune) rune.style.transform = `translate(-50%, calc(-50% + ${window.scrollY * .14}px))`;
});
 
// =============================================
// SCROLL REVEAL
// =============================================
document.querySelectorAll('.stat-card, .about-text p, .section-title, .section-label')
  .forEach(el => el.classList.add('reveal'));
 
const ro = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const siblings = [...e.target.parentElement.children].filter(c => c.classList.contains('reveal'));
    setTimeout(() => e.target.classList.add('visible'), siblings.indexOf(e.target) * 85);
    ro.unobserve(e.target);
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => ro.observe(el));
 
// =============================================
// TITLE GLITCH
// =============================================
if (titleLine) {
  setInterval(() => {
    if (Math.random() > .93) {
      titleLine.style.textShadow = `${(Math.random()*4-2).toFixed(1)}px 0 rgba(139,0,0,.55)`;
      setTimeout(() => titleLine.style.textShadow = '', 90);
    }
  }, 750);
}
 
// =============================================
// СПИСОК СЕРИЙ
// =============================================
EPISODES.forEach((ep, idx) => {
  const row = document.createElement('div');
  row.className = 'ep-row';
  row.innerHTML = `
    <div class="ep-thumb">
      <span class="ep-thumb-num">${String(ep.num).padStart(2,'0')}</span>
    </div>
    <div class="ep-info">
      <div class="ep-num-label">Серия ${ep.num}</div>
      <div class="ep-title">${ep.title}</div>
    </div>
  `;
  row.addEventListener('click', () => loadEpisode(idx));
  epList.appendChild(row);
});
 
// =============================================
// ПЛЕЕР
// =============================================
function fmt(s) {
  if (isNaN(s)) return '0:00';
  const m = Math.floor(s / 60), sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2,'0')}`;
}
 
function loadEpisode(idx) {
  currentIdx = idx;
  const ep = EPISODES[idx];
  video.src = ep.file;
  video.load();
  video.play();
  videoIdle.classList.add('hidden');
  videoShell.classList.remove('paused');
  vEpLabel.textContent = `Серия ${ep.num} — ${ep.title}`;
  document.querySelectorAll('.ep-row').forEach((r, i) => r.classList.toggle('active', i === idx));
  const active = document.querySelector('.ep-row.active');
  if (active) active.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
}
 
function togglePlay() {
  video.paused ? video.play() : video.pause();
}
 
btnPlay.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
 
video.addEventListener('play',  () => { btnPlay.innerHTML = iconPause; videoShell.classList.remove('paused'); });
video.addEventListener('pause', () => { btnPlay.innerHTML = iconPlay;  videoShell.classList.add('paused'); });
video.addEventListener('ended', () => { if (autoplay && currentIdx < EPISODES.length - 1) loadEpisode(currentIdx + 1); });
 
btnPrev.addEventListener('click', () => { if (currentIdx > 0) loadEpisode(currentIdx - 1); });
btnNext.addEventListener('click', () => { if (currentIdx < EPISODES.length - 1) loadEpisode(currentIdx + 1); });
 
// Прогресс
video.addEventListener('timeupdate', () => {
  if (seeking || !video.duration) return;
  const pct = (video.currentTime / video.duration) * 100;
  progressFill.style.width = pct + '%';
  progressThumb.style.left = pct + '%';
  vTime.textContent = `${fmt(video.currentTime)} / ${fmt(video.duration)}`;
});
 
video.addEventListener('progress', () => {
  if (!video.duration) return;
  try {
    const buf = video.buffered;
    if (buf.length) bufferBar.style.width = (buf.end(buf.length - 1) / video.duration * 100) + '%';
  } catch(e) {}
});
 
// Перемотка
progressWrap.addEventListener('mousedown', e => { seeking = true; seek(e); });
document.addEventListener('mousemove',     e => { if (seeking) seek(e); });
document.addEventListener('mouseup',       () => { seeking = false; });
 
function seek(e) {
  const rect = progressWrap.getBoundingClientRect();
  const pct  = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
  progressFill.style.width = (pct * 100) + '%';
  progressThumb.style.left = (pct * 100) + '%';
  if (video.duration) video.currentTime = pct * video.duration;
}
 
// Громкость — заполненная зона красная
function updateVolSlider() {
  const pct = video.muted ? 0 : video.volume * 100;
  volumeSlider.style.background =
    `linear-gradient(to right, #c0392b ${pct}%, rgba(255,255,255,0.18) ${pct}%)`;
}
 
function updateVolIcon() {
  btnMute.innerHTML = (video.muted || video.volume === 0) ? iconVolOff : iconVolOn;
}
 
volumeSlider.addEventListener('input', () => {
  video.volume = parseFloat(volumeSlider.value);
  video.muted  = video.volume === 0;
  updateVolIcon();
  updateVolSlider();
});
 
btnMute.addEventListener('click', () => {
  video.muted = !video.muted;
  volumeSlider.value = video.muted ? 0 : video.volume;
  updateVolIcon();
  updateVolSlider();
});
 
updateVolSlider(); // начальное состояние
 
// Полноэкранный режим — для iOS используем video напрямую
btnFullscreen.addEventListener('click', () => {
  // iOS Safari — webkitEnterFullscreen на video элементе
  if (video.webkitEnterFullscreen) {
    video.webkitEnterFullscreen();
    return;
  }
  // Остальные браузеры
  if (!document.fullscreenElement) {
    videoShell.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
});
 
document.addEventListener('fullscreenchange', () => {
  btnFullscreen.innerHTML = document.fullscreenElement ? iconExit : iconFs;
});
 
// iOS не поддерживает fullscreenchange — используем webkitbeginfullscreen
video.addEventListener('webkitbeginfullscreen', () => {
  btnFullscreen.innerHTML = iconExit;
});
video.addEventListener('webkitendfullscreen', () => {
  btnFullscreen.innerHTML = iconFs;
});
 
// Клавиатура
document.addEventListener('keydown', e => {
  if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;
  switch (e.code) {
    case 'Space':      e.preventDefault(); togglePlay(); break;
    case 'ArrowRight': video.currentTime += 10; break;
    case 'ArrowLeft':  video.currentTime -= 10; break;
    case 'ArrowUp':    video.volume = Math.min(1, video.volume + 0.1); volumeSlider.value = video.volume; updateVolIcon(); updateVolSlider(); break;
    case 'ArrowDown':  video.volume = Math.max(0, video.volume - 0.1); volumeSlider.value = video.volume; updateVolIcon(); updateVolSlider(); break;
    case 'KeyF':       btnFullscreen.click(); break;
    case 'KeyM':       btnMute.click(); break;
  }
});
 
// Автопродолжение
apToggle.addEventListener('click', () => {
  autoplay = !autoplay;
  apDot.classList.toggle('off', !autoplay);
  apLabel.textContent = autoplay ? 'Автопродолжение вкл' : 'Автопродолжение выкл';
});
 
console.log('%c⚔ BERSERK 1997 ⚔', 'font-size:22px;color:#8b0000;font-weight:bold;');
console.log('%cПробел=пауза · ←→=±10с · ↑↓=громкость · F=полный экран · M=звук', 'color:#9e9088;');
 
