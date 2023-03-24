import { parseISO, format, addDays, isValid } from 'date-fns'

export default function Date() {
	let date = 'today';
  const todayDate = new Date()
  console.log(todayDate)
  switch (type) {
    case 'yesterday':
      date = addDays(new Date(), -1);
      break;
    case 'today':
      date = new Date();
      break;
    case 'tomorrow':
      date = addDays(new Date(), 1);
      break;
    default:
      date = parseISO(type);
  }

  const isValidDate = isValid(date)
	if (!isValidDate) {
		return <span>Date is not valid!</span>
	}

	return (
		<time dateTime={date.toISOString()}>
			{format(date, 'do LLLL y')}
		</time>
	)

}
