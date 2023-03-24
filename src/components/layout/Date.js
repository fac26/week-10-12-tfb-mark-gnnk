import { parseISO, format, addDays, isValid } from 'date-fns'

export default function Date({ dateString }) {
	const date = parseISO(dateString)
	const isValidDate = isValid(date)
	if (!isValidDate) {
		return <span>Date not valid!</span>
	}

	return <time dateTime={dateString}>{format(date, 'EEEE do MMMM yyyy')}</time>
}
