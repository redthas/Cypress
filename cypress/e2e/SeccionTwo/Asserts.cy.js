//para que funcionen los comandos
///<reference types="Cypress"/> 
require('cypress-xpath')
require('cypress-plugin-tab')


describe("Reto two", () =>{

    it("Asserts", () =>{
        cy.visit('https://testingqarvn.com.es/')
        cy.title().should('eq','TestingQaRvn | Mundo del Testing')
        cy.wait(1000)
        cy.get('#et-top-navigation').should("be.visible").contains("Prácticas QA").click()
       //*[@id="withOptGroup"]/div/div[1]/div[2]
    
    })

    it("Asserts buscado", () =>{
        cy.visit('https://testingqarvn.com.es/practicas-qa/')
        cy.title().should('eq','Prácticas QA | TestingQaRvn')
        cy.wait(1000)
        cy.xpath('//*[@id="post-175"]/div/div/div/div[2]/div[4]').find('#et_pb_button et_pb_button_1 et_pb_bg_layout_light')
       //*[@id="withOptGroup"]/div/div[1]/div[2]
    
    })

    it("Asserts buscado con condicion", () =>{
        cy.visit('https://testingqarvn.com.es/practicas-qa/')
        cy.title().should('eq','Prácticas QA | TestingQaRvn')
        cy.wait(1000)
        cy.xpath('//*[@id="post-175"]/div/div/div/div[2]/div[4]/div[1]/div/a').should("be.visible").then((e)=>{
            cy.log(e.text())
            let texto = e.text()
            cy.log(texto)
            if(texto == "Datos Pessrsonales"){
                cy.log("Si lo encontro")
            }else{
                cy.log("No lo encontro :C")
            }


        })
    
    })

    it("Asserts buscado quitantole letra al texto", () =>{
        cy.visit('https://testingqarvn.com.es/practicas-qa/')
        cy.title().should('eq','Prácticas QA | TestingQaRvn')
        cy.wait(1000)
        cy.xpath('//*[@id="post-175"]/div/div/div/div[2]/div[4]/div[1]/div/a').should("be.visible").then((e)=>{
            cy.log(e.text())
            let texto = e.text()
            texto=texto.slice(1,50)
            cy.log(texto)
            


        })
    
    })

    it("Asserts contain.text y have.text", () =>{
        cy.visit('https://demoqa.com/text-box')
        cy.title().should('eq','DEMOQA')
        cy.wait(1000)
        cy.get('#userName').should("be.visible").type("Dani").tab().type("Gir@gmail.com")
        cy.get('#submit').should("be.visible").click().wait(1000)
        cy.get('#name').should("have.text","Name:Dani")
        cy.get('#output').should("contain.text","Dani")

        })
        it("Asserts have.text mas then con and", () =>{
            cy.visit('https://demoqa.com/text-box')
            cy.title().should('eq','DEMOQA')
            cy.wait(1000)
            cy.get('#userName').should("be.visible").type("Dani")
            cy.get('#userName').should("be.visible").and("have.value","Dani").then(()=>{
                cy.get('#userEmail').should("be.visible").type("Dani@gil.com")
                cy.get("#submit").should("be.visible").click()
            })          
        })
        
        it("Asserts have.text mas then con and negativo", () =>{
            cy.visit('https://demoqa.com/text-box')
            cy.title().should('eq','DEMOQA')
            cy.wait(1000)
            cy.get('#userName').should("be.visible").type("Dani")
            cy.get('#userName').should("be.visible").and("have.value","Dani").then(()=>{
                cy.get('#userEmail').should("not.be.visible").type("Dani@gil.com")
                cy.get("#submit").should("be.visible").click()
            })          
        })

        it.only("Asserts length", () =>{
            cy.visit('https://demoqa.com/webtables')
            cy.title().should('eq','DEMOQA')
            cy.wait(1000)
            cy.get("[role='gridcell']").should("be.visible").and("have.length",7)
        })
    
    


})