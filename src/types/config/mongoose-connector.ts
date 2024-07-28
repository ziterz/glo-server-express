/**
 * Represents a function that connects to a MongoDB database.
 * @param uri - The URI of the MongoDB database.
 * @returns A promise that resolves when the connection is established.
 */
export type MongooseConnector = (uri: string) => Promise<void>;

export default MongooseConnector;
