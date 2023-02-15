//para que funcionen los comandos
///<reference types="Cypress"/> 

import ProyectoUno from '../../support/pageObjects/PrimerProyecto_PO/proyectoUno_po.cy'



require('cypress-xpath')
require('cypress-plugin-tab')
require('@4tw/cypress-drag-drop')


describe("Page objects Models", () =>{

    const master = new ProyectoUno()
    master.VistPag('http://demo.seleniumeasy.com/input-form-demo.html')

    Cypress.on('uncaught:exception', (err,Runnable) =>{
        return false
    })
    it("Tets uno", () =>{ //Se usa para guardar un campo en especifio con una varias as("Nombre")
        
        master.testDos()
        cy.log("trilogia")
    })
    it("Tets dos", () =>{ //Se usa para guardar un campo en especifio con una varias as("Nombre")
        
        master.testTres()
        cy.log("normal")
    })
    it.only("Tets tres", () =>{ //Se usa para guardar un campo en especifio con una varias as("Nombre")
        
        master.testUno()
        cy.log("beunas")
    })


})