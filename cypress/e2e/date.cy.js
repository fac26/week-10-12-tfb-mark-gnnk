import { parseISO, format, addDays, isValid } from 'date-fns'

const date = new Date()

describe('DatePrinter can render today', () => {
	it("displays today's date in the correct format", () => {
		cy.visit('http://localhost:3000/days')
		cy.wait(1000)

		const today = format(date, 'EEEE do MMMM')

		cy.get('time').should('contain', today)
	})
})

describe('DatePrinter can render yesterday', () => {
	it("displays yesterday's date in the correct format", () => {
		cy.visit('http://localhost:3000/days')
		cy.wait(1000)

		const yesterday = addDays(date, -1)
		const yesterdayDate = format(yesterday, 'EEEE do MMMM')

		cy.get('div').should('have.class', 'DayItem_day__5kp2A').and('contain', yesterdayDate)
	})
})

describe('DatePrinter can render tomorrow', () => {
  it("displays tomorrow's date in the correct format", () => {
    cy.visit('http://localhost:3000/days')
    cy.wait(1000)

    const tomorrow = addDays(date, 1)
    const tomorrowDate = format(tomorrow, 'EEEE do MMMM')
    
    cy.get('div').should('have.class', 'DayItem_day__5kp2A').and('contain', tomorrowDate)
  })
})

