import Game from '@/models/game.model';

const gameSeeder = async () => {
  const games = [
    {
      title: 'Diablo IV: Vessel of Hatred Background',
      genre: 'Action RPG',
      platforms: ['Battle.net', 'Xbox', 'PlayStation', 'Steam'],
      description:
        'The expansion takes place in the jungle region of Nahantu, and continues the story of Diablo IV where Neyrelle is in possession of the soulstone that contains the Prime Evil Mephisto',
      poster:
        'https://blz-contentstack-images.akamaized.net/v3/assets/blta8f9a8e092360c6c/bltf34c631cd1c8dbf7/66660dd2e039601ffb609aa0/Diablo_D4_X1_600x800.jpg?format=webply&quality=80&auto=webp',
      posterLogo:
        'https://blz-contentstack-images.akamaized.net/v3/assets/blta8f9a8e092360c6c/blt73d7c39a43451baf/66660e01418a08296a1ef807/DIV_X1_logo_EN.png?format=webply&quality=80&auto=webp',
      video:
        'https://blz-contentstack-assets.akamaized.net/v3/assets/blta8f9a8e092360c6c/blteb6e50a22d978a93/6642a2a3afde859e8c84a45d/D4_DesktopAppS4_600x800_30.webm',
      released: new Date('2024-10-08'),
      website: 'https://diablo4.blizzard.com/vessel-of-hatred',
    },
    {
      title: 'World of Warcraft: The War Within',
      genre: 'MMORPG',
      platforms: ['Battle.net'],
      description:
        'World of Warcraft: The War Within is an upcoming DLC expansion to World of Warcraft developed by Blizzard Entertainment. Players will embark on a new adventure to investigate the dark motives behind the Harbinger’s machination and explore the dark depths of the Nerubian empire.',
      poster:
        'https://blz-contentstack-images.akamaized.net/v3/assets/blta8f9a8e092360c6c/bltf10ab61d480e686f/6532b09b432b524ccf482622/11.0_rectangle.png?format=webply&quality=80&auto=webp',
      posterLogo:
        'https://blz-contentstack-images.akamaized.net/v3/assets/blta8f9a8e092360c6c/blt6c388e0fef1578be/6536a7e9b057fa59158f9230/11.0_Logo_enUS.png?format=webply&quality=80&auto=webp',
      video:
        'https://blz-contentstack-assets.akamaized.net/v3/assets/blta8f9a8e092360c6c/blt3b0725e83016d722/653ac3e8d4cc732c3ef7d7a7/V2.mp4',
      released: new Date('2024-08-26'),
      website: 'https://thewarwithin.blizzard.com/en-us/',
    },
    {
      title: 'World of Warcraft: Cataclysm Classic',
      genre: 'MMORPG',
      platforms: ['Battle.net'],
      description:
        "You've toppled the undead armies of the Lich King and ended Arthas' reign. Now, Deathwing, The Worldbreaker bursts from the heart of the Maelstrom, unleashing his rage. All will burn beneath the shadow of his wings.",
      poster:
        'https://blz-contentstack-images.akamaized.net/v3/assets/blta8f9a8e092360c6c/blta0649c2eb05001fa/653ac2deade0dc68802ca33c/wow_cataclassic.jpg?format=webply&quality=80&auto=webp',
      posterLogo:
        'https://blz-contentstack-images.akamaized.net/v3/assets/blta8f9a8e092360c6c/blt3c4ac3083f0b277d/6532b23f79173533c58b7bf4/cata_Logo_enUS.png?format=webply&quality=80&auto=webp',
      video:
        'https://blz-contentstack-assets.akamaized.net/v3/assets/blta8f9a8e092360c6c/blt964697f0ebff1b9f/653ac2f5ade0dc6afe2ca340/catacc_gamecard_an_1.mp4',
      released: new Date('2024-05-24'),
      website: 'https://wowclassic.blizzard.com/en-us/',
    },
    {
      title: 'Warcraft Rumble',
      genre: 'Mobile Action Strategy',
      platforms: ['AppStore', 'GooglePlay'],
      description:
        'Warcraft® Rumble™ is a mobile action strategy game set within the Warcraft universe where collectible Minis come to life to battle in frantic melee skirmishes. Play in multiple modes, including the single player campaign, going head-to-head in epic PvP battles, and more. ',
      poster:
        'https://blz-contentstack-images.akamaized.net/v3/assets/blta8f9a8e092360c6c/blt6115d43ad158a9f8/625744845e831c436d424d79/gryphon-square.jpg?format=webply&quality=80&auto=webp',
      posterLogo:
        'https://blz-contentstack-images.akamaized.net/v3/assets/blta8f9a8e092360c6c/bltae01b9e2c8e9a168/64c96b0442011f61be393a24/Rumble_Logo_enus.png?format=webply&quality=80&auto=webp',
      video:
        'https://blz-contentstack-assets.akamaized.net/v3/assets/blta8f9a8e092360c6c/blteca4849523547f5a/64ed03cc2d4970382c7be476/2023_Blizzard_Homepage_Gryphon_600x800.webm',
      released: new Date('2023-11-03'),
      website: 'https://warcraftrumble.blizzard.com/en-us/',
    },
    {
      title: 'World of Warcraft',
      genre: 'MMORPG',
      platforms: ['Battle.net'],
      description:
        'Similar to other MMORPGs, the game allows players to create a character avatar and explore an open game world in third- or first-person view, exploring the landscape, fighting various monsters, completing quests, and interacting with non-player characters (NPCs) or other players.',
      poster:
        'https://blz-contentstack-images.akamaized.net/v3/assets/blta8f9a8e092360c6c/bltba0c762ec1e384bd/6387c01fc72c2b107a6f7db6/wow-dragonflight-rectangle-GC.jpg?format=webply&quality=80&auto=webp',
      posterLogo:
        'https://blz-contentstack-images.akamaized.net/v3/assets/blta8f9a8e092360c6c/blt83481be830451a94/61a6a97b0df21d7804454dbe/wow-logo.png?format=webply&quality=80&auto=webp',
      video:
        'https://blz-contentstack-assets.akamaized.net/v3/assets/blta8f9a8e092360c6c/blt6dccd8fe21bece8f/654aef9b5ce678ea50b23bfe/WoWx10.2_DesktopApp_600x800.webm',
      released: new Date('2004-11-23'),
      website: 'https://worldofwarcraft.blizzard.com/en-us/',
    },
    {
      title: 'Overwatch 2',
      genre: 'Team-Based Action',
      platforms: [
        'Battle.net',
        'Xbox',
        'PlayStation',
        'NintendoSwitch',
        'Steam',
      ],
      description:
        'Overwatch 2 is a free-to-play, always-on, and ever-evolving live game. Team up with friends regardless of platform and jump into the reimagined PvP experience.',
      poster:
        'https://blz-contentstack-images.akamaized.net/v3/assets/blta8f9a8e092360c6c/bltdf9dd58b1d2893d5/6324a79fe337fa0dc7263db4/overwatch2.jpg?format=webply&quality=80&auto=webp',
      posterLogo:
        'https://blz-contentstack-images.akamaized.net/v3/assets/blta8f9a8e092360c6c/blt356e8885177e1b70/6324a832e7bdcf0dd996cae5/overwatch2-logo.png?format=webply&quality=80&auto=webp',
      video:
        'https://blz-contentstack-assets.akamaized.net/v3/assets/blta8f9a8e092360c6c/blt0a293f3d8cad6e8d/667eeded546e5a49a04b7c58/OVR-2024-18481_DeskApp-Season11_v2.webm',
      released: new Date('2022-10-04'),
      website: 'https://overwatch.blizzard.com/en-us/',
    },
    {
      title: 'Hearthstone',
      genre: 'Strategy Card Game',
      platforms: ['Battle.net', 'AppStore', 'GooglePlay'],
      description:
        "The game is a turn-based card game between two opponents, using constructed decks of 30 cards along with a selected hero with a unique power. Players use their limited mana crystals to play abilities or summon minions to attack the opponent, with the goal of destroying the opponent's hero.",
      poster:
        'https://blz-contentstack-images.akamaized.net/v3/assets/blta8f9a8e092360c6c/bltf66465e200b3b9f2/622792289485354f9b460b50/hearthstone-with-cards.jpg?format=webply&quality=80&auto=webp',
      posterLogo:
        'https://blz-contentstack-images.akamaized.net/v3/assets/blta8f9a8e092360c6c/blt603b9cf848efccaa/6227958ba6bb9250d3e44f9f/hearthstone-logo.png?format=webply&quality=80&auto=webp',
      video:
        'https://blz-contentstack-assets.akamaized.net/v3/assets/blta8f9a8e092360c6c/blt9865e9c19a6c010b/669fcfeb1e8b41d76cd4b7be/HEA-2024-18562-30.0-DesktopApp_HRZ_30_600x800.webm',
      released: new Date('2014-03-11'),
      website: 'https://hearthstone.blizzard.com/en-us',
    },
    {
      title: 'Diablo Immortal',
      genre: 'Action RPG',
      platforms: ['Battle.net', 'AppStore', 'GooglePlay'],
      description:
        'Diablo Immortal is a free-to-play, massively multiplayer online action role-playing video game developed by Blizzard Entertainment and NetEase. A mobile game in the Diablo series, it is set between the events of Diablo II and Diablo III.',
      poster:
        'https://blz-contentstack-images.akamaized.net/v3/assets/blta8f9a8e092360c6c/blt14732d868dcaaebd/6287cff46eb6de7d054a58c8/diablo-immortal.jpg?format=webply&quality=80&auto=webp',
      posterLogo:
        'https://blz-contentstack-images.akamaized.net/v3/assets/blta8f9a8e092360c6c/blt337ca2914b0db3a6/6287d00854eada112e74b40b/diablo-immortal-logo.png?format=webply&quality=80&auto=webp',
      video:
        'https://blz-contentstack-assets.akamaized.net/v3/assets/blta8f9a8e092360c6c/bltde1b066ea7e850f7/664e357a0a15dbc958351cf7/DIM_Tempest_DeskTopApp_600x800.webm',
      released: new Date('2022-06-02'),
      website: 'https://diabloimmortal.blizzard.com/en-us/',
    },
    {
      title: 'Diablo II: Resurrected',
      genre: 'Action RPG',
      platforms: ['Battle.net', 'Xbox', 'PlayStation', 'NintendoSwitch'],
      description:
        'Diablo II: Resurrected is an action role-playing video game co-developed by Blizzard Entertainment and Blizzard Albany and published by Blizzard Entertainment. It is a remaster of Diablo II and its expansion Lord of Destruction.',
      poster:
        'https://blz-contentstack-images.akamaized.net/v3/assets/blta8f9a8e092360c6c/blt71e1f3ec632b3fe3/61a5156d43af6d102dc88ace/d2.jpg?format=webply&quality=80&auto=webp',
      posterLogo:
        'https://blz-contentstack-images.akamaized.net/v3/assets/blta8f9a8e092360c6c/bltf82c19e7714f988c/61a50ce53c4e21100a80f1f6/d2-logo.png?format=webply&quality=80&auto=webp',
      video:
        'https://blz-contentstack-assets.akamaized.net/v3/assets/blta8f9a8e092360c6c/blt3eedef779b38f1e4/61e09e7d8d32880c1d339e16/Tile_Anim_Diablo_II_Res.webm',
      released: new Date('2021-09-23'),
      website: 'https://diablo2.blizzard.com/en-us/',
    },
    {
      title: 'Warcraft III: Reforged',
      genre: 'Real-Time Strategy',
      platforms: ['Battle.net'],
      description:
        'Warcraft III: Reforged is a remastered edition of the 2002 real-time strategy video game Warcraft III: Reign of Chaos and its expansion The Frozen Throne. Released on January 28, 2020, it adds revamped graphics, new campaign gameplay settings as well as modern online Battle.net features.',
      poster:
        'https://blz-contentstack-images.akamaized.net/v3/assets/blta8f9a8e092360c6c/blta2dcd0e643831fc6/61a50fa40df21d7804454d8c/warcraft-reforged.jpg?format=webply&quality=80&auto=webp',
      posterLogo:
        'https://blz-contentstack-images.akamaized.net/v3/assets/blta8f9a8e092360c6c/blt79dcb5a6cd9b2144/61a50fa9df9f2e10158abf29/warcraft-reforged-logo.png?format=webply&quality=80&auto=webp',
      video:
        'https://blz-contentstack-assets.akamaized.net/v3/assets/blta8f9a8e092360c6c/blt653463908ec0a7ba/61e09e56c3c4160d6b5c80b8/Tile_Anim_Warcraft_III.webm',
      released: new Date('2020-01-28'),
      website: 'https://warcraft3.blizzard.com/en-us/',
    },
  ];

  await Game.deleteMany({});
  await Game.insertMany(games);
};

export default gameSeeder;
