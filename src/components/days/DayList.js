import DayItem from './DayItem'
import ProgressCircle from 'components/cards/ProgressCircle'

const completeMessage =
	"Well done! You've completed all of your micro habits for this day."
const incompleteMessage =
	"You've been working on your micro-habits. Keep going!"
const futureMessage =
	"You haven't started these micro-habits yet. Come back tomorrow!"

// expects number 0-100 for progress trackers
export default function DayList({ yesterdayScore, todayScore }) {
	return (
		<div className="dayList">
			<DayItem
				type="yesterday"
				text={yesterdayScore < 100 ? incompleteMessage : completeMessage}
				progressBar={
					<ProgressCircle
						percentage={yesterdayScore}
						textColor="black"
						pathColor="var(--main-lavender)"
						trailColor="transparent"
						width={120}
						strokeWidth={11}
					/>
				}
			/>
			<DayItem
				type="today"
				text={todayScore < 100 ? incompleteMessage : completeMessage}
				progressBar={
					<ProgressCircle
						percentage={todayScore}
						textColor="black"
						pathColor="var(--main-lavender)"
						trailColor="transparent"
						width={120}
						strokeWidth={11}
					/>
				}
			/>
			<DayItem
				type="tomorrow"
				text={futureMessage}
				progressBar={
					<ProgressCircle
						percentage={0}
						textColor="black"
						pathColor="var(--main-lavender)"
						trailColor="transparent"
						width={120}
						strokeWidth={11}
					/>
				}
			/>
		</div>
	)
}
