import React from 'react'
import BackButton from 'components/UI/BackButton'
import DarkModal from 'components/UI/DarkModal'
import DatePrinter from 'components/Layout/DatePrinter'

function DayNotArrivedModal(props) {
	return (
		<DarkModal>
			<strong>
				<p>
					It&apos;s not{' '}
					{
						<DatePrinter
							type={'tomorrow'}
							formatString="EEEE"
						/>
					}{' '}
					yet.
				</p>
			</strong>
			<br />
			<p>Come back tomorrow to try out some new challenges.</p>
			<br />
			<br />
			<BackButton />
		</DarkModal>
	)
}

export default DayNotArrivedModal
