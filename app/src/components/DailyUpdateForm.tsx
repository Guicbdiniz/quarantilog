import React, { useState, MouseEvent } from 'react'
import { DailyUpdateProps } from '../types/props'
import { getTodaysDate } from '../functions'
import { addDailyUpdate } from '../connectors/APIConector'
import '../style/DailyUpdateForm.css'

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

		setDailyUpdateAuthor('')
		setDailyUpdateMessage('')
	}

	return (
		<div>
			<form className="form">
				<label className="formItem">
					<div className="inputLabel">Author</div>
					<input
						type="text"
						name="author"
						className="formInput"
						value={dailyUpdateAuthor}
						onChange={(e) => setDailyUpdateAuthor(e.target.value)}
					/>
				</label>
				<label className="formItem">
					<div className="inputLabel">Message</div>
					<textarea
						className="formInput message"
						value={dailyUpdateMessage}
						onChange={(e) => setDailyUpdateMessage(e.target.value)}
					></textarea>
				</label>
				<button onClick={sendDailyUpdate} className="formItem formButton">
					Add Daily Update
				</button>
			</form>

			<div className="responseText">{requestText}</div>
		</div>
	)
}
