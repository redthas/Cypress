//para que funcionen los comandos
///<reference types="Cypress"/> 
require('cypress-xpath')
require('cypress-plugin-tab')
require('@4tw/cypress-drag-drop')


describe("Reto two", () =>{

        it("Agarrar y Arrastrar", () =>{
            cy.visit('https://the-internet.herokuapp.com/drag_and_drop')
            cy.title().should('eq','The Internet')
            cy.wait(1000)
            cy.get('#column-a').should('be.visible').drag("#column-b",{force:true})
        })

        it("Agarrar y Arrastrar 2", () =>{
            cy.visit('https://demoqa.com/droppable')
            cy.title().should('eq','DEMOQA')
            cy.wait(1000)
            cy.get('#draggable').should('be.visible').drag("#droppable",{force:true})
        })

        it("Mover entre dos pags", () =>{
            cy.visit('https://www.way2automation.com/')
            cy.title().should('eq','Get Online Selenium Certification Course | Way2Automation')
            cy.wait(1000)
            //cy.get('#draggable').should('be.visible').drag("#droppable",{force:true})
        })

        it("Mover entre dos pags", () =>{
            cy.visit('https://firmaseguro.co/')
            cy.title().should('eq','Firma Seguro – Firma digital de documentos')
            cy.wait(1000)
            cy.contains("Contáctanos").trigger('mouseover').wait(1000)
            cy.contains("Cotización").click({force:true})
            cy.wait(1000)
            cy.contains("Empieza Gratis").invoke("removeAttr","target").click()

        })
        it.only("Slider", () =>{
            cy.visit('https://demoqa.com/slider')
            cy.title().should('eq','DEMOQA')
            cy.wait(1000)
            cy.get('.range-slider').invoke("attr","value","88")
          
        })


})