import dotenv from 'dotenv';
import express, { Application } from 'express';
import connectDB from '@/config/db.config';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
import rootRouter from '@/routes';
import errorHandler from '@/middlewares/error-handler';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

/**
 * Builds the Express application instance to be used as the server.
 * @param attachLogger - Whether to attach a logger (Morgan) to the Express application.
 * This should be set to `true` in production to log requests and responses.
 * Set this to `false` in integration tests to prevent logging from cluttering the test output.
 * @returns - The built Express application instance.
 */
const buildApp = (attachLogger: boolean): Application => {
  /** The built Express application instance. */
  const app: Application = express();

  connectDB(process.env.MONGODB_URI).catch(console.error);

  app.use(cors());
  app.use(helmet());
  app.use(compression());
  app.use(express.json());

  if (attachLogger) {
    app.use(morgan('combined'));
  }

  app.use('/v1', rootRouter);
  app.use(errorHandler);

  return app;
};

export default buildApp;
