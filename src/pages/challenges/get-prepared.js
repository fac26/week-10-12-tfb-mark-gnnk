import Image from 'next/image'
import ChallengeCategoryList from 'components/challenges/ChallengeCategoryList'
import HeaderCard from 'components/cards/HeaderCard'

export default function GetPrepared({ tasks }) {
	const completedHandler = async (taskId) => {
		const response = await fetch('http://localhost:3000/api/update-status', {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ taskId: 1, date: '2023-03-24' })
		})

		if (response.ok) {
			console.log(`Task ${taskId} has been marked as completed`)
		} else {
			console.error(response.statusText)
		}
	}

	return (
		<>
			<h1>Get Prepared!</h1>
			<Image
				src="/figma/get-prepared.png"
				width={300}
				height={600}
				alt="get prepared challenge screenshot"
			/>
			<HeaderCard
				preHeaderText="Your challenges for:"
				header="Get prepared"
				percentage={75}
				textColor="black"
				pathColor="var(--main-lavendar)"
				trailColor="transparent"
				width={110}
				strokeWidth={10}
			/>
			<div className="main-container">
				<ChallengeCategoryList
					tasks={tasks}
					onCompleted={completedHandler}
				/>
			</div>
		</>
	)
}

export async function getServerSideProps(context) {
	const userId = 1
	const response = await fetch(
		`http://localhost:3000/api/get-prepared?userId=${userId}`
	)
	const tasks = await response.json()

	return {
		props: {
			tasks
		}
	}
}
