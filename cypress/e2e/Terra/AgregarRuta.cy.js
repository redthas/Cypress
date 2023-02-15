//para que funcionen los comandos
///<reference types="Cypress"/> 
require('cypress-xpath')
require('cypress-plugin-tab')
require('@4tw/cypress-drag-drop')


describe("AgregarRutas - Recorrido", () =>{
    
    before("",()=>{
        cy.visit("https://tpl.terra-qa.app/?#/login")
        cy.title().should("eq","Iniciar sesión | undefined").log("login terra normal")
        cy.wait(1000)
        cy.xpath("//*[@id='user.username']").should("be.visible").type("admin").tab()
        .type("123456789").tab().click()
    })

    it("test uno", () =>{ 
        
        cy.wait(2000)
        
    })
    // it("test dos", () =>{ 
    //     cy.get(':nth-child(2) > .oxd-main-menu-item').click()
    //     cy.wait(1000)
        
    // })

   
})