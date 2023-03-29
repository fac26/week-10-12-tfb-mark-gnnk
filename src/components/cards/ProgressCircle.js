// component that is a wrapper so that it renders a div with border-radius 50%
//it should expect % for border
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

function ProgressCircle({
	percentage,
	textColor,
	pathColor,
	trailColor,
	width,
	strokeWidth
}) {
	return (
		<div
			style={{
				width: width,
				height: width
			}}>
			<CircularProgressbar
				value={percentage}
				text={`${percentage}%`}
				strokeWidth={strokeWidth}
				styles={buildStyles({
					textColor,
					pathColor,
					trailColor
				})}
			/>
		</div>
	)
}
export default ProgressCircle
