/* =============================================
   ГЛАВНАЯ — home.js
   ============================================= */
 
const cursor    = document.querySelector('.cursor');
const cursorTrail = document.querySelector('.cursor-trail');
 
const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
if (isTouchDevice) {
  cursor.style.display = 'none';
  cursorTrail.style.display = 'none';
  document.body.style.cursor = 'auto';
}
 
let mx = 0, my = 0, tx = 0, ty = 0;
document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = mx + 'px'; cursor.style.top = my + 'px';
});
(function trail() {
  tx += (mx-tx)*.13; ty += (my-ty)*.13;
  cursorTrail.style.left = tx+'px'; cursorTrail.style.top = ty+'px';
  requestAnimationFrame(trail);
})();
 
// Меняем цвет курсора под карточку
document.querySelectorAll('.card--berserk').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.background = '#c0392b';
    cursor.style.boxShadow = '0 0 12px rgba(139,0,0,0.8)';
    cursorTrail.style.borderColor = 'rgba(139,0,0,0.4)';
    cursor.style.transform = 'translate(-50%,-50%) scale(1.8)';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.background = '#ede0d0';
    cursor.style.boxShadow = 'none';
    cursorTrail.style.borderColor = 'rgba(255,255,255,0.2)';
    cursor.style.transform = 'translate(-50%,-50%) scale(1)';
  });
});
 
document.querySelectorAll('.card--cyberpunk').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.background = '#00c8ff';
    cursor.style.boxShadow = '0 0 12px rgba(0,200,255,0.8)';
    cursorTrail.style.borderColor = 'rgba(0,200,255,0.4)';
    cursor.style.transform = 'translate(-50%,-50%) scale(1.8)';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.background = '#ede0d0';
    cursor.style.boxShadow = 'none';
    cursorTrail.style.borderColor = 'rgba(255,255,255,0.2)';
    cursor.style.transform = 'translate(-50%,-50%) scale(1)';
  });
});