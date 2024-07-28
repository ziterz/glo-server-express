import { z } from 'zod';

const UPDATE_GAME_DTO_SCHEMA = z.object({
  body: z.object({
    title: z.optional(z.string()),
    genre: z.optional(z.string()),
    platform: z.optional(z.array(z.string())),
    description: z.optional(z.string()),
    poster: z.optional(z.string()),
    posterLogo: z.optional(z.string()),
    video: z.optional(z.string()),
    released: z.optional(z.string().date()),
    website: z.optional(z.string()),
  }),
});

export default UPDATE_GAME_DTO_SCHEMA;
