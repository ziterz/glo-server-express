import { describe, it, expect } from '@jest/globals';
import { connection, Types } from 'mongoose';
import Game from '@/models/game.model';
import { StatusCodes } from 'http-status-codes';
import request from 'supertest';
import buildApp from '@/app';
import UpdateGameDto from '@/types/schemas/dtos/game/update.dto';

const fakeGameId = '66a7283cd95159dd59f5b1ff';
let supertest: ReturnType<typeof request>;
const mockPayload: UpdateGameDto['body'] = {
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

describe('Update an existing game', () => {
  it('Updates a game data and returns a 200 status code', async () => {
    // Prepare
    const updateGameSpy = jest
      .spyOn(Game, 'findByIdAndUpdate')
      .mockResolvedValueOnce(
        mockPayload as ReturnType<typeof Game.findByIdAndUpdate>
      );
    const expectedMessage = 'Game updated successfully.';

    // Execute
    const response = await supertest
      .put(`/v1/games/${fakeGameId}`)
      .send(mockPayload);

    // Test
    expect(updateGameSpy).toHaveBeenCalledTimes(1);
    expect(updateGameSpy).toHaveBeenCalledWith(
      { _id: fakeGameId },
      mockPayload
    );

    expect(response.status).toBe(StatusCodes.OK);
    expect(response.body.message).toBe(expectedMessage);

    // Cleanup
    updateGameSpy.mockRestore();
  });

  describe('Fails to update a game and returns a 400 status code', () => {
    it.each([
      ['genre', { genre: false }],
      ['title', { title: false }],
      ['platforms', { platforms: false }],
      ['description', { description: false }],
      ['poster', { poster: false }],
      ['posterLogo', { posterLogo: false }],
      ['video', { video: false }],
      ['released', { released: false }],
      ['website', { website: false }],
    ])(
      'It should return a bad request error when `%s` is empty',
      async (fieldName, payload) => {
        // Prepare
        const updateGameSpy = jest
          .spyOn(Game, 'findByIdAndUpdate')
          .mockResolvedValueOnce(null);

        // Execute
        const response = await supertest
          .put(`/v1/games/${fakeGameId}`)
          .send(payload);

        // Test
        expect(updateGameSpy).not.toHaveBeenCalled();
        expect(updateGameSpy).not.toHaveBeenCalledWith({
          _id: new Types.ObjectId(fakeGameId),
        });

        expect(response.status).toBe(StatusCodes.BAD_REQUEST);
        expect(response.body.message).toBe('Invalid request data');
        expect(response.body.errors[0].path[1]).toBe(fieldName);

        // Cleanup
        updateGameSpy.mockRestore();
      }
    );
  });

  it('Fails to get a game by ID due to a wrong ObjectId and returns a 400 status code', async () => {
    // Prepare
    const updateGameSpy = jest
      .spyOn(Game, 'findById')
      .mockResolvedValueOnce(null);
    const expectedMessage = 'Invalid ObjectId.';

    // Execute
    let response = await supertest.put('/v1/games/66a7283cd951XYZ');

    // Test
    expect(updateGameSpy).toHaveBeenCalledTimes(0);
    expect(updateGameSpy).not.toHaveBeenCalledWith({
      _id: new Types.ObjectId(fakeGameId),
    });

    expect(response.status).toBe(StatusCodes.BAD_REQUEST);
    expect(response.body.errors[0].message).toStrictEqual(expectedMessage);

    // Cleanup
    updateGameSpy.mockRestore();
  });

  it('Fails to get a game by ID and returns a 404 status code (Not Found)', async () => {
    // Prepare
    const updateGameSpy = jest
      .spyOn(Game, 'findById')
      .mockResolvedValueOnce(null);
    const expectedMessage = 'Game not found.';

    // Execute
    let response = await supertest.put('/v1/games/66a7283cd95159dd59f5b1fa');

    // Test
    expect(updateGameSpy).not.toHaveBeenCalled();
    expect(updateGameSpy).not.toHaveBeenCalledWith({
      _id: new Types.ObjectId(fakeGameId),
    });

    expect(response.status).toBe(StatusCodes.NOT_FOUND);
    expect(response.body.message).toStrictEqual(expectedMessage);

    // Cleanup
    updateGameSpy.mockRestore();
  });
});
