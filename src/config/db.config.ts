import mongoose from 'mongoose';
import MongooseConnector from '@/types/config/mongoose-connector';

/**
 * Connect to MongoDB using the Mongoose client.
 * @param uri - The MongoDB connection string.
 * @param clientOptions - The options to pass to the Mongoose client.
 * @returns
 */
const connectDB: MongooseConnector = async (uri: string) => {
  try {
    await mongoose.connect(uri, {
      dbName: 'games-database',
      serverApi: {
        version: '1',
        strict: true,
        deprecationErrors: true,
      },
    });
    console.log('Successfully connected to MongoDB!');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

export default connectDB;
