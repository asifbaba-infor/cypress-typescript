describe('Elements Selections', () => {


    it("First Tc:  Elements Single Selection", () => {


        cy.visit('https://qavbox.github.io/demo/signup/')

        //one way
        cy.get('[name="sgender"]').select("Male").should('have.value', 'male') //selection based on 'text'

        //second  way
        cy.get('[name="sgender"]').select("female").invoke('val').then((value: any) => {  //selection based on 'value'
            cy.log(value)
        })

        //another  way
        cy.get('[name="sgender"]').select("na").find('option:selected').invoke('text').then((selectedText: any) => {  //selection based on 'value'
            cy.log(selectedText) //log "Not Applicable"
        })

    })

    it("Second Tc:  Elements Multiple Selection", () => {


        cy.visit('https://qavbox.github.io/demo/signup/')

        //multi Selection
        cy.get('#tools').select(["Cypress", "Postman", "JMeter"]).invoke('val').then((multiSelect: any) => {
            cy.log(multiSelect) //log[cypress, postman, jmeter]
        })

        //multi Selection(invoking val)
        cy.get('#tools').select(["Cypress", "Postman", "JMeter"]).find('option:selected').each(($el) => {
            cy.wrap($el).invoke('val').then((toolText: any) => {
                cy.log(toolText) // logs value singlely -> 1st "cypress", 2nd "postman" & 3rd "jmeter"
            })
        })

        //multi Selection(invoking text)
        cy.get('#tools').select(["Cypress", "Postman", "JMeter"]).find('option:selected').each(($el) => {
            cy.wrap($el).invoke('text').then((toolText: any) => {
                cy.log(toolText) // logs text() singlely -> 1st "Cypress", 2nd "Postman" & 3rd "Jmeter"
            })
        })

        //multi Selection assertion based on values
        cy.get('#tools').select(['Cypress', 'Postman', 'JMeter']).invoke('val').should('deep.equal', ['cypress', 'postman', 'jmeter'])

    })


    it("Third Tc:  Elements  validation Multiple Selection", () => {


        cy.visit('https://qavbox.github.io/demo/signup/')

        //multi Selection
        cy.get('#tools').select(["Cypress", "Postman", "JMeter"])

        //one way(validation of selected list)
        cy.contains('Cypress').invoke('prop', 'selected').should('eq', true)

        //second way(validation of selected list)
        cy.get('#tools').contains('Postman').should('be.selected')

        //another way(validation of selected list text)
        cy.get('#tools').find('option:selected').then($options => {
            const selectedTexts = Array.from($options)
                .map(opt => (opt as HTMLOptionElement).textContent?.trim())
                .filter(Boolean); // remove any undefined/null
            expect(selectedTexts).to.include.members(['JMeter']);
        });


        //one way(validation of not selected list)
        cy.contains('Selenium').invoke('prop', 'selected').should('eq', false)

        //another way(validation of not selected list)
        cy.get('#tools').contains('Jenkins').should('not.be.selected')



    })



})