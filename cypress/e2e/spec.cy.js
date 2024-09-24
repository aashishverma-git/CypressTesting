describe('template spec', () => {
  it('passes', () => {
    cy.visit(Cypress.env('dev_url'))
    cy.get('#APjFqb').type('cypress automation{enter}')
    //cy.get('.FPdoLc > center > .gNO89b').click()
  })
})