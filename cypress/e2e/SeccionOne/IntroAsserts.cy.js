//para que funcionen los comandos
///<reference types="Cypress"/> 
require('cypress-plugin-tab')

describe("Introducción a los assert", () =>{
    it("Bajar", () =>{
        cy.visit('https://testingqarvn.com.es/prueba-de-campos-checkbox/')
        cy.title().should('eq','Prueba de campos Checkbox | TestingQaRvn')
        cy.wait(1000)
        // para saber si el campo es visible
        cy.get('#wsf-1-field-29').should('be.visible').type('Hola ')
        cy.get('#wsf-1-field-30').should('be.visible').should('be.enabled').type('Hola 2 ')

    })

})