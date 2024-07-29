import UPDATE_GAME_DTO_SCHEMA from '@/schemas/dtos/game/update.dto.schema';
import { z } from 'zod';

/** Represents the base DTO for creating a `Game` entity. */
type UpdateGameDto = z.infer<typeof UPDATE_GAME_DTO_SCHEMA>;

export default UpdateGameDto;
