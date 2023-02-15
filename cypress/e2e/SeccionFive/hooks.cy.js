//para que funcionen los comandos
///<reference types="Cypress"/> 
require('cypress-xpath')
require('cypress-plugin-tab')
require('@4tw/cypress-drag-drop')


describe("Navegacion", () =>{
    before(()=>{
        cy.log("Se inicia antes que todo solo una vez")
        cy.wait(1000)
    })

    beforeEach(()=>{
        cy.log("Se Repite en cada uno de los test")
        cy.wait(1000)
    })

    afterEach(()=>{
        cy.log("Se hace al final de todos los test")
        cy.wait(1000)
    })

    after(()=>{
        cy.log("Ultimo ciclo --  final de todo")
        cy.visit('https://demoqa.com')
        cy.wait(1000)
    })

    it("test uno", () =>{ 
        cy.log("test uno")
        cy.wait(1000)
    })

    it("test dos", () =>{ 
        cy.log("test dos")
        cy.wait(1000)
    })
    it("test tres", () =>{ 
        cy.log("test tres")
        cy.wait(1000)
    })
})