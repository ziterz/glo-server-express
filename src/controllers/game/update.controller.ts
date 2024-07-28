import { StatusCodes } from 'http-status-codes';
import Controller from '@/types/controllers/controller';
import Game from '@/models/game.model';
import UpdateGameDto from '@/types/dtos/game/update.dto';

/**
 * Handles the HTTP PUT request to update a `Game` entity.
 * @param _req - The Express request object. (unused)
 * @param res - The Express response object used to return data and HTTP status codes to the client.
 */
const update: Controller = async (req, res) => {
  const game = { ...req.body } as UpdateGameDto;

  await Game.updateOne({ _id: req.params.id }, game);

  res.status(StatusCodes.OK).json({ message: 'Game updated successfully.' });
};

export default update;
