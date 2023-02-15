//para que funcionen los comandos
///<reference types="Cypress"/> 

describe("Funciones para type ", () =>{
    it("Type --> ENTER", () =>{
        cy.visit('https://www.google.com/')
        cy.title().should('eq','Google')
        cy.log("welcomela")
        cy.wait(1500)
        //buscar elemento por selector
        cy.get("body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input")
        .type("hola weon {enter}")
        cy.get("#rso > div:nth-child(1) > div > div > div.aEkOAd > g-more-link > a > div").click()
        cy.wait(2000)
    })
})