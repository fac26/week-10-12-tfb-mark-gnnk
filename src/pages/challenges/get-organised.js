import Image from 'next/image'
import HeaderCard from 'components/cards/HeaderCard'
export default function GetOrganized({ tasks }) {
	console.log(tasks)
	return (
		<>
			<h1>Get Organized!</h1>
			<Image
				src="/figma/get-organised.png"
				width={300}
				height={600}
				alt="get organized challenge screenshot"
			/>
			<HeaderCard
				preHeaderText="Your challenges for:"
				header="Get organised"
				percentage={75}
				textColor="black"
				pathColor="var(--main-lavendar)"
				trailColor="transparent"
				width={110}
				strokeWidth={10}
			/>
			<ul>
				{tasks.map((task) => (
					<li
						key={task.id}
						id={task.id}>
						<h2>{task.name}</h2>
						<p>{task.category_name}</p>
					</li>
				))}
			</ul>
		</>
	)
}

export async function getServerSideProps(context) {
	//const userId = context.req.session.userId

	const userId = 1
	// Fetch the tasks data for the user from the API endpoint
	const response = await fetch(
		`http://localhost:3000/api/get-organised?userId=${userId}`
	)
	const tasks = await response.json()
	console.log(tasks, ' getOragnised.js')

	// Pass the tasks data as a prop to the page component
	return {
		props: {
			tasks
		}
	}
}
