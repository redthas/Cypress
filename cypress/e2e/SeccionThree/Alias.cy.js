//para que funcionen los comandos
///<reference types="Cypress"/> 
require('cypress-xpath')
require('cypress-plugin-tab')
require('@4tw/cypress-drag-drop')


describe("Reto two", () =>{
        it("Alias uno", () =>{ //Se usa para guardar un campo en especifio con una varias as("Nombre")
            cy.visit('https://testpages.herokuapp.com/styled/validation/input-validation.html')
            cy.title().should('eq','Input Validation')
            cy.wait(1000)

            cy.get('#firstname').should("be.visible").as("nom")
            cy.get("@nom").type("pedro")

        })


})