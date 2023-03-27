// component that is a wrapper so that it renders a div with border-radius 50%
//it should expect % for border
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

function Circle({ percentage }) {
	return (
		<div style={{ width: 100, height: 100 }}>
			<CircularProgressbar
				value={percentage}
				text={`${percentage}%`}
				strokeWidth={12}
				styles={buildStyles({
					textColor: '#463782',
					pathColor: '#463782',
					trailColor: '#bfcae9'
				})}
			/>
		</div>
	)
}
export default Circle
