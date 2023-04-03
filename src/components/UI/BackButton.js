import { useRouter } from 'next/router'
import Button from '../../components/UI/Button'
import Image from 'next/image'

export default function BackButton() {
	const router = useRouter()

	function handleClick() {
		router.back()
	}

	return (
		<Button onClick={handleClick}>
			<Image
				src="/icons/return-back-button.svg"
				width={20}
				height={20}
			/>
		</Button>
	)
}
