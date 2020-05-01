import React, { useState, MouseEvent } from 'react'
import { DailyUpdateProps } from '../types/props'
import { getTodaysDate } from '../functions'
import { addDailyUpdate } from '../connectors/APIConector'

export const DailyUpdateForm: React.FunctionComponent<DailyUpdateProps> = (
	props
) => {
	const date = getTodaysDate()
	const [dailyUpdateAuthor, setDailyUpdateAuthor] = useState('')
	const [dailyUpdateMessage, setDailyUpdateMessage] = useState('')
	const [requestText, setRequestText] = useState('')

	const sendDailyUpdate = (e: MouseEvent): void => {
		e.preventDefault()

		const dailyUpdate = {
			author: dailyUpdateAuthor,
			date: date,
			message: dailyUpdateMessage
		}

		addDailyUpdate(dailyUpdate)
			.then((response) => {
				console.log(response)
				setRequestText('Daily Update successfully added.')
			})
			.catch((error) => {
				setRequestText('There was a problem with the Daily Update.')
			})
	}

	return (
		<div>
			<form>
				<label>
					Author:
					<input
						type="text"
						name="author"
						value={dailyUpdateAuthor}
						onChange={(e) => setDailyUpdateAuthor(e.target.value)}
					/>
				</label>
				<label>
					Message:
					<input
						type="text"
						name="message"
						value={dailyUpdateMessage}
						onChange={(e) => setDailyUpdateMessage(e.target.value)}
					></input>
				</label>
				<button onClick={sendDailyUpdate}>Add Daily Update</button>
			</form>

			<div>{requestText}</div>
		</div>
	)
}
