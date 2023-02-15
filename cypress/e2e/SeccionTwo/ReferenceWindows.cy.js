//para que funcionen los comandos
///<reference types="Cypress"/> 
require('cypress-xpath')
require('cypress-plugin-tab')


describe("Reto two", () =>{
   

        it("Windows propiedades charset", () =>{
            cy.viewport(550, 750)
            cy.visit('https://testsheepnz.github.io/random-number.html')
            cy.title().should('eq','The Number Game')
            cy.wait(1000)
            cy.document().should("have.property","charset").and("eq","UTF-8")

        })

        it.only("ValidaR URL", () =>{
            //cy.viewport(1550, 1000)
            cy.visit('https://testsheepnz.github.io/random-number.html')
            cy.title().should('eq','The Number Game')
            cy.wait(1000)
            cy.url().should("include","https://testsheepnz.github.io/random-number.html")

        })

        it("ValidaR URL", () =>{
            //cy.viewport(1550, 1000)
            cy.visit('https://temp-mail.org/es/')
            cy.wait(1000)
            cy.url().should("include","https://testsheepnz.github.io/random-number.html")

        })

})