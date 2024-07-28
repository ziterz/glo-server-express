import Game from '@/models/game.model';

const gameSeeder = async () => {
  const games = [
    {
      title: 'Diablo IV: Vessel of Hatred Background',
      genre: 'Action RPG',
      platform: ['Battle.net', 'Xbox', 'PlayStation', 'Steam'],
      description: 'The expansion takes place in the jungle region of Nahantu, and continues the story of Diablo IV where Neyrelle is in possession of the soulstone that contains the Prime Evil Mephisto',
      poster: 'https://blz-contentstack-images.akamaized.net/v3/assets/blta8f9a8e092360c6c/bltf34c631cd1c8dbf7/66660dd2e039601ffb609aa0/Diablo_D4_X1_600x800.jpg?format=webply&quality=80&auto=webp',
      posterLogo: 'https://blz-contentstack-images.akamaized.net/v3/assets/blta8f9a8e092360c6c/blt73d7c39a43451baf/66660e01418a08296a1ef807/DIV_X1_logo_EN.png?format=webply&quality=80&auto=webp',
      video: 'https://blz-contentstack-assets.akamaized.net/v3/assets/blta8f9a8e092360c6c/blteb6e50a22d978a93/6642a2a3afde859e8c84a45d/D4_DesktopAppS4_600x800_30.webm',
      released: new Date('2024-10-08'),
      website: 'https://diablo4.blizzard.com/vessel-of-hatred',
    },
  ];

  await Game.deleteMany({});
  await Game.insertMany(games);
};

export default gameSeeder;
