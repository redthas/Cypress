//para que funcionen los comandos
///<reference types="Cypress"/> 
require('cypress-plugin-tab')

describe("Funcion Tab", () =>{
    it("Bajar", () =>{
        cy.visit('https://testingqarvn.com.es/prueba-de-campos-checkbox/')
        cy.title().should('eq','Prueba de campos Checkbox | TestingQaRvn')
        cy.wait(1000)
        cy.get('#wsf-1-field-29').type('Hola ').tab().type('Hola')
    })

})