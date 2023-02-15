//para que funcionen los comandos
///<reference types="Cypress"/> 

describe("Ejemplo subir y bajar en una pagina", () =>{
    it("Bajar", () =>{
        cy.visit('https://testingqarvn.com.es/datos-personales/')
        cy.title().should('eq','Datos Personales | TestingQaRvn')
        cy.wait(1000)
        cy.get('#wsf-1-field-28').type('Hola {pagedown}')
        cy.wait(1000)
        cy.get('#wsf-1-field-24').type('Hola {pageup}')
    })

    it("Bajar", () =>{
        cy.visit('https://testingqarvn.com.es/datos-personales/')
        cy.title().should('eq','Datos Personales | TestingQaRvn')
        cy.wait(1000)
        cy.get('#wsf-1-field-28').type('Hola {pagedown}')
        cy.wait(1000)
        cy.get('#wsf-1-field-24').type('Hola {pageup}')
    })

    it("Bajar", () =>{
        cy.visit('https://testingqarvn.com.es/datos-personales/')
        cy.title().should('eq','Datos Personales | TestingQaRvn')
        cy.wait(1000)
        cy.get('#wsf-1-field-28').type('Hola {pagedown}')
        cy.wait(1000)
        cy.get('#wsf-1-field-24').type('Hola {pageup}')
    })

    it.only("Solo uno", () =>{
        cy.visit('https://testingqarvn.com.es/datos-personales/')
        cy.title().should('eq','Datos Personales | TestingQaRvn')
        cy.wait(1000)
        cy.get('#wsf-1-field-28').type('Hola {pagedown}')
        cy.wait(1000)
        cy.get('#wsf-1-field-24').type('Hola {pageup}')
    })
})