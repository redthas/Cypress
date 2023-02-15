class ProyectoUno{
    
    VistPag(url){
        before(() =>{ 
            cy.visit(url)
            cy.title().should('eq','Selenium Easy - Input Form Demo with Validations')
            cy.wait(1000)

        })
    
    }
    testUno(){
        cy.title().should('eq','Selenium Easy - Input Form Demo with Validations')
        cy.wait(1000)
        cy.log("soy yo").wait(1000)
    }

        testDos(){
            cy.title().should('eq','Selenium Easy - Input Form Demo with Validations')
            cy.wait(1000)
        }

        testTres(){
            cy.title().should('eq','Selenium Easy - Input Form Demo with Validations')
            cy.wait(1000)
        }

}//final

export default ProyectoUno