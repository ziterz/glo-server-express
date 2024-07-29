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

describe('Create a new game', () => {
  it('Creates a new game and returns a 201 status code', async () => {
    // Prepare
    const createGameSpy = jest
      .spyOn(Game, 'create')
      .mockResolvedValueOnce({} as ReturnType<typeof Game.create>);
    const expectedMessage = 'Game created successfully.';

    // Execute
    const response = await supertest.post('/v1/games').send(mockPayload);

    // Test
    expect(createGameSpy).toHaveBeenCalledTimes(1);
    expect(createGameSpy).toHaveBeenCalledWith(mockPayload);

    expect(response.status).toBe(StatusCodes.CREATED);
    expect(response.body.message).toBe(expectedMessage);

    // Cleanup
    createGameSpy.mockRestore();
  });

  describe('Fails to create a new game and returns a 400 status code', () => {
    it.each([
      ['genre', { ...mockPayload, genre: undefined }],
      ['title', { ...mockPayload, title: undefined }],
      ['platforms', { ...mockPayload, platforms: undefined }],
      ['description', { ...mockPayload, description: undefined }],
      ['poster', { ...mockPayload, poster: undefined }],
      ['posterLogo', { ...mockPayload, posterLogo: undefined }],
      ['video', { ...mockPayload, video: undefined }],
      ['released', { ...mockPayload, released: undefined }],
      ['website', { ...mockPayload, website: undefined }],
    ])(
      'It should return a bad request error when `%s` is empty',
      async (fieldName, payload) => {
        // Prepare
        const createGameSpy = jest
          .spyOn(Game, 'create')
          .mockResolvedValueOnce({} as ReturnType<typeof Game.create>);

        // Execute
        const response = await supertest.post('/v1/games').send(payload);

        // Test
        expect(createGameSpy).toHaveBeenCalledTimes(0);
        expect(createGameSpy).not.toHaveBeenCalledWith(mockPayload);

        expect(response.status).toBe(StatusCodes.BAD_REQUEST);
        expect(response.body.message).toBe('Invalid request data');
        expect(response.body.errors[0].path[1]).toBe(fieldName);

        // Cleanup
        createGameSpy.mockRestore();
      }
    );
  });
});
