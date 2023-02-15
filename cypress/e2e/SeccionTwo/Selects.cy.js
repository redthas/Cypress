//para que funcionen los comandos
///<reference types="Cypress"/> 
require('cypress-xpath')
require('cypress-plugin-tab')


describe("Reto two", () =>{
    it("CheckBox", () =>{
        cy.visit('https://demoqa.com/select-menu')
        cy.title().should('eq','DEMOQA')
        cy.wait(1000)
        cy.xpath("//*[@id='oldSelectMenu']").should("be.visible").select("White")
        cy.wait(1000)
        cy.xpath("//*[@id='withOptGroup']/div/div[1]").should("be.visible").click()
        cy.wait(1000)
       //*[@id="withOptGroup"]/div/div[1]/div[2]
    
    })

    it("CheckBox", () =>{
        cy.visit('https://www.google.com/')
        cy.title().should('eq','Google')
        cy.wait(1000)
        cy.get('.gLFyf').should("be.visible").type("Ferrari").type("{enter}")
        cy.get('.MUFPAc > :nth-child(2) > a').click()
       //*[@id="withOptGroup"]/div/div[1]/div[2]
    
    })

    it("Multiselect", () =>{
        cy.visit('https://demoqa.com/select-menu')
        cy.title().should('eq','DEMOQA')
        cy.wait(1000)
        cy.get('#cars').should("be.visible").select(["Audi","Saab","Volvo"])
        //cy.get('.MUFPAc > :nth-child(2) > a').click()
       //*[@id="withOptGroup"]/div/div[1]/div[2]
    
    })

    it.only("Multiselect con promesa", () =>{
        cy.visit('https://demoqa.com/select-menu')
        cy.title().should('eq','DEMOQA')
        cy.wait(1000)
        cy.get('#cars').should("be.visible").select(["Audi","Saab","Volvo"]).then(()=>{
            cy.get(':nth-child(7) > .col-md-6 > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3').click().wait(2000)
        })
        //cy.get('.MUFPAc > :nth-child(2) > a').click()
       //*[@id="withOptGroup"]/div/div[1]/div[2]
    
    })

})