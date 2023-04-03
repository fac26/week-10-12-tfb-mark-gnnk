import DayItem from './DayItem'

const completeMessage =
	"Well done! You've completed all of your micro habits for this day."
const incompleteMessage =
	"You've been working on your micro-habits. Keep going!"
const futureMessage =
	"You haven't started these micro-habits yet. Come back tomorrow!"

// expects number 0-100 for progress trackers
export default function DayList({ yesterdayScore, todayScore }) {
	return (
		<div>
			<DayItem
				type="yesterday"
				text={yesterdayScore < 100 ? incompleteMessage : completeMessage}
				percentage={yesterdayScore}
				href="/challenges/yesterday"
			/>
			<DayItem
				type="today"
				text={todayScore < 100 ? incompleteMessage : completeMessage}
				percentage={todayScore}
				href="/challenges/today"
			/>
			<DayItem
				type="tomorrow"
				text={futureMessage}
				percentage={0}
				href="/challenges/tomorrow"
			/>
		</div>
	)
}
