import { StatusCodes } from 'http-status-codes';
import Controller from '@/types/controllers/controller';
import Game from '@/models/game.model';
import IdParams from '@/types/schemas/dtos/id-param.dto';

/**
 * Handles the HTTP DELETE request to destroy a `Game` entity.
 * @param req - The Express request object.
 * @param res - The Express response object used to return data and HTTP status codes to the client.
 */
const destroy: Controller = async (req, res) => {
  const findGame = await Game.findByIdAndDelete({
    _id: req.params.id,
  } as IdParams);

  if (!findGame) {
    res.status(StatusCodes.NOT_FOUND).json({ message: 'Game not found.' });
    return;
  }

  res.status(StatusCodes.OK).json({ message: 'Game deleted successfully.' });
};

export default destroy;
