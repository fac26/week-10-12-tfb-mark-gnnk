import '../styles/globals.css'

import Layout from 'components/layout/Layout'
import { UserProvider } from 'context/UserContext'
export default function App({ Component, pageProps }) {
	//userId should come from authentication
	const userId = 1
	return (
		<UserProvider userId={userId}>
			<Layout home>
				<Component {...pageProps} />
			</Layout>
		</UserProvider>
	)
}
