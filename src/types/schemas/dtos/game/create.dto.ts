import CREATE_GAME_DTO_SCHEMA from '@/schemas/dtos/game/create.dto.schema';
import { z } from 'zod';

/** Represents the base DTO for creating a `Game` entity. */
type CreateGameDto = z.infer<typeof CREATE_GAME_DTO_SCHEMA>;

export default CreateGameDto;
