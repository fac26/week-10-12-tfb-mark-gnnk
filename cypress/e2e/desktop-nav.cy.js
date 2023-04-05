describe('Desktop NavBar Navigation', () => {
	it('starting at home in desktop view, the top navbar should access all the links it displays', () => {
		cy.visit('http://localhost:3000/home')

		cy.viewport('macbook-11')
		cy.wait(2000)

		cy.get('#__next > div.TopBar_top-nav__GaLD6')
			.find('a')
			.each(($link) => {
				const href = $link.prop('href');
				cy.wrap($link)
					.click()
					.url()
					.should('equal', href);
			})
	})
})
