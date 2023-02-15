//para que funcionen los comandos
///<reference types="Cypress"/> 
require('cypress-xpath')
require('cypress-plugin-tab')
require('@4tw/cypress-drag-drop')


describe("Hooks Ejemplos", () =>{
    
    before(()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should("eq","OrangeHRM")
        cy.wait(1000)
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin").tab().type("admin123").tab().click().wait(1000)
    })

    it("test uno", () =>{ 
        cy.get(':nth-child(4) > .oxd-main-menu-item').click()
        cy.wait(2000)
        
    })
    // it("test dos", () =>{ 
    //     cy.get(':nth-child(2) > .oxd-main-menu-item').click()
    //     cy.wait(1000)
        
    // })

    after(()=>{
        cy.get('.oxd-userdropdown-tab').click().wait(2000)
        cy.get(':nth-child(4) > .oxd-userdropdown-link').click().wait(1000)
    })
})