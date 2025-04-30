describe('Contains() Method', () => {


    it("First Tc:  Contains()", () => {

        cy.visit('https://qavbox.github.io/demo/signup/')

        //one way
        cy.contains('Full Name')  //searchs from root of the dom

        // //second  way
        cy.get('#regform').contains('Full Name') //searchs within the #regform

    })

    it("second Tc:  Contains() options", () => {

        cy.visit('https://qavbox.github.io/demo/signup/')

        //one way
        cy.contains('full name', { matchCase: false })  //searchs from root of the dom, ignores the case sensitivity

        // //second  way
        cy.get('#regform').contains('full name', { matchCase: false }) //searchs within the #regform, ignores the case sensitivity

    })

    it("Third Tc:  Contains(Selector,content) ", () => {

        cy.visit('https://qavbox.github.io/demo/listitems/')

        cy.contains('List Item 1').should('have.length',1)  //searchs from root of the dom,identifies only matched element based on text

        cy.contains('li','List Item 1').should('have.length',1) //identifies all the elements under that 'li' 
        
        cy.contains('ul','List Item 1').should('have.length',1) //identifies all the elements under that 'ul'

        cy.contains('div','List Item 1').should('have.length',1) //identifies all the elements under that 'div'

    })

})