import { Router } from 'express';
import read from '@/controllers/game/read.controller';
import find from '@/controllers/game/find.controller';
import create from '@/controllers/game/create.controller';
import update from '@/controllers/game/update.controller';
import destroy from '@/controllers/game/destroy.controller';
import makeSafeAsync from '@/middlewares/make-safe-async';
import createValidator from '@/middlewares/create-validator';
import CREATE_GAME_DTO_SCHEMA from '@/schemas/dtos/game/create.dto.schema';
import UPDATE_GAME_DTO_SCHEMA from '@/schemas/dtos/game/update.dto.schema';
import ID_PARAM_SCHEMA from '@/schemas/id-param.schema';

/** Express router for handling root-level routes. */
const rootRouter: Router = Router();

rootRouter.get('/', makeSafeAsync(read));
rootRouter.get('/:id', createValidator(ID_PARAM_SCHEMA), makeSafeAsync(find));
rootRouter.post(
  '/',
  createValidator(CREATE_GAME_DTO_SCHEMA),
  makeSafeAsync(create)
);
rootRouter.put(
  '/:id',
  createValidator(ID_PARAM_SCHEMA),
  createValidator(UPDATE_GAME_DTO_SCHEMA),
  makeSafeAsync(update)
);
rootRouter.delete(
  '/:id',
  createValidator(ID_PARAM_SCHEMA),
  makeSafeAsync(destroy)
);

export default rootRouter;
