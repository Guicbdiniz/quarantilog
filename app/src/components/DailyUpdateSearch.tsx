import React, { useState, useEffect, MouseEvent } from 'react'
import { DailyUpdateSearchProps } from '../types/props'
import { DailyUpdateWithID as DailyUpdate } from '../types/dailyUpdates'
import { getDailyUpdate } from '../connectors/APIConector'

export const DailyUpdateSearch: React.FunctionComponent<DailyUpdateSearchProps> = (
	props
) => {
	const dailyUpdatesInitialValue: Array<DailyUpdate> = []

	const [dailyUpdates, setDailyUpdates] = useState(dailyUpdatesInitialValue)
	const [searchedTerms, setSearchedTerms] = useState('')

	useEffect(() => {})

	const searchForDailyUpdates = (e: MouseEvent): void => {
		e.preventDefault()

		getDailyUpdate(searchedTerms)
			.then((response) => {
				if (response.status === 200) {
					return response.json()
				} else {
					console.log('Erro: ', response)
					alert('Houve um erro ao fazer a busca')
					return []
				}
			})
			.then((response) => {
				if (response.results && response.results.length > 0) {
					let updatedDailyUpdates: Array<DailyUpdate> = []

					for (const dailyUpdate of response.results) {
						updatedDailyUpdates.push({
							date: dailyUpdate.date,
							author: dailyUpdate.author,
							message: dailyUpdate.message,
							id: dailyUpdate._id
						})
					}
					setDailyUpdates(updatedDailyUpdates)
				}
			})
			.catch((error) => {
				console.log(error)
			})
	}

	const getDailyUpdatesAsHTMLElements = () => {
		return dailyUpdates.map((dailyUpdate, index) => (
			<div key={index}>
				<div>Date: {dailyUpdate.date}</div>
				<div>Author: {dailyUpdate.author}</div>
				<div>Message: {dailyUpdate.message}</div>
			</div>
		))
	}

	return (
		<div>
			<form>
				<input
					type="text"
					name="searchedTerms"
					value={searchedTerms}
					onChange={(e) => setSearchedTerms(e.target.value)}
				></input>
				<button onClick={searchForDailyUpdates}>Add Daily Update</button>
			</form>
			{getDailyUpdatesAsHTMLElements()}
		</div>
	)
}
