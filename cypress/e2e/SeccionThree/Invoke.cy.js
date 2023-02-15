//para que funcionen los comandos
///<reference types="Cypress"/> 
require('cypress-xpath')
require('cypress-plugin-tab')
require('@4tw/cypress-drag-drop')


describe("Invoke", () =>{
        it("Invoke Text", () =>{ //Se usa para validar el texto
            cy.visit('https://testpages.herokuapp.com/styled/validation/input-validation.html')
            cy.title().should('eq','Input Validation')
            cy.wait(1000)
            cy.xpath("/html/body/div/p").invoke("text").as("info")
            cy.get("@info").should("contain","The information will be submitted to the server if it passes client side validation.")
            cy.xpath("/html/body/div/div[3]/form/label[1]").invoke("text").as("info2")
            cy.get("@info2").should("contain","First name:").get('#firstname').type("yolo")

        
        })

        it("Invoke estilos", () =>{ //
            cy.visit('https://testpages.herokuapp.com/styled/validation/input-validation.html')
            cy.title().should('eq','Input Validation')
            cy.wait(1000)
           
            cy.get("[for='firstname']").invoke("attr","style","color:blue; font-size:50px").wait(1000)
            //Ocultar elemento
            cy.get("[for='firstname']").invoke("hide","2s").wait(1000)
            cy.get("[for='firstname']").invoke("show","3s").wait(1000)

        
        })

        it("reto invoke", () =>{ //
            cy.visit('https://testpages.herokuapp.com/styled/validation/input-validation.html')
            cy.title().should('eq','Input Validation')
            
            cy.get('#surname').invoke("hide")
            cy.xpath("/html/body/div/div[3]/form/label[3]").invoke("hide").wait(1000)
            cy.get('#firstname').type("Dani").wait(1000).then(()=>{
                cy.get('#surname').invoke("show")
                cy.xpath("/html/body/div/div[3]/form/label[3]").invoke("show").wait(1000)
            })
            
        })

        it.only("Invoke src", () =>{ //
            cy.visit('http://demo.seleniumeasy.com/bootstrap-modal-demo.html')
            cy.title().should('eq','Selenium Easy Demo - Bootstrap Modal Demo to Automate')
            cy.xpath("/html/body/div[1]/div[1]/div[2]/a/img").invoke("attr","src").should("include","seleniumeasy.com/img/sponsored-by-CBT.png")
        })


})