//para que funcionen los comandos
///<reference types="Cypress"/> 


require('cypress-xpath')
require('cypress-plugin-tab')
require('@4tw/cypress-drag-drop')


describe("Fixture", () =>{

    // before(()=>{
    //     cy.fixture("datosJson").then((data)=>{
    //         //this.data=data
    //         globalThis.data=data
    //         //solo un dato
    //     })
    // })
    


    it("Tets uno", () =>{ //Se usa para guardar un campo en especifio con una varias as("Nombre")
        
        cy.fixture("datosJson").then((dataArr) =>{
            dataArr.forEach(data => {
                const dnomb= data.nombre
                const demail= data.email
                const ddir1= data.dir1
                const ddir2= data.dir2
                
                cy.visit('https://demoqa.com/text-box')
                cy.title().should('eq',"DEMOQA").wait(1000)
                cy.get('#userName').should('be.visible').type(data.nombre).tab().type(data.email).
                tab().type(data.dir1).tab().type(data.dir2).wait(1000).tab().click()
                cy.log("beunas")

            })
        })


        
    })


})