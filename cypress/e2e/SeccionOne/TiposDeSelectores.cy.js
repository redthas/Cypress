//para que funcionen los comandos
///<reference types="Cypress"/> 
require('cypress-plugin-tab')
require('cypress-xpath')

describe("Reto one", () =>{
    it("Selector por id", () =>{
        cy.visit('https://demoqa.com/text-box')
        cy.title().should('eq','DEMOQA')
        cy.wait(1000)
        cy.get('#userName').should("be.visible").type("Cierra")
        cy.wait(1000)
        cy.get('#userEmail').should("be.visible").type("demo@gmail.com")   

    })

    it("Selector por Atributo", () =>{
        cy.visit('https://demoqa.com/text-box')
        cy.title().should('eq','DEMOQA')
        cy.wait(1000)
        cy.get("[placeholder='Full Name']").should("be.visible").type("Dan")  
        
    })

    it.only("Selector por Xpath", () =>{
        cy.visit('https://demoqa.com/text-box')
        cy.title().should('eq','DEMOQA')
        cy.wait(1000)
        cy.get("[placeholder='Full Name']").should("be.visible").type("Dan")  
        
    })

})