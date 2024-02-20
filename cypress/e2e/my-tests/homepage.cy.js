import Homepage from '../../support/pages/homepage/homepage'

describe('Testes da Homepage', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Criar um novo board', () => {
        Homepage.createNewBoard("teste")

        cy.url().should( "include", "/board");
    })

    it('Favoritar um board', () => {
        Homepage.createNewBoard("fav")
        Homepage.goToHome()
        Homepage.starBoard()

        cy.contains("My Starred").should("be.visible")
    })

    afterEach(() => {
        Homepage.reset("All")
    })
})