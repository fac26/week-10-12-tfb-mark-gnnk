import { parseISO, format, addDays } from 'date-fns'

export default function Date({dateString}) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "EEEE do LLLL y")}</time>;
}
