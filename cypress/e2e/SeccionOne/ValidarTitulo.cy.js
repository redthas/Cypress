//para que funcionen los comandos
///<reference types="Cypress"/> 

describe("Validar titulo ", () =>{
    it("Test validar el título", () =>{
        cy.visit('https://demoqa.com/text-box')
        cy.title().should('eq','ToolsQA')
        cy.log("welcomela")
    })
})