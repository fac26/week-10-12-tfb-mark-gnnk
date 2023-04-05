import React from 'react'
import BackButton from 'components/UI/BackButton'
import styles from './DayNotArrivedModal.module.css'
import DatePrinter from 'components/layout/DatePrinter'

function DayNotArrivedModal() {
	return (
		<div className={styles.container}>
			<div className={styles.darkmodal}>
				<p>
					It&apos;s not&nbsp;
					{
						<DatePrinter
							type={'tomorrow'}
							formatString="EEEE"
						/>
					}
					&nbsp;yet.
				</p>

				<p>Come back tomorrow to try out some new challenges.</p>

				<BackButton />
			</div>
		</div>
	)
}

export default DayNotArrivedModal
