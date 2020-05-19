/**
 * Text update to be written everyday.
 * It must have an author, a date and a message.
 */
export interface DailyUpdate {
	date: String
	author: String
	message: String
}

/**
 * Text update to be written everyday.
 * It must have an author, a date, a message and an ID.
 * The ID is created by the MongoDB.
 */
export interface DailyUpdateWithID {
	date: String
	author: String
	message: String
	id: String
}
