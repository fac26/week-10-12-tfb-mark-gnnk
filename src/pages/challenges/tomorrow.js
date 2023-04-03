import Image from 'next/image'
import React, { useState } from 'react'
import DayNotArrivedModal from '../../components/modals/DayNotArrivedModal'

export default function Tomorrow(props) {
	const [showModal, setShowModal] = useState(false)

	//add this function after creating the Days and DateCard component
	// const handleCardClick = () => {
	// 	const today = new Date();
	// 	const tomorrow = new Date(today);
	// 	tomorrow.setDate(today.getDate() + 1);

	// 	const dayClicked = props.days.find(day => day.date === tomorrow.toISOString().slice(0, 10));

	// 	if (dayClicked) {
	// 		// display Modal when the user clicks on the card for tomorrow's day
	// 	} else {
	// 		setShowModal(true);
	// 	}
	// };

	//test Modal with button that calls the setShowModal function to set the showModal state to true
	const handleOpenModal = () => {
		setShowModal(true)
	}
	//end of testing Modal

	const handleCloseModal = () => {
		setShowModal(false)
	}

	return (
		//test the Modal
		//button that calls the setShowModal function
		// to set the showModal state to true
		<div>
			{/* <div>
				<h1>Tomorrow</h1>
				<button onClick={handleOpenModal}>Open Modal</button>
				{showModal && <DayNotArrivedModal onClose={handleCloseModal} />}
			</div> */}

			<h1>Tomorrow&apos; challenges</h1>
			<Image
				src="/figma/tomorrow.png"
				width={300}
				height={600}
				alt="yesterday screenshot"
			/>
		</div>
	)
}
