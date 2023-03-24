import Link from 'next/link'
//import logo component

export default function SignIn() {
	return (
		<div>
			{/* logo component */}
			<form>
				<div>
					<label>
						Username
						<input
							type="text"
							id="username"
						/>
					</label>
				</div>
				<div>
					<label>
						Password
						<input
							type="password"
							id="password"
						/>
					</label>
				</div>
				<Link href="home">Sign In</Link>
			</form>
		</div>
	)
}
