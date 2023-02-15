//para que funcionen los comandos
///<reference types="Cypress"/> 
require('cypress-xpath')
require('cypress-plugin-tab')
require('@4tw/cypress-drag-drop')


describe("Navegacion", () =>{

    let t= 1000
        it("back y forward and reload", () =>{ //Se usa para validar el texto
            cy.visit('https://demoqa.com')
            cy.title().should('eq','DEMOQA')
            cy.wait(1000)

            cy.get(':nth-child(1) > :nth-child(1) > .avatar').should('be.visible').click().wait(t)
            cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click().wait(t)
            
            cy.go("back").go("back").go("forward").go("forward")
            cy.get('#userName').should('be.visible').type('buenas').wait(t)
            cy.reload()
            
        })

})