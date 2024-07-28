import { Schema, Document, Types, model } from 'mongoose';

interface IGame extends Document {
  _id: Types.ObjectId;
  title: string;
  genre: string;
  platform: string[];
  description: string;
  poster: string;
  posterLogo: string;
  video: string;
  released: Date;
  website: string;
}

const GameSchema: Schema = new Schema<IGame>({
  title: { type: String, required: [true, 'Title is required field'] },
  genre: { type: String, required: [true, 'Genre is required field'] },
  platform: {
    type: [String],
    minlength: 1,
    required: [true, 'Platform is required field'],
    validate: {
      validator: function (images: string[]) {
        return images.length >= 1;
      },
      message: () => 'Platform must have at least 1 values',
    },
  },
  description: { type: String, required: [true, 'Description is required field'] },
  poster: { type: String, required: [true, 'Poster is required field'] },
  posterLogo: { type: String, required: [true, 'PosterLogo is required field'] },
  video: { type: String, required: [true, 'Video is required field'] },
  released: { type: Date, required: [true, 'Released date is required field'] },
  website: { type: String, required: [true, 'Website is required field'] },
});

const Game = model<IGame>('Game', GameSchema);

export default Game;
