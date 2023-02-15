//para que funcionen los comandos
///<reference types="Cypress"/> 
require('cypress-xpath')
require('cypress-plugin-tab')


describe("Reto two", () =>{

        it("Cargar archivos", () =>{
            cy.visit('https://demoqa.com/automation-practice-form')
            cy.title().should('eq','DEMOQA')
            cy.wait(1000)
            cy.get('#uploadPicture').should('be.visible').selectFile('cypress/imgs/font.png');
        })

})