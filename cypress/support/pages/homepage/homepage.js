const el = require('./elements').ELEMENTS

class Homepage {
    goToHome(){
        cy.visit('/')
    }
    createNewBoard(board){
        cy.get(el.newBoard).click()
        cy.get(el.newBoardInput).type(board)
        cy.get(el.newBoardCreate).click()
    }

    starBoard(){
        cy
            .get(el.boardsStars)
            .eq(0)
            .click({force: true})
    }

    reset(element){
        cy
            .get('#tools')
            .contains(element)
            .click({force: true})
        //returns to homepage
        cy.visit('/')
    }
}

export default new Homepage();