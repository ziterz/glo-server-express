import { StatusCodes } from 'http-status-codes';
import Controller from '@/types/controllers/controller';
import Game from '@/models/game.model';

/**
 * Handles the HTTP GET request to list `Game`s.
 * @param _req - The Express request object. (unused)
 * @param res - The Express response object used to return data and HTTP status codes to the client.
 */
const read: Controller = async (_req, res) => {
  const games = await Game.find();

  res.status(StatusCodes.OK).json({ games });
};

export default read;
