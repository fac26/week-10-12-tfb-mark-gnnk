import DayItem from './DayItem'
import ProgressCircle from 'components/cards/ProgressCircle'

// expects number 0-100 for progress trackers
export default function DayList({ yesterdayProgress, todayProgress }) {
	const completeMessage =
		"Well done! You've completed all of your micro habits for this day."
	const incompleteMessage =
		"You've been working on your micro-habits. Keep going!"
	const futureMessage =
		"You haven't started these micro-habits yet. Come back tomorrow!"
	yesterdayProgress = 100
	todayProgress = 75
	return (
		<div className="dayList">
			<DayItem
				type="yesterday"
				text={yesterdayProgress < 100 ? incompleteMessage : completeMessage}
				progressBar={
					<ProgressCircle
						percentage={yesterdayProgress}
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
				text={todayProgress < 100 ? incompleteMessage : completeMessage}
				progressBar={
					<ProgressCircle
						percentage={todayProgress}
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
