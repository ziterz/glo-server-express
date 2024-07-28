import { StatusCodes } from 'http-status-codes';
import Controller from '@/types/controllers/controller';
import Game from '@/models/game.model';
import UpdateGameDto from '@/types/schemas/dtos/game/update.dto';
import IdParams from '@/types/schemas/dtos/id-param.dto';

/**
 * Handles the HTTP PUT request to update a `Game` entity.
 * @param req - The Express request object.
 * @param res - The Express response object used to return data and HTTP status codes to the client.
 */
const update: Controller = async (req, res) => {
  const game = { ...req.body } as UpdateGameDto;

  await Game.updateOne({ _id: req.params.id } as IdParams, game);

  res.status(StatusCodes.OK).json({ message: 'Game updated successfully.' });
};

export default update;
