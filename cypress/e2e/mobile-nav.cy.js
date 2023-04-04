// Home NavBar usage

describe('Navbar from Home to Challenges', () => {
	it('should navigate from home to the challenges page, via the main circle indicator', () => {
		cy.visit('http://localhost:3000/home')

		cy.viewport('iphone-6')

		cy.get('.mobile-nav')
			.find('a')
			.each(($link) => {
				const href = $link.prop('href')
				cy.wrap($link).click().url().should('equal', href)
			})
	})
})

describe('Mobile navigation', () => {
	beforeEach(() => {
		cy.viewport(375, 667) // Set the viewport to a mobile size
		cy.visit('http://localhost:3000/home') // Visit a page that includes the MobileNav component
	})

	it('navigates to the correct pages', () => {
		const navLinks = [
			{ href: '/home', activePath: '/home', icon: '/icons/home.png' },
			{
				href: '/challenges/today',
				activePath: '/today',
				icon: '/icons/day-tasks.png'
			},
			{
				href: '/add-task',
				activePath: '/add-task',
				icon: '/icons/add-task.png'
			},
			{ href: '/days', activePath: '/days', icon: '/icons/history.png' },
			{
				href: '/avatars',
				activePath: '/avatars',
				icon: '/icons/to-avatars.png'
			}
		]

		navLinks.forEach((link) => {
			cy.get(`a[href="${link.href}"]`).click({ multiple: true })
			cy.url().should('include', link.activePath)
			cy.get(`img[src="${link.icon}"]`).should('be.visible')
		})
	})

	it('should have the correct active state for the current page', () => {
		const navLinks = [
			{ href: '/home', activePath: '/home', icon: '/icons/home.png' },
			{
				href: '/challenges/today',
				activePath: '/today',
				icon: '/icons/day-tasks.png'
			},
			{
				href: '/add-task',
				activePath: '/add-task',
				icon: '/icons/add-task.png'
			},
			{ href: '/days', activePath: '/days', icon: '/icons/history.png' },
			{
				href: '/avatars',
				activePath: '/avatars',
				icon: '/icons/to-avatars.png'
			}
		]

		navLinks.forEach((link) => {
			cy.get(`a[href="${link.href}"]`).click()
			cy.get(`img[src="${link.icon}"]`).parent().should('have.class', 'active')
		})
	})
})
