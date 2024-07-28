/** Represents the base DTO for creating or updating a `Game` entity. */
interface CreateGameDto {
  /** Title of the `Game`. */
  title: string;

  /** Genre of the `Game`. */
  genre: string;

  /** Platforms the `Game` is available on. */
  platforms: string[];

  /** Description of the `Game`. */
  description: string;

  /** URL of the `Game`'s poster image. */
  poster: string;

  /** URL of the `Game`'s logo on the poster. */
  posterLogo: string;

  /** URL of the `Game`'s promotional video. */
  video: string;

  /** Release date of the `Game`. */
  released: Date;

  /** Official website of the `Game`. */
  website: string;
}

export default CreateGameDto;
