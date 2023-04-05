describe('The progress bars correctly reflect the percentage of tasks completed', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000/challenges/get-healthy')
	})

	it('has accessed the get-healthy challenge page', () => {
		cy.url().should('include', '/get-healthy')
	})

	it('can find the task to select', () => {
		cy.get('#\\37 -category-3 > div > div')
	})

	it('is able to toggle the completion selector and render the task completed', () => {
		cy.get('#\\37').click()
		cy.get(
			'#__next > div.Layout_main__rFqb2 > div > div.main-container > ul > div > button:nth-child(2)'
		).click()
	})

	it('updates the progress bar to show a task has been completed', () => {
		cy.get(
			'#__next > div.Layout_main__rFqb2 > div > div.top-container.HeaderCard_container__STGvs > div:nth-child(2) > div > svg > text'
		).contains('33')
	})
})
