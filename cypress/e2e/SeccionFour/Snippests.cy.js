//para que funcionen los comandos
///<reference types="Cypress"/> 
require('cypress-xpath')
require('cypress-plugin-tab')
require('@4tw/cypress-drag-drop')


describe("Configuracion y uso de los Snippeets", () =>{
        it("Snnipet One", () =>{ //Se usa para validar el texto
            cy.visit('https://demoqa.com/text-box')
            cy.title().should('eq','DEMOQA')
            cy.wait(1000)
            
            cy.get('asda').should('be.visible').type('demo').wait(t)
        
        })

})