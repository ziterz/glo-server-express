import { StatusCodes } from 'http-status-codes';
import Controller from '@/types/controllers/controller';
import Game from '@/models/game.model';
import CreateGameDto from '@/types/schemas/dtos/game/create.dto';

/**
 * Handles the HTTP POST request to add new `Game` data.
 * @param req - The Express request object.
 * @param res - The Express response object used to return data and HTTP status codes to the client.
 */
const create: Controller = async (req, res) => {
  const game = { ...req.body } as CreateGameDto;

  await Game.create(game);

  res
    .status(StatusCodes.CREATED)
    .json({ message: 'Game created successfully.' });
};

export default create;
