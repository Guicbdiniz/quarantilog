/**
 * Get todays date.
 *
 * @returns todays date as a dd/mm/yyyy String.
 */
export const getTodaysDate = () => {
	const date = new Date()
	return (
		String(date.getDate()).padStart(2, '0') +
		'/' +
		String(date.getMonth() + 1).padStart(2, '0') +
		'/' +
		String(date.getFullYear())
	)
}
