import { z } from 'zod';

const CREATE_GAME_DTO_SCHEMA = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required field',
    }),
    genre: z.string({
      required_error: 'Genre is required field',
    }),
    platform: z
      .array(
        z.string({
          required_error: 'Platform is required field',
        })
      )
      .min(1, {
        message: 'Platform must have at least 1 values',
      }),
    description: z.string({
      required_error: 'Description is required field',
    }),
    poster: z.string({
      required_error: 'Poster is required field',
    }),
    posterLogo: z.string({
      required_error: 'PosterLogo is required field',
    }),
    video: z.string({
      required_error: 'Video is required field',
    }),
    released: z
      .string({
        required_error: 'Released date is required field',
      })
      .date(),
    website: z.string({
      required_error: 'Website is required field',
    }),
  }),
});

export default CREATE_GAME_DTO_SCHEMA;
