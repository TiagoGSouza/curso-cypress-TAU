const el = require('./elements').ELEMENTS

class Homepage {
    createNewBoard(board){
        cy.get(el.newBoard).click()
        cy.get(el.newBoardInput).type(board)
        cy.get(el.newBoardCreate).click()
    }

    reset(element){
        cy.get('#tools')
        .contains(element)
        .click({force: true})
        //returns to homepage
        cy.visit('/')
    }
}

export default new Homepage();