import React, { useState } from 'react'
import { DailyUpdateProps } from '../types/props'
import { getTodaysDate } from '../functions'

interface DailyUpdate {
	author: String
	date: String
	message: String
}

export const DailyUpdateForm: React.FunctionComponent<DailyUpdateProps> = (
	props
) => {
	const [author, setAuthor] = useState('')
	const date = getTodaysDate()
	const [message, setMessage] = useState('')

	console.log(date)

	return (
		<div>
			<form>
				<label>
					Author:
					<input
						type="text"
						name="author"
						value={author}
						onChange={(e) => setAuthor(e.target.value)}
					/>
				</label>
				<label>
					Message:
					<input
						type="text"
						name="message"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					></input>
				</label>
			</form>
		</div>
	)
}
