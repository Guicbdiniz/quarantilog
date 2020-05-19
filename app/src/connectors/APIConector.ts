import { DailyUpdate } from '../types/dailyUpdates'

const APIUrl = 'http://localhost:3002/'
const jsonHeaders = {
	Accept: 'application/json',
	'Content-Type': 'application/json'
}

/**
 * Send a DailyUpdate to the API with a fetch async request so that it can be saved in the DB.
 *
 * @param dailyUpdate - DailyUpdate to be sent.
 * @returns Promise with the API response as JSON. Possible responses must be checked in the API source code.
 */
export const addDailyUpdate = async (
	dailyUpdate: DailyUpdate
): Promise<Response> => {
	return await fetch(APIUrl + 'dailyupdate/', {
		method: 'POST',
		headers: jsonHeaders,
		body: JSON.stringify(dailyUpdate)
	})
}

/**
 *	Send a date search query to the API.
 *
 * @param searchedTerms - date search query to get DailyUpdates.
 * @returns Promise with the API response as JSON. Possible responses must be checked in the API source code.
 */
export const getDailyUpdate = async (
	searchedTerms: String
): Promise<Response> => {
	return await fetch(APIUrl + 'dailyupdate/search/', {
		method: 'POST',
		headers: jsonHeaders,
		body: JSON.stringify({ date: searchedTerms })
	})
}
