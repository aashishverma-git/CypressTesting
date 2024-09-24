import { elements  } from "../../commonUtils/commonHelper"
describe('First cypress template', () => {
  let jsondata
    it('Opening page', () => {
      cy.visit(Cypress.env('prod_url'))
      cy.wait(5000)
      //cy.visit('')
      //cy.get(elements.search_bar).should('be.visible')
      //cy.wait(5000)
      //cy.get('#APjFqb').type('cypress automation{enter}')
      cy.fixture('example').then((data) =>{
        jsondata=data;
        cy.log(jsondata.email)
      });
      
      //cy.get('.FPdoLc > center > .gNO89b').click()
    })
  })