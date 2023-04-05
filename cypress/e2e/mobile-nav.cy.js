describe('Mobile NavBar Navigation', () => {
	it('should navigate from home to the challenges page, via the main circle indicator', () => {
		cy.visit('http://localhost:3000/home')

		cy.viewport('iphone-6')
		cy.wait(2000)

		cy.get('#__next > nav')
			.find('a')
			.each(($link) => {
				const href = $link.prop('href')
				cy.wrap($link).click().url().should('equal', href)
			})
	})
})