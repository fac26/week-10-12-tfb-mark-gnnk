import Circle from 'components/cards/ProgressCircle'
import Image from 'next/image'
import Link from 'next/link'
import DayCard from 'components/days/DayCard'


export default function Home() {
	return (
		<>
			<Link href="/home">Ready? Let&rsquo;s go</Link>
			<Image
				src="/figma/landing.png"
				width={300}
				height={600}
				alt="days screenshot"
			/>

			<DayCard type="yesterday"  />
			<DayCard type="today"  />
			<DayCard type="tomorrow"  />
			
		</>
	)
}

