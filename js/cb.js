/* =============================================
   CYBERPUNK: EDGERUNNERS — cb.js
   ============================================= */
 
// Замени пути на свои когда загрузишь серии на archive.org
const BASE = 'img/';
 
const EPISODES = [
  { num: 1,  title: 'Let You Down',           file: BASE + 'cyberpunk_01.mp4' },
  { num: 2,  title: 'Like a Boy, Like a Man', file: BASE + 'cyberpunk_02.mp4' },
  { num: 3,  title: 'Smooth Criminal',        file: BASE + 'cyberpunk_03.mp4' },
  { num: 4,  title: 'Lucky You',              file: BASE + 'cyberpunk_04.mp4' },
  { num: 5,  title: 'All Eyez on Me',         file: BASE + 'cyberpunk_05.mp4' },
  { num: 6,  title: 'Girl on Fire',           file: BASE + 'cyberpunk_06.mp4' },
  { num: 7,  title: 'Stronger',               file: BASE + 'cyberpunk_07.mp4' },
  { num: 8,  title: 'My Moon My Man',         file: BASE + 'cyberpunk_08.mp4' },
  { num: 9,  title: 'Last Caress',            file: BASE + 'cyberpunk_09.mp4' },
  { num: 10, title: 'My Way',                 file: BASE + 'cyberpunk_10.mp4' },
];
 
initPlayer(EPISODES, '#00c8ff');
 
console.log('%c⚡ CYBERPUNK: EDGERUNNERS ⚡', 'font-size:22px;color:#00c8ff;font-weight:bold;');