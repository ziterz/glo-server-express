import mongoose from 'mongoose';
import gameSeeder from '@/seeders/game.seeder';
import connectDB from '@/config/db.config';

const seeding = async () => {
  try {
    await connectDB(process.env.MONGODB_URI).catch(console.error);
    await gameSeeder();
    console.log('Seeding complete!');
  } catch (error) {
    console.error(error);
  } finally {
    mongoose.connection.close();
  }
};

seeding();
