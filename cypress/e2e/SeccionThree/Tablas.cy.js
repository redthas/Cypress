//para que funcionen los comandos
///<reference types="Cypress"/> 
require('cypress-xpath')
require('cypress-plugin-tab')
require('@4tw/cypress-drag-drop')


describe("Elemento de una tabla", () =>{
        it("Elementos hijos", () =>{
            cy.visit('http://demo.seleniumeasy.com/table-records-filter-demo.html')
            cy.title().should('eq','Selenium Easy - Table Data Filter Demo').wait(1000)
            cy.get(".btn-group").children(".btn-success").should("contain","Green").click().wait(1000)
            cy.get(".btn-group").children(".btn-danger").should("contain","Red").click()
            
        })

        it("Seleccionar por medio de EQ", () =>{
            cy.visit('http://demo.seleniumeasy.com/table-records-filter-demo.html')
            cy.title().should('eq','Selenium Easy - Table Data Filter Demo').wait(1000)
            cy.get("[type='button']").eq(2).should("contain","Orange").click().wait(1000)
            cy.get("[type='button']").eq(4).should("contain","All").click().wait(1000)
        
        })

        it("Seleccionar por filter", () =>{
            cy.visit('http://demo.seleniumeasy.com/table-records-filter-demo.html')
            cy.title().should('eq','Selenium Easy - Table Data Filter Demo').wait(1000)
            cy.get("[type='button']").filter(".btn-warning").should("contain","Orange").click().wait(1000)
            cy.get("[type='button']").filter(".btn-danger").should("contain","Red").click().wait(1000)
            cy.get("[type='button']").filter(".btn-success").should("contain","Green").click().wait(1000)
        })

        it("Seleccionar por find", () =>{
            cy.visit('http://demo.seleniumeasy.com/table-records-filter-demo.html')
            cy.title().should('eq','Selenium Easy - Table Data Filter Demo').wait(1000)
            cy.get(".btn-group").find(".btn-warning").should("contain","Orange").click().wait(1000)
            cy.get(".btn-group").find("[data-target='pagado']").should("contain","Green").click().wait(1000)
        })

        it("Seleccionar por first", () =>{
            cy.visit('http://demo.seleniumeasy.com/table-records-filter-demo.html')
            cy.title().should('eq','Selenium Easy - Table Data Filter Demo').wait(1000)
            cy.get(".btn-group").find("button").first().click().wait(1000)
            cy.get(".btn-group").find("button").last().click().wait(1000)
        })

        it("Seleccionar por los elementos siguientes NextAll", () =>{
            cy.visit('http://demo.seleniumeasy.com/table-records-filter-demo.html')
            cy.title().should('eq','Selenium Easy - Table Data Filter Demo').wait(1000)
            cy.get("[type='button']").should("contain","Green").wait(1000)
            cy.get("[type='button']").should("contain","Green").nextAll().should("have.length",4)
        })

        it("Reto tablas", () =>{
            cy.visit('http://demo.seleniumeasy.com/table-records-filter-demo.html')
            cy.title().should('eq','Selenium Easy - Table Data Filter Demo').wait(1000)
            cy.get("[type='button']").eq(4).should("contain","All").click({force:true}).wait(1000)
            cy.get("[type='checkbox']").check({force:true})
        })

        it("Buscar todos los datos de una tabla", () =>{
            cy.visit('http://demo.seleniumeasy.com/table-sort-search-demo.html')
            cy.title().should('eq','Selenium Easy - Tabel Sort and Search Demo').wait(1000)
        
            const datos=[]

            cy.get(".odd td, .even td").each(($el,index,$list)=>{
                datos[index]=$el.text()
            }).then(()=>{
                for(let i = 0; i <= datos.length;i++){
                    cy.log(datos[i])
                }

            })

        })

        it("sumar todos los datos de una tabla", () =>{
            cy.visit('http://demo.seleniumeasy.com/table-sort-search-demo.html')
            cy.title().should('eq','Selenium Easy - Tabel Sort and Search Demo').wait(1000)
        
            const datos=[]
            let cantidad = 0

            cy.get(".odd td, .even td").each(($el,index,$list)=>{
                datos[index]=$el.text()
            }).then(()=>{
                for(let i = 0; i <= datos.length;i++){
                    //cy.log(datos[i])
                    if (Number(datos[i])) {
                        cantidad+=Number(datos[i])
                    }
                }
                cy.log("La cantidad total es:" + cantidad)
                //expect(cantidad).eq(202)
                expect(cantidad).to.eq(394)


            })



        })

        it.only("Valor de un campo en especifico", () =>{
            cy.visit('http://demo.seleniumeasy.com/table-sort-search-demo.html')
            cy.title().should('eq','Selenium Easy - Tabel Sort and Search Demo').wait(1000)
        
            const campo = cy.get('tbody > :nth-child(7) > :nth-child(2)')
           

            campo.each(($el,index,$list)=>{
                const dato=$el.text()
                cy.log(dato)
                if (dato.includes("Javascript Developer")) {
                    campo.eq(index).next().next().then((age)=>{
                        const edad=age.text()
                        cy.log(edad)
                        cy.log("La edad de la persona es:"+ edad)
                        expect(edad).to.equal('39')

                    })
                }
                  
                


            })
        })

})