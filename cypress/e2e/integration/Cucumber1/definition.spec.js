import { Given, And, When, Then } from 'cypress-cucumber-preprocessor/steps';  

Given('Abir el navegador principal',()=>{
    cy.visit('https://demoqa.com/text-box')
})

When('Cargando nombre',()=>{
    cy.get('#userName').should("be.visible").type('Dani').wait(500)

})

When('Cargando email',()=>{
    cy.get('#userEmail').should("be.visible").type('Dani').wait(500)

})


And('Cargando adrres2',()=>{
    cy.get('#currentAddress').should("be.visible").type('Dani').wait(500)

})

Then('Validar el nombre de la Página',()=>{
    cy.title().should('eq',"ToolsQA").type('Dani').wait(500)

})