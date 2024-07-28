import { z } from 'zod';
import { Types } from 'mongoose';

/** Schema representing an ObjectId ID parameter. */
const ID_PARAM_SCHEMA = z.object({
  params: z.object({
    id: z.string().refine((value) => Types.ObjectId.isValid(value), {
      message: 'Invalid ObjectId',
    }),
  }),
});

export default ID_PARAM_SCHEMA;
