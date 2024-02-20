import Homepage from '../../support/pages/homepage/homepage'

describe('Testes da Homepage', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Criar um novo board', () => {
        Homepage.createNewBoard("teste")

        cy.url().should( "include", "/board")
    })

    it('Favoritar um board', () => {
        Homepage.createNewBoard("fav")
        cy.wait(2000)
        Homepage.goBack()
        Homepage.starBoard()

        cy.contains("My Starred").should("be.visible")
    })

    it('Criar 3 boards', () => {
        Homepage.createNewBoard("1")
        cy.wait(2000)
        Homepage.goBack()
        Homepage.createNewBoard("2")
        cy.wait(2000)
        Homepage.goBack()
        
        cy
            .get('[data-cy="board-item"]')
            .should(board => {
                expect(board).to.have.length(2)
                expect(board[0]).to.contain.text("1")
                expect(board[1]).to.contain.text("2")
            })
    })

    afterEach(() => {
        cy.wait(2000)
        Homepage.goBack()
        Homepage.reset("All")
    })
})