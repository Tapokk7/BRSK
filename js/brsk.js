/* =============================================
   BERSERK 1997 — brsk.js
   ============================================= */
 
const BASE = 'https://archive.org/download/1-16_20260322/';
 
const EPISODES = [
  { num: 1,  title: 'The Black Swordsman',             file: BASE + 'Берсерк_1_сезон_-_1_серия.mp4' },
  { num: 2,  title: 'Band of the Hawk',                file: BASE + 'Берсерк_1_сезон_-_2_серия.mp4' },
  { num: 3,  title: 'Birth',                           file: BASE + 'Берсерк_1_сезон_-_3_серия.mp4' },
  { num: 4,  title: 'Outcast',                         file: BASE + 'Берсерк_1_сезон_-_4_серия.mp4' },
  { num: 5,  title: 'Battle for Doldrey',              file: BASE + 'Берсерк_1_сезон_-_5_серия.mp4' },
  { num: 6,  title: 'Path to the Hero',                file: BASE + 'Берсерк_1_сезон_-_6_серия.mp4' },
  { num: 7,  title: 'Golden Age',                      file: BASE + 'Берсерк_1_сезон_-_7_серия.mp4' },
  { num: 8,  title: 'Knight of the Phoenix',           file: BASE + 'Берсерк_1_сезон_-_8_серия.mp4' },
  { num: 9,  title: 'Warrior',                         file: BASE + 'Берсерк_1_сезон_-_9_серия.mp4' },
  { num: 10, title: 'Dream and Reality',               file: BASE + 'Берсерк_1_сезон_-_10_серия.mp4' },
  { num: 11, title: 'Knight of Death',                 file: BASE + 'Берсерк_1_сезон_-_11_серия.mp4' },
  { num: 12, title: 'Dear Friend',                     file: BASE + 'Берсерк_1_сезон_-_12_серия.mp4' },
  { num: 13, title: 'Birth of the Millennium Hawk',    file: BASE + 'Берсерк_1_сезон_-_13_серия.mp4' },
  { num: 14, title: 'Cup of Poisoned Wine',            file: BASE + 'Берсерк_1_сезон_-_14_серия.mp4' },
  { num: 15, title: 'Call of Destiny',                 file: BASE + 'Берсерк_1_сезон_-_15_серия.mp4' },
  { num: 16, title: 'Will and Ambition',               file: BASE + 'Берсерк_1_сезон_-_16_серия.mp4' },
  { num: 17, title: 'The Abyss',                       file: BASE + 'Берсерк_1_сезон_-_17_серия.mp4' },
  { num: 18, title: 'Swordsmith',                      file: BASE + 'Берсерк_1_сезон_-_18_серия.mp4' },
  { num: 19, title: 'Price of a Dream',                file: BASE + 'Берсерк_1_сезон_-_19_серия.mp4' },
  { num: 20, title: 'Farewell',                        file: BASE + 'Берсерк_1_сезон_-_20_серия.mp4' },
  { num: 21, title: 'Howling of the Wolves',           file: BASE + 'Берсерк_1_сезон_-_21_серия.mp4' },
  { num: 22, title: 'The Fall',                        file: BASE + 'Берсерк_1_сезон_-_22_серия.mp4' },
  { num: 23, title: 'Brand of Sacrifice',              file: BASE + 'Берсерк_1_сезон_-_23_серия.mp4' },
  { num: 24, title: 'The Eclipse',                     file: BASE + 'Берсерк_1_сезон_-_24_серия.mp4' },
  { num: 25, title: 'Prayer in the Dark Night',        file: BASE + 'Берсерк_1_сезон_-_25_серия.mp4' },
];
 
initPlayer(EPISODES, '#8b0000');
 
console.log('%c⚔ BERSERK 1997 ⚔', 'font-size:22px;color:#8b0000;font-weight:bold;');
