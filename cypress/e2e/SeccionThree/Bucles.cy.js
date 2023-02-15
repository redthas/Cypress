//para que funcionen los comandos
///<reference types="Cypress"/> 
require('cypress-xpath')
require('cypress-plugin-tab')
require('@4tw/cypress-drag-drop')


describe("Reto two", () =>{
        it("for ejemplo", () =>{
            for(let i = 0; i <= 10; i++){
                cy.log("Numero:",i)
            }
        
        })

        it("Each uno", () =>{
            cy.visit('https://demoqa.com/webtables')
            cy.title().should('eq','DEMOQA')
            cy.wait(1000)
            cy.get("[role='gridcell']").each(($el,index,$list)=>{
                //cy.log(index)
                cy.log($el.text())
                //cy.log($list)
            })
        })

        it("Each dos", () =>{
            cy.visit('https://demoqa.com/webtables')
            cy.title().should('eq','DEMOQA')
            cy.wait(1000)
            cy.get("[role='gridcell']").each(($el,index,$list)=>{
                let nombre = $el.text()
                if (nombre.includes("Kierra")) {
                    cy.wait(1000)
                    cy.wrap($el).click()
                }
            })
        })

        it.only("Agregar varios elementos por un ciclo", () =>{
            cy.visit('https://demoqa.com/webtables')
            cy.title().should('eq','DEMOQA')
            cy.wait(1000)
            for (let i = 0; i<=3; i++) {
                cy.get('#addNewRecordButton').click()
                cy.log(i)
                let a = i
                cy.get('#firstName').type("Dani").tab().type("gil").tab().type("gil@gmail.com").tab()
                .type('2' + a).tab().type("22222" + (a+a)).tab().type("Antioquia").tab().click()
                
                
            }
            
        })

})