//para que funcionen los comandos
///<reference types="Cypress"/> 
require('cypress-plugin-tab')

describe("Reto one", () =>{
    it("Clic Facilito", () =>{
        cy.visit('https://demoqa.com/webtables')
        cy.title().should('eq','DEMOQA')
        cy.wait(1000)
        cy.get('#searchBox').should("be.visible").type("Cierra")
        cy.wait(1000)
        cy.get('#searchBox').should("be.visible").clear()
        cy.wait(1000)
        cy.get('#addNewRecordButton').should("be.visible").click()
        cy.wait(1000)
        cy.get('#firstName').type("Daniel").tab().type("Giraldo").tab().
        type("dgiraldo@gmail.com").tab().type("24").tab().
        type("1000").tab().type("Antioquia").tab().click()
        cy.wait(1000)
        cy.get('#searchBox').should("be.visible").type("Daniel")
        cy.wait(1000)
        cy.get('#searchBox').should("be.visible").clear()
        cy.wait(1000)
        cy.get("#edit-record-4").should("be.visible").click()
        cy.get('#firstName').clear().type("Daniela").tab().type("Gir").tab().
        type("g.danielgi@gmail.com").tab().type("20").tab().
        type("10000").tab().type("Antioquia").tab().click()
        cy.wait(1000)
        cy.get("#delete-record-4").should("be.visible").click()


    
    
    })

})