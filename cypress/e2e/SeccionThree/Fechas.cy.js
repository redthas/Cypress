//para que funcionen los comandos
///<reference types="Cypress"/> 
require('cypress-xpath')
require('cypress-plugin-tab')
require('@4tw/cypress-drag-drop')


describe("Reto two", () =>{
        it("Fechas", () =>{
            cy.visit('https://testingqarvn.com.es/calendarios/')
            cy.title().should('eq','Calendarios | TestingQaRvn')
            cy.wait(1000)
            // cy.xpath("//*[@id='wsf-1-field-79']").should("be.visible").type("09/03/2023").then(()=>{
            //     cy.xpath("//*[@id='wsf-1-field-79']").type('{enter}')
            // })
            cy.xpath("//*[@id='wsf-1-field-79']").should("be.visible").click().wait(1000)
            cy.xpath("/html[1]/body[1]/div[2]/div[1]/div[2]/table[1]/tbody[1]/tr[4]/td[7]/div[1]").should("be.visible").click()
            //cy.get('.range-slider').invoke("attr","value","88")
        
        })


})