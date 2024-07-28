import mongoose, { ConnectOptions } from 'mongoose';
import MongooseConnector from '@/types/config/mongoose-connector';

const clientOptions: ConnectOptions = {
  serverApi: {
    version: '1',
    strict: true,
    deprecationErrors: true,
  },
};

/**
 * The Mongoose client function type.
 */

/**
 * Connect to MongoDB using the Mongoose client.
 * @param uri - The MongoDB connection string.
 * @returns
 */
const connectDB: MongooseConnector = async (uri) => {
  try {
    await mongoose.connect(uri, clientOptions);
    console.log('Successfully connected to MongoDB!');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

export default connectDB;
