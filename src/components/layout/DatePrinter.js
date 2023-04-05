import { parseISO, format, addDays, isValid } from 'date-fns'

export default function DatePrinter({
	type = 'today',
	formatString = 'EEEE do MMMM'
}) {
	let date

	switch (type) {
		case 'yesterday':
			date = addDays(new Date(), -1)
			break
		case 'today':
			date = new Date()
			break
		case 'tomorrow':
			date = addDays(new Date(), 1)
			break
		default:
			date = parseISO(type)
	}

	return (
		<span>
			{isValid(date) ? (
				<time dateTime={date.toISOString()}>{format(date, formatString)}</time>
			) : (
				<span>Date not valid!</span>
			)}
		</span>
	)
}
