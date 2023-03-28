import Days from '../layout/Days'
import Rectangle from '../cards/Rectangle'

export default function DayCard({ type, text, button }) {
	const capitalise = type.charAt(0).toUpperCase() + type.slice(1);
  console.log(capitalise);
  let message
  if (type === "yesterday") {
    message = `${capitalise} was:` 
  } else {
    message = `${capitalise} is:` 
  }
  return (
		<Rectangle backgroundColor="#FFF8F0">
				<p>{message}</p>
				<h4>
					<Days type={type} />
				</h4>
				<p>{text}</p>
				<button>{button}</button>
		</Rectangle>
	)
}
