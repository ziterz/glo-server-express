import { describe, it, expect } from '@jest/globals';
import { connection, Types } from 'mongoose';
import Game from '@/models/game.model';
import { StatusCodes } from 'http-status-codes';
import request from 'supertest';
import buildApp from '@/app';

const fakeGameId = '66a7283cd95159dd59f5b1ff';
let supertest: ReturnType<typeof request>;

beforeAll(() => {
  supertest = request(buildApp(true));
});

afterEach(() => {
  jest.restoreAllMocks();
});

afterAll(async () => {
  await connection.close();
});

describe('Delete an existing game', () => {
  it('Delete a game by ID and returns a 200 status code.', async () => {
    // Prepare
    const destroyGameSpy = jest
      .spyOn(Game, 'findByIdAndDelete')
      .mockResolvedValueOnce({} as ReturnType<typeof Game.findByIdAndUpdate>);
    const expectedMessage = 'Game deleted successfully.';

    // Execute
    const response = await supertest.delete(`/v1/games/${fakeGameId}`);

    // Test
    expect(destroyGameSpy).toHaveBeenCalledTimes(1);
    expect(destroyGameSpy).toHaveBeenCalledWith({ _id: fakeGameId });

    expect(response.status).toBe(StatusCodes.OK);
    expect(response.body.message).toBe(expectedMessage);

    // Cleanup
    destroyGameSpy.mockRestore();
  });
});
