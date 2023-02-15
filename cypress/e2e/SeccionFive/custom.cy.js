//para que funcionen los comandos
///<reference types="Cypress"/> 
require('cypress-xpath')
require('cypress-plugin-tab')
require('@4tw/cypress-drag-drop')


describe("Comandos Personalizados", () =>{
    before(()=>{
        cy.log("Se inicia antes que todo solo una vez")
        cy.wait(1000)
        cy.visit('http://demo.seleniumeasy.com/input-form-demo.html')
        
    })

    it("demo custom uno", () =>{ 
        cy.Texto_visible("#userName","Juan")
    })
    it("Custom por bloques", () =>{ 
        cy.Bloque_ToolsQA("Juan","juan@gmai.com","ashjdhajsd","shjdhajsd")
    })

    it.only("Custom reto", () =>{ 
        cy.BloqueDos("Daniel", "gil", "gil@gmail.com","3220412321","calle 212","Casa","California",
        "1234124","qawsq.com","pruebitas")
        cy.screenshot()
    })


})