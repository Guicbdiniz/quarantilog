import React from 'react'
import { DailyUpdateTestProps } from '../types/props'
import { getDailyUpdate } from '../connectors/APIConector'

export const DailyUpdateTest: React.FunctionComponent<DailyUpdateTestProps> = (
	props
) => {
	const testRoute = (): void => {
		getDailyUpdate('')
			.then((response) => {
				console.log(response)
				return response.json()
			})
			.then((response) => {
				console.log(response)
			})
	}

	return (
		<div>
			<button onClick={testRoute}></button>
		</div>
	)
}
