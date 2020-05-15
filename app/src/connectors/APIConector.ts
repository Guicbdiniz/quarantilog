import { DailyUpdate } from '../types/dbModels'

const APIUrl = 'http://localhost:3002/'
const jsonHeaders = {
	Accept: 'application/json',
	'Content-Type': 'application/json'
}

export const addDailyUpdate = async (
	dailyUpdate: DailyUpdate
): Promise<Response> => {
	return await fetch(APIUrl + 'dailyupdate/', {
		method: 'POST',
		headers: jsonHeaders,
		body: JSON.stringify(dailyUpdate)
	})
}

export const getDailyUpdate = async (
	searchedTerms: String
): Promise<Response> => {
	return await fetch(APIUrl + 'dailyupdate/search/', {
		method: 'POST',
		headers: jsonHeaders,
		body: JSON.stringify({ date: searchedTerms })
	})
}
