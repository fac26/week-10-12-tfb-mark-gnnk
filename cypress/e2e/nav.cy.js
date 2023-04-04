describe('Site Entrance', () => {
	it('should navigate from landing page into the app homepage', () => {
		cy.visit('http://localhost:3000/')

		cy.get('a[href*="home"]').click()

		cy.url().should('include', '/home')

		cy.get('h2').contains('doing great!')
	})
})
