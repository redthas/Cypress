//para que funcionen los comandos
///<reference types="Cypress"/> 
require('cypress-xpath')
require('cypress-plugin-tab')
require('@4tw/cypress-drag-drop')


describe("Hooks Ejemplos", () =>{
    before(()=>{
        cy.visit("http://demo.seleniumeasy.com/basic-checkbox-demo.html")
        cy.title().should("eq","Selenium Easy - Checkbox demo for automation using selenium")
        cy.wait(1000)
    })

    it("test uno", () =>{ 
        cy.get('#isAgeSelected').check()
        cy.wait(1000)
    })

    it("test dos", () =>{ 
        cy.get('[type="checkbox"]').check()
        cy.wait(1000)
    })
    it("test tres", () =>{ 
        cy.get('[type="checkbox"]').uncheck()
        cy.wait(1000)
    })
})