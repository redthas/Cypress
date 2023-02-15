// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('Texto_visible',(selector, texto) => {
    cy.get(selector).should("be.visible").type(texto).wait(1000)
    
})

Cypress.Commands.add('Bloque_ToolsQA',(nombre,email,adres,adres2) => {
    cy.get('#userName').should("be.visible").type(nombre).wait(1000)
    cy.get('#userEmail').should("be.visible").type(email).wait(1000)
    cy.get('#currentAddress').should("be.visible").type(adres).wait(1000)
    cy.get('#permanentAddress').should("be.visible").type(adres2).wait(1000)
    cy.get('#submit').should("be.visible").click()
        
})

Cypress.Commands.add('BloqueDos',(nombre,app,email,phone,dir,cyty,state,code,web,descrip) => {
    cy.xpath('//*[@id="contact_form"]/fieldset/div[1]/div/div/input').should("be.visible").type(nombre).
    wait(1000).tab().type(app).wait(1000).tab().type(email).wait(1000).tab().type(phone).wait(1000).
    tab().type(dir).wait(1000).tab().type(cyty).wait(1000)
    cy.get('.selectContainer > .input-group > .form-control').select(state).tab().
    wait(1000).type(code).tab().type(web).tab().wait(1000).click().tab().tab().type(descrip).wait(1000).screenshot().tab().click()
        
})
//