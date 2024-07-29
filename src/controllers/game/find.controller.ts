import { StatusCodes } from 'http-status-codes';
import Controller from '@/types/controllers/controller';
import Game from '@/models/game.model';
import IdParams from '@/types/schemas/dtos/id-param.dto';
import { Types } from 'mongoose';

/**
 * Handles the HTTP GET request to find `Game` data by ID.
 * @param req - The Express request object.
 * @param res - The Express response object used to return data and HTTP status codes to the client.
 */
const find: Controller = async (req, res) => {
  const game = await Game.findById({ _id: new Types.ObjectId(req.params.id) });

  if (!game) {
    res.status(StatusCodes.NOT_FOUND).json({ message: 'Game not found.' });
    return;
  }

  res.status(StatusCodes.OK).json({ game });
};

export default find;
