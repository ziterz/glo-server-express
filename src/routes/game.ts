import { Router } from 'express';
import read from '@/controllers/game/read.controller';
import find from '@/controllers/game/find.controller';
import create from '@/controllers/game/create.controller';
import makeSafeAsync from '@/middlewares/make-safe-async';
import createValidator from '@/middlewares/create-validator';
import CREATE_GAME_DTO_SCHEMA from '@/schemas/dtos/game/create.dto.schema';
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

export default rootRouter;
