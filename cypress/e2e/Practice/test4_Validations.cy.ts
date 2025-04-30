describe('Browser Element Validations', () => {


    it("First Tc: Browser Elements validation", () => {


        cy.visit('https://qavbox.github.io/demo/signup/')

        cy.get('#username').type("asif").invoke('val').then((myVal: any) => {
            cy.log(myVal)
        })

        cy.get('#tel').type("35445400050").should('have.value','35445400050')

        //validation of check (1 method)
        cy.get('[value="automationtesting"]').check().should('be.checked')

        //validation of check (2 method) [invoking Properties and verifying the status of check ]
        cy.get('[value="java"]').invoke('prop','checked').then((IsCheck)=>{
            cy.log(IsCheck) //false
        })

        //validation of check (2 method) [invoking Properties and verifying the status of check after click()]
        cy.get('[value="java"]').click().invoke('prop','checked').then((IsCheck)=>{
            cy.log(IsCheck) //true
        })

        //fetching the link by prop
        cy.contains('Tutorials!').invoke('prop','href').then((link)=>{
            cy.log("Link:"+link)
        })



    })
})