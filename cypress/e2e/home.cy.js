describe('Test Fire', () => {
  beforeEach(() => {
    cy.visit('https://demo.testfire.net/')
  })
  it('Goes to body and search items', () => {
    cy.get('body')
    cy.get('#LinkHeader2').contains('PERSONAL')
    cy.get('#MenuHyperLink1').contains('Deposit Product')
  })

  it('Entering data into Search bar', () => {
    cy.get('#query').type('testing for devsecops')
    cy.contains('Go').click()
  })

  it('Entering data into Feedback', () => {
    cy.get('#HyperLink4').click()
    cy.contains('Your Name:')
    cy.get(':nth-child(2) > [valign="top"] > input').type('Anmol')
    cy.contains('Your Email Address:')
    cy.get(':nth-child(3) > [valign="top"] > input').type('anmol@gmail.com')
    cy.contains('Subject:')
    cy.get(':nth-child(4) > [valign="top"] > input').type('filling the form')
    cy.get('textarea').type('I m filling this form via cypress test script to check if we are able to fill it from here or not')
    cy.contains('Submit').click()

  })

})
