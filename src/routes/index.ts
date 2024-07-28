import { Router } from 'express';
import health from '@/controllers/health.controller';
import gameRouter from '@/routes/game';

/** Express router for handling root-level routes. */
const rootRouter: Router = Router();

rootRouter.get('/health', health);
rootRouter.use('/games', gameRouter);

export default rootRouter;
