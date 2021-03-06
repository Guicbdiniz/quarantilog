import React, { useState, useEffect, MouseEvent } from 'react'
import { DailyUpdateSearchProps } from '../types/props'
import { DailyUpdateWithID as DailyUpdate } from '../types/dailyUpdates'
import { getDailyUpdate } from '../connectors/APIConector'
import '../style/DailyUpdateSearch.css'

/**
 * Component for searching and visualizing DailyUpdates.
 *
 * @param props - empty.
 */
export const DailyUpdateSearch: React.FunctionComponent<DailyUpdateSearchProps> = (
	props
) => {
	const dailyUpdatesInitialValue: Array<DailyUpdate> = []

	const [dailyUpdates, setDailyUpdates] = useState(dailyUpdatesInitialValue)
	const [searchedTerms, setSearchedTerms] = useState('')

	useEffect(() => {})

	/**
	 * Search for DailyUpdates in the DB with a date search query collected from the searchedTerms.
	 *
	 * @param e - mouse click.
	 */
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

	/**
	 * Maps DailyUpdates collected as HTML elements.
	 */
	const getDailyUpdatesAsHTMLElements = () => {
		return dailyUpdates.map((dailyUpdate, index) => (
			<div key={index} className="singleDailyUpdate">
				<div>Date: {dailyUpdate.date}</div>
				<div>Author: {dailyUpdate.author}</div>
				<div>Message: {dailyUpdate.message}</div>
			</div>
		))
	}

	return (
		<div>
			<form className="searchForm">
				<input
					type="text"
					name="searchedTerms"
					className="searchInput"
					value={searchedTerms}
					onChange={(e) => setSearchedTerms(e.target.value)}
				></input>
				<button onClick={searchForDailyUpdates}>Search Daily Update</button>
			</form>
			<div className="dailyUpdatesResults">
				{getDailyUpdatesAsHTMLElements()}
			</div>
		</div>
	)
}
