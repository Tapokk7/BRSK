/* =============================================
   CYBERPUNK: EDGERUNNERS — cb.js
   ============================================= */
 
const BASE = 'https://archive.org/download/1-9_20260327/';
 
const EPISODES = [
  { num: 1,  title: 'Let You Down',           file: BASE + 'Киберпанк_Бегущие_по_краю_1_сезон_-_1_серия.mp4' },
  { num: 2,  title: 'Like a Boy, Like a Man', file: BASE + 'Киберпанк_Бегущие_по_краю_1_сезон_-_2_серия.mp4' },
  { num: 3,  title: 'Smooth Criminal',        file: BASE + 'Киберпанк_Бегущие_по_краю_1_сезон_-_3_серия.mp4' },
  { num: 4,  title: 'Lucky You',              file: BASE + 'Киберпанк_Бегущие_по_краю_1_сезон_-_4_серия.mp4' },
  { num: 5,  title: 'All Eyez on Me',         file: BASE + 'Киберпанк_Бегущие_по_краю_1_сезон_-_5_серия.mp4' },
  { num: 6,  title: 'Girl on Fire',           file: BASE + 'Киберпанк_Бегущие_по_краю_1_сезон_-_6_серия.mp4' },
  { num: 7,  title: 'Stronger',               file: BASE + 'Киберпанк_Бегущие_по_краю_1_сезон_-_7_серия.mp4' },
  { num: 8,  title: 'My Moon My Man',         file: BASE + 'Киберпанк_Бегущие_по_краю_1_сезон_-_8_серия.mp4' },
  { num: 9,  title: 'Last Caress',            file: BASE + 'Киберпанк_Бегущие_по_краю_1_сезон_-_9_серия.mp4' },
  { num: 10, title: 'My Way',                 file: BASE + 'Киберпанк_Бегущие_по_краю_1_сезон_-_10_серия.mp4' },
];
 
initPlayer(EPISODES, '#00c8ff');
 
console.log('%c⚡ CYBERPUNK: EDGERUNNERS ⚡', 'font-size:22px;color:#00c8ff;font-weight:bold;');
