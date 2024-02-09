/// <reference types="cypress" />

beforeEach(() => {

  cy
    .visit('/board/83937910729')
})

it('Chaining commands', () => {

  cy
    .get('[data-cy="task"]')
    .should('be.visible')

});