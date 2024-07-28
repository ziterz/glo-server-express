import { StatusCodes } from 'http-status-codes';
import Controller from '@/types/controllers/controller';
import Game from '@/models/game.model';

/**
 * Handles the HTTP GET request to find `Game` data by ID.
 * @param req - The Express request object.
 * @param res - The Express response object used to return data and HTTP status codes to the client.
 */
const find: Controller = async (req, res) => {
  const games = await Game.findById({ _id: req.params.id });

  res.status(StatusCodes.OK).json({ games });
};

export default find;
