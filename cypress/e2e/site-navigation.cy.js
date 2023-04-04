describe('Site Entrance', () => {
	it('should navigate from landing page into the app homepage', () => {
		cy.visit('http://localhost:3000/')

		cy.get('a[href*="home"]').click()

		cy.url().should('include', '/home')

		cy.get('h2').contains('doing great!')
	})
})

// should check the date to ensure correct date rendered
// asking for 4 will error with more/less?
describe('Homepage to Challenges', () => {
	it('should navigate from home to the challenges page, via the main circle indicator', () => {
		cy.visit('http://localhost:3000/home')

		cy.get('.main-container a[href="/challenges/today"]').click()

		cy.url().should('include', '/challenges/today')

		cy.get('h3').should(($h3s) => {
			expect($h3s).to.have.lengthOf.at.least(4)
		})
	})
})

describe('Homepage to Calendar view', () => {
	it('should navigate from home to the calendar view page, via the main circle indicator', () => {
		cy.visit('http://localhost:3000/home')

		cy.get('.main-container a[href="/days"]').click()

		cy.url().should('include', '/days')

		cy.get('time').should(($timess) => {
			expect($timess).to.have.lengthOf.at.least(3)
		})
	})
})
