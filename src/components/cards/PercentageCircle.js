// component that is a wrapper so that it renders a div with border-radius 50%
//it should expect % for border
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

function Circle({ percentage }) {
	return (
		<div
			style={{
				width: 125,
				height: 125,
				fontFamily: 'Century Gothic',
				fontWeight: 'bold'
			}}>
			<CircularProgressbar
				value={percentage}
				text={`${percentage}%`}
				strokeWidth={10}
				styles={buildStyles({
					textColor: 'black',
					pathColor: '#463782',
					trailColor: '#bfcae9'
				})}
			/>
		</div>
	)
}
export default Circle
