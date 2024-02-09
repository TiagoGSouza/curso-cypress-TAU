import Homepage from '../../support/pages/homepage/homepage'

describe('Testes utilizando chaining commands', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Criacao de board', () => {
        Homepage.createNewBoard('newBoard')
        cy.url().should('include', '/board/')
    })

    //clean up
    afterEach(() => {
        Homepage.reset('All')
    })
})