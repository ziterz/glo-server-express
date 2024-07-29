import { describe, it, expect } from '@jest/globals';
import { connection, Types } from 'mongoose';
import Game from '@/models/game.model';
import CreateGameDto from '@/types/schemas/dtos/game/create.dto';
import { StatusCodes } from 'http-status-codes';
import request from 'supertest';
import buildApp from '@/app';

let supertest: ReturnType<typeof request>;
const mockPayload: CreateGameDto['body'] = {
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
  released: '2024-10-08',
  website: 'https://diablo4.blizzard.com/vessel-of-hatred',
};

beforeAll(() => {
  supertest = request(buildApp(true));
});

afterEach(() => {
  jest.restoreAllMocks();
});

afterAll(async () => {
  await connection.close();
});

describe('Get all games', () => {
  it('Gets all games and returns a 200 status code', async () => {
    // Prepare
    const findGameSpy = jest
      .spyOn(Game, 'find')
      .mockResolvedValueOnce([mockPayload]);
    let expected = { games: [mockPayload] };

    // Execute
    let response = await supertest.get('/v1/games');

    // Test
    expect(findGameSpy).toHaveBeenCalledTimes(1);
    expect(findGameSpy).toHaveBeenCalledWith();

    expect(response.status).toBe(StatusCodes.OK);
    expect(response.body).toStrictEqual(expected);

    // Cleanup
    findGameSpy.mockRestore();
  });
});
