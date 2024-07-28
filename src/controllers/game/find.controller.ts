import { StatusCodes } from 'http-status-codes';
import Controller from '@/types/controllers/controller';
import Game from '@/models/game.model';
import IdParams from '@/types/dtos/id-param.dto';

/**
 * Handles the HTTP GET request to find `Game` data by ID.
 * @param req - The Express request object.
 * @param res - The Express response object used to return data and HTTP status codes to the client.
 */
const find: Controller = async (req, res) => {
  const games = await Game.findById({ _id: req.params.id } as IdParams);

  if (!games) {
    res.status(StatusCodes.NOT_FOUND).json({ message: 'Game not found.' });
    return;
  }

  res.status(StatusCodes.OK).json({ games });
};

export default find;
